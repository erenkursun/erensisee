const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
   const random = Math.floor(Math.random() * 99) + 1
   
   message.channel.send("<:ok:1088881942725926982> Hmm... Şanslı Sayın `"+random+"` Mi?")
  
};
exports.conf = {
  aliases: ["şanslı-sayım", "şansli-sayim", "sansi-sayim", "ss", "s-s"]
};

exports.help = {
  name: "şanslısayım"
};
