const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email-user").value;
    const message = document.getElementById("message-user").value;

    console.log("Email:", email);
    console.log("Mensagem:", message);

    Swal.fire({
        title: "Mensagem enviada!",
        text: "Muito obrigada por nos contatar. Retornaremos em breve! 💌",
        icon: "success",
        iconColor: "#9e2a2f",
        confirmButtonText: "Fechar",
        customClass: {
            confirmButton: 'swal2-confirm'
        }
    }).then(() => {
        location.reload();
    });    
});
