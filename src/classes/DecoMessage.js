const chalk = require('chalk');

class DecoMessage {
  constructor({ decorator, content }) {
    this.decorator = decorator;
    this.content = content;
  }

  colorBuilder({ background, foreground, color }) {
    const colorObject = {};

    if (background) colorObject.formatBackground = chalk.bgHex(background);

    if (foreground) colorObject.formatForeground = chalk.hex(foreground);

    if (color) colorObject.formatColor = chalk.hex(color);

    return colorObject;
  }

  buildDecorator({ type, text }) {
    const { formatForeground, formatColor } = this.colorBuilder(this.decorator);

    const decorators = new Map([
      ['brackets', ['{', '}']],
      ['curly', ['[', ']']],
      ['asterisk', ['*', '*']],
      ['exclamation', ['!', '!']]
    ]);

    const { left, right } = {
      left: decorators.get(type)[0],
      right: decorators.get(type)[1]
    };

    return `${formatColor(`${left}`)}${formatForeground(text.toUpperCase())}${formatColor(`${right}`)}`;
  }

  buildContent(message) {
    const { formatForeground, formatBackground } = this.colorBuilder(this.content);

    return `${formatBackground(`${formatForeground(message)}`)}`;
  }

  print(message) {
    console.log(this.buildDecorator(this.decorator), this.buildContent(message));
  }
}

module.exports = { DecoMessage };
