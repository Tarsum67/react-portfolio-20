// Importing the resume PDF file from the assets folder
import resume from '../assets/resume.pdf';
import Footer from '../components/UI/Footer';
// React component for the Resume Page
export default function ResumePage() {
  return (
    <>
      
      <div className='resume p-5 bg-dark text-white 'style={{ height: '500px'}}>
        
        <h2>Resume</h2>
        
        <p>Click the link below to download my Resume!</p>
        
        {/* Link to download the resume PDF */}
        <a href={resume} download>
          Download PDF
        </a>
      </div>
      <Footer/>
    </>
  );
}
