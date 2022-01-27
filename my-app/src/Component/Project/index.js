import React from 'react';
import Work from "./Work";


 function Project() {
    return (
      <div>
        
   <form>
            <h1>Projects</h1>
        </form>
        <Work working={working} />
      </div>
    );
  }
const working = [
    {
      id: 0,
      title: "MAC",
      image: "/assets/images/marvel-search.png",
      repo: "https://github.com/Cienna97/MAC.git",
      live: "https://mac-project.herokuapp.com/",
    },
    {
      id: 1,
      title: "Work-Day-Schedular",
      image: "/assets/images/work-day.png",
      repo: "https://github.com/Cienna97/work-day-scheduler.git",
      live: "https://cienna97.github.io/work-day-scheduler/",
    },
    {
        id: 2,
        title: "whattoeat",
        image: "/assets/images/what-eat.png",
        repo: "https://github.com/Cienna97/whattoeat.git",
        live: "https://cienna97.github.io/whattoeat/",
      },
    
  ];
  
 
export default Project;
        
