
//use geolocation api to get latitude and longitude details of the user. 
//Pass them as parameters to the api call and get the desired output.

const userAction = async () => {
  const response = await fetch('https://developers.zomato.com/api/v2.1/search?q=hyderabad&apikey=f37978903560541fbae981732c0e563f');
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
}