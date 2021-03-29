const MessageContentBuilder = require('./Builders/MessageContentBuilder')
const MessageDecoratorBuilder = require('./Builders/MessageDecoratorBuilder')
const MessageDecorator = require('./MessageDecoratorModel')
const MessageContent = require('./MessageContentModel')

class MessageBuilder {
	constructor(type, {decorator, content}) {
		this.messageDecorator = new MessageDecorator(decorator)
		this.messageContent = new MessageContent(content)
	}

	/**
	 * Prints the content of the message
	 * @param  {...any} message - Content of the messages that will be displayed
	 */
	print(...message) {
		const _outputMessageDecorator = new MessageDecoratorBuilder(this.messageDecorator)
		const _outputMessageContent = new MessageContentBuilder(this.messageContent, ...message)
		console.log(`${_outputMessageDecorator.contentBuilt} ${_outputMessageContent.contentBuilt}`)
	}
}

module.exports = MessageBuilder
