import validator from "./validator.js";
/*Modal*/
let close = document.querySelectorAll(".close")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
/*Acceso y envio de datos*/
const boton = document.getElementById("button");
const cardNumb = document.getElementById("inputNumero");
/*Input Numero de tarjeta <=> pierde el foco se acciona la siguiente función en la cual mandamos a llamar a la funciómn maskify*/
cardNumb.addEventListener("blur", function () {
  let cardNumb = document.getElementById("inputNumero").value;
  let maskC = document.getElementById("maskCard");
  let input = document.getElementById("inputNumero");
  let maskResult = validator.maskify(cardNumb);
  maskC.classList.add("mask");
  maskC.innerHTML = maskResult;
  if (cardNumb == "") {
    location.reload();
    document.querySelector(".shopping-screen").style.display = "none";
  }
  if (cardNumb[0] == 4) {
    input.classList.add("visa");
  } else if (cardNumb[0] == 5) {
    input.classList.add("mastercard");
  }
});
/*Boton con type = submit <=> cuando se hace click obtiene los datos de tarjeta y nombre. Mandamos a llamar a la funcion isValid*/
boton.addEventListener("click", function (e) {
  e.preventDefault();
  let card = document.getElementById("inputNumero").value;
  let name = document.getElementById("inputNombre").value;
  let userName = document.getElementById("user-name");

  if (card == "" || name == "") {
    alert("Ingrese sus datos");
  } else {
    let validar = validator.isValid(card);
    if (validar == true) {
      modalC.style.opacity = "1";
      modalC.style.visibility = "visible";
      modal.classList.toggle("modal-close");
      userName.classList.add("letter-style");
      userName.innerHTML = name + " " + "Gracias por su compra";
    } else {
      alert("Su número de Tarjeta es incorrecto");
      location.reload();
    }
  }
});
/*Cerrar el modal*/
close.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    location.reload(); /*Es para que recargue mi página automáticamente*/
  }, 1300);
});
/*Ocultar y aparecer contenedores*/
document.querySelector(".pay-screen").style.display = "none";
const botonCompraOne = document.getElementById("buy-one");
const botonCompraDos = document.getElementById("buy-two");
const botonCompraTres = document.getElementById("buy-three");
const home = document.getElementById("home");
/*Volver al Home o pantalla principal*/
home.addEventListener("click", function () {
  location.reload();
});
/*Acceso a la pantalla de pago*/
botonCompraOne.addEventListener("click", function () {
  document.querySelector(".pay-screen").style.display = "block";
  document.querySelector(".shopping-screen").style.display = "none";
  let productTitle = document.getElementById("product-title");
  productTitle.innerHTML = "Producto 1";
});
botonCompraDos.addEventListener("click", function () {
  document.querySelector(".pay-screen").style.display = "block";
  document.querySelector(".shopping-screen").style.display = "none";
  let image = document.getElementById("img");
  image.src = "imagenes/two.gif";
  let productTitle = document.getElementById("product-title");
  productTitle.innerHTML = "Producto 2";
});
botonCompraTres.addEventListener("click", function () {
  document.querySelector(".pay-screen").style.display = "block";
  document.querySelector(".shopping-screen").style.display = "none";
  /*Cambiar de imagen con JS*/
  let image = document.getElementById("img");
  image.src = "imagenes/three.gif";
  /*Cambiar de atributo de la etiqueta <img>*/
  image.setAttribute("width", "329");
  let productTitle = document.getElementById("product-title");
  productTitle.innerHTML = "Producto 3";
});
