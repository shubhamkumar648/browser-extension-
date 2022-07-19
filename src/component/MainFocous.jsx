import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { FiArrowRightCircle, FiCheckSquare, FiEdit } from "react-icons/fi";

export const MainFocous = () => {
  const [localMainFocus, setLocalmainfocus] = useLocalStorage("main-focous", {
    task: "",
    isDone: false,
    editing: false
  });

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      setLocalmainfocus({
        task: event.target.value,
        isDone: false,
        editing: false
      });
    }
  };

  return (
    <div className="flex">
      {!localMainFocus.task && !localMainFocus.isDone && (

        <div>
        <h2>What's your main focous today? </h2>

        <input type="text" className="focous-input" onKeyDown={inputHandler} />

        </div>
      )}
 
      {localMainFocus.task && !localMainFocus.isDone && (

                <div className="flex">
                
                {!localMainFocus.editing && (<h3 className="mr-3">{localMainFocus.task}</h3>)}

              
      {localMainFocus.editing && (
        <div>
              <input
                type="text"
                className="focous-input"
                value={localMainFocus.task}
                onChange={(event) =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    task: event.target.value,
                  })
                }
                onKeyDown={inputHandler}
              />
              </div>
            )}
         

            <div className="flex mt-2 focous-icon" >
              <FiEdit
                onClick={() =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    editing: !localMainFocus.editing,
                  })
                }
              />
              <FiCheckSquare
              className="ml-2 focous-icon"
                onClick={() =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    task: "",
                    isDone: true,
                  })
                }
              />
            </div>

          </div>
      )}
          {localMainFocus.isDone && (
        <p className="text-light text-s my-xs">Great Work!  </p>
      )}
      {localMainFocus.isDone && (
        <FiArrowRightCircle
          size={25}
          className="text-light pointer my-xs"
          onClick={() =>
            setLocalmainfocus({ ...localMainFocus, isDone: false })
          }
        />
      )}
    </div>
  );
};
