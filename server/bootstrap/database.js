'use strict';

const mongoose = require('mongoose');
const winston = require('winston');
const uri = "mongodb+srv://manoranjan:manoranjan@123@cluster0.86v23.mongodb.net/mytasks?retryWrites=true&w=majority";
module.exports = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        winston.info("Database connected..");
    })
}