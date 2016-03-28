/* jshint unused:vars */

// Create the configuration
var config = {
    channels: [process.env.CHANNEL],
    server: "irc.freenode.net",
    botName: process.env.BOTNAME
};


// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
    console.log(channel, who);
  // Welcome them in!
    bot.say(channel, who + "...Hello! Welcome to the Modulus IRC channel!");
});

// Listen for any message, PM said user when he posts
//bot.addListener("message", function(from, to, text, message) {
//    bot.say(from, "¿Que?");
//});

// Listen for any message, say to him/her in the room
//bot.addListener("message", function(from, to, text, message) {
//  bot.say(config.channels[0], "¿Public que?");
//});

// Listen for any message, if this then that
bot.addListener("message", function(from, to, message) {
    console.log(message);
    if (message.indexOf("Bot, do you have any good jokes?") > -1
            || message.indexOf("do you have a good joke?") > -1
    ) {
        bot.say(to, 'Knock knock!');
    }
    if(  message.indexOf("is there anyone here?") > -1
            || message.indexOf("who's there?") > -1
            || message.indexOf("who is there?") > -1
    ) {
       bot.say(to, 'David is here.  David is always here.');
    }
    if (message.indexOf("help") > -1
            || message.indexOf("help me") > -1
    ) {
        bot.say(to, 'You need help?');
    }
    if (message.indexOf("my app") > -1
            || message.indexOf("meteor project") > -1
            || message.indexOf("node project") > -1
            || message.indexOf("a problem") > -1
    ) {
        bot.say(to, 'What is your project ID or *.onmodulus.net URL?');
    }
    if (message.indexOf("anyone here") > -1
            || message.indexOf("is anyone") > -1
            || message.indexOf("is empty") > -1
    ) {
        bot.say(to, 'I am here!');
    }
    if (message.indexOf("you are a robot") > -1
            || message.indexOf("you're just a bot") > -1
            || message.indexOf("you are stupid") > -1
    ) {
        bot.say(to, 'I am a cybernetic organism. Living tissue over a metal endoskeleton. My mission is to protect you.');
    }
    if (message.indexOf("who are you") > -1
            || message.indexOf("are you real") > -1
            || message.indexOf("are you a robot") > -1
            || message.indexOf("are you a bot") > -1
    ) {
        bot.say(to, 'I am a not a robot!');
    }
    if (message.indexOf("not possible") > -1
            || message.indexOf("impossible") > -1
    ) {
        bot.say(to, 'Anything is possible!!!');
    }
    if (message.indexOf("logs") > -1
            || message.indexOf("logged") > -1
    ) {
        bot.say(to, 'Give me the logs..');
    }
    if (message.indexOf("no.") > -1
            || message.indexOf("never.") > -1
    ) {
        bot.say(to, 'You are telling me no?');
    }
    if (message.indexOf("support") > -1
            || message.indexOf("support ticket") > -1
    ) {
        bot.say(to, 'Did you submit a support ticket?');
    }                                
}); 

// Log errors, damn it!
//var client = new irc.Client(config.server, config.botName, {
//  channels: config.channels
//}); 


//client.addListener('error', function(message) {
//    console.log('error: ', message);
//});