const express = require('express')
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')

// import the multer
const multer = require('multer')

// set the destination folder for uploading files
const upload = multer({ dest: 'images'})

const router = express.Router()

/**
 * @swagger
 *
 * /user/signup:
 *   post:
 *     description: register a new user account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: firstname
 *         description: User's first name.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: last name
 *         description: User's last name.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: phone
 *         description: User's phone number.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *       401:
 *         description: user does not exist
 */
router.post('/signup', (request, response) => {
    const { firstname, lastname, email, address, phone, password } = request.body

    // ecrypt the password
    const encrypted = '' + cryptoJs.SHA1(password)

    const statement = `insert into user 
        (firstname, lastname, email, phone, password, address, profileImage ) values
        ('${firstname}', '${lastname}', '${email}', '${phone}', '${encrypted}', '${address}', 'default_profile.png')
    `
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})


/**
 * @swagger
 *
 * /user/signin:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email to use for login
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *       401:
 *         description: user does not exist
 */
router.post('/signin', (request, response) => {
    const { email, password } = request.body

    // encrypt password
    const encrypted = '' + cryptoJs.SHA1(password)

    const statement = `select id, firstname, lastname, email, deleted from user where email = '${email}' and password = '${encrypted}'`
    const connection = db.connect()
    connection.query(statement, (error, users) => {
        connection.end()

        // check if user can login
        if (users.length == 0) {
            // user does not exist
            response.status(401)
            response.send(utils.createResponse('user does not exist'))
        } else {
            // user exists
            const user = users[0]
            if (user.deleted == 1) {
                // user has closed the account
                response.send(utils.createResponse('you have closed your account :('))
            } else {
                response.send(utils.createResponse(error, user))
            }
        }
    })
})


/**
 * @swagger
 *
 * /user/profile:
 *   get:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: login
 *       401:
 *         description: user does not exist
 */
router.get('/profile/:id', (request, response) => {
    const id = request.params.id

    const statement = `select id, firstname, lastname, email, phone, address, deleted, profileImage from user where id = ${id}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        if (result.length == 0) {
            // user does not exist
            response.send(utils.createResponse('user does not exist'))
        } else {
            // user exists
            const user = result[0]
            
            if (user.deleted == 1) {
                // user has closed the account
                response.send(utils.createResponse('you have closed your account :('))
            } else {
                response.send(utils.createResponse(error, user))
            }
        }
    })
})

router.put('/profile/:id', (request, response) => {
    const id = request.params.id
    const { firstname, lastname, address, phone } = request.body

    const statement = `update user set
            firstname = '${firstname}', 
            lastname = '${lastname}',
            phone = '${phone}',
            address = '${address}'
        where id = ${id}
    `
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

// update profile image
router.post('/profile/image/:id', upload.single('photo'), (request, response) => {
    const id = request.params.id
    const fileName = request.file.filename

    const statement = `update user set profileImage = '${fileName}' where id = ${id}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id

    const statement = `update user set deleted = 1 where id = ${id}`
    const connection = db.connect()
    connection.query(statement, (error, result) => {
        connection.end()
        response.send(utils.createResponse(error, result))
    })
});


module.exports = router