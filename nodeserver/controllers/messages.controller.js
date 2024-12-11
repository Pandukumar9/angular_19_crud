function getMessages(req,res) {
  res.send('Hello alert');
}

function postMessage(req,res) {
  console.log(`updating mesagess`)
}

module.exports = {
  getMessages,
  postMessage
}
