const Discord = require("discord.js");

const TOKEN = "MzE4MjA1NTAyNTk1MTM3NTM2.DA4rRA.jXyugBJPLDkRx01A5hFwtVEY7TE";
const PREFIX = "~"

var fortunes = [
    "Approves",
    "Disagree",
    "Maybe",
    "Hell Yea",
    "Never",
    "No",
    "Fuck You",
    "Brb Gotta Get Water *24 Hours Later*"
];
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});
     
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        case "info":
            message.channel.sendMessage("Mi Lord Rin Personal Music Bot");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Kurumi can't comprehend");
            break;
        default:
             message.channel.sendMessage("I do not understand ask Rin");
        
    }
});

bot.login(TOKEN);