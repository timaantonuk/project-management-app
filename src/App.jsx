import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import Form from "./components/Form.jsx";
import NoProjects from "./components/NoProjects.jsx";
import {useState} from "react";

function App() {

  const [activeProject, setActiveProject] = useState(1);
  const [projects, setProjects] = useState([
    {
      title: 'Morning Routine',
      description: 'Start your day off right with a productive morning routine. This project includes tasks that help you wake up early, exercise, and prepare a healthy breakfast.',
      id: 0,
      date: '01.01.2024',
      tasks: [
        {id: 0, description: 'Wake up at 6 AM'},
        {id: 1, description: '30 minutes of morning exercise'},
        {id: 2, description: 'Prepare a healthy breakfast'},
      ],
    },
    {
      title: 'Learn React',
      description: 'A step-by-step guide to mastering React.js. Follow this project to build your knowledge of modern web development and create dynamic user interfaces.',
      id: 1,
      date: '15.02.2024',
      tasks: [
        {id: 0, description: 'Complete React official tutorial'},
        {id: 1, description: 'Build a simple to-do app with React'},
        {id: 2, description: 'Learn about React hooks and state management'},
      ],
    },
    {
      title: 'Plan a Vacation',
      description: 'Dreaming of a getaway? This project helps you organize every detail of your next vacation, from booking flights to planning activities.',
      id: 2,
      date: '10.03.2024',
      tasks: [
        {id: 0, description: 'Research and book flights'},
        {id: 1, description: 'Find and reserve accommodation'},
        {id: 2, description: 'Create an itinerary of activities'},
      ],
    },
  ]);

  function handleActiveProjectClick(id) {
    setActiveProject(id);
    console.log(id);
  }

  function addTask(desc) {
    if (!desc || desc[0] === ' ') {
      return
    }
    setProjects(prevProjects => {
      return prevProjects.map(project =>
          project.id === activeProject
              ? {...project, tasks: [...project.tasks, {id: project.tasks[project.tasks.length - 1].id + 1, description: desc.trim()}]}
              : project
      );
    });
  }

  console.log(projects);
  return (
      <div className='box-border border-4 border-amber-700 lg:h-screen lg:w-screen flex items-center justify-center text-stone-800 px-4 py-8 lg:py-0 lg:px-12'>
        <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-0 lg:max-w-[90%]'>
          <Sidebar projectsArr={projects} onActiveProjectClick={handleActiveProjectClick} activeProjectId={activeProject}/>
          <Project projectsArr={projects} activeProjectId={activeProject} addTask={addTask}/>
          {/*<Form/>*/}
          {/*<NoProjects/>*/}
        </div>
      </div>
  );
}

export default App;