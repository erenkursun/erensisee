const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`<a:psoprime_emoji:1084585759195021422> **p!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n<a:psoprime_emoji:1084585759195021422>  **p!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n<a:psoprime_emoji:1084585759195021422> **p!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n<a:psoprime_emoji:1084585759195021422> **p!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n<a:psoprime_emoji:1084585759195021422> **p!yardım bot |** Bot Komutlarını Gösterir\n\n<a:psoprime_emoji:1084585759195021422> **PSOPrime Bağlantılar** <a:psoprime_emoji:1084585759195021422>\n\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:psoprime_emoji:1084585759195021422> Ana Komutlar <a:psoprime_emoji:1084585759195021422>")
.setDescription("**p!istatistik |** Botun istatistiklerini gösterir\n**p!linkler |** Botla Alakalı Linkleri Alırsınız\n**p!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**p!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:psoprime_emoji:1084585759195021422> Yetkili Komutları <a:psoprime_emoji:1084585759195021422>")
.setDescription("**p!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**p!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**p!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**p!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**p!kick |** İstediğiniz kişiyi sunucudan atar\n**p!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**p!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**p!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**p!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**p!temizle |** Belirtilen miktar mesajı siler\n**p!unban |** Belirtilen kişinin banını kaldırır\n**p!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:psoprime_emoji:1084585759195021422> Eğlence Komutları <a:psoprime_emoji:1084585759195021422>")
.setDescription("**p!alkış |** Bot Alkışlar\n**p!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**p!emojiyazı |** Bot mesajınızı emoji haline getirir\n**p!hackle |** Etiketlediğiniz kişiyi hackler\n**p!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**p!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**p!slot |** Slots oyununu oynar\n**p!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:psoprime_emoji:1084585759195021422> Kullanıcı Komutları <a:psoprime_emoji:1084585759195021422>")
.setDescription("**p!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**p!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**p!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**p!emojiler |** Sunucuda bulunan emojileri gösterir\n**p!hesapla |** Belirtilen işlemi yapar\n**p!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**p!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**p!not-al |** Bot not alır\n**p!notum |** Notunuzu gösterir\n**p!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**p!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:psoprime_emoji:1084585759195021422> Ayarlamalı Komutları <a:psoprime_emoji:1084585759195021422>")
.setDescription("**p!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**p!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**p!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**p!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**p!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**p!sa-as |** Oto sa-ası ayarlarsınız\n**p!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}