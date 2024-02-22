//3.	Write a “person” class to hold all the details.//

class person {
    constructor(firstName,lastName) {
    this.name = firstName;
    this.lastname = lastName;
    this.age = "XX";
    this.gender = "XX";
    this.phoneno = "XXX";
    this.email = "XXXX";
    this.address = "XXXX";
}
}

let person1 = new person("Srikanth","Kodali");
person1.age = "36";
person1.gender = "male";
person1.phoneno = "9490832939";
person1.email = "skkodali8@outlook.com";
person1.address = " 51-1-1, Flat No: 2402, Tower A, Oxygen Towers,Visakhapatnam-530013";

console.log(person1);
