class employee {
    constructor(name, department) {
        this.name = name
        this.department = department
    }
    describe(){
        return `${this.name} works in ${this.department}`
    }
}

class manager extends employee {
    constructor(name, dept, teamSize) {
        super(name, dept)
        this.teamSize = teamSize        
    }
    describe(){
        return `${this.name} manages ${this.teamSize} people in ${this.department}`
    }
}

const emp1 = new employee("Spike the dragon", "The library")
const mgr1 = new manager("Twilight Sparkle", "The library", 3)
const emp2 = new employee("Fluttershy", "The shelter")
const mgr2 = new manager("Angel", "The shelter", 2)
const emp3 = new employee("Rarity", "The boutique")
const mgr3 = new manager("Rarity", "The boutique", 3)

class Company {
    constructor(name) {
        this.name = name
        this.employee = []
    }
        addEmployee(employee){
            this.employee.push(employee)
    }

        listEmployees(){
            this.employee.forEach(emp => console.log(emp.describe()));
    }
}

const company  = new Company("Ponyville")

company.addEmployee(emp1)
company.addEmployee(emp2)
company.addEmployee(emp3)
company.addEmployee(mgr1)
company.addEmployee(mgr2)
company.addEmployee(mgr3)

company.listEmployees()