"use strict"

function greetUser() {
    const nameField = document.getElementById("name")
    let name = nameField.value;
    alert("Hi " + name + ", How are you!!");
}