const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));



app.use('/todo', todoHandler);



function errorHandler(err, req, res, next) {

    if (res.headerSent) {
        return next(err);
    } else {
        res.status(500).json({ error: err })
    }


}





app.listen(4000, () => {
    console.log(`Your server is running at 4000`)
});




