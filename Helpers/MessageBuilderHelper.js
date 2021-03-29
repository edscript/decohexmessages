const readJsonFile = require("./JsonHelper")
const MessageBuilder = require('../Models/MessageBuilderModel')

/**
 * JSON file path containing messages content
 * @param {string} jsonMessageFilePath 
 * @returns Array with all messages
 */
function buildMessages(jsonMessageFilePath) {
	const _messageObject = readJsonFile(jsonMessageFilePath)
	const _messageBuilder = {}
	for (const [key, value] of Object.entries(_messageObject)) {
		_messageBuilder[key] = new MessageBuilder(key, value)
	}
	return _messageBuilder
}

module.exports = buildMessages