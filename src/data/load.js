const sleep = ms => new Promise(r => setTimeout(r, ms));

function load() {
    document.getElementById("loader").style.display = "flex";
}