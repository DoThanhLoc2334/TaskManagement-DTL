const express = require('express');
const boardRouter = require('./routes/board.routes');
const cardRouter = require('./routes/card.routes')
const app = express();
app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use(express.json());
app.use('/boards', boardRouter);
app.use('/', cardRouter)
module.exports = app;