"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherUpdates = exports.getRandomQuotes = exports.getImage = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getImage = function getImage(setImageData) {
  var _ref, _ref$data, urls, location, discrptions;

  return regeneratorRuntime.async(function getImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.unsplash.com/photos/random/?client_id=".concat(process.env.REACT_APP_UNSPLASH_API_KEY), {
            params: {
              orientation: "landscape"
            }
          }));

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          urls = _ref$data.urls;
          location = _ref$data.location;
          discrptions = _ref$data.discrptions;
          setImageData({
            url: urls.regular,
            location: location.name,
            description: discrptions
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.getImage = getImage;

var getRandomQuotes = function getRandomQuotes(setQuotes) {
  var _ref2, data;

  return regeneratorRuntime.async(function getRandomQuotes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.quotable.io/random"));

        case 3:
          _ref2 = _context2.sent;
          data = _ref2.data;
          setQuotes({
            text: data.content,
            author: data.author
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getRandomQuotes = getRandomQuotes;

var getWeatherUpdates = function getWeatherUpdates(setWeather) {
  var success = function success(pos) {
    var coordinates, _ref3, data;

    return regeneratorRuntime.async(function success$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            coordinates = {
              longitude: pos.coords.longitude,
              latitude: pos.coords.latitude
            };
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("https://fcc-weather-api.glitch.me/api/current?lat=".concat(coordinates.latitude, "&lon=").concat(coordinates.longitude)));

          case 4:
            _ref3 = _context3.sent;
            data = _ref3.data;
            console.log(data);
            setWeather({
              city: data.name,
              temp: data.main.temp + "°C",
              icon: data.weather[0].icon,
              desc: data.weather[0].description
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  var error = function error(err) {
    var coordinates, apiURL, _ref4, data;

    return regeneratorRuntime.async(function error$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            coordinates = {
              latitude: "28.6139",
              longitude: "77.2090"
            };
            apiURL = "https://fcc-weather-api.glitch.me/api/current?lat=".concat(coordinates.latitude, "&lon=").concat(coordinates.longitude);
            _context4.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].get(apiURL));

          case 5:
            _ref4 = _context4.sent;
            data = _ref4.data;
            setWeather({
              city: data.name,
              temp: data.main.temp + "°C",
              icon: data.weather[0].icon,
              desc: data.weather[0].description
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

exports.getWeatherUpdates = getWeatherUpdates;