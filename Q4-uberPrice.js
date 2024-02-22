
// 4.	write a class to calculate the Uber price. //

class car {
    constructor(car,KM,price){
    this.type = car;
    this.KM = KM;
    this.price = (price*KM);
    
    }
}


let car1 = new car("Sedan",200,13);
let car2 = new car("SUV",346,19);
let car3 = new car("hatchback",230,11)

let cars = [];

cars.push(car1);
cars.push(car2);
cars.push(car3);

console.log(cars)
