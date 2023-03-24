const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("<a:x_:1084537865930813511> Rolleri Yönet Yetkiniz Bulunmamakta.")
  let sayi = args[0]
  if (!sayi) return message.reply("<:ok:1088881942725926982> Lütfen Silinecek Sayı Miktarını Girin.")
 message.channel.bulkDelete(sayi)
 message.channel.send('<a:redlax_onay:1088882388953731142> Başarıyla **'+ sayi + '** Adet Mesaj Silindi.')
}
exports.conf = {
  aliases: ["sil", "purge"]
};

exports.help = {
  name: "temizle"
};
