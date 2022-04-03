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

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);