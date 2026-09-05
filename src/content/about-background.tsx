import ltsLogo from "../assets/ltscotland-logo.jpg";
import gaadLogo from "../assets/gaad-logo-navy.png";

export const AboutBackground = () => {
  return (
    <section id="about-background">
      {/* Background content for the About section */}
      <h2>
        A11y<span className="ian">Ian</span> Background
      </h2>
      <img
        src={ltsLogo}
        alt="Learning and Teaching Scotland Logo"
        className="img-right"
      />
      <p>
        I started working in semantic HTML & CSS around 2001, after moving to a
        role as Front-End Developer for Learning and Teaching Scotland. I found
        the amazing Jeffrey Zeldmans' passiontate advocacy of web standards
        resonated deeply and has shaped my approach to the web ever since. It
        actually takes more effort to do things badly, that it does to just use
        the right html elements and markup in the first place. If something
        makes sense in HTML, it will make sense to the devices consuming it - so
        why build a soup of hacks and workarounds.
      </p>
      <p>
        Over the years, I have continued to advocate for web standards and
        accessibility, ensuring that the web remains inclusive and usable for
        everyone. In various roles I've created clean semantic code, which is
        light and loads quickly regardless of the device. But more recently my
        day job has included the word <strong>Accessibility</strong> in the
        title, reflecting the deep focus and commitment my work has and the team
        shares. I test a <strong>LOT</strong> of websites and applications,
        using JAWS, NVDA, VoiceOver and various other accessibility auditing
        tools. Our team has built an incredbly powerful tool for our testers to
        use, but also made it available to developers in-house as a Chrome
        extension.
      </p>

      <img
        src={gaadLogo}
        alt="Global Accessibility Awareness Day Logo"
        className="img-left"
      />

      <p>
        I also co-ordinate the annual{" "}
        <a
          href="https://globalaccessibilityawarenessday.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Global Accessibility Awareness Day (GAAD)
        </a>
        &nbsp;each year in May, promoting best practices and raising awareness
        about web accessibility. We have a collection of seminars, workshops,
        and activities aimed at educating both developers and users about the
        importance of accessibility on the web, but there are also the Guide
        Dogs for the Blind who benefit from our efforts and support.
      </p>
    </section>
  );
};
