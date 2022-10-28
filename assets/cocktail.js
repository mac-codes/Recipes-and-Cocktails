
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
  
  var ingrContainer = document.querySelector('.ingr-container')

  let drinkSection = document.querySelector('#drink-section');
  // could probably get elements by class or id and they would be inside the card...
  let drinkName = document.getElementById('drink-name');
  drinkName.textContent = cocktail.drinks[0].strDrink;


  let img = document.getElementById('drink-image');
  img.setAttribute('src', cocktail.drinks[0].strDrinkThumb);


  for (let i = 1; i < 16; i++) {
    console.log();
    var measure = cocktail.drinks[0][`strMeasure${i}`];
    var ingredient = cocktail.drinks[0][`strIngredient${i}`];

    if (measure && ingredient) {
          let ingredientEl = document.createElement('p');
    ingredientEl.textContent = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];
    ingrContainer.appendChild(ingredientEl)
    } 


  }
  let card = document.getElementById('on-card');
  card.textContent = cocktail.drinks[0].strInstructions;

  var words = $( "#on-card" ).first().text().split( /\s+/ );
  var text = words.join( "</span> <span>" );
  $( "#on-card" ).first().html( "<span>" + text + "</span>" );
  $( "span" ).on( "click", function() {
  $( this ).css( "background-color", "yellow" );
});
}
