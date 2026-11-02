const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hide");
    preloader.style.transition = "opacity .6s ease, visibility .6s ease";
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    document.querySelectorAll(".hero .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 130);
    });
  }, 850);
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal:not(.hero .reveal)").forEach(el => observer.observe(el));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const projectDialog = document.getElementById("projectDialog");
const projectDialogTitle = document.getElementById("projectDialogTitle");
const projectDialogDescription = document.getElementById("projectDialogDescription");
projectDialog.addEventListener("click", event => {
  if (event.target === projectDialog) projectDialog.close();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && projectDialog.open) projectDialog.close();
});
projectDialog.querySelector(".project-dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.querySelector(".project-dialog-contact").addEventListener("click", () => projectDialog.close());
document.querySelectorAll(".project[data-project-title]").forEach(project => {
  project.addEventListener("click", event => {
    event.preventDefault();
    projectDialogTitle.textContent = project.dataset.projectTitle;
    projectDialogDescription.textContent = project.dataset.projectDescription;
    projectDialog.showModal();
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => activeObserver.observe(section));

const glow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// GSAP adds a little extra polish when its CDN is available; the site still works without it.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".orb-one", { rotation: 360, duration: 55, repeat: -1, ease: "none" });
  gsap.to(".orb-two", { y: -35, x: 22, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut" });
}
