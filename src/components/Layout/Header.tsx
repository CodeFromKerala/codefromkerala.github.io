import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            CodeFromKerala
          </Link>
          <nav className="header__nav">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/about" className="header__link">About</Link>
            <Link to="/projects" className="header__link">Projects</Link>
            <Link to="/research" className="header__link">Research</Link>
            <Link to="/blog" className="header__link">Blog</Link>
            <Link to="/contact" className="header__link">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
