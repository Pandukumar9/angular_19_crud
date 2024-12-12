const path = require('path');

function getMessages(req,res) {
  // res.send('Hello alert');

  res.sendFile(path.join(__dirname, '..' , 'public' , 'images' ,'Sample.png'));
}

function postMessage(req,res) {
  console.log(`updating mesagess`)
}

module.exports = {
  getMessages,
  postMessage
}
