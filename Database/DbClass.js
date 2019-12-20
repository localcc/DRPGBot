const mongoose = require('mongoose');

const mongo_params = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = class DbClass {

    static INSTANCE;
    connection = null;
    constructor() {
    }

    static create_instance() {
        this.INSTANCE = new DbClass();
        return this.INSTANCE;
    }

    static get_instance() {
        return this.INSTANCE === undefined ? this.create_instance() : this.INSTANCE;
    }

    connect({password}) {
        mongoose.connect(`mongodb+srv://mainUser:${password}@clusterr-ikbjl.mongodb.net/test?retryWrites=true&w=majority`,
            mongo_params).then(success => {
                this.connection = mongoose.connection;
                return success;
        }).catch(err => {
            console.log(err);
            return err;
        })
    }

    async get_player({id}) {
        const player_schema = await require('./Schemas/player/player.js');
        return player_schema.findOne({player_id: id});
    }

    add_player({player_name, player_id, player_avatar_link}) {
        const player_schema = require('./Schemas/player/player.js');

        //Initializing everything related to RPG to 0
        const player_instance = new player_schema({player_name, player_id, player_avatar_link, player_inventory: "", player_hp: 0, player_mp: 0,
            player_gold_amount: 0, player_mob_wins: 0, player_player_wins: 0, player_lvl: 0, player_statistic: 0, player_permission_lvl: 0});
        return player_instance.save();
    }

    remove_player({player_id}) {
        const player_schema = require("./Schemas/player/player.js");
        return player_schema.findOneAndDelete({player_id});
    }
    hello_world() {
        console.log("Hello!");
    }

    static world() {
        console.log("World!");
    }






};