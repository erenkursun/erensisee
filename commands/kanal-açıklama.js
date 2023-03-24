const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
let aciklama = args.slice(0).join(" ")
if (!aciklama) return message.reply("<:ok:1088881942725926982> Lütfen Kanal Açıklamasını Yaz!")
let kanal = message.channel
client.channels.cache.get(message.channel.id).setTopic(aciklama)
message.reply("<:ok:1088881942725926982> Başarıyla Kanal Açıklaması Değiştirildi!")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kanal-açıklama"
};
