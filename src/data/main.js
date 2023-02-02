

window.addEventListener("load", checkStatus);
window.onload = function () {
  console.log(`loaded`);
  checkStatus();
};

function checkStatus() {
  var queryString = new Array();

  if (queryString.length == 0) {
    if (window.location.search.split('?').length > 1) {
        var params = window.location.search.split('?')[1].split('&');
        for (var i = 0; i < params.length; i++) {
            var key = params[i].split('=')[0];
            var value = decodeURIComponent(params[i].split('=')[1]);
            queryString[key] = value;
        }
    }
  }

  console.log(`checking user status..`)
  if (queryString["loged"] != null) {
    var val = "";
    val += "<b>Status:</b> " + queryString["loged"];
    document.getElementById("status").innerHTML = val;
    if (queryString["loged"] = true) {
      document.getElementById("login").style.display = "none";
      document.getElementById("prof").style.display = "flex";
    } else {
      document.getElementById("login").style.display = "flex";
      document.getElementById("prof").style.display = "none";
    }
  } else {
    document.getElementById("login").style.display = "flex";
    document.getElementById("prof").style.display = "none";
  }
}