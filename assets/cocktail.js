
function getRandomDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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
    console.log(cocktail.drinks[0])

    let drinkSection = document.querySelector('#drink-section');
    let DrinkName = document.createElement('h3');
    DrinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(DrinkName);
  }