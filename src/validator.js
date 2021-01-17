/*Validator es mi objeto*/
const validator = {
  isValid: function (creditCardNumber) {
    let newString = creditCardNumber
      .split("")
      .reverse()
      .join(""); /*Encadenar los tres metodos juntos*/
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
  maskify: function (creditCardNumber) {},
};
export default validator;
