const express = require('express')
const bodyParser = require('body-parser')
var apiRouter   = require('./apiRouter').router; 
const path = require('path')
var cors = require('cors'); 
var models    = require('./models');

const app = express()
const port = process.env.PORT || 8080

// Configuration de body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

// Route test
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Configuration des routes 
app.use('/api/', apiRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  const d = new Date()
  console.log(`App listening at http://localhost:${port} - ${d.getHours()}h:${d.getMinutes()}min `)
  
  // models.Study.findOne({
  //   attributes  : ['id', "libel"],
  //   where :  {id: 1}, 
  //   include : [{model : models.Subject,}]
  // }).then(study => {
  //   study.Subjects.forEach(subject => {
  //     console.log(subject.libel)
  //   });
  // })

})