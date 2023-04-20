var weather = require('weather-js');
 
weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    console.log("Current temperature in " + result[0].location.name + " is " + result[0].current.temperature + "°C and the sky is " + result[0].current.skytext);
  });
