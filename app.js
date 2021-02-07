fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => displayCountries(data));

// proti ta country ta k pawar jonno 
const displayCountries = countries => {
    // console.log(countries);
    
    // read id html ul 
    const countriesDiv = document.getElementById('countries');
    // for loop k for each diea replace 
    countries.forEach(country => {
        
        // console.log(country.name);

        // create countryDiv under countriesDiv item 
        const countryDiv = document.createElement('div');
        // add class 
        countryDiv.className = 'country';
        
        /** 
        // countryDiv under h3 = country name and p = capital  
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);

        */
        // shortcut
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <P>${country.region}</P>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;

        countryDiv.innerHTML = countryInfo;
        // countriesDiv under countryDiv 
        countriesDiv.appendChild(countryDiv);
    });
    // // for loop diea proti ta country k access
    // for (let i = 0; i < countries.length; i++) {
        // const country = countries[i];
        
    // }
    
}

const displayCountryDetail = name => {
    // console.log(name);
    //dynamic api call
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    // console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>Country Name: ${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <P>${country.region}</P>
        <img src="${country.flag}">
    `
}