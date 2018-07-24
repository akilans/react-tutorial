class Nature{
    constructor(name = "Anonymous",age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}, ${this.age} years old.`;
    }
}

class Dog extends Nature{
    constructor(name,age,breed = "Street Dog"){
        super(name,age);
        this.breed = breed;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.breed){
            greeting += `I belongs to ${this.breed}`;
        }
        return greeting;
    }
}

let dog1 = new Dog("Veera",2,"Kanni");
console.log(dog1.getGreeting());

let person =  new Nature("Akilan",29);
console.log(person.getGreeting());

let dog2 = new Dog("Mani",4);
console.log(dog2.getGreeting());

/*
Output
Hi I am Veera, 2 years old.I belongs to Kanni
Hi I am Akilan, 29 years old.
Hi I am Mani, 4 years old.I belongs to Street Dog
*/