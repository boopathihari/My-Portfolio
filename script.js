
emailjs.init("WWI8lV28okuIDQZw-");

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const messageContainer = document.querySelector('.message');
    const submitButton = document.querySelector('.submit');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        
        // Disable the submit button to prevent multiple submissions
        submitButton.disabled = true;

        // Display a loading message or spinner
        showMessage('Sending...', 'info');

        // Validate the form inputs
        if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
            showMessage('*Please fill in all fields.', 'error');
            submitButton.disabled = false;
            return;
        }

        // Send the email using Email.js
        const templateParams = {
            from_name: name,
            email_id: 'boopathihari2003@gmail.com',
            message: comment
            // reply_to: email
        };

        emailjs.send('service_oz941mi', 'template_crno3jv', templateParams)
            .then(function (response) {
                showMessage('*Email sent successfully!', 'success');
                contactForm.reset();
            }, function (error) {
                showMessage('*Email sending failed. Please try again later.', 'error');
            })
            .finally(function () {
                // Re-enable the submit button and hide the loading message
                submitButton.disabled = false;
            });

    });

    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';
        messageContainer.className = 'message ' + type;
    }
});


function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
