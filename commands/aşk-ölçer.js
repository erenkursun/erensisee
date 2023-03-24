const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")

exports.run = async (client, message, args) => {

  const user = message.mentions.users.first()
  if(!user) return message.channel.send("<:ok:1088881942725926982> Lüten Birini Etiketle!!")
  
  const tahmin = Math.floor(Math.random() * 99) + 1
  var kalp;
  var yorum; 
  
  if(tahmin <= 25) {
    kalp = `❤️🖤🖤🖤🖤🖤`
    yorum = "Bu İş Olmaz Sen Bunu Unut."
  }
  
  if(tahmin >= 25) {
    kalp = `❤️❤️🖤🖤🖤🖤`
    yorum = "Azıcıkta Olsa Bir Şeyler Hissediyor Sana. :)"
  }
  
  if(tahmin >= 50) {
    kalp = `❤️❤️❤️🖤🖤🖤`
    yorum = "Eh Biraz Biraz Bir Şeyler Var Gibi."
  }
  
  if(tahmin >= 75) {
     kalp = `❤️❤️❤️❤️🖤🖤`
     yorum = "Biraz Daha Uğraşırsan Bu İş Olacak Gibi :)"
  }

  if(tahmin >= 85) {
    kalp = `❤️❤️❤️❤️❤️🖤`
    yorum = "Oluyor Gibi :))"
  }
  
  if(tahmin === 100) {
    kalp = `❤️❤️❤️❤️❤️❤️`
    yorum = "Sizi Evlendirelim <3"
  }
  
  message.channel.send({ embeds: [
    new EmbedBuilder()
    .setColor("Red")
    .setDescription(`Aşk Yüzdesi: %${tahmin}\n${kalp}\n\n${yorum}`)
  ]})
  
};
exports.conf = {
  aliases: ["aşkölcer", "askölcer"]
};

exports.help = {
  name: "aşkölçer"
};