/// 1. Cambiar el color del carrito y el color del botón addToCart cuando un color es seleccionado
/// - Seleccionando elementos

// primero se explican los querySelector
const redColor = document.querySelector(".red");
// después van los getElementByClassName
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
// después los getElementById
const cartButton = document.getElementById("button");
// después los getElementsByTagName
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

// Modificando elementos
// - Agregando detectores de eventos
// - Color rojo
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
});

// - Color Gris
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
});

// - Color Negro
blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
});

// Implementando el evento clic en el botón
// - Botón del Carrito
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Botón de retroalimentación
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);