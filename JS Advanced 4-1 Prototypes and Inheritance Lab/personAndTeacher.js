function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }
}
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('mesho', 'mesho@pesho.com', 'Meshematika');
console.log(t.name)
console.log(t.email)
console.log(t.subject)