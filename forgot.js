document.addEventListener('DOMContentLoaded', () => {
    const forgotForm = document.getElementById('forgotForm');
    const errorMsg = document.getElementById('errorMsg');

    if (!forgotForm) return;

    forgotForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const contact = document.getElementById('contact').value;
        errorMsg.innerText = "Processing...";

        // Backend ko request bhej rahe hain
        try {
            const result = await sendDataToServer('/forgot-password', { contact });

            if (result && result.success) {
                errorMsg.style.color = "#00ff88"; // Success color
                errorMsg.innerText = "Reset code sent to your contact!";
                // Kuch seconds baad login page par redirect kar sakte ho
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 3000);
            } else {
                errorMsg.style.color = "#ff4d4d"; // Error color
                errorMsg.innerText = result.message || "Failed to send code.";
            }
        } catch (err) {
            errorMsg.innerText = "Server unreachable. Try again later.";
            console.error("Forgot Password Error:", err);
        }
    });
});