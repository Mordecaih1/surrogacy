const serviceData = [
  {
    id: "gestational",
    title: "Gestational Surrogacy",
    tagline: "A carefully coordinated IVF-based pathway with no genetic link to the surrogate.",
    description:
      "Our team helps intended parents navigate the full gestational surrogacy journey with clarity, ethical guidance, and close coordination across medical, legal, and emotional support touchpoints.",
    short:
      "A medically coordinated surrogacy pathway designed for clarity, privacy, and peace of mind.",
    audience: "Intended parents seeking IVF-based arrangements",
    duration: "Timeline varies by screening, matching, and clinic schedules",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    points: [
      "No genetic link between the surrogate and baby",
      "Structured around fertility clinic coordination and IVF planning",
      "Ideal for intended parents who need a guided, medically supervised process"
    ],
    steps: [
      "Discovery consultation and medical history review",
      "Surrogate screening, matching, and compatibility planning",
      "Legal documentation and clinical coordination",
      "Embryo transfer preparation, pregnancy support, and birth planning"
    ],
    icon: "spark"
  },
  {
    id: "traditional",
    title: "Traditional Surrogacy",
    tagline: "A more complex path that requires careful ethical, emotional, and legal navigation.",
    description:
      "Where appropriate and legally supportable, we guide clients through traditional surrogacy discussions with extra attention to expectations, documentation, counseling, and risk awareness.",
    short:
      "Guidance for a more sensitive surrogacy structure with heightened legal and emotional care.",
    audience: "Families evaluating all viable surrogacy options",
    duration: "Depends heavily on legal review and individualized planning",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Surrogate provides the egg in this arrangement",
      "Requires strong counseling and explicit expectation-setting",
      "Best approached with jurisdiction-aware legal support"
    ],
    steps: [
      "Initial suitability assessment and counseling intake",
      "Legal and jurisdiction review before pathway selection",
      "Matching, informed consent, and documentation planning",
      "Ongoing coordination and support throughout the arrangement"
    ],
    icon: "heart"
  },
  {
    id: "legal",
    title: "Legal & Documentation Support",
    tagline: "Transparent paperwork and qualified legal coordination for every stage.",
    description:
      "We help clients understand contracts, consent requirements, documentation flow, and jurisdiction-specific considerations so the journey feels safer and more organized.",
    short:
      "Clearer contracts, better documentation flow, and more confidence at every milestone.",
    audience: "Intended parents and surrogates who need clarity and protection",
    duration: "Runs alongside matching and clinical preparation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Contract preparation support and document readiness",
      "Guidance on compliance questions and record handling",
      "Designed to reduce confusion and protect expectations"
    ],
    steps: [
      "Clarify the applicable legal route and required documents",
      "Coordinate contracts, consent forms, and advisory support",
      "Review milestone paperwork before each major stage",
      "Support post-birth documentation needs where relevant"
    ],
    icon: "shield"
  },
  {
    id: "matching",
    title: "Surrogate Matching",
    tagline: "A thoughtful compatibility process rooted in safety, communication, and trust.",
    description:
      "Our matching process focuses on values alignment, readiness, screening support, and practical expectations so both intended parents and surrogates begin from a place of confidence.",
    short:
      "Thoughtful matching that balances practical fit with emotional comfort.",
    audience: "Clients who need structured support finding the right surrogate",
    duration: "Typically begins after consultation and readiness screening",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Compatibility-centered approach rather than rushed placement",
      "Balances emotional readiness, communication style, and logistics",
      "Encourages a respectful, well-supported relationship from the start"
    ],
    steps: [
      "Readiness interview and profile development",
      "Matching shortlist and compatibility conversations",
      "Expectation alignment and next-step planning",
      "Transition into legal and medical coordination"
    ],
    icon: "match"
  },
  {
    id: "medical",
    title: "Medical Coordination",
    tagline: "Structured coordination with clinics, screenings, and fertility specialists.",
    description:
      "We help keep your medical pathway organized by supporting clinic communication, treatment planning visibility, appointment preparation, and milestone coordination.",
    short:
      "Clinic coordination that keeps your surrogacy journey organized and less overwhelming.",
    audience: "Families who want smoother communication with fertility providers",
    duration: "Extends from evaluation through pregnancy follow-up",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Support around clinic communication and timeline visibility",
      "Helps reduce avoidable delays and uncertainty",
      "Keeps intended parents informed as milestones progress"
    ],
    steps: [
      "Coordinate medical expectations and fertility clinic milestones",
      "Support testing, screening, and appointment readiness",
      "Track transfer and pregnancy follow-up communication",
      "Help maintain clarity between clinical and family support teams"
    ],
    icon: "cross"
  },
  {
    id: "counseling",
    title: "Counseling & Emotional Support",
    tagline: "Compassion-led emotional guidance for a deeply personal journey.",
    description:
      "Surrogacy can be hopeful and emotionally demanding at the same time. We provide support that helps intended parents and surrogates feel heard, prepared, and steady through each stage.",
    short:
      "Warm, professional emotional support for one of life's most personal decisions.",
    audience: "Individuals and couples who want reassurance and thoughtful guidance",
    duration: "Available throughout the full journey",
    image:
      "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Supports confidence, emotional readiness, and communication",
      "Helps families navigate uncertainty with greater calm",
      "Useful before, during, and after key surrogacy milestones"
    ],
    steps: [
      "Emotional readiness conversation and goal setting",
      "Guided support during matching and documentation",
      "Check-ins through pregnancy milestones and transitions",
      "Post-birth emotional support and adjustment planning"
    ],
    icon: "lotus"
  }
];

const testimonials = [
  {
    quote:
      "Surrogacy Consulting made our dream of becoming parents feel possible again. We felt informed, respected, and emotionally supported from the very beginning.",
    name: "Intended Parents",
    detail: "Private consultation client"
  },
  {
    quote:
      "What stood out was the calm guidance. Every step felt clearer because someone was translating a complex process into something human and manageable.",
    name: "Prospective Parent",
    detail: "Medical coordination pathway"
  },
  {
    quote:
      "The team brought professionalism and warmth together. We never felt like a case file. We felt cared for, protected, and understood.",
    name: "Family Growth Client",
    detail: "Full support program"
  }
];

const faqs = [
  {
    question: "What is surrogacy?",
    answer:
      "Surrogacy is an arrangement in which a woman carries a pregnancy for intended parent or parents. The exact structure can differ, which is why professional legal, medical, and emotional guidance matters."
  },
  {
    question: "Is surrogacy legal?",
    answer:
      "Legality depends on jurisdiction, the type of arrangement, and the documentation involved. We help clients understand the current requirements relevant to their route and connect them with qualified legal guidance."
  },
  {
    question: "How long does the process take?",
    answer:
      "Timelines vary depending on consultations, screening, matching, legal readiness, and clinic scheduling. Some journeys move quickly, while others need more preparation for the safest outcome."
  },
  {
    question: "Do you support confidentiality?",
    answer:
      "Yes. Privacy and discretion are built into how we communicate, document information, and guide consultations. We aim to create a secure and respectful experience for everyone involved."
  }
];

const iconMap = {
  spark: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M18 3L18.8 5.2L21 6L18.8 6.8L18 9L17.2 6.8L15 6L17.2 5.2L18 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>`,
  heart: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20C12 20 4 15.2 4 9.5C4 6.46243 6.46243 4 9.5 4C11.161 4 12.6493 4.73508 13.6667 5.89571C14.684 4.73508 16.1723 4 17.8333 4C20.8709 4 23.3333 6.46243 23.3333 9.5C23.3333 15.2 15.3333 20 15.3333 20H12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" transform="translate(-1.6667 0)"/>
    </svg>`,
  shield: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L19 6V11.2C19 15.8 16 19.8 12 21C8 19.8 5 15.8 5 11.2V6L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M9.5 11.5L11.2 13.2L14.8 9.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  match: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="currentColor" stroke-width="1.8"/>
      <path d="M16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.3431 16 13 17.3431 13 19C13 20.6569 14.3431 22 16 22Z" stroke="currentColor" stroke-width="1.8"/>
      <path d="M10 6L14 10M10 18L14 14M8 8L6 10C4.34315 11.6569 4.34315 14.3431 6 16C7.65685 17.6569 10.3431 17.6569 12 16L14 14M16 12L18 10C19.6569 8.34315 19.6569 5.65685 18 4C16.3431 2.34315 13.6569 2.34315 12 4L10 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
  cross: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M8 3H16V8H21V16H16V21H8V16H3V8H8V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>`,
  lotus: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C16.4183 21 20 17.4183 20 13C16.5 13 13.5 15 12 18C10.5 15 7.5 13 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M12 17C14.7614 17 17 14.7614 17 12C14.5 12 12.8 13.1 12 14.6C11.2 13.1 9.5 12 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M12 14C14.2091 14 16 12.2091 16 10C14 10 12.7 10.8 12 12C11.3 10.8 10 10 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>`
};

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function initPreloader() {
  const preloader = document.querySelector("[data-preloader]");
  if (!preloader) return;

  const hide = () => {
    preloader.classList.add("is-hidden");
  };

  window.addEventListener("load", () => setTimeout(hide, 350), { once: true });
  setTimeout(hide, 1800);
}

function initProgressBar() {
  const progress = document.querySelector("[data-page-progress]");
  if (!progress) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const width = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = `${width}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  const actions = document.querySelector("[data-header-actions]");
  if (!toggle || !nav || !actions) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    actions.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    actions.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

function initActiveNav() {
  const normalizePath = (value) =>
    value.replace(/index\.html$/, "").replace(/\/+$/, "");

  const path = normalizePath(window.location.pathname);
  document.querySelectorAll("[data-site-nav] a").forEach((link) => {
    const href = normalizePath(new URL(link.href).pathname);
    const isHome = path.endsWith("/home") || path === "";
    const active = href === path || (isHome && href.endsWith("/home"));
    link.classList.toggle("is-active", active);
  });
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", String(index % 4));
    observer.observe(item);
  });
}

function createServiceCard(service, detailed = false) {
  const article = document.createElement("article");
  article.className = "service-card";
  article.setAttribute("data-reveal", "");
  article.innerHTML = `
    <div class="service-card__icon">${iconMap[service.icon] || ""}</div>
    <h3>${service.title}</h3>
    <p>${detailed ? service.description : service.short}</p>
    <div class="service-card__meta">
      <span>${service.audience}</span>
      <span>${detailed ? "Guided pathway" : "Private support"}</span>
    </div>
    <div class="service-card__actions">
      <button class="button button--ghost" type="button" data-open-service="${service.id}">Learn More</button>
      <a class="inline-link" href="../contact-us/">Book Consultation</a>
    </div>
  `;
  return article;
}

function renderServiceGrids() {
  document.querySelectorAll("[data-service-grid]").forEach((grid) => {
    const variant = grid.getAttribute("data-variant") === "detail";
    serviceData.forEach((service) => {
      grid.appendChild(createServiceCard(service, variant));
    });
  });
}

function renderTestimonials() {
  const track = document.querySelector("[data-testimonial-track]");
  const dots = document.querySelector("[data-slider-dots]");
  const prev = document.querySelector("[data-slider-prev]");
  const next = document.querySelector("[data-slider-next]");
  if (!track || !dots || !prev || !next) return;

  let index = 0;
  let timer;

  const draw = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.querySelectorAll("button").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
      dot.setAttribute("aria-current", String(dotIndex === index));
    });
  };

  const goTo = (newIndex) => {
    index = (newIndex + testimonials.length) % testimonials.length;
    draw();
  };

  testimonials.forEach((item, itemIndex) => {
    const slide = document.createElement("article");
    slide.className = "testimonial-card";
    slide.innerHTML = `
      <p class="testimonial-card__quote">"${item.quote}"</p>
      <div class="testimonial-card__author">
        <div>
          <div class="testimonial-card__name">${item.name}</div>
          <div>${item.detail}</div>
        </div>
        <div aria-hidden="true">0${itemIndex + 1}/${String(testimonials.length).padStart(2, "0")}</div>
      </div>
    `;
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to testimonial ${itemIndex + 1}`);
    dot.addEventListener("click", () => {
      goTo(itemIndex);
      restart();
    });
    dots.appendChild(dot);
  });

  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 6000);
  };

  prev.addEventListener("click", () => {
    goTo(index - 1);
    restart();
  });

  next.addEventListener("click", () => {
    goTo(index + 1);
    restart();
  });

  draw();
  restart();
}

function renderFaqs() {
  const shell = document.querySelector("[data-faq-shell]");
  if (!shell) return;

  faqs.forEach((faq, faqIndex) => {
    const card = document.createElement("article");
    card.className = "faq-card";
    card.setAttribute("data-reveal", "");
    card.innerHTML = `
      <button type="button" aria-expanded="false">
        <span>${faq.question}</span>
        <span aria-hidden="true">+</span>
      </button>
      <div class="faq-card__answer">
        <p>${faq.answer}</p>
      </div>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      const icon = button.querySelector("span:last-child");
      if (icon) icon.textContent = isOpen ? "-" : "+";
    });

    if (faqIndex === 0) {
      card.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      const icon = button.querySelector("span:last-child");
      if (icon) icon.textContent = "-";
    }

    shell.appendChild(card);
  });
}

function initServiceModal() {
  const modal = document.querySelector("[data-service-modal]");
  if (!modal) return;

  const dialog = modal.querySelector(".modal__dialog");
  const closeButton = modal.querySelector("[data-modal-close]");
  const title = modal.querySelector("[data-modal-title]");
  const text = modal.querySelector("[data-modal-text]");
  const points = modal.querySelector("[data-modal-points]");
  const steps = modal.querySelector("[data-modal-steps]");
  const header = modal.querySelector("[data-modal-header]");
  const audience = modal.querySelector("[data-modal-audience]");
  const duration = modal.querySelector("[data-modal-duration]");
  const closeFocus = modal.querySelector("[data-modal-close]");
  let lastTrigger = null;

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (lastTrigger) lastTrigger.focus();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-service]");
    if (!trigger) return;

    const serviceId = trigger.getAttribute("data-open-service");
    const service = serviceData.find((item) => item.id === serviceId);
    if (!service) return;

    lastTrigger = trigger;
    title.textContent = service.title;
    text.textContent = service.description;
    audience.textContent = service.audience;
    duration.textContent = service.duration;
    header.style.backgroundImage = `url('${service.image}')`;

    points.innerHTML = "";
    service.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      points.appendChild(li);
    });

    steps.innerHTML = "";
    service.steps.forEach((step, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${index + 1}</strong><span>${step}</span>`;
      steps.appendChild(li);
    });

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    if (closeFocus) closeFocus.focus();
  });

  if (closeButton) closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  if (dialog) {
    dialog.addEventListener("click", (event) => event.stopPropagation());
  }
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const recipient = String(form.getAttribute("data-contact-email") || "info@surrogacyconsultingltd.com").trim();

    if (!name || !email || !phone || !service || !message) {
      status.textContent = "Please complete the required fields so we can prepare a thoughtful response.";
      return;
    }

    status.textContent = "Preparing your email draft...";
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.setAttribute("disabled", "true");

    const subject = encodeURIComponent(`Consultation Request: ${service}`);
    const body = encodeURIComponent(
      [
        "Hello Surrogacy Consulting Services Limited,",
        "",
        `Full Name: ${name}`,
        `Email: ${email}`,
        `Phone Number: ${phone}`,
        `Service Interested In: ${service}`,
        "",
        "Message:",
        message
      ].join("\n")
    );

    await new Promise((resolve) => setTimeout(resolve, 350));

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    status.textContent = `Your email app should open with a draft addressed to ${recipient}.`;
    if (submitButton) submitButton.removeAttribute("disabled");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  initPreloader();
  initProgressBar();
  initMobileMenu();
  initActiveNav();
  renderServiceGrids();
  renderTestimonials();
  renderFaqs();
  initServiceModal();
  initContactForm();
  initReveal();
});
