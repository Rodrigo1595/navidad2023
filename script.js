// https://rodrigo1595.github.io/navidad2023/

function onAfterRendering(){
    
}

function changeMessage() {
  const messages = [
    "Especial de Navidad de Star Wars (1978) 🤶🎅🎁: Existe un especial de televisión de Star Wars llamado 'The Star Wars Holiday Special' que se emitió en 1978. Aunque ha sido criticado, se ha convertido en un objeto de culto para los fanáticos. El especial incluye segmentos que celebran la vida festiva en el universo de Star Wars, incluyendo la celebración de la vida en Kashyyyk (planeta natal de los Wookiees, como Chewbacca).",
    "Star Wars y el espíritu navideño 🎄: Aunque Star Wars no tiene una película específica de Navidad, varias películas de la saga incluyen momentos de camaradería y espíritu festivo. En 'El Retorno del Jedi', la película concluye con la celebración en la Luna 🌑🌙 de Endor, que tiene un tono festivo 🎄",
    "En el cómic 'Darth Vader Annual #1' 🎄, hay una historia en la que Darth Vader se disfraza de Santa Claus para infiltrarse en una base rebelde durante la temporada navideña. Puedes encontrar ilustraciones divertidas de Darth Vader con un sombrero de Santa 🎅 y repartiendo regalos 🎁",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerHTML = messages[randomIndex];
}
