function validateForm() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (fullname.trim() === '') {
        showModal('Please enter your full name');
        return false;
    }

    if (email.trim() === '') {
        showModal('Please enter your email');
        return false;
    }

    if (password.trim() === '') {
        showModal('Please enter your password');
        return false;
    }

    if (confirmPassword.trim() === '') {
        showModal('Please confirm your password');
        return false;
    }

    if (password !== confirmPassword) {
        showModal('Passwords do not match');
        return false;
    }

    // Registration successful (for demo purposes, we show modal and prevent actual form submission)
    showModal('Registration successful!', function() {
        document.getElementById('signupForm').reset();
    });
    return false;  // Prevent form submission/reload; remove if you wish to submit data
}

function showModal(message, callback) {
    const modal = document.getElementById('popupModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = 'block';

    // Close modal when clicking on the close button
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
        if (callback) callback();
    };

    // Close modal when clicking outside of the modal-content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            if (callback) callback();
        }
    };
}