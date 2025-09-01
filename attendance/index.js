const studentList = require('../students').modules
const allAttendanceList = require('./attendanceList').modules
const { writeToFile } = require('./utils').modules

async function handleAttendance(week, saveToCsv = true) {
  const csv = []
  const list = await allAttendanceList(week)
  Object.entries(list).forEach(([date, attendanceList]) => {
    studentList.forEach((student, index) => {
      const email = student['wt email address'];
      const name = `${student['first name'].trim()} ${student['last name'].trim()}`.trim().toLowerCase()
      const attended = attendanceList[name] ? 1 : 0;
      csv.push({ email, attended })
      if (saveToCsv) {
        const data = [
          student["First Name".toLowerCase()],
          student["Last Name".toLowerCase()],
          student["Student ID Number".toLowerCase()],
          student["WT EMAIL ADDRESS".toLowerCase()],
          student["Country".toLowerCase()],
          student["Attendance Sum".toLowerCase()],
          attended
        ].join('\t')
        // 10/23/23, 9:01:14 AM

        writeToFile(`${data}\n`, `./files/result/${week}/attendance-info-${date}.csv`, true)
        writeToFile(`${attended}\n`, `./files/result/${week}/attendance-${date}.csv`, true)


      }
      if (csv.length > studentList.length) {
        console.log({studentList: studentList.length, index}, index => studentList.length-1);
        return
      }
      const number = index + 3
      writeToFile(`=SUM(IF(MOD(COLUMN($G$${number}:$DV$${number}),6)=0,$G$${number}:$DV$${number},0))\n`, `./files/attendance-sum.csv`, true)
    });
  })
  return csv
}

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].forEach(ind => {
  handleAttendance(`week-${ind}`).then(csv => {
    console.log('csv', `week-${ind}`);
  })
})


console.log('Attendance Tracking:');

