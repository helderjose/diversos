/*
Formata moeda no padrão Brasileiro.
Dá para formatar enquanto digita em um input
*/
function currencyFormatter(numberToFormat) {
  let formattedNumber = numberToFormat
  let decimalPart = '' // decimal part of currency. Ex: 1,35 -> 35
  let integerPart = '' // integer part of currency. Ex: 1,35 -> 1
  let integerPartFormated = '' // Ex: 12345 -> 12.345

  if(typeof formattedNumber === 'string' || typeof formattedNumber === 'number') {
    formattedNumber = String(formattedNumber)
    formattedNumber = formattedNumber.replace(/\D/g, '')
  } else {
    return formattedNumber
  }

  //remove zero on left. Ex: 0012 -> 12
  while(formattedNumber.indexOf(0) == 0) {
    formattedNumber = formattedNumber.substring(1);
  }

  decimalPart = formattedNumber.substring(formattedNumber.length - 2);
  integerPart = formattedNumber.substring(0, formattedNumber.length - 2);

  if (formattedNumber.length > 2 && formattedNumber.length <= 5) {
    formattedNumber = integerPart + "," + decimalPart;
  }


  if(formattedNumber.length == 2) {
    formattedNumber = "0," + formattedNumber;
  }

  if(formattedNumber.length == 1) {
    formattedNumber = "0,0" + formattedNumber;
  }

  // put dots on integer part
  if(integerPart.length > 3) {

    for(i = integerPart.length - 1, iAux = 1; i >= 0; i--, iAux++) {
      integerPartFormated = integerPartFormated.concat(integerPart.charAt(i));

      if(iAux === 3) {
        integerPartFormated = integerPartFormated.concat(".")
        iAux = 0;
      }
    }

    integerPartFormated = integerPartFormated.split("").reverse().join("")

    if(integerPartFormated.charAt(0) == ".") {
      integerPartFormated = integerPartFormated.substr(1)
    }

    formattedNumber = integerPartFormated.concat(",").concat(decimalPart)
  }


  return formattedNumber
}

module.exports = currencyFormatter
