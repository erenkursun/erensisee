const Discord = require("discord.js");
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(` <a:x_:1084537865930813511>  **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
   const embed = new Discord.EmbedBuilder()
   .setColor("Red")
   .setDescription("<a:redlax_onay:1088882388953731142> **Sistem Kapatıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlemicek.")
   const embed2 = new Discord.EmbedBuilder()
   .setColor("Red")
  .setDescription("<a:redlax_onay:1088882388953731142> **Sistem Açıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlicek.")

let küfür = db.fetch(`kufurengel_${message.guild.id}`);

if (küfür)  {

    db.delete(`kufurengel_${message.guild.id}`);
    message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}

if (!küfür)  {

    db.set(`kufurengel_${message.guild.id}`, true);
    message.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ["küfür", "küfür-engel aç", "küfür-engel kapat"]
    
  }
  
exports.help = {
name: "küfürengel",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}