import { ProjectContext } from "./ProjectContext.js";

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = "projects";

export const ProjectContextProvider = ({ children }) => {

  const [projects, setProjects] = useState(() => {
    const savedProjects = sessionStorage.getItem(STORAGE_KEY);
    return savedProjects ? JSON.parse(savedProjects) : []
  })


  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects])

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
