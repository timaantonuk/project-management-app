import React from 'react';

function Sidebar() {
  return (
      <aside className='rounded-xl lg:rounded-r-none bg-stone-800 py-16 px-8 flex flex-col gap-8 text-white lg:w-1/3'>

        <h1 className='font-bold text-3xl mx-auto lg:mx-0'>YOUR PROJECTS</h1>

        <button className='bg-stone-500 text-white font-outfit font-light rounded-xl py-3'>+ Add Project +</button>

        <ul>

          <li className='mb-4 py-3 px-3 rounded-xl'>
            <button>Learn React Js</button>
          </li>

          <li className='mb-4 bg-stone-600 py-3 px-3 rounded-xl'>
            <button>Learn Html lol 23</button>
          </li>

          <li className='mb-4 py-3 px-3 rounded-xl'>
            <button>Learn 950%</button>
          </li>
        </ul>

      </aside>
  );
}

export default Sidebar;