function info(text) {
    console.log(`logger.js: ${text}`)
}


// { info } vira { info: info }
module.exports = { info }