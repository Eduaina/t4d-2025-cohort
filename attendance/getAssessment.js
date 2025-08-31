const fs = require('fs')
const { csvConverter2 } = require('./utils').modules
const parse = require('csv').parse

const get = async (week) => {
    const assessments = fs.readFileSync(`./assignments/assessments/${week}.csv`, 'utf-8')
    const csv = await parse(assessments, { bom: true }).toArray()
    const headers = csv.shift()
    return csvConverter2(csv, headers)
}
exports.modules = get