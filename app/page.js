const projets = [
  { titre: "TP1 — Ansible + Semaphore", texte: "Déploiement automatisé de ce portfolio : Node.js, PM2 et Nginx configurés par des rôles Ansible idempotents." },
  { titre: "Infrastructure as Code", texte: "Inventaires, variables et templates Jinja2 versionnés dans Git, exécutés depuis Semaphore UI." },
  { titre: "CI/CD", texte: "Chaque commit poussé peut être redéployé en un clic, avec redémarrage de l'application uniquement si le code change." },
];

export default function Home() {
  return (
    <main>
      <header>
        <p className="tag">DevOps & Cloud</p>
        <h1>Soulayma</h1>
        <p className="sous-titre">Étudiante en DevOps — automatisation, déploiement et infrastructure.</p>
    <p className="version">Version 2.0</p>
      </header>

      <section>
        <h2>Projets</h2>
        <div className="grille">
          {projets.map((p) => (
            <article key={p.titre}>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>Déployé avec Ansible · PM2 · Nginx · Semaphore UI</footer>
    </main>
  );
}
