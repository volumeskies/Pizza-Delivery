const db = require('mysql');

/* Remote database connection */
const config = {
    host: 'a0428363.xsph.ru',
	port: 3306,
	user: 'a0428363_pizzas',
	password: 'pizza',
	database: 'a0428363_pizzas',
};

const pool = db.createPool(config);

/* Checking mysql connection
pool.getConnection((err)=>{
	console.log('mysql connected');
	if(err) throw err;
}) */

const getPizzasQuery = 'SELECT name_pizza, d_price, e_price, description FROM `pizzas`';

module.exports = {
    pool: pool,
    getPizzasQuery: getPizzasQuery
}