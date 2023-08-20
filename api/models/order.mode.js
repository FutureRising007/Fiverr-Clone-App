import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    GigID: {
        type: String, 
        required: true,
    },
    img: {
        type: String, 
        required: false,
    },
    price: {
        type: Number, 
        required: true,
    },
    sellerID: {
        type: String, 
        required: true,
    },
    buyerID: {
        type: String, 
        required: true,
    },
    isCompleted: {
        type: Boolean, 
        default: false,
    },
    payment_intent: {
        type: String, 
        required: true,
    },

}, {
    timestamps: true
});

export default mongoose.model("Order" , OrderSchema);