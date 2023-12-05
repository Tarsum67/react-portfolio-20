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
        Full Stack DEV | JavaScript | React | Node | CSS<br />
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repellat sed odit dolores voluptatum dicta veritatis? Alias exercitationem molestias iure rerum, ex incidunt sunt vel doloribus enim distinctio expedita sint.
        {/* Brief description */}
      
      </p>
    </div>
  );
}
