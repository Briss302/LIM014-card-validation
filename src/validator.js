/*Validator es mi objeto*/
const validator = {
  isValid: function (creditCardNumber) {
    let newString = creditCardNumber
      .split("")
      .reverse()
      .join(
        ""
      ); /*Encadenar los tres metodos juntos para invertir una cadena de texto*/
    let validator;
    let addDigit = 0;
    let addAll = 0;

    for (let i = 1; i < newString.length; i += 2) {
      let evenPosition = parseInt(newString.charAt(i) * 2);

      if (evenPosition >= 10) {
        let stringNumber = evenPosition.toString();
        addDigit =
          parseInt(stringNumber.charAt(0)) + parseInt(stringNumber.charAt(1));
        addAll = addAll + addDigit;
      } else {
        addAll = addAll + evenPosition;
      }
    }

    for (let i = 0; i < newString.length; i += 2) {
      let oddposition = parseInt(newString.charAt(i));
      addAll = addAll + oddposition;
    }

    if (addAll % 10 == 0) {
      validator = true;
    } else {
      validator = false;
    }
    return validator;
  },
  maskify: function (creditCardNumber) {
    /*el valor creditCardNumber primero se transforma en una matriz de cadena separados, despúes se obtiene todos los numero menos los ultimo cuatro,
     y en map estos numeros se tranforman en michi obteniendo un nuevo array, por último lo regresamos a que sea un string*/
    let masked = creditCardNumber
      .split("")
      .slice(0, -4)
      .map(() => "#")
      .join("");
    /*Aqui se va concatenar el string convertido en # y el numero ingreado pero solo con sus ultimos cuatro digitos*/
    return masked + creditCardNumber.slice(-4);
  },
};
export default validator;
