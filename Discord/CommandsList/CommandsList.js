const helpModule                    = require("../Modules/HelpModule/HelpModule.js");
const manModule                     = require("../Modules/ManModule/ManModule.js");
const permLvlModule                 = require("../Modules/PermLvlModule/PermLvlModule.js");
const dbModule                      = require("../Modules/DbModule/DbModule.js");


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
        },
        plvl: {
            alias: permLvlModule.alias,
            syntax: permLvlModule.syntax,
            description: permLvlModule.description,
            category: permLvlModule.category,
            permission_lvl: permLvlModule.permission_lvl,
            executable: (msg) => permLvlModule.exec(msg),
        },
        dbmdl: {
            alias: dbModule.alias,
            syntax: dbModule.syntax,
            description: dbModule.description,
            category: dbModule.category,
            permission_lvl: dbModule.permission_lvl,
            executable: (msg) => dbModule.exec(msg),
        },

    };
};