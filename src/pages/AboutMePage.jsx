// Importing the portrait image from the assets folder
import portrait from '../assets/profile.png';

// React component for the About Me page
export default function AboutMePage() {
  return (
    // Container with padding, using flex layout
    <div className="p-4 about-me pt-4">
      {/* Displaying the portrait image */}
      <img src={portrait} alt="Portrait" className="abt-me-port" />

      {/* Paragraph containing information about me */}
      <p className="about-me-p">
        {/* Professional details */}
        Full Stack DEV | JavaScript | React | Node | SQL <br />

        {/* Brief description */}
        Experienced coding bootcamp graduate with an extensive background in various programming languages, 
        developing applications, and building websites from the ground up. Specializes in JavaScript and React. 
        Professional strengths include creative problem-solving, written and verbal communication, and time management. 
        Detail-oriented mindset from 6+ years in a management position.
      </p>
    </div>
  );
}
