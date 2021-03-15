class Company {
    constructor() {
        this.departments = []
    }
    addEmployee(name, salary, position, department) {
        [name, salary, position, department].forEach(x => {
            if (x === undefined || x === null || x === "" || x < 0) {
                throw new Error('Invalid input!');
            }
        });
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [{ name, salary, position }];
        } else {
            this.departments[department] = this.departments[department].concat({ name, salary, position });
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let sourceObject = Object.entries(this.departments);
        let averageSalary = sourceObject.map(x => {
            let count = 0;
            x[1].map(y => {
                count += y.salary / x[1].length
            })
            return [x[0], count]
        })
        let bestDepartmentPair= averageSalary.reduce((max, arr) => {
            return max[0] <= arr[0] ? max : arr;
          });

         let sorted = this.departments[bestDepartmentPair[0]].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })
        let mapped = sorted.map(x => {
            return Object.values(x).join(" ")
        })
  let output = `Best Department is: ${bestDepartmentPair[0]}\nAverage salary: ${bestDepartmentPair[1].toFixed(2)}\n${mapped.join("\n")}`;
  return output.trim()
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());