import React from 'react';

function Project() {
  return (
      <div className='flex flex-col border-stone-800 border-4 w-full px-4 py-12 gap-5 rounded-xl lg:rounded-l-none'>

        <div className='flex justify-between'>
          <h1 className='font-bold text-3xl'>Learning React</h1>
          <button className='text-white bg-stone-800 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-stone-600 '>Delete</button>
        </div>

        <time dateTime='2024-29-12' className='text-stone-500'>Dec 29, 2024</time>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores aut autem beatae consequatur
          delectus distinctio dolores dolorum eius eligendi excepturi explicabo facere fuga illo nam necessitatibus nisi
          numquam perferendis, quo, ratione saepe tempore, veritatis? At labore provident unde.</p>

        <hr className='border-b-2 border-y-stone-800'/>

        <h2 className='font-bold text-2xl'>Tasks</h2>

        <div className='flex gap-7 flex-col lg:flex-row'>
          <input type="text"
                 className="py-3 lg:py-2 bg-stone-300 lg:w-60 rounded-xl px-4 outline-none focus:border-stone-800 focus:border-2 active:border-stone-800 active:border-2" placeholder='Your Task...'/>

          <button className='text-white bg-stone-800 px-4 py transition-all duration-300-2 rounded-xl hover:bg-stone-600 py-3 lg:py-0 '>Add Task</button>
        </div>

        <div className='bg-stone-200 px-4 py-4 rounded-xl flex flex-col gap-5'>

          <article className='flex items-center justify-between'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className='text-white bg-stone-800 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-stone-600'>Clear</button>
          </article>

          <article className='flex items-center justify-between'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className='text-white bg-stone-800 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-stone-600 '>Clear</button>
          </article>

          <article className='flex items-center justify-between'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className='text-white bg-stone-800 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-stone-600 '>Clear</button>
          </article>
        </div>

      </div>
  );
}

export default Project;