const fs = require('fs/promises')
const fs2 = require('fs')
const { csvConverter } = require('./utils').modules
async function getAttendance(week) {

    const directory = `./files/attendance/${week}/`
    const files = await fs.readdir(directory);
    const attendances = {};
    for (let file of files) {
        if (!file.startsWith('.')) {
            const path = directory + file
            const attendanceCsvList = fs2.readFileSync(path, 'utf-8')
            const list = attendanceCsvList.split('\n')
            const attendanceList = csvConverter(list, '\t', '3. in-meeting activities', "")
            if (!attendanceCsvList) continue;
            console.log({attendanceList, path}, attendanceList?.[0]?.['first join (utc)']);
            const [day] = (attendanceList[0]['first join (utc)'] ||attendanceList[0]['first join'] || attendanceList[0]?.timestamp || attendanceList[0]?.['join time'])?.split?.(',')
            const date = day.replaceAll('/', '-')
            attendances[date] = attendances[date] ?? {}
            for (let attendance of attendanceList) {
             let name = attendance['full name']?.replace?.(/\s+/g, ' ').trim();
             name = name ?? attendance.name.replace(/\s+/g, ' ').trim();
                attendances[date][name] = { ...attendance, date, 'full name': name }}
            
        }
    }
    return attendances
}
exports.modules = getAttendance