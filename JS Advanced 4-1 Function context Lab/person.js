function Person (name,lastname){
    return {
        firstName: name,
        lastName : lastname,
        get fullName() {

            return this.firstName + " " + this.lastName;

        },
        set fullName(fullName){
          let pattern = /\w+ \w+/;
          if(pattern.test(fullName)){
              let names = fullName.split(" ");
              this.firstName = names[0];
              this.lastName = names[1];
          }
        }
      };
      
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
