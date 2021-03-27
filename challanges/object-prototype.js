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
  
  let beagle = new Dog("Snoopy") /* === let beagle = Object.create(Dog.prototype); */
  
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
//This can be useful to check with:
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

  //
  Bird.prototype = {
    constructor: Bird, //Remember to Set the Constructor Property when Changing the Prototype
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };


  //PROTOTYPE HIERARCHY:
  /* The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method. */
  //Example:
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle); //#1
  
  Object.prototype.isPrototypeOf(Dog.prototype); //#2

  //Inheritance:
  ChildObject.prototype = Object.create(ParentObject.prototype); //#1 inheriting
  ChildObject.prototype.methodName = function() {...}; //#2 adding methods specific to ChildObject only

  //Mixin (common methods / different types of objects):
  let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

  //Mixins combined together into Module, that is called instantly, like so: '(function() {})();'

  //#1 Mixins: 
  function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

//#2 Module:
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();