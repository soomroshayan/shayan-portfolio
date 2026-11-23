// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
htmlEl.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", nextTheme);
  localStorage.setItem("portfolioTheme", nextTheme);
  themeToggle.textContent = nextTheme === "dark" ? "🌙" : "☀️";
});

// Mobile Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Project Modal Details
const projectData = {
  food: {
    title: "Fast Food Website eCommerce",
    tech: "Stack: PHP, MySQL",
    liveUrl: "https://shayanstores.ct.ws/index.php",
    points: [
      "Built a PHP eCommerce application with modular structure",
      "Implemented product management, user authentication and MySQL database integration"
    ]
  },
  store: {
    title: "Stylish Online Store eCommerce",
    tech: "Stack: OOP PHP, MySQL",
    liveUrl: "https://shayanstoreee.ct.ws/",
    points: [
      "Created an object-oriented PHP application with product management",
      "Followed a clean, organized architecture with a MySQL backend"
    ]
  }
};

const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalPoints = document.getElementById("modalPoints");
const modalLiveLink = document.getElementById("modalLiveLink");

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    const project = projectData[key];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalTech.textContent = project.tech;
    modalLiveLink.href = project.liveUrl;

    modalPoints.innerHTML = "";
    project.points.forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      modalPoints.appendChild(li);
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

function hideModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideModal();
});