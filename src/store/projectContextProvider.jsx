import { ProjectContext } from "./ProjectContext.js";

import { useCallback, useState } from 'react';

export const ProjectContextProvider = ({ children }) => {

  const [projects, setProjects] = useState([])

  const addProject = useCallback((title) => {
    const project = {
      "title": title,
      "created_at": new Date().toString().substring(0, 24),
      "tasks": []
    }
    setProjects((prev) => [...prev, project])

  }, [])

  const deleteProject = useCallback((id) => {
    setProjects((prev) => prev.filter((_, index) => index !== id))
  }, [])

  const deleteTask = useCallback((projectId, taskId) => {
    setProjects((prev) => {
      return prev.map((project, pIndex) => {
        if (pIndex !== projectId) return project

        return {
          ...project,
          "tasks": project.tasks.filter((_, tIndex) => tIndex !== taskId)
        }
      })
    })
  }, [])


  const addTask = useCallback((projectId, task) => {
    setProjects((prev) => {
      return prev.map((project, pIndex) => {
        if (pIndex !== projectId) return project

        return {
          ...project,
          "tasks": [...project.tasks, task]
        }
      })
    })
  }, [])


  const value = {
    projects,
    addProject,
    deleteProject,
    deleteTask,
    addTask
  }


  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>


}
