const badges = [
  { label: "WCAG 2.2", className: "badge-wcag" },
  { label: "HTML5", className: "badge-html" },
  { label: "CSS3", className: "badge-css" },
];

// Original stylized artwork (not the official WCAG/HTML5/CSS3 logos) to avoid trademark reuse.
export const HeroGraphic = () => {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="hero-laptop">
        <svg
          viewBox="0 0 64 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="10" y="4" width="44" height="28" rx="2" />
          <path d="m9 32-6 8h58l-6-8" />
          <path d="m22 14 6 6-6 6M42 14l-6 6 6 6" />
        </svg>
      </div>
      <div className="hero-orbit">
        {badges.map((badge, i) => (
          <div
            key={badge.label}
            className="orbit-item"
            style={
              {
                "--offset": `${(360 / badges.length) * i}deg`,
              } as React.CSSProperties
            }
          >
            <span className={`orbit-badge ${badge.className}`}>
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
