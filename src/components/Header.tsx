import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/ContactModal";
import layaLogo from "../assets/laya-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Who we are", path: "/about/who-we-are" },
      { label: "Way we work", path: "/about/way-we-work" },
      { label: "Where we work", path: "/about/where-we-work" },
      { label: "Financial Reports", path: "/about/financial-reports" },
      { label: "FCRA Information", path: "/about/fcra-information" },
      { label: "Governance", path: "/about/governance" },
      { label: "Our support partners", path: "/about/support-partners" },
    ],
  },
  {
    label: "What We Do",
    path: "/programs",
    dropdown: [
      { label: "Safeguarding Adivasi Rights for Social Justice", path: "/what-we-do/rla" },
      { label: "Herbal Based Health Care", path: "/what-we-do/hbhc" },
      { label: "Sustainable Resource Management", path: "/what-we-do/srm" },
      { label: "Lifelong Learning", path: "/what-we-do/lifelong-learning" },
      { label: "Climate Crisis and Sustainable Development", path: "/what-we-do/climate-crisis-sustainable-development" },
    ],
  },
  { label: "Publications", path: "/publications" },
  { label: "Donate", path: "/donate" },
  { label: "Gallery", path: "/gallery" },
  { label: "Team", path: "/team" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    
    // Initialize scroll state on mount
    setScrolled(window.scrollY > 50);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActiveLink = (path: string, hasDropdown?: boolean) =>
    hasDropdown ? location.pathname === path || location.pathname.startsWith(`${path}/`) || (path === "/programs" && location.pathname.startsWith("/what-we-do/")) : location.pathname === path;

  const scrollPageToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      {/* Blue Main Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--laya-header)] backdrop-blur-md transition-all duration-300 ease-in-out">
        <div className={`transition-all duration-300 ease-in-out ${scrolled ? 'py-4 lg:py-5' : 'py-3 lg:py-4'}`}>
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 lg:px-5 relative">
            {/* Left-aligned Logo overlapping both headers */}
            <Link to="/" onClick={scrollPageToTop} className={`lg:absolute lg:left-5 relative left-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'lg:-bottom-5' : 'lg:-bottom-24'}`}>
              <img
                src={layaLogo}
                alt="LAYA Logo"
                className={`rounded-full object-cover transition-all duration-500 ease-out ${scrolled ? 'lg:h-20 lg:w-20 h-16 w-16' : 'lg:h-40 lg:w-40 h-28 w-28'}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 ml-auto">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative group"
                >
                  <Link
                    to={link.path}
                    onClick={scrollPageToTop}
                    className={`px-2 py-1.5 text-[0.9rem] font-heading font-semibold uppercase tracking-[0.1em] rounded-md transition-colors inline-flex items-center gap-1 whitespace-nowrap ${
                      isActiveLink(link.path, Boolean(link.dropdown))
                        ? "bg-white text-primary"
                        : "text-white/90 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute left-0 top-full mt-2 min-w-[280px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={scrollPageToTop}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => setContactOpen(true)}
                className="px-2 py-1.5 text-[0.9rem] font-heading font-semibold uppercase tracking-[0.1em] rounded-md transition-colors text-white/85 hover:text-white hover:bg-white/15"
              >
                Contact
              </button>
            </nav>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-auto text-white hover:text-white hover:bg-white/20 bg-white/10 rounded-lg p-3 transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <AlignJustify className="h-7 w-7" />}
            </Button>
          </div>

          {/* Mobile nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[var(--laya-header)] shadow-2xl border-b border-white/30 overflow-hidden backdrop-blur-sm"
              >
                <div className="px-6 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.dropdown ? (
                        <button
                          onClick={() => setExpandedDropdown(expandedDropdown === link.path ? null : link.path)}
                          className={`w-full text-left block px-5 py-4 rounded-xl text-sm font-heading uppercase tracking-[0.08em] transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md ${
                            isActiveLink(link.path, Boolean(link.dropdown))
                              ? "bg-white/95 text-[var(--laya-purple)] shadow-lg transform scale-105"
                              : "text-white/95 hover:text-white hover:bg-white/20"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedDropdown === link.path ? 'rotate-180' : ''}`} />
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => {
                            scrollPageToTop();
                            setIsOpen(false);
                          }}
                          className={`block px-5 py-4 rounded-xl text-sm font-heading uppercase tracking-[0.08em] transition-all duration-300 shadow-sm hover:shadow-md ${
                            isActiveLink(link.path, Boolean(link.dropdown))
                              ? "bg-white/95 text-[var(--laya-purple)] shadow-lg transform scale-105"
                              : "text-white/95 hover:text-white hover:bg-white/20"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                      {link.dropdown && (
                        <div className={`ml-4 overflow-hidden transition-all duration-300 ease-out ${expandedDropdown === link.path ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                          <div className="space-y-1 border-l-2 border-white/30 pl-4">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                  scrollPageToTop();
                                  setIsOpen(false);
                                }}
                                className="block rounded-lg px-4 py-3 text-white/85 hover:bg-white/25 hover:text-white transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => { setContactOpen(true); setIsOpen(false); }}
                    className="block w-full text-left px-5 py-4 rounded-xl text-sm font-heading uppercase tracking-[0.08em] text-white/95 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Contact
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* White Sub-Header - Hide on scroll down, show on scroll up */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: headerHidden ? '-100%' : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm hidden lg:block"
        style={{ top: scrolled ? '68px' : '64px', transition: 'top 0.3s ease-in-out' }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-5 py-2 lg:py-3">
          <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-3">
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[10px] lg:text-sm text-gray-800 italic font-serif font-medium bg-gradient-to-r from-gray-100 to-transparent px-2 lg:px-4 py-1 rounded text-center leading-tight">
                "Give me the strength never to disown the poor or bend my knees before insolent might"
              </span>
              <span className="text-[10px] lg:text-xs text-[var(--laya-header)] font-semibold">— Rabindranath Tagore</span>
            </div>
            <Link
              to="/donate"
              onClick={scrollPageToTop}
              className="px-4 py-2 bg-[var(--laya-header)] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-colors whitespace-nowrap"
            >
              Donate
            </Link>
          </div>
        </div>
      </motion.div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Header;
