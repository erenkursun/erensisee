
const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`<a:x_:1084537865930813511>   **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  
  if(!db.fetch(`saas_${message.guild.id}`)) {
    
    db.set(`saas_${message.guild.id}`, true)
    message.channel.send("<a:redlax_onay:1088882388953731142> Sa-As Sistemi Açıldı")
    
 } else {
    
    db.delete(`saas_${message.guild.id}`)
    message.channel.send("<a:redlax_onay:1088882388953731142> Sa-As Sistemi Kapatıldı")
    
  }

  
  
};


exports.conf = {
  aliases: ["sa-as", "sa-as aç", "sa-as kapat"],
  permLevel: 0,
};
exports.help = {
  name: 'sa-as',
   description: 'Susturma',
  usage: 'timeout <@kullanıcı> <süre>'
};