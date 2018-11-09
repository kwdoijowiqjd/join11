const Discord = require('discord.js');
const bot1 = new Discord.Client();

const ID= '474573718967025665';
bot1.on('ready', () => {
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${bot1.guilds.size} " ]`);
    console.log(`Users! [ " ${bot1.users.size} " ]`);
    console.log(`channels! [ " ${bot1.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });
bot1.on('message', message => {
    if(message.content.startsWith(`JoinVoice`)){
        const channel1 = message.guild.channels.find('name', "Music");
        channel1.join();
        message.channel.send(`DONE!`)
    }
});

bot1.login('NTEwNDY3NjY0MDc5MDkzNzYw.DscxtA.XL9EZwJDz6lCc3WQVeXUq4FEoJU');
