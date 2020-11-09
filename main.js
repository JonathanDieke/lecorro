const express = require('express')
const bodyParser = require('body-parser')
var apiRouter   = require('./apiRouter').router; 
var cors = require('cors'); 

const app = express()
const port = process.env.PORT || 8080

// Configuration de body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

// Route test
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Configuration des routes 
app.use('/api/', apiRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

app.listen(port, () => {
  const d = new Date()
  console.log(`App listening at http://localhost:${port} - ${d.getHours()}h:${d.getMinutes()}min `)
  console.log(process.env);
})