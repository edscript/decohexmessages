const fs = require('fs')

/**
 * Deserialize a JSON file
 * @param {string} jsonFilePath - JSON file path
 */
function readJsonFile(jsonFilePath) {
  if (!jsonFilePath) throw new Error(`Json file path undefined`)
  if (!jsonFilePath.endsWith('json')) throw new Error(`Invalid extension, must end with .json`)

  const _rawdata = fs.readFileSync(jsonFilePath)
  return JSON.parse(_rawdata)
}
// ===========================================

module.exports = readJsonFile
