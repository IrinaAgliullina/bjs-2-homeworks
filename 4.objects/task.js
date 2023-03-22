function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Денис', 'мужской', 26);
let student2 = new Student('Анна', 'женский', 21);
let student3 = new Student('Николай', 'мужской', 24);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
    }

    return this.marks.reduce((total, mark) => total + mark) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}