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

document.getElementById('bend').addEventListener('click', function() {
    fetch('http://localhost:8081/doktorlar')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});
