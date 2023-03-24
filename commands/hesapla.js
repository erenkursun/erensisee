const Discord = require('discord.js');
const math = require('math-expression-evaluator') 

exports.run = function(client, message, args) {
var soru = args.slice(0).join(' ');

if(!soru) return message.reply('<:ok:1088881942725926982> Bir İşlem Belirtin. **Doğru Kullanım**: p!hesapla <işlem>')
else {
let cevap;
try {
cevap = math.eval(soru)
} catch(err) {
return message.channel.send('<a:x_:1084537865930813511> Hatalı İşlem: Lütfen Sadece Bilinen Tarzda İşlem Yapınız.')
}

const embed = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTitle('Hesaplama Sonucu')
.setDescription(`**Soru: \`${soru}\`\nCevap: \`${cevap}\`**`)
.setFooter({text: `Kullanıcı: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
return message.channel.send({embeds: [embed]})
}


};  

exports.conf = {
aliases: []
}; 

exports.help = {
name: 'hesapla'
};
