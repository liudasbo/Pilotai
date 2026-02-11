import Link from "next/link";

const PILOTAI_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "News", href: "#news" },
];

const USEFUL_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Licenses", href: "#licenses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
];

const GET_IN_TOUCH = [
  { label: "Contact", href: "#contact" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
];

const PARTNERS = ["MIGLĖ", "DRONEFLY", "DORMA"];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="mb-12">
          <p className="text-body-sm tracking-wider text-white/80 mb-4">
            PARTNERSHIP WITH
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-white font-semibold tracking-wider text-body-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-body-sm font-semibold tracking-wider mb-4 text-white/90">
              PILOTAI
            </h3>
            <ul className="space-y-2">
              {PILOTAI_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-body-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-body-sm font-semibold tracking-wider mb-4 text-white/90">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-body-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-body-sm font-semibold tracking-wider mb-4 text-white/90">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2">
              {GET_IN_TOUCH.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-body-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-body-sm">
            © 2026 PILOTAI. ALL RIGHTS RESERVED.
          </p>
          <div className="text-right">
            <span className="font-bold text-lg tracking-tight">PILOTAI</span>
            <span className="block text-body-sm text-white/80 tracking-wider">
              LITHUANIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
