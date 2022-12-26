const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


//Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Listening on port ${port}`));

