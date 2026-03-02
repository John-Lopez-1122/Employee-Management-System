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

const emp1 = new employee("Spike the dragon", "library")
const mgr1 = new manager("Twilight Sparkle", "library", 3)
const emp2 = new employee("Fluttershy", "Shelter")
const mgr2 = new manager("Angel", "Shelter", 2)
const emp3 = new employee("Rarity", "Boutique")
const mgr3 = new manager("Rarity", "Boutique", 3)