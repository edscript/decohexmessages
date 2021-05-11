const { readFileSync } = require('fs');
const { DecoMessage } = require('./classes/DecoMessage');

/**
 * Build the messages
 * @param {string} path - JSON file with messages
 * @returns - Message objects
 */
function decohexbuilder(path) {
  const rawMessages = readFileSync(path);
  const objectMessages = JSON.parse(rawMessages);

  const messages = {};

  for (const [key, value] of Object.entries(objectMessages)) {
    messages[key] = new DecoMessage(value);
  }

  return messages;
}

module.exports = { decohexbuilder };
