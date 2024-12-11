const express = require('express');
const friendsController =  require('./controllers/friends.controller');

const friendsRouter = express.Router();

app.post('/' , friendsController.postFriend);
app.get('/' , friendsController.getFriends);
app.get('/friends/:friendId' , friendsController.getFriend);

module.exports = friendsRouter;

