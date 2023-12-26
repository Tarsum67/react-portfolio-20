import github from '../../assets/github-mark.png'

export default function ProjectCard(props) {
  return props.projects.map((project, index) => (
    <div key={index} className='project-container'>
      <a href={project.url} target="_blank" className="rel">
        <img src={project.img} alt="" className="project-img "/>
        <div className="project-info 100w 100h justify-content-center align-items-center my-3">
          <a className="p-2" href={project.url} target="_blank">{project.name}</a>
          <a className="p-2" href={project.github} target="_blank"><img className="logo-sm bg-black" src={github} alt="" /></a>
        </div>
      </a>
    </div>
  ));
}

// import github from '../../assets/github-mark.png';
// import React from 'react';

// export default function ProjectCard(props) {
//   return props.projects.map((project, index) => (
//     <div key={index} className='project-container'>
//       <a href={project.url} target="_blank" className="rel p-2">
//         <div className="project-img-container">
//           <img src={project.img} alt="" className="project-img" />
//           <div className="project-info 100w 100h justify-content-center align-items-center my-3">
//             <h3>{project.name}</h3>
//             <a className="p-2" href={project.github} target="_blank">
//               <img className="github-logo" src={github} alt="GitHub" />
//             </a>
//           </div>
//         </div>
//       </a>
//     </div>
//   ));
// }

  
  
  