const mongoose = require("mongoose");

const player_schema = new mongoose.Schema({
    player_name: String,
    player_id: Number,
    player_inventory: String,
    player_hp: Number,
    player_mp: Number,
    player_gold_amount: Number,
    player_avatar_link: String,
    player_mob_wins: Number,
    player_player_wins: Number,
    player_lvl: Number,
    player_statistic: String,
    player_permission_lvl: Number,
});

module.exports = mongoose.model('player', player_schema);