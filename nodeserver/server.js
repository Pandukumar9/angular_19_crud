const express = require('express');

// const friendsController =  require('./controllers/friends.controller');
const friendsRouter = require('./routes/friend.router');
// const messageController =  require('./controllers/messages.controller');
const messagesRouter = require('./routes/message.router');

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// const friendsRouter = express.Router();

// app.post('/' , friendsController.postFriend);
// app.get('/' , friendsController.getFriends);
// app.get('/friends/:friendId' , friendsController.getFriend);

app.use('/friends',friendsRouter)

// app.get('/messages' , messageController.getMessages);
// app.post('/messages', messageController.postMessage)
app.use('/messages',messagesRouter);

app.listen(PORT, () => {
  console.log(`listering on ${PORT}..`)
})
