// Importing the resume PDF file from the assets folder
import resume from "../assets/Resume.pdf";
import Footer from "../components/UI/Footer";
import Certification from "../assets/Full-Stack-Certificate.pdf";
// React component for the Resume Page
export default function ResumePage() {
  return (
    <>
      <div className="Documents-section p-5 bg-dark text-white  ">
        <h2 className="fs-1">Documents</h2>
        <div className="Resume-section mt-5 mb-5 pb-4 fs-5">
          <p>Click the link below to download my Resume!</p>

          {/* Link to download the resume PDF */}
          <a href={resume} download>
            Resume PDF
          </a>
        </div>
        <div className="Certification-section fs-5">
          <p>Click the link below to download my Certifications!</p>
          <a href={Certification} download>
            Full-Stack-Certication PDF
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
