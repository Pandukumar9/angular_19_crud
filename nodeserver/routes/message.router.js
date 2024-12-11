const express = require('express');
const messageController =  require('./controllers/messages.controller');

const messagesRouter = express.Router();

app.get('/' , messageController.getMessages);
app.post('/', messageController.postMessage)

module.exports = messagesRouter;





