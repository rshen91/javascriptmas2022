const faveFoods = {
    breakfast: 'crepes',
    lunch: 'burrito',
    supper: 'chriashi'
}

const mealsSection = document.getElementById("meals");
mealsSection.innerHTML = `<p>For breakfast, I like ${faveFoods.breakfast}. I like eating a ${faveFoods.lunch} at lunch time. For dinner I like eating ${faveFoods.supper}.</p>`