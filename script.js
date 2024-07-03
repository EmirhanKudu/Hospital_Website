document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;

       
        messageDiv.style.display = "block";
        messageDiv.style.color = "green";
        messageDiv.innerHTML = `
            Teşekkürler, ${name}! Geri bildiriminiz alınmıştır.<br>
            <strong>E-posta:</strong> ${email}<br>
            <strong>Geri Bildirim:</strong> ${feedback}
        `;

       
        form.reset();
    });
});
