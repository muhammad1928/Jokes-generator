
const btnEl = document.getElementById("btn"); /* Creating a button element, getting acces to the button element*/
const jokeEl  =document.getElementById('joke')

const apiKey ="pWTyPj86tz4OjCmJWE2b3g==TqtWVdO3QbsGMf9K";

/* Passing the api key */
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, /* X-Api-Key = apiKey declared above */
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

/*creating function to fetch a joke from API*/
async function getJoke(){ /* Async lets us use await later*/
    
    /* Creating a TRY and catch to catch the errors if any occours */
    try {
        /* Start of loading effect */
        jokeEl.innerText = "Updating..."; /* setting text to updating to tell user the program is working */
        btnEl.disabled = true; /* Disable the button to make the user not press it again */
        btnEl.innerText ="Loading..."; /* Changing button text to loading... */
        /* End of loading effect */

        /* Start of async await fetching data */
        const response = await fetch(apiURL, options); /* await means, wait for response. dont go to the next line*/
        const data = await response.json(); /* Changing the response to json file*/
        /* End of async await fetching data */


        btnEl.disabled = false; /* enable the button after the joke is fetched */
        btnEl.innerText ="Tell me a joke"; /* Changing button text to back to original form */
        /*console.log(data[0]); /* Getting only the joke (first element of the array using [0]) "end of comment"*/
        /* Setting the text to the fetched data */
        jokeEl.innerText = data[0].joke; /* Changing the text in html to the joke */
        
    } catch (error) {
        console.log(error);
        jokeEl.innerText = "Error happened, Try again later";
        btnEl.disabled = false;
        btnEl.innerText ="Tell me a joke";
    }
}

btnEl.addEventListener("click", getJoke);  /* Creating an event listener. so basically doing stuf when it is clicked*/ 