const Discord = require("discord.js")
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  
    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`<a:x_:1084537865930813511>   **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);


let reklam = db.fetch(`reklamengel_${message.guild.id}`);
   const embed = new Discord.EmbedBuilder()
   .setColor("#ff0000")
   .setDescription("<a:redlax_onay:1088882388953731142> **Reklam Engel Sistem Aktif Edildi** \n Artık Bot Atılan Linkleri Sansürlicek.")
   const embed2 = new Discord.EmbedBuilder()
   .setColor("#ff0000")
   .setDescription("<a:redlax_onay:1088882388953731142> **Reklam Engel Sistemi Kapatıldı** \n Artık Bot Atılan Linkleri Sansürlemiyecek.")
if (reklam)  {

    db.delete(`reklamengel_${message.guild.id}`);
    message.channel.send({embeds: [embed2], allowedMentions: { repliedUser: false }})

    return
}

if (!reklam)  {

    db.set(`reklamengel_${message.guild.id}`, true);
    message.channel.send({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ["reklam", "reklam-engel aç", "reklam-engel", "reklam-engel kapat"]
    
  }
  
exports.help = {
name: "reklamengel",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}