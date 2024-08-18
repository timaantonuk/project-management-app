import React, {useRef, useState} from 'react';
import {generateRandomNumericID} from "../utils.js";
import project from "./Project.jsx";

function Form({onAddProjectClick}) {

  const titleInputData = useRef();
  const descriptionInputData = useRef();
  const dateInputData = useRef();

  const [newProject, setNewProject] = useState(
      {
        title: '',
        description: '',
        id: generateRandomNumericID(5),
        date: '',
        tasks: [],
      },
  )

  const [wrongInfo, setWrongInfo] = useState({
    title: null,
    description: null,
    date: null,
  }
  );

  return (
      <form className='bg-white opacity-[92%] flex flex-col border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>



          <div className='flex flex-col gap-6 justify-between items-center lg:flex-row lg:gap-0'>
            <h1 className='font-bold text-3xl'>Add New Project</h1>
            <div className='flex gap-4 w-full lg:w-auto'>
              <button
                  className='text-stone-800 bg-white border-2 border-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-200 py-3 lg:py-2 w-1/2 lg:w-auto'>Cancel
              </button>
              <button
                  className='text-white bg-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-2 lg:py-2 w-1/2 lg:w-auto'
                  onClick={(e)=>{
                      e.preventDefault();
                      if (!newProject.title || !newProject.description || !newProject.date){
                        setWrongInfo({
                          title: newProject.title,
                          description: newProject.description,
                          date: newProject.date
                        });
                        return
                      }
                      onAddProjectClick(newProject);
                  }}
              >Save
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="title" className='text-xl font-bold'>Title</label>
            <input
                ref={titleInputData}
                onChange={() => setNewProject(prevState => {
                  return {...prevState, title: titleInputData.current.value}
                })}
                className='py-3 px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
                type="text" id='title' name='title' placeholder='Add Your Title...'/>
            {wrongInfo.title !== '' ? "" : <p className='font-light text-sm'>Title required!</p>}
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="desc" className='text-xl font-bold'>Description</label>
            <textarea
                ref={descriptionInputData}
                onChange={() => setNewProject(prevState => {
                  return {...prevState, description: descriptionInputData.current.value}
                })}
                className='py-3 resize-none px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
                id='desc' name='desc' placeholder='Add Your Description...'/>
            {wrongInfo.description !== '' ? "" : <p className='font-light text-sm'>Description required!</p>}
          </div>

          <div className='flex flex-col gap-3'>
            <label ref={dateInputData} htmlFor="title" className='text-xl font-bold'>Due Date</label>
            <input
                onChange={(e) => setNewProject(prevState => {
                  return {...prevState, date: e.target.value}
                })}
                className='py-3 px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
                type="date" id='title' name='title' placeholder='Pick a date...'/>
            {wrongInfo.date !== '' ? "" : <p className='font-light text-sm'>Date required!</p>}
          </div>

      </form>
  );
}

export default Form;