const studentList = require('../students');
const teamsList = require('./teams.js');
const fs = require('fs')


const shuffleList = (arrayStudent) => {
    for (let i = arrayStudent.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = arrayStudent[i]
        arrayStudent[i] = arrayStudent[j];
        arrayStudent[j] = temp
    }
}

const randomSelector = (size=2, students, teamsMembers) => {
    // Shuffle teamsMembers to randomize team assignment
    const teamsPool = [...teamsMembers];
    shuffleList(teamsPool);
    let teams = [];
    let len = students.length;
    // If odd, leave last student out (or handle as needed)
    len = len % size !== 0 ? students.length - (len % size) : students.length;
    let teamIdx = 0;
    const groupStudents = {}
    for (let idx = 0; idx < len; idx += size) {
        const group = students.slice(idx, idx + size).map((student) => {
            // Assign a team from teamsPool, cycling if more groups than teams
            const teamInfo = teamsPool[teamIdx % teamsPool.length];
            teamIdx++;
            if (!groupStudents[teamInfo.Teamid]) {
                groupStudents[teamInfo.Teamid] = [];
            }
            groupStudents[teamInfo.Teamid].push(student);
            
            return {
                ...student,
                GroupName: teamInfo.TeamName,
                team: teamInfo
            };
        });
        teams.push(group);
    }
    return {teams, groupStudents};
}
const student =  (studentList.modules)
const teamsMembers =  (teamsList.modules)

shuffleList(student)
shuffleList(student)

// console.log(student);
const {teams:teamNames, groupStudents} = randomSelector(5, student, teamsMembers)
// console.log(groupStudents.length, teamNames.length);

const {teams} = randomSelector(2, student, teamsMembers)
const toTeamsJson = `
const allTeams = ${JSON.stringify(teamsMembers, null, 2)};
const groupStudents = ${JSON.stringify(groupStudents, null, 2)};
`;
const partners = `
const allPartners = ${JSON.stringify(teams, null, 2)}
`;
fs.writeFileSync('./teamMembers.js', toTeamsJson, 'utf-8')
fs.writeFileSync('./groups.js', partners, 'utf-8')

console.log('Teams have been generated successfully')
