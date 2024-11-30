const passwordInput = document.getElementById('password');
const togglePasswordVisibility = document.querySelector('.toggle-password');

togglePasswordVisibility.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
