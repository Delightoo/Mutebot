const Discord = require('discord.js');
const con = console.log
const {Attachment} = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = ('!')
bot.login('NzM3NTgxMTg3NDY3NTc1MzQ3.Xx_cAg.Vk5oIhC4HOBkn1fkfACj7P8_Euk')

bot.on('ready', function () {
  let membercount = bot.guilds.size;
  let memberCount = bot.users.size;
  let serverCount = bot.guilds.size;
  con(
    `${"-".repeat(40)}\n`                         + 
    "|  Bienvenue sur: DelightBot-Logs.  |\n" + 
    `${"-".repeat(40)}\n`                         +  
    "Information du bot : \n"                     +
    `Nom du bot    : ${bot.user.tag}!\n`          + 
    `ID du bot     : ${bot.user.id}\n`            +
    `Token: du bot : ${bot.token}\n`              +
    `${"-".repeat(40)}\n`                         +
    "Stats bot : \n"                              +
    `Utilisateurs : ${memberCount}\n`             +
    `Serveurs     : ${serverCount}\n`             +
    `${"-".repeat(40)}\n`
  );
    bot.user.setActivity(`${membercount} guilds ! `, {type: 'WATCHING'});
    bot.user.setStatus("online");

});

bot.on("guildMemberAdd", function(message) {

  let guild = message.guild;
  let member = message;
  let membercount = client.users.size;
  
  const embed2 = new Discord.RichEmbed()
  .setColor('#ff1a1a')
  .setDescription(`**\n** Omega Salutation **${member.user} **, **\n**   ➔ Bievenue sur **${guild.name}**, **\n**   ➔ Pour voir tous les salons tape : **verif**.`)
  .setThumbnail(member.user.avatarURL)
  member.guild.channels.find(`name`, `v2rif`).send(embed2)

})

bot.on('message', message => {
  if (message.content ===  "verif"){
let member = message.guild.member(message.author);
member.addRole('737074822097666158')
member.guild.channels.find(`name`, `v2rif`).send(`> ${member}, tu as désormais accès à tous les salons.`)

  }
})