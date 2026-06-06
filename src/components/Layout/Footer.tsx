import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__heading">CodeFromKerala</h3>
            <p className="footer__text">
              A collection of programming projects, mathematical research, and technical writing.
            </p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subheading">Links</h4>
            <ul className="footer__links">
              <li><a href="https://github.com/codefromkerala" rel="noreferrer" target="_blank">GitHub</a></li>
              <li><a href="mailto:contact@example.com">Email</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subheading">Pages</h4>
            <ul className="footer__links">
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/research">Research</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="text-muted">
            © {year} CodeFromKerala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
