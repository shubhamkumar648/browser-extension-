import axios from "axios";

export const getImage = async (setImageData) => {
  try {
    const {
      data: { urls, location, discrptions }
    } = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,

      { params: { orientation: "landscape" } }
    );

    setImageData({
      url: urls.regular,
      location: location.name,
      description: discrptions
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRandomQuotes = async (setQuotes) => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    setQuotes({ text: data.content, author: data.author });
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherUpdates = (setWeather) => {
  const success = async (pos) => {
    try {
      let coordinates = {
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude
      };
      const { data } = await axios.get(
        `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`
      );

      console.log(data);
      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description
      });
    } catch (error) {
      console.log(error);
    }
  };

  const error = async (err) => {
    try {
      let coordinates = { latitude: "28.6139", longitude: "77.2090" };
      let apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
      let { data } = await axios.get(apiURL);

      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description
      });
    } catch (error) {
      console.log(error);
    }
  };

  navigator.geolocation.getCurrentPosition(success, error);
};
