import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingNav() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Main navigation links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Jobs", href: "#types" },
    { label: "Contact us", href: "#contact" },
    // { label: "Team", href: "#team" },
  ];

  // More dropdown links
  const moreLinks = [
    { label: "About Us", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Connect", href: "#employee" },
    { label: "Feed back", href: "#feedback" },
    { label: "Footer", href: "#footer" },
  ];

  // Close all menus
  const closeMenus = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#EFE6D8]/90 backdrop-blur-xl border-b border-[#3B2A20]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            NAVBAR MAIN ROW
        ========================== */}
        <div className="h-16 flex items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-2.5 no-underline group"
          >
            <div className="w-9 h-9 bg-[#3B2A20] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-[#EFE6D8] font-black text-lg">
                S
              </span>
            </div>

            <span className="font-black text-xl text-[#3B2A20] tracking-tight">
              SmartHire
            </span>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Main navigation links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                className="text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] px-4 py-2.5 rounded-lg transition-colors hover:bg-[#3B2A20]/5"
              >
                {link.label}
              </a>
            ))}

            {/* =========================
                MORE DROPDOWN
            ========================== */}
            <div className="relative">

              {/* More Button */}
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1 text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] px-4 py-2.5 rounded-lg transition-colors hover:bg-[#3B2A20]/5"
              >
                <span>More</span>

                <span
                  className={`text-xs transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Dropdown Menu */}
              {moreOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#3B2A20]/10 py-2 overflow-hidden"
                  role="menu"
                >
                  {moreLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      role="menuitem"
                      onClick={closeMenus}
                      className="block px-4 py-3 text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] hover:bg-[#EFE6D8] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* =========================
              DESKTOP CTA BUTTONS
          ========================== */}
          <div className="hidden md:flex items-center gap-2">

            <Link
              to="/login"
              onClick={closeMenus}
              className="text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] px-5 py-2.5 rounded-full hover:bg-[#3B2A20]/5 transition-colors"
            >
              Log in
            </Link>

            <Link
              to="/register"
              onClick={closeMenus}
              className="text-sm font-semibold text-[#EFE6D8] bg-[#3B2A20] hover:bg-[#2A1D15] px-5 py-2.5 rounded-full transition-colors"
            >
              Register
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg hover:bg-[#3B2A20]/5 transition-colors"
            onClick={() => {
              setOpen((prev) => !prev);
              setMoreOpen(false);
            }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">

              {/* Top line */}
              <span
                className={`block w-6 h-0.5 bg-[#3B2A20] transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />

              {/* Middle line */}
              <span
                className={`block w-6 h-0.5 bg-[#3B2A20] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />

              {/* Bottom line */}
              <span
                className={`block w-6 h-0.5 bg-[#3B2A20] transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />

            </div>
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        {open && (
          <div className="md:hidden bg-[#EFE6D8] border-t border-[#3B2A20]/10 px-2 py-5 space-y-1">

            {/* Main Mobile Links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                className="block text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] px-4 py-3 rounded-lg hover:bg-[#3B2A20]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* =========================
                MOBILE MORE DROPDOWN
            ========================== */}
            <div>

              {/* More Button */}
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                className="w-full flex items-center justify-between text-sm font-semibold text-[#5C4A3A] hover:text-[#3B2A20] px-4 py-3 rounded-lg hover:bg-[#3B2A20]/5 transition-colors"
              >
                <span>More</span>

                <span
                  className={`text-xs transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Mobile More Links */}
              {moreOpen && (
                <div className="ml-4 mt-1 border-l-2 border-[#3B2A20]/10 pl-2">

                  {moreLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenus}
                      className="block px-4 py-2.5 text-sm text-[#5C4A3A] hover:text-[#3B2A20] hover:bg-[#3B2A20]/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}

                </div>
              )}
            </div>

            {/* =========================
                MOBILE LOGIN / REGISTER
            ========================== */}
            <div className="flex gap-3 pt-4 mt-3 border-t border-[#3B2A20]/10">

              <Link
                to="/login"
                onClick={closeMenus}
                className="flex-1 text-center text-[#3B2A20] font-semibold border border-[#3B2A20]/20 py-3 rounded-full hover:bg-[#3B2A20]/5 transition-colors"
              >
                Log in
              </Link>

              <Link
                to="/register"
                onClick={closeMenus}
                className="flex-1 text-center text-[#EFE6D8] font-semibold bg-[#3B2A20] py-3 rounded-full hover:bg-[#2A1D15] transition-colors"
              >
                Register
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}