// oh wow

let /* make it let because i can just do that. also make a comment inbetween cuz i can just do that */ webhookurl = require('./config').webhook;
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook(webhookurl);

function infoWebhookEmbed(description, webhook){
    const embed = new MessageBuilder()
        .setTitle("GDPS - Info") // is there a variable that has the name of the GDPS thatd be awesome thankb
        .setDescription(description)
        .setColor("#2596be");

    webhook.send(embed)

    // there we go now we copy
}


function errorWebhookEmbed(description, webhook){
    const embed = new MessageBuilder()
        .setTitle("GDPS - Error") // is there a variable that has the name of the GDPS thatd be awesome thankb
        .setDescription(description)
        .setColor("#2596be");

    webhook.send(embed)

    // there we go now we copy
}


function warnWebhookEmbed(description, webhook){
    const embed = new MessageBuilder()
        .setTitle("GDPS - Warning") // is there a variable that has the name of the GDPS thatd be awesome thankb
        .setDescription(description)
        .setColor("#2596be");

    webhook.send(embed)

    // there we go now we copy
}

module.exports = {
    warnWebhookEmbed,
    infoWebhookEmbed,
    errorWebhookEmbed
}

//