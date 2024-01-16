const express = require('express');
const app = express();
const cors = require('cors');
const ErrorHandler = require('./error');
const bodyParser = require('body-parser');

const UserRoute = require('./router/user.router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', UserRoute);

app.use((req, res, next) => {
    const err = new Error('No Route Found..!!!');
    err.status = 404;
    next(err);
})

app.use(ErrorHandler.errorHandler);

module.exports = app;