import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar__pill">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__link ${
              active === link.href ? "navbar__link--active" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
