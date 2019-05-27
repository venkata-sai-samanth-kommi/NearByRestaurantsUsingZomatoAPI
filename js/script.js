
//use geolocation api to get latitude and longitude details of the user. 
//Pass them as parameters to the api call and get the desired output.

var latitude = null;
var longitude = null;
var apikey = 'f37978903560541fbae981732c0e563f';

const setLatitudeLongitudeAndCallUserAction = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function showPosition(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    userAction();
    });
  } else { 
    alert("location search is not supported by this browser");
  }
}

const userAction = async () => {
  let url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&apikey=${apikey}`;
  const response = await fetch(url);
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
}