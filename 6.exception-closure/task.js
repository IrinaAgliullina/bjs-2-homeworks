// Задача 1. Форматтер чисел

function parseCount(value) {
  if(!Number.parseFloat(value)) {
  	const error = new Error('Невалидное значение');
    throw error;
  }
  return Number.parseFloat(value);
}

function validateCount(value) {
  try {
  	return parseCount(value);
  } catch(error) {
  	return error;
  }
}

// Задача 2. Треугольник

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      const error = new Error('Треугольник с такими сторонами не существует');
  	  throw error;
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this._perimeter = a + b + c;
    this._area = Number(Math.sqrt((this._perimeter / 2) * (this._perimeter / 2 - a) * (this._perimeter / 2 - b) * (this._perimeter / 2 - c)).toFixed(3));
  }
  
  get perimeter() {
  	return this._perimeter;
  }
  
  get area() {
  	return this._area;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      
      get area() {
        return 'Ошибка! Треугольник не существует';
      } 
    }
  }
}