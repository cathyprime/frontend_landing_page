"use client";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";

interface MenuItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  // Zoptymalizowana obsługa scrolla z useCallback
  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollPosition(currentScrollPosition);
    setIsScrolled(currentScrollPosition > 50);
  }, [lastScrollPosition]);

  // Zoptymalizowana obsługa menu mobilnego
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Zoptymalizowana obsługa scrolla do sekcji
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  }, []);

  // Zoptymalizowana obsługa klawisza Escape
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleScroll, handleEscape]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems: MenuItem[] = [
    { name: "O nas", href: "#about" },
    { name: "Usługi", href: "#features" },
    { name: "Galeria", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
  ];

  // Zoptymalizowany handler dla kliknięcia w link
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollToSection(href);
    },
    [scrollToSection],
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed w-full transition-all duration-300 z-50 
        ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo i hasło */}
            <div className="flex items-center">
              <div
                className={`text-2xl font-bold ${isScrolled ? "text-blue-600" : "text-white"}`}
              >
                Logo
              </div>
              <div
                className={`hidden md:block ml-4 text-sm ${isScrolled ? "text-gray-600" : "text-gray-200"}`}
              >
                Twoje hasło marketingowe
              </div>
            </div>

            {/* Menu na desktop */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`transition-colors
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Przycisk menu mobilnego */}
            <button
              className={`md:hidden p-2 rounded-lg
              ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <svg
                className={`w-6 h-6 ${isScrolled ? "text-gray-600" : "text-white"}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu mobilne */}
          {isMenuOpen && (
            <>
              <nav
                className={`md:hidden mt-4 pb-4
            ${isScrolled ? "bg-white" : "bg-black bg-opacity-50"}`}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`block py-2 px-4 transition-colors
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-gray-200 hover:bg-white/10"
                  }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
