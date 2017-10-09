import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let FoodtruckSchema = new Schema({
  name: String,
  type: String,
  price: String,
  forme: String,
  comments: {}
})

module.exports = mongoose.model('Foodtruck', FoodtruckSchema);
