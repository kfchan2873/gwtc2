// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
//import clubLogo from "/gwtc-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  // Close on Escape (global)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu is open (important on iOS)
  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  // Focus management: when opening, move focus into menu; when closing, return to hamburger
  useEffect(() => {
    if (menuOpen) {
      // Slight delay ensures menu is in DOM and visible
      requestAnimationFrame(() => {
        const firstFocusable = menuRef.current?.querySelector(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      });
    } else {
      buttonRef.current?.focus?.();
    }
  }, [menuOpen]);

  // Trap focus inside the menu when open (Tab/Shift+Tab)
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;

      const focusables = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      const active = document.activeElement;

      // Shift+Tab on first -> go to last
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }

      // Tab on last -> go to first
      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);


  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/membership", label: "Membership" },
    { to: "/competitions-social", label: "Competitions & Social" },
    { to: "/news-events", label: "News & Events" },
    { to: "/gallery", label: "Gallery" },
    { to: "/location", label: "Location" },
    { to: "/coaching", label: "Coaching" },
    { to: "/contact", label: "Contact" },
    { to: "/rules-policies", label: "Rules & Policies" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner container">
  
        {/* Desktop nav */}
        <nav className="main-nav desktop-nav" aria-label="Primary">
  {navItems.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.end}
    >
      {item.label}
    </NavLink>
  ))}
</nav>



        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="hamburger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Backdrop (click outside) */}
      {menuOpen && <div className="backdrop" onClick={closeMenu} />}

      {/* Mobile menu panel */}
      <div
        id="mobile-menu-panel"
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Optional close button for clarity/accessibility */}
        <button
          type="button"
          className="mobile-close btn btn-ghost"
          onClick={closeMenu}
        >
          Close
        </button>
        <nav className="mobile-nav" aria-label="Mobile">
  {navItems.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.end}
      onClick={closeMenu}
    >
      {item.label}
    </NavLink>
  ))}
</nav>

      </div>
    </header>
  );
}

export default Header;
