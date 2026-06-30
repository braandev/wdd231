// Here I put student info
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} - Brandon Cazorla - Buenos Aires`

// Here I put the last modification into to my web
document.getElementById("lastmodified").innerHTML = `Last modification: ${document.lastModified}`;


// Here I will make the section of the credits - courses - buttons

// Referencias a elementos del HTML
const cardsContainer = document.getElementById('cards');
const totalCreditsSpan = document.getElementById('totalcredits');
const buttons = document.querySelectorAll('.buttons button');

// Acá vamos a guardar los 6 cursos una vez que los traigamos del JSON
let allCourses = [];

// Trae el JSON y arranca todo
async function getCourses() {
    const response = await fetch('data/certificates.json');
    allCourses = await response.json();
    displayCourses(allCourses);
}

// Dibuja una lista de cursos como tarjetas en el HTML
function displayCourses(courseList) {
    cardsContainer.innerHTML = '';

    courseList.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(course.completed ? 'completed' : 'not-completed');

        card.innerHTML = `
            <h3>${course.completed ? '&#10003;' : ''} ${course.course}</h3>
        `;

        // Click en la tarjeta: prende/apaga "completed" y redibuja
        card.addEventListener('click', () => {
            course.completed = !course.completed;
            displayCourses(courseList);
        });

        cardsContainer.appendChild(card);
    });

    updateTotalCredits(courseList);
}

// Suma los créditos solo de los cursos completados
function updateTotalCredits(courseList) {
    const total = courseList
        .filter(course => course.completed)
        .reduce((sum, course) => sum + course.credits, 0);

    totalCreditsSpan.textContent = `Total Credits Completed: ${total}`;
}

// Filtra por categoría según el botón apretado
function filterCourses(category) {
    if (category === 'all') {
        displayCourses(allCourses);
    } else {
        const filtered = allCourses.filter(course => course.category === category);
        displayCourses(filtered);
    }
}

// Click en los botones ALL / WDD / CSE
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.trim().toLowerCase();
        filterCourses(category);
    });
});

// Arranca todo
getCourses();