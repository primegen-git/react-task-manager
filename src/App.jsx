import { useContext, useState } from 'react';
import { Project } from "./components/Project"
import { SideBar } from "./components/SideBar"
import { ProjectContext } from './store/ProjectContext';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);

  const { projects } = useContext(ProjectContext);

  return (
    <div className="min-h-screen mt-8 flex">
      <SideBar onSelectProject={setSelectedProjectId} />
      {projects.length === 0 ? <div className="pl-5 mx-auto max-w-2xl lg:mx-0">
        <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Track your task in here.</p>
      </div>
        : <Project projectId={selectedProjectId} />
      }
    </div>
  )
}

export default App
