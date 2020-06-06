class Person {
    constructor(name, surname, dateofBirthday) {
        this.name = name;
        this.surname = surname;
        this.dateofBirthday = dateofBirthday;

    }
    toString() {
        return `${this.name} ${this.surname} ${this.dateofBirthday}`;
    }
}
class Employee extends Person {
    constructor(name, surname, dateofBirthday, position, salary) {
        super(name, surname, dateofBirthday);
        this.position = position;
        this.salary = salary;
    }
    toString() {
        return `${super.toString()} ${this.position} ${this.salary}`;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    constructor(name, surname, dateofBirthday, position, salary, bonus) {
        super(name, surname, dateofBirthday, position, salary);
        this.bonus = bonus;
    }
    toString() {
        return `${super.toString()} ${this.position} ${this.salary}`;
        getSalary() {
            return super.getSalary() + this.bonus;
        }
    }
let e1 = new Employee("Ekaterina", "Volskaya", "1983-05-05", "small staff", 20000);
console.log(e1.getSalary());
let m1 = new Manager("Olga", "Tischenko", "1983-05-26", "assistant", 25000, 10000);
console.log(m1.getSalary());