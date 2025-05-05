document.getElementById('addForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const person = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    fetch('/people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
    .then(response => response.json())
    .then(() => {
        alert('Person added');
        window.location.href = 'index.html';
    });
});
