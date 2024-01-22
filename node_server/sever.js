const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logevents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

//initalize object
const myEmitter = new Emitter();
myEmitter.on('log',(msg,filename) => logEvents(msg,filename));
const PORT = process.env.PORT || 3500;
