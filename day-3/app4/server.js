const express = require('express');
const multer =  require('multer');
const upload = multer({dest: 'uploads'})
const fs = require('fs')

const app = express();

app.get('/mysql', (request, response) => {
    response.sendFile(__dirname + '/uploads/mysql.exe')
});

app.get('/client', (request, response) => {
    response.sendFile(__dirname + '/client.html')
});

app.post('/file', upload.single('file'), (request, response) => {
    console.log('uploaded file: ' + request.file.filename)
    response.send('uploaded...')
})

app.listen(5000, '0.0.0.0', () => {
    console.log(`Server started on 5000`);
});