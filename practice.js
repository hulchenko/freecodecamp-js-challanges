//Vladilen Minin course
// var p = document.querySelectorAll('p');

// for (let i = 0; i<p.length; i++) {
//   p[i].addEventListener("click", function(event){
//     event.target.style.color = "red"
//     console.log(event)
//   })
// }

document.getElementById("wrapper").addEventListener("click",function(event){
    var tagName = event.target.tagName.toLowerCase();
    if (tagName === "p" || tagName === "li" ) {
      event.target.style.color = "blue";
    }
    
    if (event.target.classList.contains('color')){
        event.target.style.color = "red";
        }
  })