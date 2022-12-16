let restCountries = new XMLHttpRequest();

restCountries.open("GET", "https://restcountries.com/v3.1/all");

restCountries.send();

restCountries.onload = () => {
    const countries = JSON.parse(restCountries.responseText);
    countries.forEach(country => {
        console.log(country.flag)
    });
}

