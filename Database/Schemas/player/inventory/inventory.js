const mongoose = require("mongoose");
const inventory_schema = new mongoose.Schema({
        slot_count: Number,
        slots: String,
});

module.exports = mongoose.model('inventory', inventory_schema);
