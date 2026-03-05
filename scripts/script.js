//GET DATES
const year = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = `© ${year} 🧑‍💻 Brandon Cazorla - Bs.As, Argentina 🧑‍💻`;
document.getElementById("lastModified").innerHTML =
`Last Modified: ${document.lastModified}`;

//HAMBURGER MENU

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");

openMenu.addEventListener("click", () => {
  mobileNav.classList.add("open");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});





const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");

const sections = document.querySelectorAll(".ticks .cours");
const totalCredits = document.getElementById("totalCredits");

let total = 0;

function showSection(className) {
  sections.forEach(section => section.style.display = "none");
  document.querySelector("." + className).style.display = "grid";
}

allBtn.addEventListener("click", () => showSection("all"));
cseBtn.addEventListener("click", () => showSection("cse"));
wddBtn.addEventListener("click", () => showSection("wdd"));

showSection("all");

/* --- seleccionar materias --- */
const courses = document.querySelectorAll(".ticks .cours div");

courses.forEach(course => {
  course.addEventListener("click", () => {
    if (course.classList.contains("selected")) {
      course.classList.remove("selected");
      total -= 3;
    } else {
      course.classList.add("selected");
      total += 3;
    }

    totalCredits.textContent = total;
  });
});
