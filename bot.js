const { Discord, Client, RichEmbed, Attachment } = require("discord.js");
const client = new Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('YouTube', { type: "WATCHING" })

});

client.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed()
   .setTitle("Member Joined!")
   .addField("Name:", member.user)
   .addField("User ID:", member.id)
   .addField("Member Count:", message.memberCount)
   .setColor(0x0463ff)

  member.guild.channels.get('535002095460417561').send(embed); 
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
