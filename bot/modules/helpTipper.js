'use strict';
let config = require('config');
let wcnFee = config.get('wcn').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Widecoin (WCN) Tipper**\n    Transaction Fees: **' + wcnFee + '**\n' +        
      '__**Commands**__\n' +
      '  **' + prefix + 'tipwcn** : Displays This Message\n' +
      '  **' + prefix + 'tipwcn balance** : get your balance\n' +
      '  **' + prefix + 'tipwcn deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tipwcn withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tipwcn <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tipwcn private <@user> <amount>** : put private before Mentioning a user to tip them privately\n'
    );
  }
};
