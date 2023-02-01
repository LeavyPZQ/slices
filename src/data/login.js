var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.


function validate(){
    
    var usrn = document.getElementById("username").value;
    var pswd = document.getElementById("password").value;

    var userObj = [
        {
            usrn: "Asa",
            pswd: "1241"
        },
        {
            usrn: "atlast",
            pswd: "hero1"  
        }
    ]


        for (let i = 0; i < userObj.length; i++) {
            if(usrn == userObj[i].usrn && pswd == userObj[i].pswd){
                alert ("Login successfully");
                window.location = "main.html"; // Redirecting to other page.
                return false;
            }
        }
        alert ("Wrong Login "+attempt+" trys left");
        console.log(usrn + " " + pswd)


        if(attempt <= 0){
            window.location = "index.html";
        }
        attempt--;
}