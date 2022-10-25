
const xhr = new XMLHttpRequest();
const url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

xhr.open("GET", url);
xhr.onreadystatechange = url;
xhr.send();


function getRandomDrink() {
  fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data);
        displayRandomDrink(data)
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
  }

  getRandomDrink();

  function displayRandomDrink(cocktail){
    console.log(cocktail.drinks[0].strDrink)
  }