const cardsContainer = document.getElementById("cards");
const totalCreditsSpan = Document.getElementById("totalcredits");
const buttons = document.querySelectorAll(".buttons button");

let allCourses = [];

async function getCourses(){
    const response = await fetch("data/courses.json");
    allCourses = await response.json();
    displayCourses(allCourses);
}


function displayCourses(coursesList){
    cardsContainer.innerHTML = ``;
}