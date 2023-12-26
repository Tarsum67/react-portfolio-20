// Importing all images
import ProjectCard from '../components/UI/ProjectCard'
import READMe from '../assets/README.png'
import SVGLogo from '../assets/logo.png'
import noteTaker from '../assets/note.png'
import NationalPark from '../assets/NP.png'
import Footer from '../components/UI/Footer';
// Array of projects
const projects = [
  {
    name: 'National Park Weather App',
    url: 'https://ckietzm2.github.io/National-Park/index.html',
    img:NationalPark ,
    github: 'https://github.com/ckietzm2/National-ParkLinks to an external site.',
  },
  {
    name: 'README GEN',
    url: 'https://drive.google.com/file/d/1170Ej-jUe6flLnYlF7iQga-wOW1Eqawo/view',
    img:READMe,
    github: 'https://github.com/Tarsum67/mod9',
  },

  {
    name: 'SVG logo maker',
    url: 'https://drive.google.com/file/d/1SUYDEM3I5fdvAhGl0UECRB0zLyNT6sIR/view',
    img:SVGLogo ,
    github: 'https://github.com/Tarsum67/mod10',
  },
  {
    name: 'Full-Stack Note Taker',
    url: 'https://desolate-everglades-38868-238665351231.herokuapp.com/',
    img: noteTaker,
    github: 'https://github.com/Tarsum67/mod11',
  },
  
]

// React component for the Portfolio Page
export default function PortfolioPage() {
  return (
    <div classname="portfolio">
      {/* Container for project cards, using flex layout and centering */}
      <div className='d-flex justify-content-center flex-wrap py-3 bg-dark'>
      {/* Heading for the Projects section */}
      <h2 className=' project-header bg-dark text-white '>Projects</h2>
      <div className='d-flex justify-content-center flex-wrap py-3 bg-dark'>

        {/* Rendering the ProjectCard component and passing projects as a prop */}
        <ProjectCard projects={projects} />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

