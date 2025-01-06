function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    const validUsername = "user";
    const validPassword = "password";

   

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
      window.location.href="C:\Users\vaishushelke\stu_info.html"
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password';
    }
}
