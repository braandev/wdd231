document.getElementById("copyright").innerHTML = `&copy; ${new Date().getFullYear()} - Brandon Cazorla - Argentina`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


/** PART OF THE COURSES **/

const subjectsDiv = document.getElementById('subjects');
const totalCreditsSpan = document.getElementById('totalCredits');

const courseList = [
    { id: 1, subject: 'CSE', code: 111, credits: 3 },
    { id: 2, subject: 'CSE', code: 210, credits: 3 },
    { id: 3, subject: 'CSE', code: 212, credits: 3 },
    { id: 4, subject: 'WDD', code: 130, credits: 3 },
    { id: 5, subject: 'WDD', code: 131, credits: 3 },
    { id: 6, subject: 'WDD', code: 231, credits: 3 },
];

const selectedCourses = new Set();

function updateTotal(){
    let total = 0;
    selectedCourses.forEach(id => {
        const course = courseList.find(c => c.id === id);
        if(course) total += course.credits;
    });
    totalCreditsSpan.textContent = total;
}

function toggleCourse(id, cardEl){
    if(selectedCourses.has(id)){
        selectedCourses.delete(id);
        cardEl.classList.remove('selected');
    }else{
        selectedCourses.add(id);
        cardEl.classList.add('selected');
    }
    updateTotal();
}

function renderCourses(filter){
    subjectsDiv.innerHTML = '';
    subjectsDiv.style.display = 'flex';

    const filtered = filter === 'ALL' ? courseList : courseList.filter(c => c.subject === filter);

    filtered.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        if(selectedCourses.has(course.id)) card.classList.add('selected');
        card.innerHTML = `<p>${course.subject} ${course.code}</p>`;
        card.addEventListener('click', () => toggleCourse(course.id, card));
        subjectsDiv.appendChild(card);
    });
}