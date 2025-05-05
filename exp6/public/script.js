window.onload = function() {
    fetch('/people')
    .then(response => response.json())
    .then(people => {
        const tbody = document.querySelector('#peopleTable tbody');
        people.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.phone}</td>
                <td>
                    <a href="edit.html?id=${person._id}" class="btn">Edit</a>
                    <button onclick="deletePerson('${person._id}')" class="btn">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    });
};

function deletePerson(id) {
    fetch(`/people/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert('Person deleted');
        window.location.reload();
    });
}
