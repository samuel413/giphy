// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let giphy_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){
    let randint = Math.floor(Math.random()*9)
    let searchresult = $("#search-term").val();
    let giphy_api_url = "https://api.giphy.com/v1/gifs/search?q=" + searchresult + "&rating=pg&api_key=dc6zaTOxFJmzC";
    fetch(giphy_api_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          console.log(data.data[randint].images.original.url);    
})});

