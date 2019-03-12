const { Discord, Client, RichEmbed, Attachment } = require("discord.js");
const client = new Client({disableEveryone: true});
const Canvas = require('canvas');
const snekfetch = require('snekfetch');



client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

client.on("guildMemberRemove", member => {
  let embed = new Discord.RichEmbed()
   .setTitle("Member Left")
   .addField("Name:", member.user)
   .addField("User ID:", member.id)
   .addField("Member Count:", message.guild.memberCount)
   .setColor(0x0463ff)

  member.guild.channels.get('535002095460417561').send(embed); 
});


client.on("message", async message => {
    
    let prefix = "t.";

const args = message.content.slice(prefix.length).trim().split(/\s+/g);

const command = args.shift().toLowerCase();
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;



if(command === 'ping') {

message.channel.send(`Hoold on!`).then(m => {

    m.edit(`🏓  ::  **Pong!** (Roundtrip took: **` + (m.createdTimestamp - message.createdTimestamp) + `ms.** Heartbeat: **` + Math.round(client.ping) + `ms.**)`);

    });

 }

});

client.login(process.env.BOT_TOKEN)
