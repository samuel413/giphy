// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let giphy_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

let searchresult = $(input).val();

$("#search-button").click(function(){
    
    fetch(giphy_api_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          console.log(data.data[1].id);    
})});

