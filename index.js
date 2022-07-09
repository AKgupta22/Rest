function getData() {
    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/Bharat")
    request.send()

    request.addEventListener("load", () => {
        var responseText = request.responseText
        var [data] = JSON.parse(responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area

        if (data.independent == true)
            document.getElementById("independent").innerHTML = "Independent"
        else
            document.getElementById("independent").innerHTML = "Not Independent"

        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        if (data.landlocked == true)
            document.getElementById("landlocked").innerHTML = "Yes"
        else
            document.getElementById("landlocked").innerHTML = "No"
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        if (data.borders == undefined)
            document.getElementById("borders").innerHTML = "No Border"
        else
            document.getElementById("borders").innerHTML = data.borders
        document.getElementById("googleMaps").href = data.maps.googleMaps
    })

}
getData()

function count() {
    var val = document.getElementById("search").value
    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/" + val)
    request.send()

    request.addEventListener("load", () => {
        var responseText = request.responseText
        var [data] = JSON.parse(responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        if (data.independent == true)
            document.getElementById("independent").innerHTML = "Independent"
        else
            document.getElementById("independent").innerHTML = "Not Independent"

        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        if (data.landlocked == true)
            document.getElementById("landlocked").innerHTML = "Yes"
        else
            document.getElementById("landlocked").innerHTML = "No"
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        if (data.borders == undefined)
            document.getElementById("borders").innerHTML = "No Border"
        else
            document.getElementById("borders").innerHTML = data.borders
        document.getElementById("googleMaps").href = data.maps.googleMaps
    })

}



