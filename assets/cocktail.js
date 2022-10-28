
function getRandomDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          displayRandomDrink(data)
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

getRandomDrink();

function displayRandomDrink(cocktail) {
  console.log(cocktail.drinks[0])

  let drinkSection = document.querySelector('#drink-section');
  // could probably get elements by class or id and they would be inside the card...
  let drinkName = document.getElementById('drink-name');
  drinkName.textContent = cocktail.drinks[0].strDrink;


  let img = document.getElementById('drink-image');
  img.setAttribute('src', cocktail.drinks[0].strDrinkThumb);


    for (let i = 1; i < 16; i++){
      console.log();

    if (cocktail.drinks[0][`strMeasure${i}`] === null) {
      break;
    } if (cocktail.drinks[0][`strIngredient${i}`] === null) {
      break;
    }

    let ingredient = document.getElementById('on-list-item');
    ingredient.textContent = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

  }
  let card = document.getElementById('on-card');
  card.textContent = cocktail.drinks[0].strInstructions;

  }