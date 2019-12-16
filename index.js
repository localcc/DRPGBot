const DbClass = require('./Database/DbClass.js');
const DiscordClass = require('./Discord/MainModule');
const bot_token = '';
DiscordClass.create_instance({token: bot_token})
const DISCORD_INSTANCE = DiscordClass.get_instance();
