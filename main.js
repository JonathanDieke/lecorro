const express = require('express')
const bodyParser = require('body-parser')
var apiRouter   = require('./apiRouter').router; 
var corroRouter   = require('./corroRouter').router; 
const path = require('path')
var cors = require('cors'); 
const {sequelize} = require('./models'); 

const app = express()
const port = process.env.PORT || 8000

// Configuration de body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

//Configuration des routes 
app.post('/', (req, res) => {
  res.send({"response" : 'bon ça marche uhn'})
});
app.use('/api/', apiRouter);
app.use('/', corroRouter);


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

//create all tables if not exist
sequelize.sync()
  .then( () => {
    console.log("\nconnection à la bd établie ");
    console.log(process.env.NODE_ENV);
  });

// run server 
app.listen(port, () => {
  const d = new Date();
  
  console.log(`App listening at http://localhost:${port} - ${d.getHours()}h:${d.getMinutes()}min `);
})