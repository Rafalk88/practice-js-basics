function Student(initFirstName, initLastName) {
    this.firstName = initFirstName
    this.lastName = initLastName
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function(subject) {
    if (this.grades[subject] !== undefined) {
        let avg = 0
        this.grades[subject].forEach(function(num) {
            avg += num
        })
        return (avg / this.grades[subject].length)
    } else {
        let avgSub = 0
        let avg = 0
        let arrLength = 0
        const {grades: {maths: mathsArr}} = student
        const {grades: {english: englishArr}} = student
        mathsArr.forEach(function(num){
            avgSub += num
        })
        avg = avgSub
        avgSub = 0
        englishArr.forEach(function(num){
            avgSub += num
        })
        avg += avgSub
        arrLength = mathsArr.length + englishArr.length
        return (avg / arrLength)
    }
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths')
const avg = student.getAverageGrade();

console.log(`Średnia z przedmiotu maths wynosi: ${avgMath}`)
console.log(`Średnia ogółem wynosi: ${avg}`)