const discord = require('discord.js');
const BaseModule = require('../BaseModule/BaseModule.js');
module.exports = class ManModule extends BaseModule {



    static alias = "man";
    static syntax = "man [command]";
    static description = "Get info about a command!";
    static category = "utils";
    static permission_lvl = 0;

    static exec(...args) {
        const msg = args[0];

    }


};