'use strict'

const controller   = require('botkit').slackbot(),
      partyStrings = require('./src/partyStrings');
      
controller.spawn({
  token: process.env.PARTYBOT_TOKEN,
}).startRTM();

controller.hears(partyStrings, ['ambient'], (bot, message) => {
  bot.reply(message,  'Woo hooooo!');    
});
