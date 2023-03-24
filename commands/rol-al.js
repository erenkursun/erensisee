const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("<:ok:1088881942725926982> Rolleri Yönet Yetkiniz Bulunmamakta. <a:x_:1084537865930813511>")
    let user = message.mentions.users.first();
    let rol = message.mentions.roles.first();
    if(!user) return message.reply("<:ok:1088881942725926982> Lütfen Rolün Alınacağı Kişiyi Belirtiniz.")
    if(!rol) return message.reply("<:ok:1088881942725926982> Lütfen Alınacak Rolü Belirtiniz.")
    
    message.guild.members.cache.get(user.id).roles.remove(rol)
  
    message.reply("tm")
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "rol-al"
};
