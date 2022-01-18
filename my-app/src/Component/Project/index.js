import React from 'react';
//import Project from "./Project";


 function Project() {
    return (
      <div>
        
   <form>
            <h1>Projects</h1>
        </form>
        <Project projects={projects} />
      </div>
    );
  }
const projects = [
    {
      id: 0,
      title: "Budget-Tracker",
      image: "",
      repo: "https://github.com/Cienna97/Budget-Tracker.git",
      live: "https://ancient-dusk-47552.herokuapp.com/",
    },
    {
      id: 1,
      title: "Work-Day-Schedular",
      image: "",
      repo: "https://github.com/Cienna97/work-day-scheduler.git",
      live: "https://cienna97.github.io/work-day-scheduler/",
    },
    {
        id: 2,
        title: "whattoeat",
        image: "",
        repo: "https://github.com/Cienna97/whattoeat.git",
        live: "https://cienna97.github.io/whattoeat/",
      },
    
  ];
  
 
export default Project;
        
