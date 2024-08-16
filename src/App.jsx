import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";

function App() {
  return (
    <div className='box-border border-4 border-amber-700 lg:h-screen lg:w-screen flex items-center justify-center text-stone-800 px-4 py-8 lg:py-0 lg:px-12'>
      <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-0 lg:max-w-[90%]'>
        <Sidebar/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
