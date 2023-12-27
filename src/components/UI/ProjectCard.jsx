import github from '../../assets/github-mark.png'

export default function ProjectCard(props) {
  return props.projects.map((project, index) => (
    <div key={index} className='project-container'>
      <a href={project.url} target="_blank" className="rel">
        <img src={project.img} alt="" className="project-img "/>
        <div className="project-info ">
          <a className="p-2" href={project.url} target="_blank">{project.name}</a>
          <a className="p-2" href={project.github} target="_blank"><img className="logo-sm bg-black" src={github} alt="" /></a>
        </div>
      </a>
    </div>
  ));
}



  
  
  