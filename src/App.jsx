import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import Form from "./components/Form.jsx";
import NoProjects from "./components/NoProjects.jsx";
import {useEffect, useState} from "react";
import {generateRandomNumericID} from "./utils.js";

function App() {

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [
      {
        title: 'Morning Routine',
        description: 'Start your day off right with a productive morning routine. This project includes tasks that help you wake up early, exercise, and prepare a healthy breakfast.',
        id: generateRandomNumericID(5),
        date: '2024-01-15',
        tasks: [
          {id: generateRandomNumericID(3), description: 'Wake up at 6 AM'},
          {id: generateRandomNumericID(3), description: '30 minutes of morning exercise'},
          {id: generateRandomNumericID(3), description: 'Prepare a healthy breakfast'},
        ],
      },
      {
        title: 'Learn React',
        description: 'A step-by-step guide to mastering React.js. Follow this project to build your knowledge of modern web development and create dynamic user interfaces.',
        id: generateRandomNumericID(5),
        date: '2024-02-12',
        tasks: [
          {id: generateRandomNumericID(3), description: 'Complete React official tutorial'},
          {id: generateRandomNumericID(3), description: 'Build a simple to-do app with React'},
          {id: generateRandomNumericID(3), description: 'Learn about React hooks and state management'},
        ],
      },
      {
        title: 'Plan a Vacation',
        description: 'Dreaming of a getaway? This project helps you organize every detail of your next vacation, from booking flights to planning activities.',
        id: generateRandomNumericID(5),
        date: '2024-03-21',
        tasks: [
          {id: generateRandomNumericID(3), description: 'Research and book flights'},
          {id: generateRandomNumericID(3), description: 'Find and reserve accommodation'},
          {id: generateRandomNumericID(3), description: 'Create an itinerary of activities'},
        ],
      },
    ];
  });
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

  function handleActiveProjectClick(id) {
    setInProjectCreation(false);
    setActiveProject(id);
    console.log(id);
  }

  function handleAddProjectClick() {
    setInProjectCreation(true);
    setActiveProject(null)
  }

  function addTask(desc) {
    if (!desc || desc[0] === ' ') {
      return
    }
    setProjects(prevProjects => {
      return prevProjects.map(project =>
          project.id === activeProject
              ? {...project, tasks: [...project.tasks, {id: generateRandomNumericID(3), description: desc.trim()}]}
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

  console.log(projects);
  return (
      <div className='box-border lg:h-screen lg:w-screen flex items-center justify-center text-stone-800 px-4 py-8 lg:py-0 lg:px-12'>
        <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-0 lg:max-w-[90%]'>



          <Sidebar
              projectsArr={projects}
              onActiveProjectClick={handleActiveProjectClick}
              activeProjectId={activeProject}
              onProjectCreate={handleAddProjectClick}
          />

          {inProjectCreation ? <Form onAddProjectClick={addProject}/> :
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