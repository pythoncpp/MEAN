const jwt = require('jsonwebtoken')

const secret = '1234567890'
const data = { userId: 1 }
const token = jwt.sign(data, secret)
console.log(token)


// const modifiedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU2MTc5OTUzM30.RB3Uo6xOOv-euYBk00uXV-tj_3U2ttvTcM4vtKRDeVU'

const dataServer = jwt.verify(token, secret)
console.log(dataServer)