
import github from '../../assets/github-mark.png'

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer className="bg-black  p-5 d-flex  justify-content-center footer-section">
      <a className="p-2" href="https://github.com/Tarsum67" target="_blank"><img className="footer-img  " src={github} alt="" /></a>

    </footer>
  );
}