var p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++) {
  p[i].addEventListener('click', function (event) {
    event.target.style.color = 'red';
    console.log(event);
  });
}

document.getElementById('wrapper').addEventListener('click', function (event) {
  var tagName = event.target.tagName.toLowerCase();
  if (tagName === 'p' || tagName === 'li') {
    event.target.style.color = 'blue';
  }

  if (event.target.classList.contains('color')) {
    event.target.style.color = 'red';
  }
});

document.querySelector('#alert').addEventListener('click', function () {
  alert('Hello!');
});

document.querySelector('#confirm').addEventListener('click', function () {
  var decision = confirm('Are you sure?');
  if (decision === true) {
    alert("It's true!");
  } else {
    alert("It's false!");
  }
});

document.querySelector('#prompt').addEventListener('click', function () {
  console.log(prompt('What is your Name?'));
});

var string = '1,2,3,4,5,6,7';
var arrayOfStrings = string.split(',');
var num = arrayOfStrings.map(function (i) {
  return i * 2;
});
console.log(num);

var num = 2.01;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.random() * 2);

var person = {
  name: 'Max',
  age: 18,
  car: {
    model: 'Ford',
  },
  job: 'FrontEnd',
  friends: ['Vadik', 'Bailey'],
};

var toString = JSON.stringify(person);
console.log(JSON.parse(toString));

document.querySelector('button').addEventListener('click', function (event) {
  var value = document.querySelector('input').value;
  document.querySelector('h1').innerHTML = value;
  console.log(value);
});

function Car(name, year) {
  this.name = name;
  this.year = year;
}

Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

let ford = new Car('Ford', 1959);
let niva = new Car('Niva', 1972);

console.log(ford);
console.log(niva);

var ford = Object.create(
  {
    calculateMileagePerYear: function () {
      Object.defineProperty(this, 'distancePerYear', {
        value: Math.ceil(this.mileage / this.age),
        enumerable: true,
        writable: true,
        configurable: true,
      });
    },
  },
  {
    name: {
      value: 'Ford',
      enumerable: true,
      writable: false,
      configurable: false,
    },
    model: {
      value: 'Focus',
      enumerable: true,
      writable: false,
      configurable: false,
    },
    year: {
      value: 2015,
      enumerable: true,
      writable: false,
      configurable: false,
    },
    mileage: {
      value: 120500,
      enumerable: true,
      writable: true,
      configurable: false,
    },
    age: {
      enumerable: true,
      get: function () {
        console.log('Calculating the age');
        return new Date().getFullYear() - this.year;
      },
      set: function () {
        console.log('Setting new age');
      },
    },
  }
);

//to display all of the properties within ford object
for (let key in ford) {
  if (ford.hasOwnProperty(key)) {
    console.log(key, ford[key]);
  }
}

/////////////hasOwnProperty old vs new:

var person = {
  name: 'Max',
  age: 28,
  job: 'FrontEnd',
};

//old:
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

//new:
Object.keys(person).forEach(function (key) {
  console.log(person[key]);
});

////////////JS Closures:

var createCounter = function () {
  var counter = 0;

  return {
    increment: function () {
      counter++;
    },
    decrement: function () {
      counter--;
    },
    getCounter: function () {
      return counter;
    },
  };
};

var counterA = createCounter('This is for counterA: ');
var counterB = createCounter('This is for counterB: ');

counterA.increment();
counterA.increment();
counterA.increment();
counterA.increment();

counterB.decrement();
counterB.decrement();
counterB.decrement();

//////////Context:

var person = {
  age: 28,
  name: 'Max',
  job: 'FrontEnd',
  displayInfo: function (ms) {
    let self = this; //defined variable self, as closure, to use it in the function below

    setTimeout(function () {
      console.log('Name: ', self.name); //this was reading from setTimeOut function, that used WINDOW as it's object, within the function.
      console.log('Job: ', self.job);
      console.log('Age: ', self.age);
    }, ms);
  },
};

person.displayInfo(2500);

//or it can be done with bind method:

var person = {
  age: 28,
  name: 'Max',
  job: 'FrontEnd',
  displayInfo: function (ms) {
    setTimeout(
      function () {
        console.log('Name: ', this.name);
        console.log('Job: ', this.job);
        console.log('Age: ', this.age);
      }.bind(this),
      ms
    ); //as bind is outside the function, it's still referencing to previous definition of the word "this", which is "person".
  },
};

person.displayInfo(2500);

/////////////Context 2:

function printObject(objName) {
  console.log('Printing object: ', objName);
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      console.log('[' + key + ']', this[key]);
    }
  }
}

var person = {
  firstName: 'Max',
  job: 'BackEnd',
  age: 29,
  friends: ['Elena', 'Igor'],
};

var car = {
  name: 'Ford',
  model: 'Focus',
  year: 2017,
};

//#1
var printPerson = printObject.bind(person);
printPerson('Person');

//#2
printObject.call(car, 'Vehicle');

//#3
printObject.apply(person, ['Person']);

Practice: var a = [1, 2, 3];
var b = [5, 'Hello', 6];

Array.prototype.indexDouble = function () {
  let newArray = this.map(function (i) {
    if (typeof i === 'number') {
      return (i *= i);
      //or Math.pow(item,2) << brings index#1 to the power of index#2.
    }
    if (typeof i === 'string') {
      return (i += i);
    }
  });
  return newArray;
};

console.log('A', a.indexDouble());
console.log('B', b.indexDouble());

///////////////JS ES6:

///////////////variable let:
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}

///////////arrow function:
function getAge(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

console.log(getAge(1993));

const calculateAge = (year) => {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
};

const getAge = (year) => new Date().getFullYear() - year;
console.log(getAge(1990));

const person = {
  firstName: 'Maxim',
  age: 28,
  logNameWithTimeout: function () {
    setTimeout(
      function () {
        console.log(this.firstName);
      }.bind(this),
      1000
    );
  },
};

const person = {
  firstName: 'Maxim',
  age: 28,
  logNameWithTimeout() {
    //unlike regular functions - arrow functions do not create separate ambience within itself, so method .bind(this) wouldn't be needed here
    setTimeout(() => {
      console.log(this.firstName);
    }, 1000);
  },
};

////////Default parameters ES6:
const createPost = (
  title = 'Default title',
  text = 'Default Text',
  date = new Date().toLocaleDateString()
) => {
  return {
    title: title, //if key and it's value are identical, we can just use 1 word: title
    text: text, // text
    date: date, // date
  };
};

const post = createPost('New Year', '2020 is coming!');
console.log(post);

////Objects:
const createCar = (name, model) => {
  return { name, model };
};
const ford = createCar('Ford', 'Focus');
console.log(ford);

const yearField = 'year';

const bmw = {
  name: 'BMW',
  ['model']: 'M3',
  [yearField]: 2020,

  logFields() {
    const { name, model, year } = this; //to avoid usage of this.name, this.model, this.year
    console.log(name, model, year);
  },
};
console.log(bmw);
bmw.logFields();

//const year = bmw.year === const {year} = bmw

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.title.value;
  const text = form.text.value;
  const description = form.description.value;
  saveForm(title, text, description);
});

//Spread operator: (spreads all of the populated parameters)
function saveForm(data) {
  const formData = {
    date: new Date().toLocaleDateString(),
    ...data,
  };
  console.log('Form data: ', formData);
}

//Rest: (gathers all of the parameters)
function saveForm(...arguments) {
  const [title, text, description] = arguments;

  const formData = {
    date: new Date().toLocaleDateString(),
    title,
    text,
    description,
  };
  console.log('Form data: ', formData);
}

//Backtick usage:

const createLink = ({ path, name }) =>
  `<a target="_blank" href="${path}">${name}</a>`;

const ul = document.querySelector('ul');
const google = `<li>${createLink({
  path: 'https://google.com',
  name: 'Google',
})}</li>`;
const github = `<li>${createLink({
  path: 'https://github.com',
  name: 'GitHub',
})}</li>`;
ul.insertAdjacentHTML('afterbegin', google);
ul.insertAdjacentHTML('afterbegin', github);

//RootElement <= Box <= Instances

class RootElement {
  constructor(tagName = 'div') {
    this.$el = document.createElement(tagName);
    this.$el.style.marginBottom = '20px';
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }

  append() {
    document
      .querySelector('.wrapper')
      .insertAdjacentElement('beforeend', this.$el);
  }
}

class Box extends RootElement {
  constructor(color, size = 150, tagName) {
    super(tagName);
    this.color = color;
    this.size = size;
  }

  create() {
    console.log(this.$el);
    this.$el.style.background = this.color;
    this.$el.style.width = this.$el.style.height = `${this.size}px`;
    this.append();
    return this;
  }
}

class Circle extends RootElement {
  constructor(color) {
    super(); //tagName by default
    this.color = color;
  }

  create() {
    this.$el.style.background = this.color;
    this.$el.style.borderRadius = '50%';
    this.$el.style.width = this.$el.style.height = '120px';
    document
      .querySelector('.wrapper')
      .insertAdjacentElement('afterbegin', this.$el);
    this.append();
    return this;
  }
}

const redBox = new Box('red', 100, 'div').create();
const blueBox = new Box('blue').create();
const circle = new Circle('green').create();

circle.$el.addEventListener('mouseenter', () => {
  circle.hide();
});

circle.$el.addEventListener('mouseleave', () => {
  circle.show();
});
