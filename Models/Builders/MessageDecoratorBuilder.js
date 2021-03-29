const chalk = require('chalk')

class MessageDecoratorBuilder {
	constructor(messageDecoratorObject) {
		this.contentBuilt = this.buildMessageDecorator(messageDecoratorObject)
	}

	buildMessageDecorator(messageObject) {
			switch (messageObject.decoratorType) {
				case 'brackets':
					return buildMessageDecoratorTemplate(messageObject, {leftDecorator: '[', rightDecorator: ']'})
				case 'curly':
					return buildMessageDecoratorTemplate(messageObject, {leftDecorator: '{', rightDecorator: '}'})
				case 'asterisk':
					return buildMessageDecoratorTemplate(messageObject, {leftDecorator: '*', rightDecorator: '*'})
				case 'exclamation':
					return buildMessageDecoratorTemplate(messageObject, {leftDecorator: '!', rightDecorator: '!'})
				default:
					throw new Error(`${messageObject.decoratorType} doesn't exist!`)
			}

			function buildMessageDecoratorTemplate({ decoratorTypeColor, decoratorTypeText, decoratorTypeForeground }, {leftDecorator, rightDecorator}) {
				const _decoratorTypeColor = chalk.hex(decoratorTypeColor)
				const _decoratorTypeText = decoratorTypeText
				const _decoratorTypeForeground = chalk.hex(decoratorTypeForeground)
				const template = `${_decoratorTypeColor(leftDecorator)}${_decoratorTypeForeground(_decoratorTypeText)}${_decoratorTypeColor(rightDecorator)}`
				return template
			}
	}
}

module.exports = MessageDecoratorBuilder
