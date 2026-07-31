// username.js
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const errorMsg = document.getElementById('errorMsg');

    if (usernameInput) {
        usernameInput.addEventListener('input', () => {
            const value = usernameInput.value.trim();

            // 1. Space check
            if (value.includes(" ")) {
                errorMsg.innerText = "Space is not allowed!";
                return;
            }

            // 2. Logic: Email, Phone ya Username
            if (value.includes("@")) {
                if (!value.includes(".")) {
                    errorMsg.innerText = "Invalid email format.";
                } else {
                    errorMsg.innerText = "";
                }
            } else if (/^\d+$/.test(value)) {
                if (value.length !== 10) {
                    errorMsg.innerText = "Enter a 10 digit number.";
                } else {
                    errorMsg.innerText = "";
                }
            } else {
                if (value.length > 0 && value.length < 3) {
                    errorMsg.innerText = "Username too short.";
                } else {
                    errorMsg.innerText = "";
                }
            }
        });
    } else {
        console.error("Error: username field nahi mila!");
    }
});
