// Function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const togglePasswordButton = document.getElementById('togglePassword');
  const eyeIcon = togglePasswordButton.querySelector('img');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = '../images/closeeye.svg'; // Change to closeeye icon
  } else {
      passwordInput.type = 'password';
      eyeIcon.src = '../images/eye.svg'; // Change back to eye icon
  }
}

const form = document.querySelector('form'); // Select the form element

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      await auth.signInWithEmailAndPassword(email, password);
      // Successful login
      console.log('User logged in successfully!');
      // Redirect to home page or dashboard
      window.location.href = 'home.html'; // Replace with your desired page
  } catch (error) {
      // Handle login errors
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
  }
});