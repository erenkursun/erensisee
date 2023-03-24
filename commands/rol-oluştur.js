const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("<a:x_:1084537865930813511> Rolleri Yönet Yetkiniz Bulunmamakta.")
    let rolname = args[0]
    if (!rolname) return message.reply("<:ok:1088881942725926982> Lütfen Bir Rol İsmi Gir!")
    message.guild.roles.create({name: rolname})
    message.reply("tm")
}
exports.conf = {
  aliases: ["create-rol"]
};

exports.help = {
  name: "rol-oluştur"
};
