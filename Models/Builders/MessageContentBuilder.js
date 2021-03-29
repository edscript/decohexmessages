const chalk = require('chalk')

class MessageContentBuilder {
	constructor(messageObject, ...message) {
		this.contentBuilt = this.buildMessageContent(messageObject, message)
	}
	buildMessageContent({ contentBackgroundColor, contentForegroundColor }, message) {
		if (!contentBackgroundColor) throw new Error('contentBackgroundColor is undefined')
		if (!contentForegroundColor) throw new Error('contentForegroundColor is undefined')
	
		const _contentBackgroundColor = chalk.bgHex(contentBackgroundColor)
		const _contentForegroundColor = chalk.hex(contentForegroundColor)
		const _messageContentTemplate = `${_contentBackgroundColor(_contentForegroundColor(...message))}`
		return _messageContentTemplate
	}
}

module.exports = MessageContentBuilder
