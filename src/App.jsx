import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Reveal, CountUp, ScrollEffects } from "./components/Motion.jsx";
import logo from "./assets/logo.svg";
import { services, projects, testimonials } from "./data/siteData.js";
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "TRANSFORMING SPACES",
    title: "Beautiful Interiors",
    second: "for a Better Life",
    desc: "We design spaces that inspire, comfort and reflect your unique style. From modern minimalism to timeless elegance, we bring your vision to life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "DESIGNED AROUND YOU",
    title: "A Home That Feels",
    second: "Uniquely Yours",
    desc: "Thoughtful materials, balanced colours and beautiful details come together to make your space feel personal.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "FORM MEETS FUNCTION",
    title: "Every Detail",
    second: "Has a Purpose",
    desc: "We combine practical layouts with timeless style to create spaces that look beautiful and work effortlessly.",
  },
];
function Title({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="muted-copy">{description}</p>}
    </Reveal>
  );
}
function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      6500,
    );
    return () => clearInterval(timer);
  }, []);
  const slide = slides[active];
  return (
    <header id="home" className="hero">
      {slides.map((s, i) => (
        <div
          key={s.eyebrow}
          className={`hero-bg ${active === i ? "active" : ""}`}
          style={{ backgroundImage: `url("${s.image}")` }}
          aria-hidden="true"
        />
      ))}
      <div className="hero-shade" />
      <div className="container hero-content" key={active}>
        <p className="eyebrow light-eyebrow">{slide.eyebrow}</p>
        <h1>
          <span className="line">
            <span>{slide.title}</span>
          </span>
          <span className="line line-2">
            <span>{slide.second}</span>
          </span>
        </h1>
        <p className="hero-text">{slide.desc}</p>
        <div className="hero-actions">
          <a className="btn btn-burgundy" href="#gallery">
            Explore Our Work <i className="bi bi-arrow-right ms-2" />
          </a>
          <a className="btn btn-outline-light" href="#contact">
            Get a Free Quote
          </a>
        </div>
      </div>
      <button
        className="hero-arrow hero-prev"
        aria-label="Previous slide"
        onClick={() => setActive((active + slides.length - 1) % slides.length)}
      >
        <i className="bi bi-chevron-left" />
      </button>
      <button
        className="hero-arrow hero-next"
        aria-label="Next slide"
        onClick={() => setActive((active + 1) % slides.length)}
      >
        <i className="bi bi-chevron-right" />
      </button>
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.eyebrow}
            className={`hero-dot ${active === i ? "active" : ""}`}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </header>
  );
}
function Marquee() {
  const words = services.map((s) => s.title);
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>
            {w}
            <i className="bi bi-asterisk" />
          </span>
        ))}
      </div>
    </div>
  );
}
function Features() {
  const items = [
    ["bi-house-heart", "Customised Designs", "Made around your lifestyle"],
    ["bi-gem", "Premium Materials", "Beautiful, lasting finishes"],
    ["bi-clock-history", "On-Time Delivery", "Clear project timelines"],
    ["bi-people", "Expert Team", "Support from start to finish"],
  ];
  return (
    <section className="feature-strip" id="why-us">
      <div className="container">
        <div className="row g-4 text-center">
          {items.map((x, i) => (
            <Reveal
              className="col-6 col-lg-3 feature"
              delay={i * 90}
              key={x[1]}
            >
              <span className="feature-icon">
                <i className={`bi ${x[0]}`} />
              </span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="section-space about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <Reveal variant="wipe" className="col-lg-5">
            <div className="about-image-wrap">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                alt="Warm contemporary interior"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="left" delay={150} className="col-lg-5">
            <p className="eyebrow">ABOUT US</p>
            <h2>
              Creating Spaces
              <br />
              That <span>Feel Like Home</span>
            </h2>
            <p className="muted-copy">
              At DreamSpace Interior Design, we believe every space has a story.
              Our mission is to create beautiful, functional and personalised
              interiors that enhance your everyday life.
            </p>
            <a href="#services" className="btn btn-burgundy mt-2">
              Discover Our Services <i className="bi bi-arrow-right ms-2" />
            </a>
          </Reveal>
          <Reveal variant="right" delay={300} className="col-lg-2 stats-column">
            {[
              ["10+", "Years of Experience"],
              ["500+", "Happy Clients"],
              ["200+", "Projects Completed"],
            ].map((s) => (
              <div className="stat" key={s[1]}>
                <strong>
                  <CountUp value={s[0]} />
                </strong>
                <span>{s[1]}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section className="section-space services-section" id="services">
      <div className="container">
        <Title
          eyebrow="OUR SERVICES"
          title="Thoughtful Design for Every Space"
          description="From a single room to a complete renovation, we help you make every corner count."
        />
        <div className="row g-4">
          {services.map((s, i) => (
            <Reveal className="col-md-6 col-lg-3" delay={i * 110} key={s.title}>
              <article className="service-card">
                <div className="service-img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <span className="service-icon">
                    <i className={`bi ${s.icon}`} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <a href="#contact">
                    Explore service <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Living Room", "Bedroom", "Kitchen"];
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section className="portfolio-section section-space" id="gallery">
      <div className="container">
        <Reveal className="portfolio-heading">
          <div>
            <p className="eyebrow light-eyebrow">OUR PORTFOLIO</p>
            <h2>Recent Projects</h2>
            <p>Get inspired by spaces designed with purpose and personality.</p>
          </div>
          <a href="#contact" className="btn btn-gold">
            Discuss Your Project <i className="bi bi-arrow-right ms-2" />
          </a>
        </Reveal>
        <div className="gallery-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="row g-3 project-grid">
          {visible.map((p, i) => (
            <Reveal
              variant="zoom"
              delay={(i % 3) * 100}
              className="col-6 col-lg-4"
              key={filter + p.title}
            >
              <a className="project-tile" href="#contact">
                <img src={p.image} alt={p.title} loading="lazy" />
                <i className="bi bi-arrow-up-right tile-arrow" />
                <span>
                  <small>{p.category}</small>
                  {p.title}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Process() {
  const steps = [
    ["01", "Discover", "We learn about your needs, style, space and budget."],
    [
      "02",
      "Design",
      "We develop a concept, layout, colour palette and material plan.",
    ],
    ["03", "Create", "We coordinate the work and bring your design to life."],
    ["04", "Enjoy", "Enjoy a thoughtful, functional space made around you."],
  ];
  return (
    <section className="section-space process-section" id="process">
      <div className="container">
        <Title
          eyebrow="HOW WE WORK"
          title="From Vision to Reality"
          description="A clear, collaborative process from the first conversation to the final details."
        />
        <div className="row g-4">
          {steps.map((s, i) => (
            <Reveal className="col-6 col-lg-3" delay={i * 110} key={s[0]}>
              <article className="process-card">
                <span>{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="section-space testimonial-section" id="testimonials">
      <div className="container">
        <Title eyebrow="KIND WORDS" title="What Our Clients Say" />
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <Reveal className="col-md-4" delay={i * 130} key={t.name}>
              <article className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>“{t.quote}”</p>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [status, setStatus] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    const data = new FormData(e.currentTarget);
    setStatus(
      `Thanks, ${data.get("name")}! The form is validated. Connect a backend or email service to receive enquiries.`,
    );
    e.currentTarget.reset();
  }
  return (
    <section className="contact-section section-space" id="contact">
      <div className="container">
        <div className="row g-5 align-items-center">
          <Reveal variant="left" className="col-lg-4 contact-copy">
            <p className="eyebrow light-eyebrow">LET'S CREATE</p>
            <h2>
              Let's Design Your
              <br />
              Dream Space
            </h2>
            <p>
              Have a project in mind? We'd love to hear from you. Let's create
              something beautiful together.
            </p>
            <p>
              <i className="bi bi-telephone" /> +91 98765 43210
            </p>
            <p>
              <i className="bi bi-envelope" /> info@dreamspaceinteriors.com
            </p>
            <p>
              <i className="bi bi-geo-alt" /> Your City, Tamil Nadu, India
            </p>
          </Reveal>
          <Reveal variant="right" delay={150} className="col-lg-8">
            <form className="contact-form" onSubmit={submit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="service" className="form-label">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>Modular Kitchen</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Tell us about your project"
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-burgundy" type="submit">
                    Send Message <i className="bi bi-arrow-right ms-2" />
                  </button>
                  <p className="form-feedback" role="status" aria-live="polite">
                    {status}
                  </p>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <footer className="site-footer">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <a className="brand-lockup" href="#home">
            <img src={logo} alt="" className="brand-logo" />
            <span className="brand-copy">
              <strong>DreamSpace</strong>
              <small>INTERIOR DESIGN</small>
            </span>
          </a>
          <p className="mb-0">
            © {new Date().getFullYear()} DreamSpace Interior Design. All rights
            reserved.
          </p>
          <div className="social-links">
            <a href="#contact" aria-label="Instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#contact" aria-label="Facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#contact" aria-label="Pinterest">
              <i className="bi bi-pinterest" />
            </a>
          </div>
        </div>
      </footer>
      <button
        className={`back-to-top ${visible ? "visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up" />
      </button>
    </>
  );
}
export default function App() {
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
