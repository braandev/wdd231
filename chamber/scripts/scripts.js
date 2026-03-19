const Year = new Date().getFullYear();

document.getElementById("year").innerHTML = `© ${Year} Argentina Chamber of Commerce`;

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`

//********/
const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers(){

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);

}

function displayMembers(members){

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        container.appendChild(card);

    });

}

getMembers();


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});