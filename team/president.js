// import the student list

// generate from student a random president
function generateRandomPresident(students) {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
}
