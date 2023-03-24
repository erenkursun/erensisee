const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
   message.reply(`<:ok:1088881942725926982> **${client.ws.ping}** ms`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};
