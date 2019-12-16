const mongoose = require("mongoose");

const slot_schema = new mongoose.Schema({
    slot_number: Number,
    slot_filter: String,
    slot_contents: String
});
