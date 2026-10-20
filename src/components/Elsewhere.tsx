import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const links = [
  {
    type: "Source & history",
    label: "Code & Repositories",
    href: "https://github.com/GabrielOchieng",
    mini: "wiki",
  },
  {
    type: "Experience & roles",
    label: "Professional Profile",
    href: "https://www.linkedin.com/in/gabrielochieng",
    mini: "essays",
  },
  {
    type: "One document",
    label: "Resume",
    href: "/resume.pdf",
    mini: "edge",
  },
] as const;

const ThinkingMini = ({ kind }: { kind: "wiki" | "essays" | "edge" }) => {
  if (kind === "wiki") {
    return (
      <span className="thinking-mini thinking-mini-wiki" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
      </span>
    );
  }
  if (kind === "essays") {
    return (
      <span className="thinking-mini thinking-mini-essays" aria-hidden="true">
        <i /><i /><i />
      </span>
    );
  }
  return (
    <span className="thinking-mini thinking-mini-edge" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
};

const Elsewhere = () => {
  return (
    <div id="elsewhere" className="p-2">
      <div className="mx-auto py-16" style={{ maxWidth: "var(--max-width)" }}>
        <p className="screenbreak-kicker">04 / Elsewhere</p>
        <h2 className="py-4 text-text-main">Find More of My Work</h2>
        <div className="thinking-links md:grid-cols-3">
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="thinking-link"
              data-reveal
            >
              <span className="thinking-link-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="thinking-link-type">{link.type}</span>
              <strong>{link.label}</strong>
              <ThinkingMini kind={link.mini} />
              <HiArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elsewhere;
