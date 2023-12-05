// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light px-2 py-3" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light px-2 py-3" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light px-2 py-3" to="/contact">
          Contact Me
        </Link>,
        <Link key={4} className="nav-link text-light px-2 py-3" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
