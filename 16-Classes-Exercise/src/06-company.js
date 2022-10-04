class Company {
    constructor(departments) {
        this.departments = {}
    }

    addEmployee(...params) {
        if (params.some(x => !x)) {
            throw new Error("Invalid input!");
        }

        const [name, salaryString, position, department] = params;
        const salary = Number(salaryString);

        if (!(salary && salary > 0)) throw new Error("Invalid input!");

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const department = Object.entries(this.departments)
            .sort((a, b) => this.getAvgSalary(b) - this.getAvgSalary(a))[0];

        const avgSalary =  this.getAvgSalary(department[1]).toFixed(2)
        return `Best Department is: ${department[0]}\n` +
            `Average salary: ${avgSalary}\n` +
            department[1]
                .sort((a, b) => {
                    let result = b.salary - a.salary;
                    return result === 0 ? a.name.localeCompare(b.name) : result;
                })
                .map(e => `${e.name} ${e.salary} ${e.position}`).join("\n");

    }

    getAvgSalary(employees) {
        return employees.length ? employees.reduce((acc, e) => acc + e.salary, 0) / employees.length : 0;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
