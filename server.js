const express = require('express');
const app = express();
const port = process.env.PORT || 3838;
const mongoose = require('mongoose');
const storeController = require('./controllers/store');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/basiccrud', {
  useNewUrlParser: true,
});
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
