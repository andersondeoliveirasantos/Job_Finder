const express = require('express');
const app = express();

const PORT = 3000

app.listen(PORT, function() {
  console.log(`Express is running on the port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send("It's working")
})