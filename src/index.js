var cities =require('all-the-cities')
// var pop=cities.filter(function(city){
//     if (city.population>100000){
//         return true
//     } else {
//         return false
//     }
// })
// console.log(pop.length)


// // var country = cities.filter(function(city){
    
// //     return city.country ==="US" || city.country==="AF"
// // })
// // console.log(country.length)

// var country = cities.filter(function( city ) {//function(obj)
//     return (city.lon < 0  && city.country ==="US")                    //object.key
// })
// console.log (country)

var airports = require('airport-data')
var airportInChina = airports.find(function( airport ){
     return airport.country === "China"
    
})
// console.log(airportInChina)

console.log(airports.length)