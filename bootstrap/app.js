"use strict";
const App = require('../core/Application.js')

var app = new App(__filename);

const commandPath = __dirname+'\\..\\src\\commands';
app.find(commandPath);
module.exports = app;
