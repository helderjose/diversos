console.clear();

const dateFormatter = require('./dateFormatter.js')
let testId = 1;


// teste
let param = '2'
let expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
let result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/'
expected = '25'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/1'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/'
expected = '25/12'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/2'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/20'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/201'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/2019'
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '251'
expected = '25/1'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '2512'
expected = '25/12'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25122'
expected = '25/12/2'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '251220'
expected = '25/12/20'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '2512201'
expected = '25/12/201'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25122019'
expected = '25/12/2019'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '25/12/20199999'
expected = '25/12/2019'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 'a2b5c/d1e2f/g2h/019aa  '
expected = '25/12/2019'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = ''
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = '   '
expected = ''
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 2
expected = '2'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 25
expected = '25'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 251
expected = '25/1'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = 25122019784618
expected = '25/12/2019'
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = {}
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = null
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)

// teste
param = undefined
expected = param
console.log(`\nTest ${testId++}: WHEN: "${param}" SHOULD RETURN: "${expected}"`)
result = dateFormatter(param)
console.assert(
  result === expected,
  `WHEN "${param}" SHOULD RETURN "${expected}" BUT IT RETURNED "${result}"`
)
