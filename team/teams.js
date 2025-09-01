const fs = require('fs')
const { csvConverter } = require('../attendance/utils').modules

const teamCsv = fs.readFileSync('./team.csv', 'utf-8')
const list = teamCsv.split('\n');//.slice(1);

exports.modules = csvConverter(
  list, ',', 'end-search', { useToPascalCase: true }
)