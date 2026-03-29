(function () {
  const navbar = document.getElementById("navbar");
  const modal = document.getElementById("mainModal");
  const modalBody = document.getElementById("modalBody");
  const form = document.querySelector("[data-contact-form]");
  const formStatus = document.getElementById("formStatus");
  const footerYear = document.getElementById("footerYear");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  const pagePath = window.location.pathname.replace(/index\.html$/, "").replace(/\/+$/, "");
  document.querySelectorAll(".nav-links a[data-nav-link]").forEach((link) => {
    const href = new URL(link.href).pathname.replace(/index\.html$/, "").replace(/\/+$/, "");
    if (href === pagePath) {
      link.classList.add("is-active");
    }
  });

  const modalData = {
    faq: `
      <h2>Frequently Asked Questions</h2>
      <br>
      <p><b>Is surrogacy legal?</b><br>Surrogacy laws vary by region. We provide legal coordination to help you understand the right path for your case.</p>
      <br>
      <p><b>How long does the process take?</b><br>Timelines vary depending on consultation, matching, legal review, and medical planning.</p>
      <br>
      <p><b>What are the costs?</b><br>Costs depend on medical, legal, and support requirements, so consultations are tailored to your needs.</p>
    `,
    terms: `
      <h2>Terms of Service</h2>
      <br>
      <p>SCS Limited acts as a consulting body. We provide guidance, matching support, and coordination, but we are not a medical facility or law firm.</p>
      <br>
      <p>Client confidentiality is treated seriously across all consultation touchpoints.</p>
    `,
    privacy: `
      <h2>Privacy Policy</h2>
      <br>
      <p>Your data is handled with care. We collect information only to support consultation, coordination, and communication related to surrogacy services.</p>
      <br>
      <p>We do not sell your data to third parties.</p>
    `
  };

  window.showPopup = function (type) {
    if (!modal || !modalBody || !modalData[type]) return;
    modalBody.innerHTML = modalData[type];
    modal.style.display = "flex";
  };

  window.closePopup = function () {
    if (!modal) return;
    modal.style.display = "none";
  };

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        window.closePopup();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      window.closePopup();
    }
  });

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const service = String(data.get("service") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !phone || !service || !message) {
        formStatus.textContent = "Please complete all fields.";
        return;
      }

      const subject = encodeURIComponent("Consultation Request: " + service);
      const body = encodeURIComponent(
        [
          "Hello Surrogacy Consulting Services Limited,",
          "",
          "Full Name: " + name,
          "Email: " + email,
          "Phone Number: " + phone,
          "Service Interested In: " + service,
          "",
          "Message:",
          message
        ].join("\n")
      );

      window.location.href = "mailto:info@surrogacyconsultingltd.com?subject=" + subject + "&body=" + body;
      formStatus.textContent = "Your email app should open with a drafted message.";
    });
  }
})();
