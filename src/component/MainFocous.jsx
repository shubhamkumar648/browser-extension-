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
    <div>
      {!localMainFocus.task && !localMainFocus.isDone && (
        <div>
          <p>What's your main focous today? </p>
          <input type="text" onKeyDown={inputHandler} />
        </div>
      )}

      {!localMainFocus.editing && <span>{localMainFocus.task}</span>}

      {localMainFocus.editing && (
              <input
                className="edit-input br-m text-m px-s"
                type="text"
                value={localMainFocus.task}
                onChange={(event) =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    task: event.target.value,
                  })
                }
                onKeyDown={inputHandler}
              />
            )}


            <div className="text-light">
              <FiEdit
                className="pointer mx-s"
                onClick={() =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    editing: !localMainFocus.editing,
                  })
                }
              />
              <FiCheckSquare
                className="pointer mx-s"
                onClick={() =>
                  setLocalmainfocus({
                    ...localMainFocus,
                    task: "",
                    isDone: true,
                  })
                }
              />
            </div>


            {localMainFocus.isDone && (
        <p className="text-light text-s my-xs">Kudos, You did it!</p>
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
