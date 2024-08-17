import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import Form from "./components/Form.jsx";
import NoProjects from "./components/NoProjects.jsx";
import {useState} from "react";

function App() {

  const [activeProject, setActiveProject] = useState(1);
  const [projects, setProjects] = useState([
    {
      title: 'Have a good day!',
      description: 'Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe Peppe',
      id: 0,
      date: '31.01.2022',
      tasks: [{id: 0, description: 'skrillex'}, {id: 1, description: 'sonny'}, {id: 2, description: 'tinkoff'}],
    },
    {
      title: 'My little pony',
      description: 'fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12 fuCK12',
      id: 1,
      date: '36.09.1999',
      tasks: [{id: 0, description: 'wegewg'}, {id: 1, description: 'rrr'}, {id: 2, description: '6rgs'}],
    },
    {
      title: 'Gagarin Yurka',
      description: 'SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X SPACE_X',
      id: 2,
      date: '11.11.2001',
      tasks: [{id: 0, description: '1234'}, {id: 1, description: '1235534'}, {id: 2, description: '905231234'}],
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