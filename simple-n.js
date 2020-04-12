#!/usr/bin/env node
"use strict";

var simpleStart = new Date();
const rootPath = __dirname;

var app = require('./bootstrap/app.js');

app.run();