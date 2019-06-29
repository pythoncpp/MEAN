const cryptoJs = require('crypto-js')

// man in middle attack

// client
const sercretClient = '1234567890'
const data = { userId: 1 }
const request = {   
    data : { userId: 1 },
    authToken: '' + cryptoJs.MD5(JSON.stringify(data) + sercretClient)
}

console.log('user request: ', request)


// // hacker
const dataHacker = { data: { userId: 2 }, authToken: '355b7d2a22b101915d0edca61c3b9ab5' }
dataHacker.authToken = '' + cryptoJs.MD5(JSON.stringify(dataHacker.data))

console.log('--- hacker side ------')
console.log(dataHacker)


// server
const sercretSecret = '1234567890'
const dataServer = { data: { userId: 2 }, authToken: '3bb163e90e141d64fab1995d04f18359' }
console.log('--- server side ----')
console.log(dataServer)

const serverauthToken = cryptoJs.MD5(JSON.stringify(dataServer.data) + sercretSecret)
console.log('server authToken: ' + serverauthToken)

if (dataServer.authToken == serverauthToken) {
    console.log('server has received original request')
    console.log('delete: ', dataServer.data)
} else {
    console.log('server has received modified request')
    console.log('server is not going to perform the delete operation')
}
