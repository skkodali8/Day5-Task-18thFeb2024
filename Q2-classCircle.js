
// a. + Circle ()//


class Circle {
    constructor() {
    this.radius = 1.0;
    this.color = "red";
}
}

let circle1 = new Circle();

console.log(circle1)

//--------------------------------------------------------------------------------------------------//

// b. Circle (radius: number)//

class Circle {
    constructor(radius) {
    this.radius = radius;
    this.color = "red";
    }
}
    
 let circle1 = new Circle(4)
console.log(circle1);

//--------------------------------------------------------------------------------------------------//

// c. Circle (radius: number, color: string)//

class Circle {
    constructor(radius,color) {
    this.radius = radius;
    this.color = color;
    }
}
 let circle1 = new Circle(6, "Yellow")
console.log(circle1);

//--------------------------------------------------------------------------------------------------//

// d. getRadius() - Method//

class Circle {
    constructor(radius,color) {
    this.radius = radius;
    this.color = color;
    }
 getRadius() {
      return this.radius;
    }
}

let circle1 = new Circle(6, "Yellow")

// console.log(circle1.getRadius());

// ------------------------------------------------------------------------------------------------------------//

// e. setRadius() - Method//

class Circle {
    constructor(color) {
    this.radius = 1.0;
    this.color = color;
    }
setRadius(radius) {
      this.radius = radius;
    return this.radius;
    }
}

let circle1 = new Circle("Orange");
console.log(circle1.setRadius(6));
console.log(circle1)


//-----------------------------------------------------------------------------------------------------------//


// f. getColor() - Method//

class Circle {
    constructor(radius,color) {
    this.radius = radius;
    this.color = color;
    }
    getColor() {
      return this.color;
    }
}

let circle1 = new Circle( 6, "Brown");

console.log(circle1.getColor());


//---------------------------------------------------------------------------------------------------------------//

// g. setColor() - Method//

class Circle {
    constructor(radius) {
    this.radius = radius;
    this.color = "red";
    }
    setColor(color) {
        this.color = color;
        return this.color;
    }
}

let circle1 = new Circle(8);
console.log(circle1.setColor("Sky Blue"));
console.log(circle1);

//---------------------------------------------------------------------------------------------------------------//

// h. toString() - Method//

class Circle {
    constructor(radius,color) {
    this.radius = radius;
    this.color = color;
    }
    toString() {
        console.log(`Circle with radius ${this.radius} is ${this.color} color`);
    }
}

let circle1 = new Circle(4.5, "Maroon");

console.log(circle1.toString());

//---------------------------------------------------------------------------------------------------------------//

// i. getArea() & getCircumference - Method//

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getArea() {
    console.log(" The are of the circel is   " + ((Math.PI * this.radius) ^ 2));
  }

  getCircumference() {
    console.log(
      " The circumference of the circel is   " + 2 * Math.PI * this.radius);
  }
}


let circle1 = new Circle( 8,"Golden" );
console.log(circle1);

console.log(circle1.getArea());

console.log(circle1.getCircumference());