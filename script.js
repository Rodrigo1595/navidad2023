// https://rodrigo1595.github.io/navidad2023/

function changeMessage() {
  const messages = [
    "Que la magia de la temporada ilumine tu vida.",
    "¡Felices fiestas y próspero año nuevo!",
    "Que el espíritu navideño te llene de paz y esperanza.",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerHTML = messages[randomIndex];
}

function showToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const messages = [
    "Que la magia de la temporada ilumine tu vida.",
    "¡Felices fiestas y próspero año nuevo!",
    "Que el espíritu navideño te llene de paz y esperanza.",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  toast.textContent = messages[randomIndex];

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000); // Ocultar el toast después de 3 segundos
}

function showToast() {
  const toastContainer = document.getElementById("toast-container");
  

  // Crear elemento de toast
  const toast = document.createElement("div");
  toast.className = "toast";
  const messages = [
    "Especial de Navidad de Star Wars (1978) 🤶🎅🎁: Existe un especial de televisión de Star Wars llamado 'The Star Wars Holiday Special' que se emitió en 1978. Aunque ha sido criticado, se ha convertido en un objeto de culto para los fanáticos. El especial incluye segmentos que celebran la vida festiva en el universo de Star Wars, incluyendo la celebración de la vida en Kashyyyk (planeta natal de los Wookiees, como Chewbacca).",
    "Star Wars y el espíritu navideño 🎄: Aunque Star Wars no tiene una película específica de Navidad, varias películas de la saga incluyen momentos de camaradería y espíritu festivo. En 'El Retorno del Jedi', la película concluye con la celebración en la Luna 🌑🌙 de Endor, que tiene un tono festivo 🎄",
    "En el cómic 'Darth Vader Annual #1' 🎄, hay una historia en la que Darth Vader se disfraza de Santa Claus para infiltrarse en una base rebelde durante la temporada navideña. Puedes encontrar ilustraciones divertidas de Darth Vader con un sombrero de Santa 🎅 y repartiendo regalos 🎁",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  toast.textContent = messages[randomIndex];

  // Agregar toast al contenedor
  toastContainer.appendChild(toast);

  // Animación para mostrar el toast
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 10);

  // Ocultar el toast después de unos segundos
  setTimeout(() => {
    toast.style.opacity = "0";
    // Eliminar el toast del DOM después de la animación
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 600);
  }, 6000);
}