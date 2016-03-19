function getWeather() {
    var city = document.getElementById("city").value
    var country = document.getElementById("country").value
    console.log(city + ' ' + country)
    const API_Key = 'b948a94521a4390a'
    let query = city + ' ' + country
    const apiURL = `https://api.wunderground.com/api/${API_Key}/conditions/q/${query}.json`

    fetch (apiURL).then(function(resp) {
          console.log(resp.type)
        resp.json().then(function(result) {
          console.log(result)
        let curObs = result.current_observation

        document.getElementById('result').style.display= 'block'

        let loc = document.getElementById('location').innerHTML = curObs.display_location.city + ', ' + curObs.display_location.country

        document.getElementById("image").src= curObs.icon_url

        let temp = document.getElementById('temp').innerHTML = curObs.temp_c + '&#8451'

        let weather = document.getElementById('weather').innerHTML = curObs.weather

        let feelsLike = document.getElementById('feels-like').innerHTML = 'Feels Like: ' + curObs.feelslike_c + '&#8451'

        let wind = document.getElementById('wind').innerHTML = 'Wind: ' + curObs.wind_string

        })
    })
}



// ${} == erb <%= %>
// wikipedia api
// rails project show list of users + login count
// initialize project inside