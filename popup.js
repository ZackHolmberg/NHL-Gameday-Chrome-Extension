chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});

window.onload = function() {
  updateText();
  function updateText(){
    // var request = new XMLHttpRequest()
    // request.open('GET', 'https://statsapi.web.nhl.com/api/v1/schedule', true)
    // request.onload = function () {
    //   // Begin accessing JSON data here
    //   var data = JSON.parse(this.response)
      
    //   request.send();
      document.getElementById("user").innerHTML = "ok good I guess";
  //};
}
}