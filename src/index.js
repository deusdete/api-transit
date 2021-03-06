const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/api/v1', routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started!')
});
