import validator from "./validator.js";
/*function getData() {
  let card = document.getElementById("inputNumber").value;
  let name = document.getElementById("inputName").value;
  alert(card + " " + name);
};*/

let card = prompt("Ingresa tu numero de tarjeta");
alert(validator.isValid(card));

/*console.log(validator);*/
