const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `© ${year} Argentina Chamber of Commerce`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

/******* GRID & LIST *******/

let membersData = [];

async function loadMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    membersData = data.members;
    displayMembers(membersData);
}

function displayMembers(members) {
    const container = document.getElementById('container');
    container.className = 'grid-temple';
    container.innerHTML = '';

    members.forEach((member, i) => {
        const div = document.createElement('div');
        div.className = 'member-card';
        div.style.animationDelay = `${i * 0.06}s`;
        div.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <div class="name">${member.name}</div>
            <div class="address">${member.address}</div>
            <div class="phone">${member.phone}</div>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;
        container.appendChild(div);
    });
}

function displayList(members) {
    const container = document.getElementById('container');
    container.className = 'list-view';
    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>
    `;

    const tbody = document.getElementById('table-body');
    members.forEach(member => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${member.name}</td>
            <td>${member.address}</td>
            <td>${member.phone}</td>
            <td><a href="${member.website}" target="_blank">${member.website}</a></td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('grid').addEventListener('click', () => {
    document.getElementById('grid').classList.add('active');
    document.getElementById('list').classList.remove('active');
    displayMembers(membersData);
});

document.getElementById('list').addEventListener('click', () => {
    document.getElementById('list').classList.add('active');
    document.getElementById('grid').classList.remove('active');
    displayList(membersData);
});

loadMembers();