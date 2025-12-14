import { useContext, useState } from "react";
import { Task } from "./Task"
import { ProjectContext } from "../store/ProjectContext";
import { ConfirmDeleteDialog } from "./ConfirmDeleteDialog";

export const Project = ({ projectId }) => {

  const { projects, deleteProject } = useContext(ProjectContext);

  const [open, setOpen] = useState({ "isOpen": false, "title": null });

  return (
    <>
      <div className="w-2/3 pt-10 pl-7">
        <div className="flex justify-between mb-1">
          <h1 className="font-semibold text-xl">{projects[projectId].title}</h1>

          <button
            className="cursor-pointer text-black/90"
            onClick={() => setOpen({ "isOpen": true, "title": projects[projectId].title })}
          >
            Delete
          </button>
        </div>

        <p className="text-neutral-400 mb-3">
          {projects[projectId].created_at}
        </p>

        <hr className="border-t-2 border-gray-300" />

        <Task tasks={projects[projectId].tasks} projectId={projectId} />
      </div>

      {open && (
        <ConfirmDeleteDialog
          description={open.title}
          open={open.isOpen}
          onClose={() => setOpen({ "isOpen": false, "title": null })}
          onDelete={() => deleteProject(projectId)}
        />
      )}
    </>
  )
}

