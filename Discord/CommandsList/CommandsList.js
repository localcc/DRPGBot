const discord = require("discord.js");
const helpModule                    = require("../Modules/HelpModule/HelpModule.js");
const manModule                     = require("../Modules/ManModule/ManModule.js");


module.exports = class CommandsList {
    static commands = {
        help: {
            alias: helpModule.alias,
            syntax: helpModule.syntax,
            description: helpModule.description,
            category: helpModule.category,
            permission_lvl: helpModule.permission_lvl,
            executable: (msg) => helpModule.exec(msg),
        },
        man: {
            alias: manModule.alias,
            syntax: manModule.syntax,
            description: manModule.description,
            category: manModule.category,
            permission_lvl: manModule.permission_lvl,
            executable: (msg) => manModule.exec(msg),
        }

    };
};