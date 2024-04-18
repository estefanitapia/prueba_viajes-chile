// Tooltip en redes sociales

$(document).ready(function () {});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Enviar mensaje en contacto
  $(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  
  $("#enviaCorreo").click(function () {
    alert("El correo fue enviado exitosamente...");
  });
});