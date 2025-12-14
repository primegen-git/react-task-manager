import { useContext, useRef, useState } from "react";
import { ProjectContext } from "../store/ProjectContext";
import { ConfirmDeleteDialog } from "./ConfirmDeleteDialog";



export const Task = ({ tasks, projectId }) => {

  const InputTaskRef = useRef(null);

  const { deleteTask, addTask } = useContext(ProjectContext);

  const [open, setOpen] = useState({ "isOpen": false, "index": null, "task": null });


  return (
    <>
      {open.isOpen && <ConfirmDeleteDialog
        description={open.task}
        open={open}
        onDelete={() => deleteTask(projectId, open.index)}
        onClose={() => {
          setOpen({ "isOpen": false, "index": null, "task": null })
        }}
      />
      }
      <p className="text-xs md:text-2xl mb-3 mt-3 font-semibold text-stone-800">Task</p>
      <div className="flex gap-5">
        <input
          ref={InputTaskRef}
          type="text"
          className="border border-black rounded-xs bg-gray-100 focus:outline-none focus:border-2 font-ligth pl-1"
        />
        <button
          onClick={() => {
            addTask(projectId, InputTaskRef.current.value);
            InputTaskRef.current.value = "";
          }}
          className="cursor-pointer">Add Task</button>
      </div >
      <div className="mt-6 rounded-md bg-gray-100 px-2 py-4 max-h-64 overflow-y-auto">
        {tasks.map((task, index) => {
          return (
            <div key={index} className="p-2 flex justify-between font-normal">
              <p className="text-zinc-700">{task}</p>
              <button
                onClick={() => {
                  setOpen({ "isOpen": true, "index": index, "task": task });
                }}
                className="text-black/90 cursor-pointer"
              >
                Clear
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
