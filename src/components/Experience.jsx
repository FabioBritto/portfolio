import { experiences } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experiencia" className="experience">
      <h2 className="section-title">Experiência</h2>
      <div className="experience__list">
        {experiences.map((item) => (
          <article key={item.id} className="experience-card">
            <header className="experience-card__header">
              <div>
                <h3 className="experience-card__role">{item.role}</h3>
                <p className="experience-card__company">{item.company}</p>
              </div>
              <p className="experience-card__period">{item.period}</p>
            </header>
            <div className="experience-card__body">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <ul className="experience-card__stack">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
