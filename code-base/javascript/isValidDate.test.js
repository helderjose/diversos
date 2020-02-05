console.clear();

const isValidDate = require('./isValidDate.js')
let testId = 1;


// teste
let param = '16/09/2019'
let expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
let result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '28/02/2019'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '3/09/2019'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/9/2019'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/09/9'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/09/19'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/09/019'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/09/2019'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '03/09/9'
expected = true
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)


/*
--------------------------------------------
---------- To below return false ----------
--------------------------------------------
*/


// teste
param = '29/02/2019'
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '31/09/2019'
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = null
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = undefined
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = true
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = false
expected = false
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = isValidDate(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)