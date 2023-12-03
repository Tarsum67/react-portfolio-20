// Array of projects
// const projects = [
//     {
//       name: ,
//       url: ,
//       img:,
//       github: ,
//     },
//     {
//       name: ,
//       url: ,
//       img: ,
//       github: ,
//     },
//     {
//       name: ,
//       url: ,
//       img: ,
//       github: ,
//     },
//     {
//       name: ,
//       url: ,
//       img: ,
//       github: ,
//     },

//   ]


// React component for the Portfolio Page
export default function PortfolioPage() {
    return (
      <>
        {/* Heading for the Projects section */}
        <h2 className='text-center project-header'>Projects</h2>
  
        {/* Container for project cards, using flex layout and centering */}
        <div className='d-flex justify-content-center flex-wrap py-3'>
          {/* Rendering the ProjectCard component and passing projects as a prop */}
          <ProjectCard projects={projects} />
        </div>
      </>
    );
  }