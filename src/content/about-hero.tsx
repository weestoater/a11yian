import a11yDavinci from "../assets/a11y-davinci.png";

export const AboutHero = () => {
  return (
    <section className="hero">
      <h1>
        About A11y<span className="ian">ian</span>
      </h1>

      <img
        src={a11yDavinci}
        alt="A11y is a numeronym for accessibility  - there are 11 characters between the A and y"
        className="img-full"
      />

      <p className="lede">
        An Accessibility subject matter expert with over 25 years of experience,
        building inclusive web experiences for Scottish Education, local
        government, private sector, and non-profits. Accomplished presenter of
        various accessibility and inclusive design topics.
      </p>

      <p>
        The passion began early in my career after showing something to my late
        father, who had parkinsons disease and the layout fell apart on his
        settings. I learned about Jeffrey Zeldman and the web standards
        movement, which profoundly influenced my approach to building accessible
        and inclusive web experiences.
      </p>
    </section>
  );
};
