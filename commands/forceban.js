const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("<:ok:1088881942725926982> Üyeleri Banla Yetkiniz Yok. <a:x_:1084537865930813511>")
let kullanıcı = args[0]
if (!kullanıcı) return message.reply("<:ok:1088881942725926982> Lütfen Bir Kullanıcı ID'si Gir!")
message.guild.members.ban(kullanıcı)
message.reply(kullanıcı + " İD'si Banlandı! <a:redlax_onay:1088882388953731142>")


}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "forceban"
};