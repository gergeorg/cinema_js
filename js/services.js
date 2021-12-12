const API_KEY = '068076261fd423e6d7fa4ed4921d30da';
const BASE_URL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const getData = url => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw `Что-то пошло не так. Ошибка ${response.status}`
    })
    // .then(data => console.log(data))
    .catch(err => console.error(err))
}




export const getTrends = () => {
  const data = getData('https://jsonplaceholder.typicode.com/todos/1')
  console.log(data);
}
