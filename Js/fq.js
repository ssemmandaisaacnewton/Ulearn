//This application is property of Ssemmanda Isaac
window.onload = init;
function init() {
    //random background picking app
    var $guy = document.getElementById('questions');
    var $bg_array = ["#dff5dc", "#dce9f5", "#dfdcf5", "repeating-linear-gradient(133deg, #dfdcf5, #dce9f5, #dff5dc 100px)", "linear-gradient(133deg, #dfdcf5, #dce9f5, #dff5dc 3000px)"];
    var $bg_index = Math.floor(Math.random() * $bg_array.length);
    var $color = $bg_array[$bg_index];
    $guy.style.background = $color;
    //creating the welcoming balloon
    //the blur on the screen
    let $overlay = document.createElement('div');
    $overlay.id = "cover";
    document.body.appendChild($overlay);
    //generating the pop-up that contains the input fields
    let $popUp = document.createElement('div');
    $popUp.id = "pop"
    let $pophead = document.createElement('h1');
    //the heading 
    $pophead.innerHTML = "Welcome to the File and folder management quiz!";
    var $text = document.createElement('p');
    $text.innerHTML = "Please enter your name in the field below to continue:";
    let scar = document.createElement('input');
    //the name input field
    scar.type = "search";
    scar.placeholder = "Please enter your name";
    scar.spellcheck = false;
    scar.title = "Enter your name";
    scar.id = "scar";
    let rhead = document.createElement('h2');
    //instrcutions
    rhead.innerHTML = "Instructions";
    const rules = document.createElement('ul');
    rules.innerHTML = "<li> Answer all questions </li> " + "<li> Please select one option from those selected or you will loose marks </li>" + "<li> Be honest to yourself(For your own good)</li?\>";
    const $readyButton = document.createElement('button');
    $readyButton.innerHTML = "I'm ready";
    $readyButton.title = "Proceed to the quiz";
    $readyButton.onclick = degen;
    $readyButton.id = "go";
    //adding the new elements to the dom in their preceeding order
    $popUp.appendChild($pophead);
    $popUp.appendChild($text);
    $popUp.appendChild(scar);
    $popUp.appendChild(rhead);
    $popUp.appendChild(rules);
    $popUp.appendChild($readyButton);
    $overlay.appendChild($popUp);
    //passing a function to the process button in the html doc
    const prc_results = document.getElementById('process');
    prc_results.onclick = process_results;
}
function degen() {
    //this removes the elemenst from the dom and allows the user to edit the quiz
    var input = document.getElementById('scar');
    var $name = input.value;
    //this condition checks whether the user name entered matches the required specifics(between 5 and 10 characters long)
    if ($name.length >= 5 && $name.length <= 10) {
        localStorage.setItem('userName', $name);
        console.log('✔ Memory set successfully');
        //removes the covering part of the dom created above
        var elem = document.getElementById('cover');
        document.body.removeChild(elem);
        console.log('No errors so far');
    } else {
        alert('Please enter a valid user name between five and ten characters long')
        console.log('Invald user-name detected');
    }
}
function process_results() {
    window.confirm('Do yoy trust the information you have fed into the fields?. If yes, click ok to process your results and if not, simply click cancel');
    //Ok, this is where it gets messy, I have to get variables for each correct checkbox and apply conditions for grading the user.
    var $grade = 0;
    //getting variales for the correct boxes.
    var $1C = document.getElementById('1C');
    var $2C = document.getElementById('2C');
    var $3C = document.getElementById('3C');
    var $4C = document.getElementById('4C');
    var $5D = document.getElementById('5D');
    var $6F = document.getElementById('6F');
    var $7B = document.getElementById('7B');
    var $8D = document.getElementById('8D');
    var $9C = document.getElementById('9C');
    var $10D = document.getElementById('10C');
    var $11C = document.getElementById('11C');
    var $12C = document.getElementById('12C');

    //Great, we have the variables ready, now vars apply conditions to give marks
    //1
    //we depend on the boolean of the answer matching the correct answer has been chosen to award and grade the user, where multiple answers are correct, the code changes accordingly
    if ($1C.checked == true) {
        var $grade1 = $grade + 5;
        $1C.parentElement.parentElement.id = 'correct';
        $1C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade1 = $grade + 0;
        $1C.parentElement.parentElement.id = 'wrong';
        $1C.parentElement.parentElement.title = 'You failed this question';
    }
    //2
    if ($2C.checked == true) {
        var $grade2 = $grade1 + 5;
        $2C.parentElement.parentElement.id = 'correct';
        $2C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade2 = $grade1 + 0;
        $2C.parentElement.parentElement.id = 'wrong';
        $2C.parentElement.parentElement.title = 'You failed this question';
    }

    //3
    if ($3C.checked == true) {
        var $grade3 = $grade2 + 5;
        $3C.parentElement.parentElement.id = 'correct';
        $3C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade3 = $grade2 + 0;
        $3C.parentElement.parentElement.id = 'wrong';
        $3C.parentElement.parentElement.title = 'You failed this question';
    }

    //4
    if ($4C.checked == true) {
        var $grade4 = $grade3 + 5;
        $4C.parentElement.parentElement.id = 'correct';
        $4C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade4 = $grade3 + 0;
        $4C.parentElement.parentElement.id = 'wrong';
        $4C.parentElement.parentElement.title = 'You failed this question';
    }
    //5 
    if ($5D.checked == true) {
        var $grade5 = $grade4 + 5;
        $5D.parentElement.parentElement.id = 'correct';
        $5D.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade5 = $grade4 + 0;
        $5D.parentElement.parentElement.id = 'wrong';
        $5D.parentElement.parentElement.title = 'You failed this question';
    }
    //6
    if ($6F.checked == true) {
        var $grade6 = $grade5 + 5;
        $6F.parentElement.parentElement.id = 'correct';
        $6F.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade6 = $grade5 + 0;
        $6F.parentElement.parentElement.id = 'wrong';
        $6F.parentElement.parentElement.title = 'You failed this question';
    }
    //7
    if ($7B.checked == true) {
        var $grade7 = $grade6 + 5;
        $7B.parentElement.parentElement.id = 'correct';
        $7B.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade7 = $grade6 + 0;
        $7B.parentElement.parentElement.id = 'wrong';
        $7B.parentElement.parentElement.title = 'You failed this question';
    }
    //8
    if ($8D.checked == true) {
        var $grade8 = $grade7 + 5;
        $8D.parentElement.parentElement.id = 'correct';
        $8D.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade8 = $grade7 + 0;
        $8D.parentElement.parentElement.id = 'wrong';
        $8D.parentElement.parentElement.title = 'You failed this question';
    }
    //9
    if ($9C.checked == true) {
        var $grade9 = $grade8 + 5;
        $9C.parentElement.parentElement.id = 'correct';
        $9C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade9 = $grade8 + 0;
        $9C.parentElement.parentElement.id = 'wrong';
        $9C.parentElement.parentElement.title = 'You failed this question';
    }
    //10
    if ($10D.checked == true) {
        var $grade10 = $grade9 + 5;
        $10D.parentElement.parentElement.id = 'correct';
        $10D.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade10 = $grade9 + 0;
        $10D.parentElement.parentElement.id = 'wrong';
        $10D.parentElement.parentElement.title = 'You failed this question';
    }
    //11
    if ($11C.checked == true) {
        var $grade11 = $grade10 + 5;
        $11C.parentElement.parentElement.id = 'correct';
        $11C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade11 = $grade10 + 0;
        $11C.parentElement.parentElement.id = 'wrong';
        $11C.parentElement.parentElement.title = 'You failed this question';
    }
    //12
    if ($12C.checked == true) {
        var $grade12 = $grade11 + 5;
        $12C.parentElement.parentElement.id = 'correct';
        $12C.parentElement.parentElement.title = 'You passed this question';
    } else {
        var $grade12 = $grade11 + 0;
        $12C.parentElement.parentElement.id = 'wrong';
        $12C.parentElement.parentElement.title = 'You failed this question';
    }
    var $final = Math.ceil($grade12);
    var edp_com = $final / 60;
    var final = JSON.stringify(Math.ceil(edp_com * 100)/*
    to get the final marks in percentage, we ceil it, divide by 60
    and then multiply by one hundred to get the percentage equivalent
    */
    );
    //UI build for displaying the test results
    var $id = localStorage.getItem('userName');
    var $blur = document.createElement('div');
    $blur.id = "cover";
    document.body.appendChild($blur);
    var skinner = document.createElement('div');
    skinner.id = "pop2";
    $blur.appendChild(skinner);
    var wrds = document.createElement('h1');
    wrds.innerHTML = "Processing, please wait...";
    var $res_cont = document.createElement('h2');
    $res_cont.innerHTML = skinner.appendChild(wrds);
    var holder = document.createElement('img');
    holder.src = "../IMAGES/Loading.svg";
    holder.id = "holder";
    skinner.appendChild(holder);
    var root, shoot, stem;
    root = Math.random();
    shoot = Math.ceil(root);
    stem = shoot * 1000;
    setTimeout(function() {
        skinner.removeChild(holder);
        wrds.innerHTML = "Dear " + $id + ", your score in this test is; ";
        var $res_cont = document.createElement('h2');
        $res_cont.innerHTML = final + "%";
        skinner.appendChild($res_cont);
        $res_cont.id = "res";
        var com = document.createElement('p');
        com.id = "com";
        //determining the color and the comment related to the marks the user scores
        if (final == 90,
        final > 90) {
            $res_cont.style.color = "green";
            com.style.color = "green";
            com.innerHTML = "Brilliant!";
            com.style.marginLeft = "300px";
        } else if (final == 80,
        final > 90) {
            $res_cont.style.color = "purple";
            com.style.color = "purple";
            com.innerHTML = "Quite good!";
            com.style.marginLeft = "280px";
        } else if (final == 60,
        final > 60) {
            $res_cont.style.color = "yellow";
            com.style.color = "yellow";
            com.innerHTML = "Not bad, more attention needed";
            com.style.marginLeft = "185px";
        } else {
            $res_cont.style.color = "red";
            com.style.color = "red";
            com.innerHTML = "You are badly off!";
            com.style.marginLeft = "215px";
        }
        skinner.appendChild(com);
        //notify the user
        Notification.requestPermission(function() {
            if (Notification.permission === 'granted') {
                new Notification("Congratulations" + {
                    body: "Dear " + $id + "Your score in the File and folder management quiz was " + final + "%, " + com.innerHTML
                });
                // user approved.
                // use of new Notification(...) syntax will now be successful
            } else if (Notification.permission === 'denied') {// user denied.
            } else {// Notification.permission === 'default'
            // user didn’t make a decision.
            // You can’t send notifications until they grant permission.
            }
        });
        Notification.requestPermission().then(function(permission) {
            if (!('permission'in Notification)) {
                Notification.permission = permission;
            }
            //alert("Thank's alot you dummy, all our notifications are viruse, ha ha");
        }, function(rejection) {
            // handle rejection here.
            alert("Ok, no problem, but just know you'll be missing out on some good shit.")
        });
        //retake the quiz handler
        var $refresh = document.createElement('button');
        $refresh.id = "go2";
        $refresh.innerHTML = "Retake the Quiz";
        $refresh.title = "Retake the Quiz"
        $refresh.onclick = function() {
            window.open('Filequiz.html');
        }
        skinner.appendChild($refresh);
        var $review = document.createElement('button');
        $review.id = "review";
        $review.innerHTML = "Review";
        $review.title = "Review the test and see where you went wrong"
        $review.onclick = function() {
            //removing the results sheet
            let cover = document.getElementById('cover');
            document.body.removeChild(cover);
            //alert the user
            alert('The questions that will be highlighted green are the ones you passed and the ones that will be  highlighted red are the ones that you failed')
            //changing the contents of the show results button
            var $prbtn = document.getElementById('process');
            $prbtn.title = "Open a new tab so that you can retake the quiz"
            $prbtn.innerHTML = "Retake the Quiz";
            //retaking the quiz(reloads the page)
            $prbtn.onclick = function() {
                window.open('#')
            }
        }
        skinner.appendChild($review)
    }, stem)
}
