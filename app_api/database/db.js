const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

//avoid 'current server discovery and monitoring engine is deprecated;
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', err => {
});

mongoose.connection.on('disconnected', () => {
});

if (process.platform === 'win32') {
}

const gracefulShutdown = (msg, callback) => {
};

//for nodemon restarts
process.once('SIGUSR2', () => {
});

//for app termination
process.on('SIGINT', () => {
});

//for Heroku app termination
process.on('SIGTERM', () => {
});

connect();

//bring in the mongoose schema
require('./models/travlr');