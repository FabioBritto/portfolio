import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-card__icon"
            />
            <span className="skill-card__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
