const express = require('express');

const friendsController =  require('./controllers/friends.controller');
const messageController =  require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

// const friends = [
//   {
//     id:1,
//     name:'pandu'
//   },
//   {
//     id:2,
//     name:'madhu'
//   }
// ];

app.use((req,res,next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  //actions goes here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// app.post('/friends' , (req,res) => {
//   if(!req.body.name){
//    return res.status(400).json({
//       error: 'Missing friend'
//     })
//   }
//   const newFriend = {
//     name: req.body.name,
//     id:friends.length
//   }
//   friends.push(newFriend);

//   res.json(newFriend);
// });

// app.get('/friends' , (req,res) => {
//   res.json(friends);
// });

// app.get('/friends/:friendId' , (req,res) => {
//   const friendId = Number(req.params.friendId);
//   const friend = friends[friendId];
//   if(friend){
//     res.json(friend)
//   }else {
//     res.status(404).json({
//       error: "friend does not exist"
//     })
//   }
// });

app.post('/friends' , friendsController.postFriend);

app.get('/friends' , friendsController.getFriends);

app.get('/friends/:friendId' , friendsController.getFriend);


app.get('/', (req,res) => {
  // res.send('Hello ....');
  res.send({
    id:1,
    name:'pandu'
  });
});

// app.get('/messages' , (req,res) => {
//   res.send('Hello alert');
// });

// app.post('/messages',(req,res) => {
//   console.log(`updating mesagess`)
// })

app.get('/messages' , messageController.getMessages);

app.post('/messages', messageController.postMessage)

app.listen(PORT, () => {
  console.log(`listering on ${PORT}..`)
})
