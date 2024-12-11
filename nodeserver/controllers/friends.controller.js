const model = require('../models/friends.model')

function postFriend(req,res)  {
  if(!req.body.name){
   return res.status(400).json({
      error: 'Missing friend'
    })
  }
  const newFriend = {
    name: req.body.name,
    // id:friends.length
    id:model.length
  }
  // friends.push(newFriend);
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends (req,res) {
  //   res.json(friends);
  res.json(model);
}

function getFriend(req,res){
  const friendId = Number(req.params.friendId);
  //   const friend = friends[friendId];
  const friend = model[friendId];
  if(friend){
    res.json(friend)
  }else {
    res.status(404).json({
      error: "friend does not exist"
    })
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend
}
