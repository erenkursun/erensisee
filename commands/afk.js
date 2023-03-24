const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    var kullanıcı = message.author;
    var sebep = args.slice(0).join("  ");
    
      if (!sebep) return message.channel.send("<:ok:1088881942725926982> Lütfen Bir Sebep Gir!"
      );
      const row = new Discord.ActionRowBuilder()
      .addComponents(
new Discord.ButtonBuilder()
.setLabel("Eminmisin?")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("Eminim")

      )
message.reply({content: "emin misin kardesim", components: [row]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "Eminim") {
    msg.delete()
        message.channel.send("<a:redlax_onay:1088882388953731142> AFK Moda Geçildi.")
        
      db.set(`afk_${kullanıcı.id}`, sebep);
        }
    })
})
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "afk"
};
