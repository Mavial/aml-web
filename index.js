const express = require('express');
const cons = require('./consolelog')

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', {
      lang: 'en'
    });
})


app.listen(port, () => {
    console.log(cons.info + `AML Web listening at http://localhost:${port}`)
})

// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404).send('Error 404');
  });

// make sure the app continues on errors
process.on('uncaughtException', (err) => {
    console.log(cons.err, 'Uncaught Exception:', err);
  });