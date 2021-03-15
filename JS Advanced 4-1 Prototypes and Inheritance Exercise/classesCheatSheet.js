// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     speak(){
//         console.log(`Hi! I am ${this.name}.`)
//     }
// }
// 
// let petar = new Person("Petar",20);

//basic class and instance


// class Person {
//     isHomo = false;//public property
//     #name;//private property
// 
//     constructor(name, age, playsBasketball = false) {//set DEFAULT PROPERTY value
//         this.#name = name;//initialize private property
//         this.age = age;
//         this.playsBasketball = playsBasketball;
//         this.#drink();//declare private method
//     }
//     speak() {
//         console.log(`Hi! I am ${this.name}.`)
//     }
//     #drink() {
//         console.log(`Yes I do.`)//declare private method
//     }
// }
// 
// let petar = new Person("Petar", 20, false);
// petar.speak();
// petar.drink;// call private method

//setting variables and values


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     speak(){
//         console.log(`Hi! I am ${this.name}.`)
//     }
// }
// 
// class Teacher extends Person{
//     constructor(name,age,degree){
//         super(name,age)
//         this.degree = degree
//     }
// }
// 
// let ivan = new Person("Ivan",20);
// ivan.speak();
// console.log(ivan);
// let stefan = new Teacher("Stefan",29,"Bachelor");
// stefan.speak();
// console.log(stefan);

//inheritance



// class BirthdayBalloon extends PartyBalloon {
//     constructor(color, gasWeight,ribbonColor,ribbonLength,text) {
//         super(color, gasWeight,ribbonColor,ribbonLength)
//         this._text = text;
//     }
//     get text() {
//         return this._text
//     }
// }
//za da napravish getter na existing element trqbva da krustish propertito
//po shoden nachin, za da moje gettera da se kazva kakto se iska, pri izvikvane

let ivan = "ivan"
let petkan = "ivan"
let dragan = "ivan"
let a = [ivan,petkan,dragan]
function identical(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(identical(a))