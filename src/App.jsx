import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import Form from "./components/Form.jsx";
import NoProjects from "./components/NoProjects.jsx";
import {useEffect, useState} from "react";
import { getProjectsFromLS } from "./lib/getProjectsFromLS.js";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [projects, setProjects] = useState(getProjectsFromLS);

  const [activeProject, setActiveProject] = useState(null);
  const [inProjectCreation, setInProjectCreation] = useState(false);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects]);

  function addProject(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject])
    setInProjectCreation(false);
    setActiveProject(newProject.id)
  }


  function deleteProject() {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== activeProject))
    setActiveProject(null);
  }

  function dismissProjectCreation() {
    setInProjectCreation(false);
    setActiveProject(null);
  }

  function handleActiveProjectClick(id) {
    setInProjectCreation(false);
    setActiveProject(id);
  }

  function handleAddProjectClick() {
    setInProjectCreation(true);
    setActiveProject(null)
  }

  function addTask(desc) {
    if (!desc || desc[0] === ' ') {
      return;
    }
    setProjects(prevProjects => {
      return prevProjects.map((project, index) =>
          project.id === activeProject
              ? {...project, tasks: [...project.tasks, {id: uuidv4(), description: desc.trim()}]}
              : project
      );
    });
  }

  function deleteTask(taskId) {
    setProjects(prevProjects =>
        prevProjects.map(project =>
            project.id === activeProject
                ? {...project, tasks: project.tasks.filter(task => task.id !== taskId)}
                : project
        )
    );
  }

  return (
      <div className='box-border lg:h-screen lg:w-screen flex items-center justify-center text-stone-800 px-4 py-8 lg:py-0 lg:px-12'>
        <div className='flex flex-col lg:flex-row w-full gap-8 lg:min-h-[65vh] lg:gap-0 lg:max-w-[90%]'>



          <Sidebar
              projectsArr={projects}
              onActiveProjectClick={handleActiveProjectClick}
              activeProjectId={activeProject}
              onProjectCreate={handleAddProjectClick}
          />

          {inProjectCreation ? <Form onAddProjectClick={addProject} onDismiss={dismissProjectCreation}/> :
              activeProject === null ? <NoProjects handleAddProjectClick={handleAddProjectClick}/> :
                  <Project
                      projectsArr={projects}
                      activeProjectId={activeProject}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      deleteProject={deleteProject}
                  />
          }
        </div>
      </div>
  );
}

export default App;