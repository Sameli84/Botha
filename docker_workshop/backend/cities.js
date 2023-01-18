const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const cities = {
    findAll: () => new Promise((resolve, reject) => {
        connection.query('SELECT * FROM cities', (err, results) => {
            if(err) {
                return reject(err)
            }
            resolve(results)
        })
    }),
    create: (city) => new Promise((resolve, reject) => {
        const query = connection.query('INSERT INTO cities SET ?', city, (err, result) => {
            if(err) {
                return reject(err)
            } else {
                resolve(result)
            }
        })
        console.log(query.sql)
    }),

    close: () => new Promise((resolve,reject) => {
        connection.end((err) => {
            if(err) {
                return reject(err)
            }
            resolve("Connection closed")
        })
    })
}

module.exports = cities

/*

connection.connect()
connection.query('SELECT * FROM cities', (err, cities) => {
    if(err) {
        throw err
    }
    cities.forEach((city) => {
        console.log(city.id + " " + city.capital + " " + city.country)
    })
})

const newCity = {
    capital: 'Paris',
    country: 'France'
}

const query = connection.query('INSERT INTO cities SET ?', newCity, (err, results) => {
    if(err)
        throw err
    console.log(results.affectedRows + " record(s) inserted")
})
console.log(query.sql)

connection.end()
*/

