//return: true ou false
function isValidEmail(mail) {
  return RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/).test(mail)
}

module.exports = isValidEmail