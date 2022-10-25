
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
    // could probably get elements by class or id and they would be inside the card...
    let DrinkName = document.createElement('h3');
    DrinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(DrinkName);

    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);

    for (let i = 1; i < 16; i++){
      console.log();

      // if (cocktail.drinks[0]['strMeasure${i}'] == null){
      //   break;
      // }

      let ingredient = document.createElement('on-list-item');
      ingredient.innerHTML = cocktail.drinks[0]['strMeasure${i}'] + ': ' + cocktail.drinks[0]['strIngredient${i}'];

      drinkSection.appendChild(ingredient);
    }
    let card = document.createElement('on-card');
    card.innderHTML = cocktail.drinks[0].strInstructions;

    drinkSection.appendChild(card);

  }