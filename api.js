document.addEventListener('DOMContentLoaded', () => {
    // Select the key UI elements from the DOM
    const searchBtn = document.getElementById('search-btn');
    const userInput = document.getElementById('user-input');
    const resultsContainer = document.getElementById('results-container');

    // Add a click event listener to the search button
    searchBtn.addEventListener('click', () => {
        const query = userInput.value;
        
        // Basic validation: stop if the user hasn't typed anything
        if (!query) {
            alert("Please enter a search term!");
            return;
        }

        // Clear the container and show a temporary loading message
        resultsContainer.innerHTML = '<p style="text-align:center;">Searching the archives...</p>';

        // Define the API URL with the user's query and specific data fields we need
        // limit=10 ensures we get a substantial variety of results
        const url = `https://api.artic.edu/api/v1/artworks/search?q=artist_title:"${query}"&fields=id,title,artist_display,image_id,thumbnail&limit=10`;

        // Start the network request to the Art Institute of Chicago API
        fetch(url)
            .then(response => response.json()) // Convert the raw response into a JSON object
            .then(data => {
                // Pass the array of artwork data to our rendering function
                renderArt(data.data, query);
            })
            .catch(err => {
                // Log any errors to the console and inform the user
                console.error("API Error:", err);
                resultsContainer.innerHTML = "<p>Sorry, something went wrong with the connection.</p>";
            });
    });

    /**
     * Function to generate HTML for each artwork and display it on the page
     * @param {Array} artworks - The list of art objects from the API
     * @param {String} query - The original search term used
     */
    function renderArt(artworks, query) {
        resultsContainer.innerHTML = ''; // Clear the loading message

        // Handle the case where no results are returned
        if (artworks.length === 0) {
            resultsContainer.innerHTML = '<p>No masterpieces found for that search. Try something else!</p>';
            return;
        }

        // Create and append a status message showing how many results were found
        const infoMsg = document.createElement('p');
        infoMsg.style.textAlign = "center";
        infoMsg.style.marginBottom = "20px";
        infoMsg.innerHTML = `Showing up to <strong>${artworks.length}</strong> results for "${query}".`;
        resultsContainer.appendChild(infoMsg);

        // Loop through each artwork in the data array
        artworks.forEach(work => {
            // Create a new div element for the artwork "card"
            const artCard = document.createElement('div');
            artCard.id = 'personal-connection'; // Use existing CSS style for the border/background
            artCard.style.marginTop = "20px";

            // Construct the high-resolution image URL using the AIC IIIF server format
            // If image_id is missing, we set it to null
            const imgUrl = work.image_id 
                ? `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg` 
                : null;

            // Set the inner HTML of the card with the title, artist, image, and alt text
            artCard.innerHTML = `
                <h3 style="color:#1e3a8a;">${work.title}</h3>
                <p><strong>Artist:</strong> ${work.artist_display || "Unknown"}</p>
                ${imgUrl ? `<img src="${imgUrl}" alt="${work.thumbnail?.alt_text || work.title}">` : '<p><em>No image available for this record</em></p>'}
                <p style="font-size: 0.9rem; color: #64748b; margin-top:10px;">
                    ${work.thumbnail?.alt_text || "A beautiful piece from the AIC collection."}
                </p>
            `;
            
            // Add the completed card to the page
            resultsContainer.appendChild(artCard);
        });
    }
});