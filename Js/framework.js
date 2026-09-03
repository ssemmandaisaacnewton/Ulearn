"use strict";
const app = {
    name: "Ulearn Century",
    vesion: 1,
    developer: "Ssemmanda Isaac",
}
window.addEventListener("load", customise);
function customise() {
    //ensure that an active user is logged in before allowing access to the dashboard
    let loggedIn = localStorage.getItem("activeUser");    
    if (!loggedIn) {
        window.location.href = "../authman1.html";
        return;
    }
    //get current greeting basing on the time given by the system
    let date = new Date();
    let hours = date.getHours();
    let greeting;
    //sort out the time of the day and give a greeting based on the time of the day
    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    //now we get the user object and data for displaying in the application
    var activeUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log('current active user has been retrieved from local storage : ', activeUser);
    //retrieve user data from local storage
    var UserData = JSON.parse(localStorage.getItem(activeUser));
    console.log('user data has been retrieved from local storage : ', UserData);
    //extracting the user data from the object
    var userName = UserData.name;
    var userAvatar = UserData.avatar;
    //getting the elements to display the user data and the greeting message
    var $greetingMessage = greeting + ", " + userName + '!';
    //grabbing the containers from the dom
    let $greetingContainer = document.getElementById("greetingText");
    let $userNameContainer = document.getElementById("welcomeText");
    let $userAvatarContainer = document.getElementById("userAvatar");
    let $userNameLabel = document.getElementById("userNameLabel");
    //displaying the user data and the greeting message in the dom
    $greetingContainer.textContent = $greetingMessage;
    $userNameLabel.textContent = userName;
    $userAvatarContainer.textContent = userAvatar;
    if ($userNameContainer) {
        $userNameContainer.textContent = "Welcome back, " + userName;
    }
// add event listener to the logout button to handle the logout process
    let $logoutButton = document.getElementsByClassName("sign-out")[0];
    $logoutButton.addEventListener("click", logout);
}
//function to handle the logout process
function logout() {
    //confirm if the user really wants to logout
    let confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        //remove the active user from local storage
        localStorage.removeItem("activeUser");
        //redirect to the login page
        window.location.href = "../authman1.html";
    }
}
