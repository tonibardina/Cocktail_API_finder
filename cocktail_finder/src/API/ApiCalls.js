import axios from 'axios'

const categoryList = axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')

export { categoryList }
