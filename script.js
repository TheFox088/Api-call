
async function getUserCountry() {
    // Retrieving username input
    const username = document.getElementById("usernameGet").value;

    // If no username is written
    if (!username) {
        alert("Please enter a username.");
        return;
    }

    const endpoint = new URL(`https://api-call-tau.vercel.app/${username}/country`);

    // If your API requires authorization, set the token
    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");

    try {
        const response = await fetch(endpoint, {
            headers: {
                "Authorization": "YOUR_TOKEN_HERE"
            }
        });

        if (response.status === 404) {
            alert("Username not found.");
            return;
        }

        const data = await response.json();
        alert(`Country: ${data.country}\nCapital: ${data.capital || "N/A"}\nInternet code: ${data.internetCode}`);
    } catch (error) {
        alert("An error occurred while fetching data.");
    }
}
