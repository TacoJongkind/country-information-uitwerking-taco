//const axios = require('axios');

document.getElementById("myBtn").addEventListener("click", searchCountry)

async function searchCountry() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        console.log(result);
        console.log(result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people.");
        console.log("The capital is " + result.data[0].capital + ".");

        const numberOfCurrencies = result.data[0].currencies.length;

        for (let i = 0; i < numberOfCurrencies; i++) {
            if (numberOfCurrencies === 1) {
                console.log("And you can pay with " + result.data[0].currencies[0].name + "'s.");
            } else if (numberOfCurrencies === 2) {
                console.log("And you can pay with " + result.data[0].currencies[0].name + "'s and " + result.data[0].currencies[1].name + "'s.")
            }/* else {
                const multipleCurr = result.data[0].currencies[i + 1].name;
                /!*console.log("meerdere coins:  ", multipleCurr);*!/
                console.log("And you can pay with " + multipleCurr);
            }*/
        }
        let spokenLanguage = "They speak ";
        const numberOfLanguages = result.data[0].languages.length;
        for (let i = 0; i < numberOfLanguages; i++) {
            if (numberOfLanguages === 1) {
                console.log(spokenLanguage + result.data[0].languages[1].name + "'s");
            } else {
                console.log(spokenLanguage + result.data[0].languages[0].name + "'s and " + result.data[0].languages[1].name + "'s")
            }
        }


    } catch (error) {
        console.error(error)
    }
}

const inputField = document.getElementById("input-field");

inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        async function getInfo() {
            const input = inputField.value;
            const query = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`);
            console.log(query);
        }

        getInfo();
    }

})

