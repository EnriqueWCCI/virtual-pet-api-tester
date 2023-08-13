// an example of some REST endpoints to test
const endpoints = [
    'https://rickandmortyapi.com/api/character/707',
    'https://rickandmortyapi.com/api/location/9',
/* disable to test demo h2 spring app running locally, e.g.
    'https://localhost:888/api/customers/',
    'https://localhost:888/api/customer/1',
    'https://localhost:888/api/customer/2'
*/
]
const onSuccess = response => {
   console.log(response) 
}
const onFailure = error => {
    console.log(error)
}

console.log('initiating test...')
endpoints.forEach(request => {
    fetch(request).then(onSuccess).catch(onFailure)
})
console.log('all done!')