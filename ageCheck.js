//Prompt the user to enter their age

function askAge(){
    let age = prompt("Please enter your age:")
    if (age < 13){
        alert("You are a child.");
    } else if (age >= 13 && age <= 19) {
        alert("You are a teenager.");
    } else if (age >= 20) {
        alert("You are an adult");
    }
}