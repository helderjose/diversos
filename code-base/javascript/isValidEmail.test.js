console.clear();

const isValidEmail = require('./isValidEmail.js')
let testId = 1;


// teste
let param = 'helder@gmail.com'
let expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
let result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 'username@dominio.br'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}". obs: nao sei se esse eh um e-mail realmente valido`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 'username@gmail.com.br'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)


// teste
param = 'username@gmail.com.br'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// --- para baixo sao testes que retornam false

// teste
param = 'usernamegmail.com'
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 'username@gmailcom'
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = null
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = undefined
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = ''
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = true
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = false
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidEmail(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)





