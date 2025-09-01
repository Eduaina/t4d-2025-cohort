const fs = require('fs')
const { csvConverter } = require('../attendance/utils').modules

const studenstCsV = fs.readFileSync('../students/students.csv', 'utf-8')
const list = studenstCsV.split('\n');//.slice(1);
exports.modules = csvConverter(list, ',', '3. In-Meeting Activities', { useToPascalCase: true })