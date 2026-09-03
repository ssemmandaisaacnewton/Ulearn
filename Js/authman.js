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
    var btn = document.getElementById("signinBtn");
    btn.onclick = authuser;
    //for magic link option
    var keyBtn = document.getElementById("magic");
    keyBtn.onclick = magicAuth;
    //for passkey option
    var passkeyBtn = document.getElementById("passkey");
    passkeyBtn.onclick = passkeyAuth;

}
function magicAuth() {
    alert('Magic link authentication is not yet available. Please use your username and password to sign in.');
}
function passkeyAuth() {
    alert('Passkey authentication is not yet available. Please use your username and password to sign in.');
}
function authuser() {
    //getting the input values from the DOM
    var username = document.getElementById('userNameInput').value.toLowerCase();
    var password = document.getElementById('password').value;
    //veriying the user
    //checking for database 
    var db = localStorage.getItem('ulearnDatabase');
    if (!db) {
        //if no database
        alert('No user account database located in your browser file system. Please create a user account to proceed');
        document.body.disabled = true;
        window.open('authman2.html');
    } else {
        //if database exists
        let $thisDb = JSON.parse(db);
        var users = $thisDb[0];
        //checking for the username
        var accountRegistered = users.includes(username);
        if (accountRegistered) {
            //if account is in the database
            var $accountRef = JSON.parse(localStorage.getItem(username));
            //verifying the authkey
            let $authkey = $accountRef.password;
            if ($authkey === password) {
                //if the password is correct
                console.log('User ' + username + ' has been successfully authenticated');
                alert('Welcome back ' + username + '. You have been successfully authenticated. You will be redirected to your dashboard.');
                //deleting any active user
                var $activeuser = localStorage.getItem('activeUser');
                if ($activeuser) {
                    //logs out any signed in user
                    localStorage.removeItem('$activeuser');
                }
                //creating new session pool for neew authebticated user
                var activeUser = [username];
                localStorage.setItem('activeUser', JSON.stringify(activeUser));
                window.open('DASHBOARD/dashboard.html');

            } else {
                //if the password is incorrect
                console.log('Incorrect password for user ' + username);
                alert('Incorrect password for user ' + username + '. Please try again.');
            }

        } else {
            //if username doesnt exist in the database
            console.log("Account for" + username + "not found in the database");
            alert('No user account for ' + username + ' has been identified in the database.')
            var createQuery = confirm('Would you like to create a new user account?. Click ok to create a new account or click cancel to edit the form.');
            if (createQuery) {
                //if user allows to make a new account
                window.open('authman2.html');
                //redirect to the create page
                console.log('User redirected')
            } else {
                //if the user doesnt allow to make a new account
                //nothing happens
                console.log('User aborted account creation');
            }

        }
    }
}