const searchButton = document.getElementById('search-btn');
const mealLst = document.getElementById('meal');
const mealDetailsC = document.querySelector('.meal-details-c');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


searchButton.addEventListener('click', getMealLst);
mealLst.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsC.parentElement.classList.remove('showRecipe');
});

function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

function getMealLst(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealLst.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealLst.classList.add('notFound');
        }

        mealLst.innerHTML = html;
    });
}



function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
    
    `;
    mealDetailsC.innerHTML = html;
    mealDetailsC.parentElement.classList.add('showRecipe');
}