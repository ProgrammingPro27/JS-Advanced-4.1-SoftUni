function result() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Canot instantiate directly.")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask = this.tasks.shift();
            this.tasks.push(currentTask);
            console.log(currentTask);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
        getSalary() {
            return this.salary
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} is working on a simple task.`];
            this.salary = 0;
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
            this.salary = 0;
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
            this.salary = 0;
            this.dividend = 0;
        }
        getSalary() {
            return this.salary + this.dividend
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
let classes = result();
let junior = new classes.Junior("Ivan", 20, 1500);
let senior = new classes.Senior("Ivan", 20, 1500);
senior.collectSalary()