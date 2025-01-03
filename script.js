document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const existingButton = document.getElementById('existing');

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      existingButton.style.display = 'block';
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      if (rememberCheckbox.checked) {

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert(`Logged in as ${username}`);

      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
      }
    });

    existingButton.addEventListener('click', () => {
      const username = localStorage.getItem('username');
      alert(`Logged in as ${username}`);
    });
  });