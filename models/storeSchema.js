const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: String,
    price: Number,
    qty: Number,
  },
  { timestamps: true },
);

const Store = mongoose.model('store', storeSchema);

module.exports = Store;
