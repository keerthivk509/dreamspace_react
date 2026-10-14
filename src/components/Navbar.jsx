import React, { useState } from "react";
import { navigation } from "../data/siteData.js";
import logo from "../assets/logo.svg";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const close = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };
  return (
    <nav className="site-navbar">
      <div className="container nav-inner">
        <a className="brand-lockup" href="#home">
          <img src={logo} alt="" className="brand-logo" />
          <span className="brand-copy">
            <strong>DreamSpace</strong>
            <small>INTERIOR DESIGN</small>
          </span>
        </a>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`} />
        </button>
        <div className={`nav-menu ${mobileOpen ? "nav-menu-open" : ""}`}>
          {navigation.map((item, index) => (
            <div
              className={`nav-item ${item.submenu ? "has-submenu" : ""}`}
              key={item.label}
            >
              <div className="nav-link-row">
                <a className="nav-link" href={item.href} onClick={close}>
                  {item.label}
                </a>
                {item.submenu && (
                  <button
                    type="button"
                    className="submenu-toggle"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={openSubmenu === index}
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === index ? null : index)
                    }
                  >
                    <i className="bi bi-chevron-down" />
                  </button>
                )}
              </div>
              {item.submenu && (
                <div
                  className={`submenu ${openSubmenu === index ? "submenu-open" : ""}`}
                >
                  {item.submenu.map((sub) => (
                    <a href={sub.href} key={sub.label} onClick={close}>
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="btn btn-gold nav-quote" href="#contact" onClick={close}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
