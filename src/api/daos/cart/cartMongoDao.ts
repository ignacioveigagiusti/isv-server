import MongoContainer from '../../containers/mongoContainer';
import mongoose from "mongoose";

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    timestamp: {type: String, require: true, max:500},
    products: {type: Array, require: true}
});


class CartMongoDao extends MongoContainer{
    constructor(){
        super('mongdb://localhost:27017/carts', cartCollection, cartSchema)
    }
}