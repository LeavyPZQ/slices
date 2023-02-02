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