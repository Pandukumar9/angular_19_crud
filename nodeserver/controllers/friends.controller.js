function postFriend(req,res)  {
  if(!req.body.name){
   return res.status(400).json({
      error: 'Missing friend'
    })
  }
  const newFriend = {
    name: req.body.name,
    id:friends.length
  }
  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends (req,res) {
  res.json(friends);
}

module.exports = {
  postFriend,
  getFriends
}