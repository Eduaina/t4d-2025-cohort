const studentList = require('../students').modules
const { writeToFile, calculatePercentage } = require('./utils').modules
const assessments = require('./getAssessment').modules

async function handleAssessment([week, total, multiple], saveToCsv = true) {
    const csv = []
  const list = await assessments(week )
  // console.log(list);
  studentList.forEach((student, index) => {
    const studentName = `${student['first name'].trim()} ${student['last name'].trim()}`.trim().toLowerCase()
    const email = student['wt email address'];
    let assessment = list.find(({name, email: Email}) => studentName === name || email === Email)
    if (!assessment){
      // console.log(week, assessment, studentName)
      assessment = {
        'total points': 0
      }
    }
      const mark = calculatePercentage(assessment?.['total points'] || 0, total || 10)
    //   const mark = assessment?.['total points'] || 0
      const score = (assessment && !assessment['total points'] ? 0 : 0)
      const points = (mark + score) * multiple
      console.log({ mark, score, points, week,}, 14/10);
      // csv.push(JSON.stringify({ email, mark, score, points, week, name: assessment?.name }), list.length)
      if (saveToCsv) {
        const data = [
          student["First Name".toLowerCase()],
          student["Last Name".toLowerCase()],
          student["Student ID Number".toLowerCase()],
          student["WT EMAIL ADDRESS".toLowerCase()],
          student["Country".toLowerCase()],
          student["Attendance Sum".toLowerCase()],
          points
        ].join('\t')
        // 10/23/23, 9:01:14 AM

        writeToFile(`${data}\n`, `./assignments/result/${week}/assignment-info.csv`, true)
        writeToFile(`${points}\n`, `./assignments/result/${week}/assignment.csv`, true)
        writeToFile(`${points/10}\n`, `./assignments/result/${week}/score.csv`, true)


      }
      if (csv.length > studentList.length) {
        console.log({studentList: studentList.length, index},  studentList.length-1);
        return
      }
      const number = index + 3
      writeToFile(`=SUM(IF(MOD(COLUMN($G$${number}:$DV$${number}),6)=0,$G$${number}:$DV$${number},0))\n`, `./files/attendance-sum.csv`, true)
    });
  return csv
}
const fs = require('fs');
const path = require('path');

const folderPath = 'assignments/assessments'; // Replace this with the actual path to your folder

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Filter files with the .csv extension
  const csvFiles = files.filter(file => path.extname(file).toLowerCase() === '.csv');

  console.log('CSV Files in the folder:', csvFiles);
  csvFiles.forEach((file) => {
    const name = file.substring(0, file.length-4);
    const [,total=10] = name.split('*')
    const multiple = name.toLowerCase().includes('project') ? 2 : 1
  handleAssessment([name, Number(total), multiple]).then(csv => {
    // console.log(csv, {file});
  })
})
});




console.log('Assessment Tracking:');

