const { writeToFile } = require('./utils').modules
const studentList = require('../students').modules

studentList.forEach((student, index) => {
    const email = student['wt email address'];
    const name = `${student['first name'].trim()} ${student['last name'].trim()}`.trim().toLowerCase()

    writeToFile(`${email}\n`, `./files/students-email.csv`, true)
    console.table({ message: "saved student email", email })
    writeToFile(`${name}\n`, `./files/students-name.csv`, true)
    console.table({ message: "saved student name", name })
})