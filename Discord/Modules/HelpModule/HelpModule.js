const discord = require("discord.js");
const BaseModule = require('../BaseModule/BaseModule.js');
const CommandsList = require('../../CommandsList/CommandsList.js');
module.exports = class HelpModule extends BaseModule {
    static alias = "help";
    static syntax = "help";
    static description = "Get the bot commands explanation!";
    static category = "utils";
    static permission_lvl = 0;
    static exec(...args) {
        const msg = args[0];
        let available_categories = {};
        let embed = new discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL);

        for (let i in CommandsList.commands) {
            if(available_categories[CommandsList.commands[i].category] === undefined) {
                available_categories[CommandsList.commands[i].category] = "";
            }
            embed.addField(CommandsList.commands[i].syntax, CommandsList.commands[i].description);
        }
        msg.channel.send(embed);
    }
};