const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("<:ok:1088881942725926982> Üyeleri Atma Yetkiniz Yok.")


        let user = message.mentions.users.first();




        if(!user) return message.channel.send("<:ok:1088881942725926982> Lütfen Atılacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.kick()








message.channel.send("<:ok:1088881942725926982> Kullanıcıyı <:ok:1088881942725926982> Attım.")




}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "kick"
};