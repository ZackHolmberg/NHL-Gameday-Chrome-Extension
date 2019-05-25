chrome.browserAction.onClicked.addListener(function (tab) { alert('icon clicked') });

window.onload = function () {
  updateText();
  function updateText() {
    var request = new XMLHttpRequest()

    request.open('GET', 'https://statsapi.web.nhl.com/api/v1/schedule', true)
    request.onload = function () {
      // Begin accessing JSON data here
      var obj = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {

        if(obj.totalItems != 0){
        document.getElementById("user").innerHTML =
          "Home Team: " + obj.dates[0].games[0].teams.home.team.name + " (" + obj.dates[0].games[0].teams.home.leagueRecord.wins + "/" + obj.dates[0].games[0].teams.home.leagueRecord.losses + "/" + obj.dates[0].games[0].teams.home.leagueRecord.ot + ")<br><br>" +
          "Away Team: " + obj.dates[0].games[0].teams.away.team.name + " (" + obj.dates[0].games[0].teams.away.leagueRecord.wins + "/" + obj.dates[0].games[0].teams.away.leagueRecord.losses + "/" + obj.dates[0].games[0].teams.away.leagueRecord.ot + ")";
      } else{
        document.getElementById("user").innerHTML = "No games today!"
      }
      } else {
        console.log('error')
      }
    }

    request.send()


  };
}
