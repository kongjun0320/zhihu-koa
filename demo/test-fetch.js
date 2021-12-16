// Browser
// fetch('https://api.github.com/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// const response = await fetch('https://api.github.com/users/kongjun0320')
// const data = await response.json()
// console.log(data)

const { default: axios } = require('axios')

;(async function () {
  const result = await axios.get('https://api.github.com/users/kongjun0320')
  console.log(result.data)
})()
