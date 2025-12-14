import { useState, useContext, useRef, useEffect } from 'react';

import { ProjectContext } from '../store/ProjectContext';

export const SideBar = ({ onSelectProject }) => {

  const [showInput, setShowInput] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const { projects, addProject } = useContext(ProjectContext);

  const InputWrapperRef = useRef();

  const handleOnClick = (index) => {
    setSelectedId(index);
    onSelectProject(index);
  }

  const closeInput = () => setShowInput(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeInput();
      return
    }

    if (e.key === "Enter") {
      const title = e.target.value.trim() || "No title";
      addProject(title);
      setShowInput(false);
    }
  }


  useEffect(() => {
    if (!showInput) return

    const onMouseDown = (e) => {
      if (InputWrapperRef.current && InputWrapperRef.current.contains(e.target) && e.target.value === " ") {
        closeInput();
        return
      }
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeInput();
        return
      }
    }

    document.addEventListener("onKeydown", onKeyDown);
    document.addEventListener("onMouseDown", onMouseDown);


    return () => {
      document.removeEventListener("onKeydown", onKeyDown);
      document.removeEventListener("onMouseDown", onMouseDown);
    }

  }, [showInput]);

  return (
    <div className="w-1/4 bg-zinc-950 rounded-tr-lg text-zinc-400 pt-10 px-5">

      <p className="text-xs sm:text-xl mb-5">Your Task Manager</p>

      <div
        onClick={() => setShowInput(true)}
        className="mb-5 h-8 w-fit rounded-md p-2 bg-zinc-700 text-zinc-400 hover:bg-zinc-800 duration-300 cursor-pointer flex justify-center items-center"
      >
        <p className="text-xs md:text-md">+ Add Project</p>
      </div>

      <div className="mb-3 flex flex-col gap-1">
        {projects.map((project, index) => {
          return (
            <div
              onClick={() => handleOnClick(index)}
              key={index}
              className={`text-xs p-1.5 px-2 cursor-pointer rounded-xs hover:text-zinc-100 ${selectedId === index ? "bg-zinc-900" : undefined}`}
            >
              {project.title}
            </div>
          )
        })}
      </div>

      {showInput && (
        <div className="text-xs p-1.5 px-2" >
          <input
            ref={InputWrapperRef}
            autoFocus
            type="text"
            className="w-full text-xs border-0 border-b focus:border-gray-300 focus:outline-none"
            onKeyDown={handleKeyDown}
            onBlur={
              (e) => {
                if (e.target.value.trim() === "") { closeInput() }
              }
            }
          />
        </div >
      )}
    </div >
  )
}

