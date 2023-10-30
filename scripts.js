document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        // You can add further validation and submission logic here
        // For this example, let's just log the data
        console.log('Nome de Usuário: ' + username);
        console.log('E-mail: ' + email);
    });
});
