const express = require('express');
const app = express();
const mongoose = require('mongoose');
const storeController = require('./controllers/store');
const methodOverride = require('method-override');

const port = process.env.PORT || 3838;
const mongoURI = process.env.DB_URI || 'mongodb://localhost:27017/basiccrud';

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/store', storeController);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening ${port}`);
});
