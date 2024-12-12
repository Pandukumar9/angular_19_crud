const express = require('express');
const messageController =  require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.get('/' , messageController.getMessages);
messagesRouter.post('/', messageController.postMessage)

module.exports = messagesRouter;





