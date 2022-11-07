const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
})

const Seller = mongoose.model('Seller',sellerSchema);

module.exports = Seller;