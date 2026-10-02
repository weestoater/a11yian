import msA11yInfoGraphic from "../../assets/microsoft-infographic-permanent-temporary-situational.webp";

export const WhyAccessibilityMatters = () => {
  return (
    <section id="why-accessibility-matters" className="content-section">
      <h2>Why Accessibility Matters</h2>

      <p>
        I don't think of accessibility as just a checklist or a set of rules, it
        is not just about compliance or following regulations. I feel it is a
        fundamental aspect of good design, about creating inclusive digital
        experiences that work for everyone. Designing and building with
        accessibility in mind, ensures that people with disabilities can use
        your products and services effectively.
      </p>

      <img
        className="img-right bordered"
        src={msA11yInfoGraphic}
        alt="Microsoft infographic illustrating permanent, temporary, and situational disabilities"
      />

      <p>Three categories of disability:</p>
      <ul>
        <li>Permanent</li>
        <li>Temporary</li>
        <li>Situational</li>
      </ul>

      <p>
        Microsoft depicts these different types of disabilities in an excellent
        graphic, which illustrates this brilliantly.Touch, sight, hearing and
        speech are all shown in the three categories clearly and concisely.
      </p>

      <p>
        Understanding these categories helps designers and developers create
        more inclusive experiences by considering the diverse needs of all
        users, as well as those with temporary or situational scenarios.
      </p>
      <p>
        <small>
          <strong>Image credit</strong>: Microsoft Accessibility image of
          permanent, temporary, and situational disabilities
        </small>
      </p>
    </section>
  );
};
