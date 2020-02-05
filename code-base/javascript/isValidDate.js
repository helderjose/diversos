// todo: passar tudo para o inglês

/*
Receives a date in the format dd/mm/yyyy for example, but
it can have one or two digits in day and month, in year can have one to four digits
Returns true if the date exists. Ex: 28/02/2019'
Returns false if the date does not exist. Ex: 29/02/2019'
*/
function isValidDate(dataValidar){

  var dataCerta;
  var dataValidarAux;
  var diaDigitado = 0;
  var mesDigitado = 0;
  var anoDigitado;

  if(typeof dataValidar !== 'string') {
    return false
  }

  anoDigitado = dataValidar.split("/")[2];
  mesDigitado = dataValidar.split("/")[1] - 1; // less one because the months starts in zero
  diaDigitado = dataValidar.split("/")[0];

  //verifica soh o mes e o ano, o dia eh verificado comparando dataCerta com a dataDigitada
  if( (mesDigitado > 11) || (mesDigitado < 0) || isNaN(parseInt(anoDigitado))){
      return false;
  }

  dataCerta = new Date(anoDigitado, mesDigitado);
  dataValidarAux = new Date(anoDigitado, mesDigitado, diaDigitado);

  if( (dataValidarAux.getFullYear() !== dataCerta.getFullYear()) || dataValidarAux.getMonth() !== dataCerta.getMonth() ){
      return false;
  }

  return true;
}

module.exports = isValidDate
