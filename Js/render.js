"use strict"
const $app = {
    name: "Ulearn Century Update",
    version: 1,
    developer: "Ssemmanda Isaac Newton",
}
window.addEventListener('load', render);
function render() {
    //ensure that an active user is logged in before allowing access to the dashboard
    let loggedIn = localStorage.getItem("activeUser");
    if (!loggedIn) {
        window.location.href = "../authman1.html";
        return;
    }
    //now we get the user object and data for displaying in the application
    var mandem = JSON.parse(localStorage.getItem("activeUser"));
    console.log('current active user has been retrieved from local storage : ', mandem);
    //retrieve user data from local storage
    var Usermodel = JSON.parse(localStorage.getItem(mandem));
    console.log('user data has been retrieved from local storage : ', Usermodel);
    //extracting the user data from the object
    let $firstNmae, $lastName, $Avatar;
    $Avatar = Usermodel.avatar;
    $firstNmae = Usermodel.name.split(" ")[0];
    $lastName = Usermodel.name.split(" ")[1];   
    let randomPool = [$firstNmae, $lastName];
    //choosing a random Name
    var index = Math.floor(Math.random() * randomPool.length);
    let $chosenName = randomPool[index];
    //making the greeting message
   const $greetingsPool = [
  "Hello, " + $Avatar + " " + $chosenName + "! How can I help you today?",
  "Hi there, " + $Avatar + " " + $chosenName + "! What are we working on today?",
  "Hey " + $Avatar + " " + $chosenName + "! Ready to get started?",
  "Greetings, " + $Avatar + " " + $chosenName + "! How can I assist you?",
  "Hello " + $Avatar + " " + $chosenName + "! What's on your mind?",
  "Hi " + $Avatar + " " + $chosenName + "! How can I be of service today?",
  "Welcome back, " + $Avatar + " " + $chosenName + "! How can I help?",
  "Hey there, " + $Avatar + " " + $chosenName + "! What can I do for you today?",
  "Hello " + $Avatar + " " + $chosenName + "! What are we exploring today?",
  "Hi " + $Avatar + " " + $chosenName + "! Let me know how I can assist."
];

    //choosing a greeting
    var $greetIndex = Math.floor(Math.random()*$greetingsPool.length);
    //getting the greetings container from the dom
    var box = document.getElementById("valGreet");
    box.textContent = $greetingsPool[$greetIndex];

}
