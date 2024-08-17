import React from 'react';

function Form() {
  return (
      <form className='flex flex-col border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>

        {/*top form*/}
        <div className='flex flex-col gap-6 justify-between items-center lg:flex-row lg:gap-0'>
          <h1 className='font-bold text-3xl'>Add New Project</h1>
          <div className='flex gap-4 w-full lg:w-auto'>
            <button
                className='text-stone-800 bg-white border-2 border-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-200 py-3 lg:py-2 w-1/2 lg:w-auto'>Cancel
            </button>
            <button
                className='text-white bg-stone-800 px-4 lg:px-10 transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-2 lg:py-2 w-1/2 lg:w-auto'>Save
            </button>
          </div>
        </div>

        {/*main form*/}

        <div className='flex flex-col gap-3'>
          <label htmlFor="title" className='text-xl font-bold'>Title</label>
          <input
              className='py-3 px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
              type="text" id='title' name='title' placeholder='Add Your Title...'/>
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor="desc" className='text-xl font-bold'>Description</label>
          <textarea
              className='py-3 resize-none px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
              id='desc' name='desc' placeholder='Add Your Description...'/>
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor="title" className='text-xl font-bold'>Due Date</label>
          <input
              className='py-3 px-4 rounded-xl focus:outline-none bg-stone-200 shadow transition-all duration-300 focus:border-b-4 border-y-stone-800'
              type="date" id='title' name='title' placeholder='Pick a date...'/>
        </div>

      </form>
  );
}

export default Form;