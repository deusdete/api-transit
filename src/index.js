const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started!')
});
