const path = require('path');
const express = require('express');
const app = express();
const buildDir = path.join(__dirname, '../../build');
const port = process.env.PORT || 8081;
const db = require('./database.js');
let pizzas = {};
/* Handling static files */
app.use(express.static(buildDir));

/* Starting server */
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

/* Getting pizzas' data */
db.pool.query(db.getPizzasQuery, (err, res)=>{
    if(err) throw err;
    const result = JSON.parse(JSON.stringify(res));
    pizzas = result;
    console.log('Pizza\'s data', result);
})

/* Sending pizzas' data */
app.get('/pizzas', (req, res) => {
    res.send(pizzas);
});

/* Sending index.html */
app.get('/', (req, res) => {
    res.sendFile(path.join(buildDir, '/index.html'));
});



