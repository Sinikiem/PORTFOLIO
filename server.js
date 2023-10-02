/* File name: Portfolio
Student Name: Sinikiem Azaiki
Student number: 301281123 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(5001);
module.exports = app;

console.log('Server running at http://localhost:5001/'); /*port for Mac */