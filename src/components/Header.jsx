import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        <div className="logo">
          <span className="logo-sparkle">✨</span>
          <span className="text-gradient">Get Intern Mania</span>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-btn">🔍</button>
            </div>
            
            <button className="btn btn-primary login-btn">Login</button>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
