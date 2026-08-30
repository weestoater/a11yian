import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/dark-logo.png";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close the dropdown whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <p className="site-title">
          <img src={logo} alt="a11yian logo" />
          <span className="branding">
            A11Y <span className="ian">IAN</span>
          </span>
        </p>
        <button
          type="button"
          className="nav-toggle"
          ref={toggleRef}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-icon" aria-hidden="true" />
          {isMenuOpen ? "Close menu" : "Menu"}
        </button>
        <nav className="site-nav" aria-label="Primary">
          <ul id="primary-nav" data-open={isMenuOpen}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
