// Задача 1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача 2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let foundedBook = this.books.find(book => book[type] === value);

    if (foundedBook === undefined) { // если книга не найдена, вернуть null
      return null;
    }
    return foundedBook;
  }

  giveBookByName(bookName) {
    let bookToGive = this.findBookBy('name', bookName);

    if (bookToGive !== null) { // если книга найдена, удалить из библиотеки
      this.books.splice(this.books.indexOf(bookToGive, 1));
    }
    return bookToGive;
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
  new NovelBook(
    "Герберт Уэллс", 
    "Машина времени", 
    1895, 
    138
  )
);
library.addBook(
  new Book(
    "Преображенский П.А.",
    "Очерк истории Самарского края", 
    1919, 
    96
  )
);
const picknick = new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
library.addBook(picknick);

console.log("Найдена книга 1919 года издания: ", library.findBookBy("releaseDate", 1919));

library.giveBookByName("Пикник на обочине");
picknick.state = 90;

console.log("Состояние книги 'Пикник на обочине' до ремонта: ", picknick.state);
picknick.fix();
console.log("Состояние после ремонта: ", picknick.state);

library.addBook(picknick);
console.log("Найдена книга после ремонта: ", library.findBookBy("name", "Пикник на обочине"));

// Задача 3. Журнал успеваемости

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (this.marks.hasOwnProperty([subject]) === false) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty([subject]) === false || this.marks[subject].length === 0) {
        return 0;
    }

    return this.marks[subject].reduce((total, mark) => total + mark) / this.marks[subject].length;
  }

  getAverage() {
    let subjectsArray = Object.keys(this.marks);
    return subjectsArray.reduce((total, current, index, subjectsArray) => total + this.getAverageBySubject(subjectsArray[index]), 0) / subjectsArray.length;
  }
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");

console.log(student);
console.log('Средняя оценка по физике: ', student.getAverageBySubject("физика"));
console.log('Общая средняя оценка: ', student.getAverage());