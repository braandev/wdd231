// ==========================
// DATES
// ==========================

const year = new Date().getFullYear();

document.getElementById("currentyear").innerHTML =
`© ${year} 🧑‍💻 Brandon Cazorla - Bs.As, Argentina 🧑‍💻`;

document.getElementById("lastModified").innerHTML =
`Last Modified: ${document.lastModified}`;


// ==========================
// HAMBURGER MENU
// ==========================

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




const courses = [

  { subject: "WDD", number: 130, credits: 3, completed: true },
  { subject: "WDD", number: 131, credits: 3, completed: true },
  { subject: "WDD", number: 231, credits: 3, completed: false },

  { subject: "CSE", number: 110, credits: 3, completed: false },
  { subject: "CSE", number: 111, credits: 3, completed: false },
  { subject: "CSE", number: 210, credits: 3, completed: false }

];




const courseContainer = document.getElementById("course-list");
const totalCredits = document.getElementById("totalCredits");

const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");




function displayCourses(courseList) {

  courseContainer.innerHTML = "";

  courseList.forEach(course => {

    const card = document.createElement("div");

    card.textContent = `${course.subject} ${course.number}`;

    if (course.completed) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      card.classList.toggle("selected");
      updateCredits();
    });

    courseContainer.appendChild(card);

  });

  updateCredits();
}




function updateCredits() {

  const selected = document.querySelectorAll("#course-list .selected");

  const total = Array.from(selected).reduce((sum, course) => sum + 3, 0);

  totalCredits.textContent = total;
}




allBtn.addEventListener("click", () => {

  displayCourses(courses);

});

wddBtn.addEventListener("click", () => {

  const filtered = courses.filter(course => course.subject === "WDD");

  displayCourses(filtered);

});

cseBtn.addEventListener("click", () => {

  const filtered = courses.filter(course => course.subject === "CSE");

  displayCourses(filtered);

});




displayCourses(courses);