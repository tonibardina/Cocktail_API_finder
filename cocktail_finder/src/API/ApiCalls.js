import axios from 'axios'

const categoryList = axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
const ingredients = axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')

function findByIngredient (ingredient) {
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
}

export { categoryList, ingredients, findByIngredient }
