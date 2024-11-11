const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});


productSchema.index({ category: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;