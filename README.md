# decohexmessages
> 🍭 Creates your own custom and personalized messages through a json file.
<div align="center">
<!-- [START badges] -->

[![npm package](https://img.shields.io/npm/v/decohexmessages?color=%2306d6a0&label=npm&style=plastic)](https://www.npmjs.com/package/decohexmessages)
![npm package](https://img.shields.io/npm/l/decohexmessages?style=plastic)
![last commit](https://img.shields.io/github/last-commit/edscript0/decohexmessages?color=%23a4a3a2%20&style=plastic)

<!-- [END badges] -->

  <img src="https://cdn.discordapp.com/attachments/794954957790511134/826346835227705410/unknown.png" width="600" alight="center">
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
      "decoratorType": "curly",
      "decoratorTypeColor": "#06d6a0",
      "decoratorTypeText": "success",
      "decoratorTypeForeground": "#fff"
    },
    "content": {
      "contentForegroundColor": "#fff",
      "contentBackgroundColor": "#000"
    }
  }
}
```
Create an *example.js* file to see the simplicity of this package 
```js
const decohex = require('decohexmessages');

const { exampleMessage } = decohex('./example.json')
exampleMessage.print('My first time using this awesome package')
```
Execute script on the command line and see the magic
```terminal
node example.js
```

## JSON Options

Colors must be in **hexadecimal** format and all values must be provided for the respective JSON file.

### decorator
| Option | Description | Usage |
| :---: | :---: | :---: |
| `decoratorType` | Decorator type | `brackets` [] `curly` {} `asterisk` * `exclamation` ! |
| `decoratorTypeColor` | Decorator color | `#aaffcc` |
| `decoratorTypeText` | Decorator text | `Custom text` | 
| `decoratorTypeForeground` | Decorator text color | `#aaffcc` |

### content
| Level | Description | Usage |
| :---: | :---: | :---: | 
| `contentForegroundColor` | Content text color | `#aaffcc` |
| `contentBackgroundColor` | Content background color | `#aaffcc` |



## Tutorial 
Create a `customMessages.json` file
```json
{
  "success": {
    "decorator": {
      "decoratorType": "curly",
      "decoratorTypeColor": "#06d6a0",
      "decoratorTypeText": "success",
      "decoratorTypeForeground": "#fff"
    },
    "content": {
      "contentForegroundColor": "#fff",
      "contentBackgroundColor": "#000"
    }
  },
"warning": {
    "decorator": {
      "decoratorType": "brackets",
      "decoratorTypeColor": "#ffa314",
      "decoratorTypeText": "warning",
      "decoratorTypeForeground": "#fff"
    },
    "content": {
      "contentForegroundColor": "#d7ee5e",
      "contentBackgroundColor": "#ffff3f"
    }
  }
}
```
Write this simple code to create the messages from the `customMessages.json`.

```javascript
const decohex = require('decohexmessages');

// ES6 destructuring style
const { success, warning } = decohex('./customMessages.json')

success.print('Using destructuring is much cooler!')
warning.print('Using destructuring is not a ⌨️ warning!')

// or through object property
// const messages = decohex('./customMessages.json')
// messages.success.print('This is a success message or not!')
// messages.warning.print('This is a WARNING message AHAH')
```
After the object destructuring you can call the object method `print("your messages", "can", "contain", "multiple", "objects")` to display the custom message.
