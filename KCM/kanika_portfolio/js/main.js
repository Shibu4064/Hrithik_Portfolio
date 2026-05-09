const EMAIL = "chakrabortykanika11@gmail.com";

const html = document.documentElement;
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  html.dataset.theme = storedTheme;
}

document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
  showToast(next === "dark" ? "Dark mode on" : "Light mode on");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const number = entry.target;
    const target = Number(number.dataset.counter || 0);
    const duration = 950;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      number.textContent = Math.floor(progress * target).toString();
      if (progress < 1) requestAnimationFrame(update);
      else number.textContent = target.toString();
    };
    requestAnimationFrame(update);
    counterObserver.unobserve(number);
  });
}, { threshold: 0.6 });

document.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.tab;
    tabs.forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", String(t === tab));
    });
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
  });
});

const pitches = {
  phd: "I am a MARIHE student and English/ELT educator interested in higher education development, internationalisation, student success, and academic literacy. My teaching and research experience across Bangladesh, India, and Europe motivates me to pursue doctoral research that connects institutional policy with meaningful learning experiences.",
  job: "I am an English/ELT lecturer and higher education practitioner with experience in university teaching, academic support, language lab coordination, assessment support, international student engagement, and scholarship advising. I can contribute to teaching, student success, academic writing, and international education projects.",
  mentor: "I guide students through IELTS preparation, SOP and CV development, and competitive scholarship applications including ICCR, BIMSTEC, Erasmus Mundus, and European scholarship pathways. My mentoring style is practical, supportive, and focused on building student confidence."
};

const pitchText = document.getElementById("pitchText");
document.querySelectorAll(".pitch-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pitch-btn").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    pitchText.textContent = pitches[btn.dataset.pitch];
  });
});

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    showToast("Copied to clipboard");
  }
}

document.getElementById("copyEmail")?.addEventListener("click", () => copyText(EMAIL));
document.getElementById("copyPitch")?.addEventListener("click", () => copyText(pitchText.textContent.trim()));

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

const header = document.querySelector(".site-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (!header) return;
  header.style.boxShadow = current > 8 ? "0 10px 30px rgba(18, 49, 66, 0.08)" : "none";
  lastScroll = current;
}, { passive: true });
