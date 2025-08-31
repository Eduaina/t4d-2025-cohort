const parse = require('csv').parse
const fs = require('fs')
const { writeToFile, calculatePercentage } = require('./utils').modules

const sum = async (test1, test2, total) => {
    const rawScore1 = fs.readFileSync(`./assignments/result/${test1}/score.csv`, 'utf-8')
    const rawScore2 = fs.readFileSync(`./assignments/result/${test2}/score.csv`, 'utf-8')
    const score1 = await parse(rawScore1, { bom: true }).toArray()
    const score2 = await parse(rawScore2, { bom: true }).toArray()
    // Sum corresponding scores
    const totalScores = [];
    for (let i = 0; i < score1.length; i++) {
        const entry1 = parseFloat(score1[i]); // Assuming the score is a number
        const entry2 = parseFloat(score2[i]); // Assuming the score is a number

        if (isNaN(entry1) || isNaN(entry2)) {
            throw new Error('Invalid score format. Scores must be numeric.');
        }

        const score = calculatePercentage(entry1 + entry2, total)
        totalScores.push(score);
        writeToFile(`${score/10}\n`, `./assignments/result/${test1} plus ${test2}/score.csv`, true)
    }
    return totalScores;
}


[['week-2', 'week-2 copy', 110]].forEach(([test1, test2, total]) => {
    sum(test1, test2, total).then(csv => {
      console.log(csv, `week-${test1}`);
    })
  })