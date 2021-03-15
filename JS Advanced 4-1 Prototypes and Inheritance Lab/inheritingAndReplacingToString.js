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
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }
    Person.prototype.toString = function () {
        let entries = Object.entries(this).map(x=>{ return x.join(`: `)})

        return `${this.constructor.name} (${entries.join(", ")})`
    }
    return {
        Person,
        Teacher,
        Student
    }
}
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;
let Student = classes.Student;
let t = new Teacher('mesho', 'mesho@pesho.com', 'Meshematika');
let p = new Person("Pesho",'Pesho@pesh.com');
console.log(t.toString())

'Person (name: Pesho, email: Pesho@pesh.com, email: Pesho@pesh.com)'
'Person (name: Pesho, email: Pesho@pesh.com)'