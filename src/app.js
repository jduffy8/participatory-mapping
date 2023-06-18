const express = require('express');
const cors = require('cors');
const app = express();
const index = require('./routes/index');
const userRoute = require('./routes/product.routes');
let corsOptions = {
    origin: ['https://localhost', 'https://www.github.io'],
    optionsSuccessStatus: 200
}
// , 'https://jakobzhao.github.io','http://jakobzhao.github.io'
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(index);
app.use('/api/',userRoute);

app.use('/', express.static('client'))

module.exports = app;


