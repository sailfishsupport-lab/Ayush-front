document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    // Security check: Agar form nahi mila, toh console mein error dikhaye
    if (!signupForm) {
        console.error("Error: signupForm element nahi mila!");
        return;
    }

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const contact = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMsg = document.getElementById('errorMsg');

        // Reset error message
        errorMsg.innerText = "";

        // 1. Password match validation
        if (password !== confirmPassword) {
            errorMsg.innerText = "Passwords do not match!";
            return;
        }

        // 2. Input length validation
        if (contact.length < 5) {
            errorMsg.innerText = "Enter a valid email or mobile number.";
            return;
        }

        // 3. API Request (sendDataToServer ab api/api.js se load ho raha hai)
        try {
            const result = await sendDataToServer('/signup', { contact, password });

            if (result && result.success) {
                alert("Account created successfully!");
                window.location.href = 'login.html';
            } else {
                errorMsg.innerText = result.message || "Signup failed. Try again.";
            }
        } catch (err) {
            errorMsg.innerText = "Server error, please try later.";
            console.error("Signup Error:", err);
        }
    });
});