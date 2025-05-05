document.getElementById('editForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const person = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(`/people/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
    .then(response => response.json())
    .then(() => {
        alert('Person updated');
        window.location.href = 'index.html';
    });
});
