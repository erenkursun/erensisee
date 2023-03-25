const { EmbedBuilder } = require("discord.js");
const db = require("croxydb");
module.exports.run = async (bot, message, args, button) => {
  if (!message.member.permissions.has("ManageMessages"))
    return message.channel
      .send("<a:x_:1084537865930813511> Bu komut için `Mesajları Yönet` yetkiniz olması gerek. ")
      .then((msg) => {
        setTimeout(() => msg.delete(), 5000);
      });
  const komut = args[0];
  //Embedler
  const komutuyarı = new EmbedBuilder()
    .setTitle("İşlem başarısız.")
    .setColor("White")
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    .setDescription(`Bir komut girmelisin `)
    .setFooter({ text: "Örnek : puan ver/al/bak @kişi 10" });
  const etiketuyarı = new EmbedBuilder()
    .setTitle("İşlem başarısız.")
    .setColor("White")
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    .setDescription(`Birini etiketlemelisin.`)
    .setFooter({ text: "Örnek : puan ver @kişi 10" });
  const puanuyarı = new EmbedBuilder()
    .setTitle("İşlem başarısız.")
    .setColor("White")
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    .setDescription(`Geçerli bir puan girmelisin.`)
    .setFooter({ text: "Örnek : puanver @kişi 10" });

  //
  if (!komut) return message.reply({ embeds: [komutuyarı] });
  if (args[0] === "ver") {
    let sayı = args[2];
    let user = message.mentions.users.first();
    if (!user) return message.reply({ embeds: [etiketuyarı] });
    if (isNaN(sayı))
      return message.reply({ embeds: [puanuyarı] }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
    if (!sayı) return message.reply({ embeds: [puanuyarı] });
    db.add(`puan_${user.id}`, sayı);
    const verildi = new EmbedBuilder()
      .setColor("White")
      .setTimestamp()
      .setThumbnail(user.avatarURL({ dynamic: true }))
      .setDescription(`Puan verildi.`);
    return message.channel.send({ embeds: [verildi] });
  }
  //////////////////////////////////////////
  if (args[0] === "al") {
    let puan = args[2];
    let user = message.mentions.users.first();
    if (!user) return message.reply({ embeds: [etiketuyarı] });
    if (isNaN(puan))
      return message.reply({ embeds: [puanuyarı] }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
    if (!puan) return message.edit({ embeds: [puanuyarı] });
    db.subtract(`puan_${user.id}`, puan);
    const alındı = new EmbedBuilder()
      .setColor("White")
      .setTimestamp()
      .setThumbnail(user.avatarURL({ dynamic: true }))
      .setDescription(`Puan alındı.`);
    return message.channel.send({ embeds: [alındı] });
  }

  ////////////////////////////////////
  if (args[0] === "bak") {
    let user = message.mentions.users.first() || message.author;
    const durum = db.fetch(`puan_${user.id}`);
    const bakıldı = new EmbedBuilder()
      .setColor("White")
      .setTimestamp()
      .setThumbnail(user.avatarURL({ dynamic: true }))
      .setDescription(`Puan durumu : \`${durum ? durum : 0}\``);
    return message.channel.send({ embeds: [bakıldı] });
  }
  let komutlar = ["al", "ver", "bak"];
  if (!args[0].includes(komutlar))
    return message.reply("Hatalı kullanım. *puan ver/al/bak @kişi*");
};
exports.conf = {
  aliases: ["para"],
};

exports.help = {
  name: "puan",
};