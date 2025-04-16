const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name-user").value.trim();
    const email = document.getElementById("email-user").value.trim();
    const message = document.getElementById("message-user").value.trim();

    if (!name || !email || !message) {
        Swal.fire({
            title: "Campos obrigatórios",
            text: "Por favor, preencha todos os campos antes de enviar.",
            icon: "warning",
            iconColor: "#9e2a2f",
            confirmButtonText: "Ok",
            customClass: {
                confirmButton: 'swal2-confirm'
            }
        });
        return;
    }

    console.log("Nome:", name);
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
