const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const routerPage = require('./Routers/routers')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router handler
app.use('/', routerPage)

// router error 
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// express error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error has occurred!'}
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

// listen to server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});