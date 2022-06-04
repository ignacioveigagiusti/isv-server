import mongoose from "mongoose";

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    timestamp: {type: String, require: true, max:500},
    products: {type: Array, require: true}
});

const mongoCarts = mongoose.model(cartCollection, cartSchema);

export default mongoCarts;