import heroImg from "../assets/hero-image.png";

export const HomeHero = () => {
  return (
    <section className="hero">
      <h1>Accessible, inclusive web experiences</h1>

      <img src={heroImg} alt="" className="heroimg" />
      <p className="lede">
        Hand crafting semantic code for over 25 years; expertise in auditing /
        reviewing projects; training and evangelism in web accessibility.
      </p>

      <p>
        Making a project accessible is not a nice-to-have; it is an essential
        part of social responsibility and good user experience.
      </p>

      {/* <div className="status-card">
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
      </div> */}
    </section>
  );
};
