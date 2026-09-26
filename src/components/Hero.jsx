import { profile, contact } from "../data/content";
import profileImg from "../assets/profile.jpg";
import { GithubIcon, LinkedinIcon } from "./icons/ContactIcons";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__photo-wrap">
        <img
          src={profileImg}
          alt={`Foto de ${profile.name}`}
          className="hero__photo"
        />
      </div>

      <div className="hero__content" id="sobre">
        <p className="hero__greeting">{profile.greeting}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <div className="hero__about">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="hero__actions">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            Baixar Currículo
          </a>
          <a
            href={contact.github}
            className="hero__social"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="hero__social-icon" />
          </a>
          <a
            href={contact.linkedin}
            className="hero__social"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="hero__social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
