import React from 'react';
import { MdNoteAlt } from "react-icons/md";



function Sidebar({projectsArr, onActiveProjectClick, activeProjectId, onProjectCreate}) {

  return (
      <aside className='rounded-xl lg:rounded-r-none bg-stone-800 py-16 px-8 flex flex-col gap-8 text-white lg:w-1/3'>

        <h1 className='font-bold text-3xl mx-auto lg:mx-0'>YOUR PROJECTS</h1>

        <button
            className='bg-stone-500 text-white font-outfit font-light rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-stone-700 transition-all duration-300'
            onClick={()=>onProjectCreate(true)}
        > Add Project <MdNoteAlt style={{width:'25px', height:'25px'}} className='text-stone-800'/></button>

        <ul>

          {projectsArr.map((project) => (
              <li onClick={()=>onActiveProjectClick(project.id)} key={project.id} className={`mb-4 py-3 px-3 rounded-xl transition-all duration-300 hover:bg-stone-600 ${project.id === activeProjectId ? 'bg-stone-700' : ''}`}>
                <button>{project.title}</button>
              </li>
          ))}


        </ul>

      </aside>
  );
}

export default Sidebar;