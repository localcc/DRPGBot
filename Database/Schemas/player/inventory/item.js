const mongoose = require("mongoose");

const item_schema = new mongoose.Schema({
        item_name: String,
        item_filter: String,
        item_amount: Number,
        item_properties: String
});

module.exports = mongoose.model('item', item_schema);