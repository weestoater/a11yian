export const WhereToFindStandards = () => {
  return (
    <section id="where-to-find-standards" className="content-section">
      <h2>Where to Find Standards</h2>
      <p>
        There are several accessibility standards and guidelines available to
        help you understand and implement best practices in your projects.
      </p>
      <p>
        The most widely recognized standard is the Web Content Accessibility
        Guidelines (WCAG), which provides recommendations for making web content
        more accessible. The most recent version is{" "}
        <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a>, which builds upon
        previous versions and provides updated guidance for creating accessible
        web content, it is also universally regarded as the standard which most
        potential law suits are measured against.
      </p>

      <h3>European Accessibility Act (EAA)</h3>
      <p>
        If you are based in Europe, the{" "}
        <a href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en">
          European Accessibility Act
        </a>{" "}
        (EAA) sets out accessibility requirements for a range of products and
        services, aiming to harmonize accessibility standards across EU member
        states. Fundamentally, the standard advices developers and designers to
        adhere to the guidance of the WCAG 2.2 AA standard - which is
        understandable, but it can also trip up some teams if they are not
        familiar with requirements to evidence testing and design processes.
      </p>

      <h3>United States of America (USA)</h3>
      <p>
        In the United States, the{" "}
        <a href="https://www.ada.gov/">Americans with Disabilities Act (ADA)</a>{" "}
        is the primary legislation that addresses accessibility. While the ADA
        does not provide specific technical standards for web accessibility, it
        is widely interpreted to require compliance with the WCAG guidelines.
        Organizations should ensure their digital content meets WCAG 2.2 AA
        standards to minimize legal risks and provide an inclusive experience
        for all users.
      </p>

      <hr />
      <br />
      <p>
        <small>
          Make sure your code complies with the WCAG 2.2 AA standards and you'll
          be a good ways ahead of most other products.
        </small>
      </p>
    </section>
  );
};
