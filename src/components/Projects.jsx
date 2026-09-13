import { projects } from "../data/content";
import "./Projects.css";

function ProjectMeta({ project }) {
  return (
    <>
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>
      <p className="project-card__tech">{project.tech}</p>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects__grid">
        {projects.map((project) => {
          const hasRepoLinks =
            project.logo && project.backendUrl && project.frontendUrl;
          const isSingleRepoCard = project.logo && project.url && !hasRepoLinks;

          return (
            <article key={project.id} className="project-card">
              {hasRepoLinks ? (
                <>
                  <div className="project-card__thumb project-card__thumb--with-logo">
                    <img
                      src={project.logo}
                      alt={`Logo do projeto ${project.name}`}
                      className="project-card__logo"
                    />
                    <div className="project-card__repo-links">
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__repo-chip"
                      >
                        Back-end
                      </a>
                      <a
                        href={project.frontendUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__repo-chip"
                      >
                        Front-end
                      </a>
                    </div>
                  </div>
                  <ProjectMeta project={project} />
                </>
              ) : isSingleRepoCard ? (
                <a
                  href={project.url}
                  className="project-card__full-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-card__thumb project-card__thumb--with-logo">
                    <img
                      src={project.logo}
                      alt={`Logo do projeto ${project.name}`}
                      className="project-card__logo"
                    />
                  </div>
                  <ProjectMeta project={project} />
                </a>
              ) : (
                <>
                  <a
                    href={project.url || "#"}
                    className="project-card__thumb"
                    aria-label={project.name}
                  />
                  <ProjectMeta project={project} />
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
