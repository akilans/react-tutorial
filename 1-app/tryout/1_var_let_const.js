// var,let, const function scope
// let & const are block scope. var is not block scope
// var can assign, reassign & update
// let cannot reassign. It can be updated
// const cannot be reassign & update



// Function scope example

function sayName(){
    var name = "Akilan"; // var | let | const
    console.log(name);
}

sayName();
// console.log(name) // It will throws an serror as name is not defined

// Block scope example

if(true){
    var name_from_if = "Akilan"; 
    console.log(name_from_if)
}

console.log(name_from_if);// If let or const it will throws an error

