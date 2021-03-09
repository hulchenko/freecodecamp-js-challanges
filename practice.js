//Vladilen Minin course
// var p = document.querySelectorAll('p');

// for (let i = 0; i<p.length; i++) {
//   p[i].addEventListener("click", function(event){
//     event.target.style.color = "red"
//     console.log(event)
//   })
// }

// document.getElementById("wrapper").addEventListener("click",function(event){
//     var tagName = event.target.tagName.toLowerCase();
//     if (tagName === "p" || tagName === "li" ) {
//       event.target.style.color = "blue";
//     }
    
//     if (event.target.classList.contains('color')){
//         event.target.style.color = "red";
//         }
//   })

// document.querySelector('#alert').addEventListener("click",function(){
//   alert("Hello!")
// })

// document.querySelector('#confirm').addEventListener("click",function(){
//   var decision = confirm("Are you sure?")
//   if (decision === true) {
//     alert("It's true!")
//   } else {
//     alert("It's false!")
//   }
// })

// document.querySelector('#prompt').addEventListener("click",function(){
//   console.log(prompt("What is your Name?"));
// })

// var string = "1,2,3,4,5,6,7";
// var arrayOfStrings = string.split(",");
// var num = arrayOfStrings.map(function(i){
//   return i * 2
// });
// console.log(num);

// var num = 2.01;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.random()*2)

// var person = {
//   name: "Max",
//   age: 18,
//   car: {
//     model: "Ford"
//   },
//   job: "FrontEnd",
//   friends: ["Vadik", "Bailey"] 
// }


// var toString = JSON.stringify(person);
// console.log(JSON.parse(toString));

// document.querySelector("button").addEventListener("click", function(event){
//         var value = document.querySelector("input").value;
//         document.querySelector("h1").innerHTML = value;
//         console.log(value);
// })

// function Car(name, year) {
//         this.name = name;
//         this.year = year;
// }

// Car.prototype.getAge = function() {
//         return new Date().getFullYear() - this.year;
// }

// let ford = new Car("Ford", 1959);
// let niva = new Car("Niva", 1972);

// console.log(ford);
// console.log(niva);

// var ford = Object.create({
//         calculateMileagePerYear: function() {
//                Object.defineProperty(this, "distancePerYear", {
//                        value: Math.ceil(this.mileage / this.age),
//                        enumerable: true,
//                        writable: true,
//                        configurable: true
//                })
//         }
// }, {
//         name: {value: "Ford",
//                 enumerable: true,
//                 writable: false,
//                 configurable: false
//         },
//         model: {value: "Focus",
//                 enumerable: true,
//                 writable: false,
//                 configurable: false
//         },
//         year: { value: 2015,
//                 enumerable: true,
//                 writable: false,
//                 configurable: false
//         },
//         mileage: {value: 120500,
//                  enumerable: true,
//                  writable: true,
//                  configurable: false
//         },
//         age: {
//                 enumerable: true,
//                 get: function() {
//                         console.log("Calculating the age");
//                         return new Date().getFullYear() - this.year;
//                 },
//                 set: function() {
//                         console.log("Setting new age")
//                 }
//         }
// })

// //to display all of the properties within ford object
// for (let key in ford) {
//         if (ford.hasOwnProperty(key)){
//                 console.log(key, ford[key])
//         }
     
// }