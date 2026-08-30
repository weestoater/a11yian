const icons = {
  audit: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  design: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  training: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
};

export const HomeServices = () => {
  return (
    <section id="services">
      <h2>What I can help with</h2>
      <ul className="service-list">
        <li className="service-item">
          <span className="service-icon">{icons.audit}</span>
          <div>
            <h3>
              <span className="num">01</span>Accessibility audits
            </h3>
            <p>
              If you need a thorough accessibility audit of your website or
              application, I can help identify issues and provide actionable
              remediation plans.
            </p>
          </div>
        </li>
        <li className="service-item">
          <span className="service-icon">{icons.design}</span>
          <div>
            <h3>
              <span className="num">02</span>Inclusive design review
            </h3>
            <p>
              I can review your design to ensure it is inclusive and accessible
              to all users, providing feedback and recommendations for
              improvement.
            </p>
          </div>
        </li>
        <li className="service-item">
          <span className="service-icon">{icons.training}</span>
          <div>
            <h3>
              <span className="num">03</span>Developers / Designers training
            </h3>
            <p>
              I offer training sessions for teams to help them understand and
              implement web accessibility best practices effectively.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
