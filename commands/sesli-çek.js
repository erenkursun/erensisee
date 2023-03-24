const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
    return message.channel.send("<:ok:1088881942725926982> Gerekli Yetkin Yok! <a:x_:1084537865930813511>")

  if (!message.member.voice.channel)
    return message.reply("<:ok:1088881942725926982> Ses Kanalında Değilsin!");
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı)
    return message.reply(
      "<:ok:1088881942725926982> Bir Kullanıcı Etiketle"
    );
  if (!kullanıcı.voice.channel)
    return message.reply("etiketledigin kisi bir ses kanalinda degil");

  kullanıcı.voice.setChannel(message.member.voice.channelId)
  message.channel.send("<a:redlax_onay:1088882388953731142> Başarıyla Ses Kanalına Belirlediğiniz Kullanıcıyı Çektim.");
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "ses-çek"
};