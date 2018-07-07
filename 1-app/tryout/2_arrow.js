sayName = () => "Akilan";
/*
sayName = () =>{
    return "Akilan";
}
*/
console.log(sayName());

let akilan = {
    name: "Akilan",
    age: 29,
    skills: ["PHP", "PYTHON", "RUBY"],
    // getSkills: function () { // this cannot be a arrow function to get to use 'this'

    getSkills: function(){ // getSkills() - if you dont want to use function keyword

        /*
        this.skills.forEach(function(skill){
             console.log(this.name + " knows" + skill); // this.name undefined
        })
        */

        this.skills.forEach((skill) => { // Using arrow function it workss
            console.log(this.name + " knows" + " " + skill); // this.name undefined
        })

        /*
        this.skills.map((skill,index) =>{ // Better way to deal with arrays
            console.log(`${this.name} knows ${index+1} - ${skill}`);
        })
        */
    }
}

akilan.getSkills();