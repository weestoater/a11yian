import guideHero from "../../assets/a11y-guide-hero.png";

export const GuideIntro = () => {
  return (
    <section id="guide-intro" className="hero">
      <h1>Guide to Digital Accessibility and Inclusive Design</h1>

      <img src={guideHero} alt="Guide to Accessibility" className="img-full" />

      <p>
        Welcome to the A11yIan guide. This guide will help you understand and
        implement accessibility best practices in your projects.
      </p>
    </section>
  );
};
