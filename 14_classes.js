// Day 14: Classes
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person{
    firstName = "Ayan";
    lastName = "Das"
    age = 22;
    greet(){
        return `Hello ${this.firstName}`;
    }
    // Task-7
    get fullname(){
        return (this.firstName + " " +this.lastName);
    }
    // Task-8
    set firstName(newFirstName){
        this.firstName = newFirstName;
    }
    set lastName(newLastName){
        this.lastName = newLastName;
    }
}
let person1 = new Person();
console.log(`Task-1: ${person1.greet()}`);


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function(){
    this.age = this.age + 2;
    console.log(`Task-2: updated age = ${this.age}`);
}
console.log("Task-2: age=",person1.age);
person1.updateAge();

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID. 
class Student extends Person{
    studentId = 'ID:0230';
    showId(){
        return `Task-3: id = ${this.studentId}`;
    }
    // Task-6
    static studentCounter = 0;
    constructor(){
        super();
        Student.studentCounter++;
    }
}
const student1 = new Student();
console.log(student1.showId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greet = function(){
    return `Task-4: Hi ${this.firstName}, your id=${this.studentId}`;
}
console.log(student1.greet());


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.message = function(){
    return `Task-5: welcome people`;
}
console.log(Person.message());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// see inside task-3
console.log('Task-6: no of std:',Student.studentCounter);


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 
let person2 = new Person();
console.log("Task-7:",person2.fullname);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name. 
person2.firstName = "Dibyendu";
person2.lastName = "Bhakta";
console.log("Task-8:",person2.fullname);


// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. 
class Account{
    #balance = 0;
    deposite(num){
        this.#balance = num;
    }
    withdraw(num){
        this.#balance = this.#balance - num;
    }
    get getBalance(){
        return this.#balance;
    }
}


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

let account1 = new Account();
account1.deposite(23000);
console.log("Task-9: ",account1.getBalance);
account1.withdraw(10000);
console.log("Task-9: ",account1.getBalance);


// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).