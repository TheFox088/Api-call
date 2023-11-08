

async function getUserCountry(){
    //retrieving username input first
const username = document.getElementById("usernameGet").value;

//if no username is written
if(!username){
    alert("Pleas enter a username.");
    return;
}
    const endpoint = new URL(`http://127.0.0.1:5501/${username}/country`);

    
// if your api require authorization tells u in a fashion of a token
// you might be provided with a token in the dashboard or whatever app you using
// and it might say to provide the token as a query string in url
    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");
    const respons = await fetch(endpoint, {
        headers:{
            "authorization": "YOUR_ TOKEN_HERE"
        }
    });

    if(response.status === 404) {
        alert("Username not found.");
        return;
    }

    const data = await response.jason();
    alert(`Country: ${data.country}\nCapital: ${data.capital || "N/A"}\nInternet code: ${data.internetCode}`);
}