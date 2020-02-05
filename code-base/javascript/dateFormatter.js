/*
Formata a data enquanto digita.
Padrão do retorno DD/MM/YYYY
Apenas formata, não valida, se quiser validar chame o isValidDate.js
*/
function dateFormatter(dateToFormat) {
  let formattedDate = dateToFormat

  if(typeof formattedDate === 'string' || typeof formattedDate === 'number') {
    formattedDate = String(formattedDate)
    formattedDate = formattedDate.replace(/\D/g, '')
    formattedDate = formattedDate.slice(0, 8)
  } else {
    return formattedDate
  }

  if(formattedDate.length === 3 ) {
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.charAt(formattedDate.length - 1)
    return formattedDate
  }

  if(formattedDate.length === 4 ) {
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2, 4)
    return formattedDate
  }

  if(formattedDate.length >= 5 ) {
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2, 4) + '/' + formattedDate.slice(4)
    return formattedDate
  }

  return formattedDate
}

module.exports = dateFormatter