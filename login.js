document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorDisplay = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Ab ye api/api.js wala function use karega
        const result = await sendDataToServer('/login', { username, password });

        if (result.success) {
            window.location.href = '/dashboard.html'; 
        } else {
            errorDisplay.innerText = result.message || "Login failed!";
        }
    });
});