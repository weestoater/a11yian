export const HomeHero = () => {
  return (
    <section className="hero">
      <h1>Accessible, inclusive web experiences</h1>
      <p className="lede">
        Hand crafting semantic code for over 25 years; expertise in auditing /
        reviewing projects; training and evangelism in web accessibility.
      </p>

      <div className="status-card">
        <div className="status-row">
          <span className="status-label">
            <span className="status-dot" aria-hidden="true" />
            Available
          </span>
          <span>for new projects</span>
        </div>
        <p className="status-meta">
          Always happy to assist charities / non-profits
        </p>
      </div>
    </section>
  );
};
