//Object:
let bird = {
    name = 'Crow',
    numLegs = 2;
}

//Constructor:
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety'); //object created from constructor
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); //[ 'name', 'numLegs' ]
