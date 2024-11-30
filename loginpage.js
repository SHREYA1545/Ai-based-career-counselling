document.querySelectorAll('.login-option').forEach((button) => {
    button.addEventListener('click', function() {
        document.querySelector('.login-option.active').classList.remove('active');
        this.classList.add('active');
    });
});