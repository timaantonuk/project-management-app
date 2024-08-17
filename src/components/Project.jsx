import React, {useRef, useState} from 'react';

function Project({projectsArr, activeProjectId, addTask}) {

  const [taskInputValue, setTaskInputValue] = useState(null);
  const taskInputData = useRef();

  return (
      <div className='flex flex-col border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>

        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between'>
          <h1 className='font-bold text-3xl text-center lg:text-start'>{projectsArr[activeProjectId].title}</h1>
          <button className='text-white bg-stone-800 px-4 py-3 lg:py-2 lg:px-10 rounded-xl transition-all duration-300 hover:bg-stone-600 '>Delete</button>
        </div>

        <time dateTime={projectsArr[activeProjectId].date} className='text-stone-500'>{projectsArr[activeProjectId].date}</time>

        <p>{projectsArr[activeProjectId].description}</p>

        <hr className='border-b-2 border-y-stone-800'/>

        <h2 className='font-bold text-2xl'>Tasks</h2>

        <div className='flex gap-7 flex-col lg:flex-row'>
          <input type="text"
                 ref={taskInputData}
                 onChange={() => setTaskInputValue(taskInputData.current.value)}
                 className="py-3 lg:py-2 bg-stone-300 lg:w-60 rounded-xl px-4 outline-none focus:border-stone-800 focus:border-2 active:border-stone-800 active:border-2" placeholder='Your Task...'/>

          <button
              className='text-white bg-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-3 lg:py-0'
              onClick={()=>addTask(taskInputValue)}
          >
            Add Task
          </button>
        </div>

        <div className='bg-stone-200 px-4 py-4 rounded-xl flex flex-col gap-5'>

          {projectsArr[activeProjectId].tasks.map((task) => (
              <article key={task.id} className='flex items-center justify-between'>
                <p>{task.description}</p>
                <button
                    className='text-white bg-stone-800 px-4 py-2 lg:px-10 rounded-xl transition-all duration-300 hover:bg-stone-600'>Clear
                </button>
              </article>
          ))}

        </div>

      </div>
  );
}

export default Project;