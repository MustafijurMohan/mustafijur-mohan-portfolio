"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-md py-3"
          : "bg-surface/40 backdrop-blur-md border-b border-outline-variant/10 py-5"
      }`}
    >
      <nav className="flex justify-between items-center px-6 max-w-[1280px] mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-display-lg text-2xl font-extrabold text-primary-container tracking-tighter hover:scale-105 transition-transform duration-300">
            &lt;MM/&gt;
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-body-md text-body-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative py-1 font-medium transition-all duration-300 hover:text-primary-container ${
                      isActive ? "text-primary-container font-semibold" : "text-on-surface-variant"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-container rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary-container/10 active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-container p-2 hover:bg-surface-variant/30 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full bg-surface-container-high/95 backdrop-blur-xl border-b border-outline-variant/30 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block py-2 text-lg font-medium transition-colors ${
                          isActive
                            ? "text-primary-container pl-2 border-l-2 border-primary-container"
                            : "text-on-surface-variant hover:text-primary-container"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <Link
                href="/contact"
                className="w-full text-center bg-primary-container text-on-primary-container py-3 rounded-xl font-bold hover:bg-primary-container/90 transition-colors shadow-lg shadow-primary-container/10 block"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
