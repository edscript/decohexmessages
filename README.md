# decohexmessages

> 🍭 Creates your own custom and personalized messages through a json file.

<div align="center">
<!-- [START badges] -->

[![npm package](https://img.shields.io/npm/v/decohexmessages?color=%2306d6a0&label=npm&style=plastic)](https://www.npmjs.com/package/decohexmessages)
![npm package](https://img.shields.io/npm/l/decohexmessages?style=plastic)
![last commit](https://img.shields.io/github/last-commit/edscript0/decohexmessages?color=%23a4a3a2%20&style=plastic)

<!-- [END badges] -->
  <img src="https://i.imgur.com/zfOpS0D.gif" width="600" alight="center">
</div>
<hr>
<b>Anyone can to contribute to this awesome project 😆</b>
<br>

## Install

```bash
npm i decohexmessages
# or "yarn add decohexmessages"
```

## Usage

Create a `example.json` with this **example** options

```json
{
  "exampleMessage": {
    "decorator": {
      "type": "curly",
      "text": "success",
      "color": "#06d6a0",
      "foreground": "#fff"
    },
    "content": {
      "background": "#000",
      "foreground": "#fff"
    }
  }
}
```

Create an _example.js_ file to see the simplicity of this package

```js
const { decohexbuilder } = require('decohexmessages');

const { exampleMessage } = decohexbuilder('./example.json');
exampleMessage.print('My first time using this awesome package');
```

Execute script on the command line and see the magic

```terminal
node example.js
```

## JSON Options

Colors must be in **hexadecimal** format and all values must be provided for the respective JSON file.

### decorator

|    Option    |     Description      |                         Usage                          |
| :----------: | :------------------: | :----------------------------------------------------: |
|    `type`    |    Decorator type    | `brackets` [] `curly` {} `asterisk` \* `exclamation` ! |
|    `text`    |    Decorator text    |                     `Custom text`                      |
|   `color`    |   Decorator color    |                       `#aaffcc`                        |
| `foreground` | Decorator text color |                       `#aaffcc`                        |

### content

|    Level     |       Description        |   Usage   |
| :----------: | :----------------------: | :-------: |
| `background` | Content background color | `#aaffcc` |
| `foreground` |    Content text color    | `#aaffcc` |

## Tutorial

Create a `customMessages.json` file

```json
{
  "success": {
    "decorator": {
      "type": "curly",
      "text": "success",
      "color": "#06d6a0",
      "foreground": "#fff"
    },
    "content": {
      "background": "#000",
      "foreground": "#fff"
    }
  },
  "warning": {
    "decorator": {
      "type": "brackets",
      "text": "#ffa314",
      "color": "warning",
      "foreground": "#fff"
    },
    "content": {
      "background": "#ffff3f",
      "foreground": "#d7ee5e"
    }
  }
}
```

Write this simple code to create the messages from the `customMessages.json`.

```javascript
const { decohexbuilder } = require('decohexmessages');

// ES6 destructuring style
const { success, warning } = decohexbuilder('./customMessages.json');

success.print('Using destructuring is much cooler!');
warning.print('Using destructuring is not a ⌨️ warning!');

// or through object property
// const messages = decohexbuilder('./customMessages.json')
// messages.success.print('This is a success message or not!')
// messages.warning.print('This is a WARNING message AHAH')
```

After the object destructuring you can call the object method `print("your messages", "can", "contain", "multiple", "objects")` to display the custom message.
