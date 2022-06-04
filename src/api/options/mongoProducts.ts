import mongoose from "mongoose";

const productCollection = 'products';

const productSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    timestamp: {type: String, require: true, max:500},
    stock: {type: Number, require: true},
    cat: {type: String, require: true, max:500},
    description: {type: String, require: true, max:1500},
    price: {type: Number, require: true},
    name: {type: String, require: true, max:500},
    thumbnail: {type: String, require: true, max:500},
    category: {type: String, require: true, max:500}
});

const mongoProducts = mongoose.model(productCollection, productSchema);

export default mongoProducts;