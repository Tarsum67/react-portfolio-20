// Importing the resume PDF file from the assets folder
import resume from '../assets/resume.pdf';

// React component for the Resume Page
export default function ResumePage() {
  return (
    <>
      
      <div className='container p-5'>
        
        <h2>Resume(not updated)</h2>
        
        <p>Click the link below to download my Resume!</p>
        
        {/* Link to download the resume PDF */}
        <a href={resume} download>
          Download PDF
        </a>
      </div>
    </>
  );
}
