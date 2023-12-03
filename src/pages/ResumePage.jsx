// React component for the Resume Page
export default function ResumePage() {
    return (
      <>
        {/* Container with padding */}
        <div className='container p-5'>
          {/* Heading for the Resume section */}
          <h2>Resume</h2>
          
          {/* Description about downloading the resume */}
          <p>Click the link below to download my Resume!</p>
          
          {/* Link to download the resume PDF */}
          <a href={resume} download>
            Download PDF
          </a>
        </div>
      </>
    );
  }