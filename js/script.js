var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('H2');
        liEl.innerText = item.name;
        var liEl1 = document.createElement('H3');
        liEl1.innerText = 'Background Information:'
        var liEl2 = document.createElement('li');
        liEl2.innerText = 'Capital: ' + item.capital;
        var liEl3 = document.createElement('li');
        liEl3.innerText = 'Area: ' + item.area;
        var liEl4 = document.createElement('li');
        liEl4.innerText = 'Population: ' + item.population;
        var liEl5 = document.createElement('li');
        liEl5.innerText = 'Language: ' + getLanguages(item);


        countriesList.appendChild(liEl);
        countriesList.appendChild(liEl1);
        countriesList.appendChild(liEl2);
        countriesList.appendChild(liEl3);
        countriesList.appendChild(liEl4);
        countriesList.appendChild(liEl5);
    });
}

function getLanguages(item) {
    var languages = [],
        langLength = item.languages.length,
        i = 0;

    for (i = 0; i < langLength; i++) {
        languages.push(item.languages[i].name);
    }

    return languages.join(", ");
}