<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
const connecttomongo = require('./db');
const express = require('express')
var cors = require('cors')

connecttomongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// app.get('/', (req, res) => {
//   res.send('Hello Vivek!')
// }),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})