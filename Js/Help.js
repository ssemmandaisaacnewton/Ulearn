
///////
window.onload=init;
function init() {
//Variable declaration
var button = document.getElementById("send");
//Function assignment
    var textInput = document.getElementById("innerText");
var nameInput = document.getElementById("nameEntry");
button.onclick = handleButtonClick;
}
function handleButtonClick() {
var textInput = document.getElementById("innerText");
var songName = textInput.value;
var li = document.createElement("li");
var ul = document.getElementById("container");
var nameInput = document.getElementById("nameEntry");
var name = nameInput.value;
var time = new Date();
var yr = time.getFullYear();
var mth = time.getUTCMonth();
var jet = time.getDate();
var jed = jet + " / " + mth + " / " + yr  ;
var _date =  "<b>" + jed + "</b>" + " by " + "<b>" + name +"</b>"+ " <br>";
if (songName == "") {
alert("Don't be stupid, enter a comment!");
} else {
alert("Dear " + name + ", thank's for using this service. We'd love to hear from you again");
li.innerHTML =_date + songName;
li.title = "A comment by " + name;
ul.appendChild(li);
    nameInput.value = "";
    textInput.value = "";
}
}