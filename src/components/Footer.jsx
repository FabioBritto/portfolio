import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        {profile.name} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
