const discord = require("discord.js");
const db_class = require("../Database/DbClass.js");
const commandHandler = require("./CommandHandler/CommandHandler.js");




module.exports = class MainModule {
    discord_client = null;
    static INSTANCE;



    ready() {
        console.log("Ready!");
    }



    message(msg) {
        commandHandler.handle(msg);
    }

    guild_create(guild) {
        // Generating db info for every player

        guild.members.forEach((k) => {
            db_class.get_instance().add_player({player_name: k.user.username, player_id: k.id, player_avatar_link: k.user.avatarURL});
        })
    }

    guild_member_add(guild_member) {
        db_class.get_instance().add_player({player_name: guild_member.user.username, player_avatar_link: guild_member.user.avatarURL, player_id: guild_member.id});
    }

    guild_member_remove(guild_member) {
        db_class.get_instance().remove_player({player_id: guild_member.id});
    }

    regen_member_db(guild) {
        this.destroy_member_db(guild);
        this.guild_create(guild);
    }

    destroy_member_db(guild) {

        guild.members.forEach((k) => {
            db_class.get_instance().remove_player({player_id: k.id});
        });
    }


    constructor({token}) {
        this.discord_client = new discord.Client();
        this.discord_client.login(token);

        this.discord_client.on('ready', this.ready);
        this.discord_client.on('message', this.message);
        this.discord_client.on('guildCreate', this.guild_create);
        this.discord_client.on('guildMemberAdd', this.guild_member_add);
        this.discord_client.on('guildMemberRemove', this.guild_member_remove);

    }

    static get_instance() {
        return this.INSTANCE;
    }

    static create_instance({token}) {
        this.INSTANCE = new MainModule({token});
    }




};