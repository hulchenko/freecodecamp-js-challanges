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