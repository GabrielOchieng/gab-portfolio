const DotsViz = () => (
  <div className="impact-microviz impact-years" aria-hidden="true">
    {Array.from({ length: 7 }).map((_, i) => (
      <i key={i} />
    ))}
  </div>
);

const brightIndexes = [3, 7, 9, 14, 18, 20];
const brightestIndexes = [1, 5, 11, 13, 17, 22];

const GridViz = () => (
  <div className="impact-microviz impact-density" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <i
        key={i}
        className={
          brightestIndexes.includes(i)
            ? "is-brightest"
            : brightIndexes.includes(i)
              ? "is-bright"
              : undefined
        }
      />
    ))}
  </div>
);

const BarsViz = ({ bars }: { bars: number[] }) => (
  <div className="impact-microviz impact-bars" aria-hidden="true">
    {bars.map((h, i) => (
      <i key={i} style={{ height: `${h}%` }} />
    ))}
  </div>
);

const stats = [
  {
    category: "Experience",
    value: "4+ yrs",
    detail: "Building web and mobile products across travel tech, commerce, and business operations",
    viz: <DotsViz />,
  },
  {
    category: "Products delivered",
    value: "10+",
    detail: "Live products across internal platforms, customer-facing commerce, and independent ventures",
    viz: <GridViz />,
  },
  {
    category: "SaaS & AI products",
    value: "3 SaaS / 5 AI",
    detail: "Brand Monitor, Clearrack, and Market Validator as multi-tenant SaaS; Gemini Vision, Gemini 1.5 Pro, Llama 3.3, and Claude applied to real product workflows",
    viz: <BarsViz bars={[70, 55, 90, 60, 80]} />,
  },
  {
    category: "Industries & ownership",
    value: "5 industries",
    detail: "Travel tech, e-commerce, internal business tooling, security, and developer tooling, owned end to end from requirements to deployment",
    viz: <GridViz />,
  },
];

const ImpactStats = () => {
  return (
    <div className="p-2">
      <div className="impact-console">
        <div className="impact-console-heading">
          <h2>Range of work</h2>
          <span>Selected highlights, not exhaustive</span>
        </div>
        <div className="impact-console-grid">
          {stats.map((stat) => (
            <article key={stat.category} className="impact-console-item">
              <span className="impact-category">{stat.category}</span>
              <strong>{stat.value}</strong>
              <p>{stat.detail}</p>
              {stat.viz}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
