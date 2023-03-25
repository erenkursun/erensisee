const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send({embeds: [new EmbedBuilder().setColor('Random').setTitle('1v1;').setDescription(message.author.tag + ', Kullanım: p!1vs1 <@kullanıcı>, <@kullanıcı> .').setFooter({text: 'PSOPrime', iconURL: client.user.displayAvatarURL()}).setTimestamp()]});
    var sans = ["10'a","1'e","20'ye","30'a"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaş başladı!').setFooter({text: 'Rahatsızların  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]})
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaşılıyor Pat Küt.').setFooter({text: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaşılıyor Pat Küp.').setFooter({text: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaşılıyor Pat küt.').setFooter({text: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaş Sonuçlanıyor.').setFooter({text: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription('Savaş bitti!').setFooter({text: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
      .then(nmsg => nmsg.edit({embeds: [new EmbedBuilder().setColor('Random').setTitle('1vs1').setDescription(`Savaşın Galibi: **${user.tag}** Helal olsun sana Ne Vurdun Be Adımın Canını 100 den **${sonuc}** Kadar Düşürdün Ve Adam Pes Etti.`).setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter({text: 'Rahatsızların  Savaşı yapıldı.', iconURL: client.user.displayAvatarURL()}).setTimestamp()]}))
  };

exports.conf = {
  aliases: ['1vs1', 'kapış', '1v1'],
};

exports.help = {
  name: '1vs1'
}