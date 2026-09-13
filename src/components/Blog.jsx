import "./Blog.css";

const MEDIUM_URL = "https://medium.com/@fabio.tritono";

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog__card">
        <span className="blog__badge">Novo</span>
        <h2 className="section-title blog__title">Blog Pessoal</h2>
        <p className="blog__text">
        Reflexões construídas ao longo da minha jornada em desenvolvimento: aprendizados técnicos, considerações sobre minha formação e relatos honestos sobre a transição de carreira.
        </p>
        <a
          href={MEDIUM_URL}
          className="button button--primary"
          target="_blank"
          rel="noreferrer"
        >
          Ler no Medium
        </a>
      </div>
    </section>
  );
}
