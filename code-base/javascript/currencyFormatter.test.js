console.clear();

const currencyFormatter = require('./currencyFormatter.js')
let testId = 1;

// teste
let param = 1
let expected = '0,01'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
let result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 12
expected = '0,12'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 123
expected = '1,23'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 1234
expected = '12,34'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 12345
expected = '123,45'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 123456
expected = '1.234,56'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 1234567
expected = '12.345,67'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 12345678
expected = '123.456,78'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 123456789
expected = '1.234.567,89'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 1234567891
expected = '12.345.678,91'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 12345678912
expected = '123.456.789,12'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 123456789123
expected = '1.234.567.891,23'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '0,01'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '0,12'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '1,23'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '1.234.567,89'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '   1a2b3c4e5e/*6789   '
expected = '1.234.567,89'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '   1.234.567,89   '
expected = '1.234.567,89'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = {}
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = null
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = undefined
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = currencyFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)
