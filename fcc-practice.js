//Object:
let bird = {
    name = 'Crow',
    numLegs = 2
}



//Constructor:
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety'); //object created from constructor
let ownProps = [];




//check for all properties within the object
for (let property in canary) { 
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); //[ 'name', 'numLegs' ]



//Constructor + prototype:
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4; //to avoid duplicated variables. All objects created from this constructor will have numLegs = 4;




//check for all properties and prototype properties within the object
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
    
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property)
    } else {
      prototypeProps.push(property)
    }
  }

  //Construction property:
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
//This can be useful with:
function Dog(name) {
    this.name = name;
  }
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog){
    return true;
  } else {
    return false;
  }
  }