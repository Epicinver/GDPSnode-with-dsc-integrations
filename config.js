module.exports = {
    // Change this parameter to start the server at a different port.
    // To not require typing in a port, use port 80 (requires root/admin usually), or port 443 in case of https.
    port: 10000,
    // GDPS Switcher-related configs
    motd: 'A GDPSnode Private Server.',
    icon: 'https://raw.githubusercontent.com/Kingminer7/gdps-switcher/refs/heads/main/resources/gdlogo.png',
    lang: 'js',
    // this (lang item) isn't part of the GDPS Switcher JSON payload, but i'll include it to differentiate GDPSnode from regular PHP. You can feel free to remove "lang" from the getInfo.js file in the endpoints folder to mask your server, or change this to whatever you feel like.
    // dsc integration
    webhook: 'https://discord.com/api/webhooks/1555568238090522704/Cr1QYWFZEMescp8wT5JEQxklyA0_yVJiTUsNChPNwtrmx4nOwFedwOvZRbocM1koLe5P',
    //             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //                                      replace with your discord webhook
    // if you leave the placeholder webhook the server will run as normal, but youll get notices in the console about the
    // webhook. webhooks are completely optional :)
};