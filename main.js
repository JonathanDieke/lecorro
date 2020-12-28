const express = require('express')
const bodyParser = require('body-parser')
var apiRouter   = require('./apiRouter').router; 
var corroRouter   = require('./corroRouter').router; 
const path = require('path')
var cors = require('cors'); 
const {sequelize} = require('./models');
// var models    = require('./models');

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });




const app = express()
const port = process.env.PORT || 8080

// Configuration de body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

//Configuration des routes 
app.use('/api/', apiRouter);
app.use('/', corroRouter);

// app.get('/db', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM test_table');
//     const results = { 'results': (result) ? result.rows : null};
//     res.send( {results ,  "env" : process.env});

//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


sequelize.sync()
  .then( () => {
    console.log("connection à la bd établie ");
  });


app.listen(port, () => {
  const d = new Date();
  console.log(`App listening at http://localhost:${port} - ${d.getHours()}h:${d.getMinutes()}min `);
})