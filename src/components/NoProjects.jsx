import React from 'react';
import noProjectsImage from '../assets/no-projects.png'

function NoProjects({handleAddProjectClick}) {
  return (
      <div className='flex flex-col items-center justify-center border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>
        <img src={noProjectsImage} alt="Create new project image" loading='lazy' width='70px' height='70px'/>
        <h1 className='font-bold text-3xl'>No Project Selected</h1>
        <p className='text-stone-500 text-center text-xl'>Select an existing project or create a new one</p>
        <button
            className='text-white bg-stone-800 px-6 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-4 lg:py-3'
            onClick={handleAddProjectClick}
        >
          Create New Project
        </button>
      </div>
  );
}

export default NoProjects;