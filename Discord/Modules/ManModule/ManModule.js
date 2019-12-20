const BaseModule = require('../BaseModule/BaseModule.js');
const permissionLvls = require("../../Helpers/PermissionLvls.js");

module.exports = class ManModule extends BaseModule {



    static alias = "man";
    static syntax = "man [command]";
    static description = "Get info about a command!";
    static category = "utils";
    static permission_lvl = permissionLvls.USER;

    static exec(...args) {


    }


};