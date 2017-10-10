$(document).ready(function() {
  function randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  $('#cool_button').on('click', function(event) {
    var i = randomIntFromInterval(0,1);
    if (i == 0) {
      $('#cool_button').html('Ja, je bent cool!');
    } else {
      $('#cool_button').html('Nee, je bent niet cool!');
    }
  })
});
