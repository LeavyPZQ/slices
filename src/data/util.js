const sleep = ms => new Promise(r => setTimeout(r, ms));
const URL = document.URL;

function getURL() {
    return document.URL;
}

async function previous() {
    console.log('go back');
    window.history.go(-1);
    window.location.href = "main.html"
}

function switchTheme() {
    console.log('allo');
    const body = document.getElementById("body");
    const header = document.getElementById("header")
    if(body.classList.contains("white")) {
        body.className = "dark";
        header.style.backgroundColor = "var(--silico)"
    } else {
        body.className = "white";
        header.style.backgroundColor = "var(--l-silico)"
    }
}