const express = require('express');

const path = require('path');

// const friendsController =  require('./controllers/friends.controller');
const friendsRouter = require('./routes/friend.router');
// const messageController =  require('./controllers/messages.controller');
const messagesRouter = require('./routes/message.router');

const app = express();

app.set('view engine' ,'hbs');
app.set('views' ,path.join(__dirname,'views'));

const PORT = 3000;

app.use((req,res,next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.get('/' ,(req,res) => {
  res.render('index' , {
    title: "my frinedss are cleaver",
    caption: 'this is test header'
  })
})

app.use('/site' , express.static(path.json(__dirname, 'index')));
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
