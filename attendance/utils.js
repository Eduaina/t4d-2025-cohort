const fs = require('fs')

const csvConverter = (rows, separator = ',', stopWord = '',  config={}) => {
  const {filteredWords, useToPascalCase} = config;
  const headers = rows.shift().toLowerCase().split(separator);
  const convertedData = [];

  for (const row of rows) {
    if (row.toLowerCase().includes(stopWord)) {
      break;
    }
    if (filteredWords !== undefined) {
      if (!filteredWords && row.toLowerCase() === filteredWords || filteredWords && row.toLowerCase().includes(filteredWords)) {
        continue
      }
    }

    const newObj = {};
    const rowValues = row.split(separator);
    headers.forEach((header, ind) => {
      if (useToPascalCase) {
        newObj[toPascalCase(header?.trim().toLowerCase())] = rowValues[ind]?.trim()?.toLowerCase();
      } else {
        newObj[header?.trim().toLowerCase()] = rowValues[ind]?.trim()?.toLowerCase();
      }
    });

    convertedData.push(newObj);
  }

  return convertedData;
};

const csvConverter2 = (rows, headers) => {
  const convertedData = [];
  for (const rowValues of rows) {
    const newObj = {};
    headers.forEach((header, ind) => {
      newObj[header?.trim().toLowerCase()] = rowValues[ind]?.trim()?.toLowerCase();
    });
    convertedData.push(newObj);
  }
  return convertedData;
};

const writeToFile = (item, filename = './files/attendance.csv', createFolder) => {
  const path = filename.split('/')
  path.pop()
  const folderExist = fs.existsSync(path.join('/'), 'utf8');
  // console.log({ path, folderExist });
  if (!folderExist) {
    fs.mkdirSync(path.join('/'));
  }
  return fs.appendFileSync(filename, item, 'utf8')
}
function calculatePercentage(points, totalPoints) {
  console.log({ points, totalPoints })
  return Math.floor((points / totalPoints) * 100);
}
function toPascalCase(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^(.)/, (match, chr) => chr.toUpperCase());
}
exports.modules = {
  csvConverter,
  writeToFile,
  csvConverter2,
  calculatePercentage,
  toPascalCase
}