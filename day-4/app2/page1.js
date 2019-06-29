const cryptoJs = require('crypto-js')

const password = 'test1234'
console.log('plain text: ' + password)

const encryptedMD5 = cryptoJs.MD5(password)
console.log('MD5 password: ' + encryptedMD5)

const encryptedSHA1 = cryptoJs.SHA1(password)
console.log('SHA1 password: ' + encryptedSHA1)


const encryptedSHA512 = cryptoJs.SHA512(password)
console.log('SHA 512 password: ' + encryptedSHA512)
