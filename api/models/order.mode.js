import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    GigID: {
        type: String, 
        required: true,
    },
    userID: {
        type: String, 
        required: true,
    },
    star: {
        type: Number, 
        required: true,
        enum: [1,2,3,4,5],
    },
    desc: {
        type: String, 
        required: true,
    },

}, {
    timestamps: true
});

export default mongoose.model("Order" , OrderSchema);