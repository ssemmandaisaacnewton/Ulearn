"use strict"
const app = {
    name: "Ulearn Century Update",
    version: 1,
    developer: "Ssemmanda Isaac Newton",
}
window.onload = init;
function init() {
    console.log("Start up successful");
    console.log("App Name: " + app.name);
    console.log("App Version: " + app.version);
    console.log("App Developer: " + app.developer);
    // Add event listeners to the buttons
    var btn = document.getElementById("create");
    btn.onclick = createUser;
}
function createUser() {
    // Get the values from the input fields
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var avatar = document.getElementById('avatar').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    // Validate the input values
    let values = [firstname, lastname, age, sex, avatar, password, confirmPassword];
    for (let i = 0; i < values.length; i++) {
        if (values[i] === "") {
            alert("Please fill in all required fields.");
            return;
        } else {
            console.log("All values filled in!");
        }
    }
    // Validate the password and confirm password fields
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    } else {
        console.log("Passwords match!");
    }
    //check localstorage for ulearn database
    var database = localStorage.getItem('ulearnDatabase');
    if (!database) {
        // If the database doesn't exist, create a new one
        console.log('Database not found, creating new one...');
        var users = [""];
        database = [users, app];
        //push database into local storage
        localStorage.setItem('ulearnDatabase', JSON.stringify(database));
        console.log('New data base created succesfully!')
    } else {
        // If the database exists, parse it into an array
        console.log('Database found, parsing...');
        database = JSON.parse(database);
    }
    //creating a constructor for making users
    class user {
        constructor({ firstname, lastname, age, sex, avatar, password }) {
            this.name = firstname + " " + lastname;
            this.age = age;
            this.sex = sex;
            this.avatar = avatar;
            this.password = password;
            this.username = firstname.toLowerCase() + age +lastname.toLowerCase() + '@ulearn.hub';
        }
    }
    //build new user using the constructor
    var newUser = new user({ firstname, lastname, age, sex, avatar, password });
    console.log('User model created');
    //adding the new user the database
    let $currentDb = JSON.parse(localStorage.getItem('ulearnDatabase'));
    //adding the new user name to the user array
    var $currentUsers = $currentDb[0];
    // verify whether the user name has not yet been used
    let nameTaken = $currentUsers.includes(newUser.name);
    //verify
    if (nameTaken) {
        //if the name exists
        console.log("User Name already taken");
        //notify user 
        alert('The user name for the account you are trying to create is already taken, please change your credentials!');
    } else {
        //if the user name is original, continue with the creation process
        //comfirmation prompt
        var userAllow = confirm("Dear " + newUser.name.toUpperCase() + ". Do you trust the information you have given for the creation of your Ulearn user account under the name "+newUser.avatar+ "  " + newUser.username + '. Press ok to create your account, or go back and edit your credentials.');
        if (!userAllow) {
            console.log('User creation process aborted by user');
            return;
        } else {
            $currentUsers.push(newUser.username);
            console.log('User name has been added to the user name dump');
            //add the new user object to the local storage pool, but the user name in the array will be the ke so that it can be selected by it for algo
            localStorage.setItem(newUser.username, JSON.stringify(newUser));
            //now lets push the database back into the local storage
            let users = $currentUsers;
            let database = [users, app];
            localStorage.setItem('ulearnDatabase', JSON.stringify(database));
            console.log('Database updated successfully');
            //One user added to database
            alert( "Dear " + newUser.name + " the creation of your Ulearn user account under the name " + newUser.avatar     + newUser.username + " has been successfully completed. Dont share you credentials with anyone. You can only access your account on this device. Continue to the sign in page to Sign into your account")
            var $body = document.body;
            //send a notification to a user after the whole everything
            
            $body.disabled = true;
            window.open('authman1.html');
        }
    }
}
