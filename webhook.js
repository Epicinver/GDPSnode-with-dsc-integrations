// oh wow

let /* make it let because i can just do that. also make a comment inbetween cuz i can just do that */ webhookurl = require('./config').webhook;
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook(webhookurl);

function infoWebhookEmbed(description, webhook){
    try {
        const embed = new MessageBuilder()
            .setTitle("GDPS - Info") // is there a variable that has the name of the GDPS thatd be awesome thankb
            .setDescription(description)
            .setColor("#2596be");

        webhook.send(embed)
    } catch (error) {
        console.error(`\x1b[1;31m✗ There was an error sending messages to the Discord webhook. If you have not set a webhook, you can safely ignore this message. Otherwise, change your webhook URL in the config file.\x1b[0m`, error);
    }

    // there we go now we copy
}


function errorWebhookEmbed(description, webhook){
    const embed = new MessageBuilder()
        .setTitle("GDPS - Error") // is there a variable that has the name of the GDPS thatd be awesome thankb
        .setDescription(description)
        .setColor("#2596be");

    try {
        webhook.send(embed)
    }
    catch (error) {
        console.error(`\x1b[1;31m✗ There was an error sending messages to the Discord webhook. If you have not set a webhook, you can safely ignore this message. Otherwise, change your webhook URL in the config file.\x1b[0m`, error);
    }
    // there we go now we copy
}


function warnWebhookEmbed(description, webhook){
    const embed = new MessageBuilder()
        .setTitle("GDPS - Warning") // is there a variable that has the name of the GDPS thatd be awesome thankb
        .setDescription(description)
        .setColor("#2596be");

    try {
        webhook.send(embed)
    }
    catch (error) {
        console.error(`\x1b[1;31m✗ There was an error sending messages to the Discord webhook. If you have not set a webhook, you can safely ignore this message. Otherwise, change your webhook URL in the config file.\x1b[0m`, error);
    }
    // there we go now we copy
}

module.exports = {
    warnWebhookEmbed,
    infoWebhookEmbed,
    errorWebhookEmbed,
    hook
}
