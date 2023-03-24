const Discord = require("discord.js");

exports.run = async (client, message, args) => {


  const random = Math.floor(Math.random() * 99) + 1
  
  message.channel.send(`<:ok:1088881942725926982> Malafatın tam **${random}cm** :flushed:`)




}

  exports.conf = {
  aliases: ["sapık-erensibot"]
};

exports.help = {
  name: "kaçcm"
};