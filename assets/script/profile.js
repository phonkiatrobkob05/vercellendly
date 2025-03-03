// Get the logout button element
const logoutButton = document.getElementById('logoutButton');

// Add a click event listener to the logout button
logoutButton.addEventListener('click', () => {
    // Call the signOut() method
    auth.signOut()
        .then(() => {
            // Sign-out successful.
            console.log('User signed out successfully.');

            // Redirect to the login page or any other desired page
            window.location.href = 'login.html'; // Replace with your login page URL
        })
        .catch((error) => {
            // An error happened.
            console.error('Error signing out:', error);
            alert('Logout failed. Please try again.');
        });
});