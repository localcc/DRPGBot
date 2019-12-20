const DbClass = require('./Database/DbClass.js');
const DiscordClass = require('./Discord/MainModule');
const bot_token = '';
DiscordClass.create_instance({token: bot_token});
const DB_INSTANCE = DbClass.get_instance();
DB_INSTANCE.connect({password: ''});
