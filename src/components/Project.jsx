import React, {useRef, useState} from 'react';

function Project({projectsArr, activeProjectId, addTask, deleteTask, deleteProject}) {

  const [taskInputValue, setTaskInputValue] = useState('');
  const taskInputData = useRef();

  const activeProject = projectsArr.find(project => project.id === activeProjectId);
  return (
      <div className='bg-white opacity-[92%] flex flex-col border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>

        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between'>
          <h1 className='font-bold text-3xl text-center lg:text-start'>{activeProject.title}</h1>
          <button
              className='text-white bg-stone-800 px-4 py-3 lg:py-2 lg:px-10 rounded-xl transition-all duration-300 hover:bg-stone-600 '
              onClick={deleteProject}
          >Delete</button>
        </div>

        <time dateTime={activeProject.date} className='text-stone-500'>{activeProject.date}</time>

        <p>{activeProject.description}</p>

        <hr className='border-b-2 border-y-stone-800'/>

        <h2 className='font-bold text-2xl'>Tasks</h2>

        <div className='flex gap-7 flex-col lg:flex-row'>
          <input type="text"
                 ref={taskInputData}
                 onChange={() => setTaskInputValue(taskInputData.current.value)}
                 className="py-3 lg:py-3 bg-stone-300 lg:w-1/2 rounded-xl px-4 outline-none focus:border-stone-800 focus:border-b-2 active:border-stone-800 active:border-b-2 transition-all duration-300" placeholder='Your Task...'/>

          <button
              className='text-white bg-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-3 lg:py-0'
              onClick={()=>{
                addTask(taskInputValue);
                setTaskInputValue('');
                taskInputData.current.value = '';
              }}
          >
            Add Task
          </button>
        </div>

        <div className='bg-stone-200 px-4 py-4 rounded-xl flex flex-col gap-5'>
          {activeProject.tasks.length > 0 ? (
              activeProject.tasks.map((task) => (
                  <li key={task.id} className='flex items-center justify-between'>
                    <p>{task.description}</p>
                    <button
                        className='text-white bg-stone-800 px-4 py-2 lg:px-10 rounded-xl transition-all duration-300 hover:bg-stone-600'
                        onClick={() => deleteTask(task.id)}
                    >
                      Clear
                    </button>
                  </li>
              ))
          ) : (
              <p className='h-20 flex items-center'>No tasks</p>
          )}
        </div>
      </div>
  );


}

export default Project;
