var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.





function regin(){
    document.getElementById("rDis").style.display = "flex";
    document.getElementById("pDis").style.display = "none";
    document.getElementById("lDis").style.display = "none";
    
}

function login(){
    document.getElementById("lDis").style.display = "flex";
    document.getElementById("pDis").style.display = "none";
    document.getElementById("rDis").style.display = "none";
    console.log("Enterd Login");

}

async function validate(){
    var attempt = 3;
    
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

        var loged = false;

        for (let i = 0; i < userObj.length; i++) {
            if(usrn == userObj[i].usrn && pswd == userObj[i].pswd){
                load();
                await sleep(1000);
                window.location = "main.html"; // Redirecting to other page.
                loged = true;
                var url = "main.html?loged=" + encodeURIComponent(loged);
                window.location.href = url;
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

async function validateReg() {
    var attempt = 3;
    
    var usrn = document.getElementById("username").value;
    var pswd = document.getElementById("password").value;
    var pswdv = document.getElementById("passwordv").value;

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

        var loged = false;

        if (pswd == pswdv) {
            for (let i = 0; i < userObj.length; i++) {
                if(usrn == userObj[i].usrn && pswd == userObj[i].pswd){
                    load();
                    await sleep(1000);
                    window.location = "main.html"; // Redirecting to other page.
                    loged = true;
                    var url = "main.html?loged=" + encodeURIComponent(loged);
                    window.location.href = url;
                    return false;
                }
            }
            alert ("Wrong Login "+attempt+" trys left");
            console.log(usrn + " " + pswd)
    
    
            if(attempt <= 0){
                window.location = "index.html";
            }
            attempt--;   
        }else {
            console.log(`L`)
        }
}

