const discord = require("discord.js");
const owner_id = "194351651149185031";
const test_channel_id = "646079213941817365";
const commandsList = require("./CommandsList/CommandsList.js");
const bot_prefix = '.';





module.exports = class MainModule {
    discord_client = null;
    static INSTANCE;



    ready() {

    }


    message(msg) {
        if(msg.content.startsWith(bot_prefix)) {
            if(msg.content.substr(1).startsWith(commands.help.alias)) {
                commands.help.executable(msg);
            }
        }
    }


    constructor({token}) {
        this.discord_client = new discord.Client();
        this.discord_client.login(token);

        this.discord_client.on('ready', this.ready);
        this.discord_client.on('message', this.message);

    }

    static get_instance() {
        return this.INSTANCE;
    }

    static create_instance({token}) {
        this.INSTANCE = new MainModule({token});
    }




};