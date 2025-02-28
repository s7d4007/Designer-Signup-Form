document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Your validation logic here
    if (username === '' || password === '') {
        alert('Username and password are required.');
        return;
    }

    // Show the modal with the login message
    const modal = document.getElementById('popupModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = 'Thanks for filling the form';
    modal.style.display = 'block';

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
        document.getElementById('signupForm').reset(); // Clear the form
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.getElementById('signupForm').reset(); // Clear the form
        }
    }
});

// Add event listener for the "Register" link
document.getElementById('registerLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the modal with the register message
    const modal = document.getElementById('popupModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = 'Still working on it';
    modal.style.display = 'block';

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});