
//use geolocation api to get latitude and longitude details of the user. 
//Pass them as parameters to the api call and get the desired output.

var latitude = null;
var longitude = null;
var apikey = 'f37978903560541fbae981732c0e563f';

const createTag = (nameOfTag, tagAttributes, parentTag, content) =>
{
    var tag = document.createElement(nameOfTag);

    //setting attributes for the tag.

    if(tagAttributes!=null)
    for(let attribute in tagAttributes)
    {
        tag.setAttribute(attribute, tagAttributes[attribute]);
    }

    //setting content of the tag.

    if(content!=null)
    {
        var node = document.createTextNode(content);
        tag.appendChild(node);
    }

    //appending newly created tag to its parent.

    var parent = document.getElementById(parentTag);
    parent.appendChild(tag);
}

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
  parseJsonAndCreateCards(myJson);
}

const parseJsonAndCreateCards = (myJson) =>{
  var parent = 'flex-container';
  console.log(myJson);
  //creation of cards.
  for(var index in myJson.restaurants)
  {//  console.log(myJson.restaurants[index].restaurant.name);
  createTag(`div`,{"id":`${index}`,"class":`normalcard`},`${parent}`,null);
  createTag(`img`,{"src":`${myJson.restaurants[index].restaurant.thumb}`,"alt":`${myJson.restaurants[index].restaurant.name}`},`${index}`,null);
  createTag(`div`,{"class":"normalcontainer","id":`${index}container`},`${index}`,null);
  createTag(`h4`,{"id":`${myJson.restaurants[index].restaurant.name}`},`${index}container`,`${myJson.restaurants[index].restaurant.name}`);
  //creating area for hiding and showing details.
  
  }
}


//script for bootstrap nav bar creation.
createTag(`div`,{"id":`top-header`},`body`,null);
createTag(`nav`,{"class":`navbar navbar-inverse`,"id":`nav`},`top-header`,null);
createTag(`div`,{"class":`container`,"id":`container`},`nav`,null);
createTag(`div`,{"class":`navbar-header`,"id":`navbar-header`},`container`,null);
createTag(`div`,{"class":`navbar-brand`,"id":`navbar-brand`},`navbar-header`,`Zomato Developer API`);
createTag(`ul`,{"class":`nav navbar-nav navbar-right`,"id":`navul`},`container`,null);
createTag(`li`,{"id":`homeli`},`navul`,null);
createTag(`a`,{"href":"#","id":"homea"},`homeli`,null);
createTag(`b`,null,`homea`,`HOME`);	
