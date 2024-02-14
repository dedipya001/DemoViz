var map = L.map('map', {
    minZoom: 3,
    maxZoom: 10,
    maxBoundsViscosity: 1.0,
    maxBounds: [
        [-90, -180],
        [90, 180]
    ]
}).setView([0, 0], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var previousMarker = null; // Store the reference to the previous marker

map.on('click', function (e) {
    var clickedLatLng = e.latlng;

    // Remove the previous marker from the map
    if (previousMarker !== null) {
        map.removeLayer(previousMarker);
    }

    // Create a new marker at the clicked location
    var newMarker = L.marker(clickedLatLng, { draggable: true }).addTo(map);

    // Update the reference to the previous marker
    previousMarker = newMarker;

    // Fetch country information using Geoapify API
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${clickedLatLng.lat}&lon=${clickedLatLng.lng}&type=country&apiKey=b9fba085c6964ab5a3f79f445b1426aa`)
        .then(response => response.json())
        .then(data => {
            const countryName = data.features[0].properties.country;
            console.log("Location updated to: " + clickedLatLng);
            console.log("Country: " + countryName);

            // Display country information in the UI
            document.getElementById('countryName').innerText = `Country: ${countryName}`;
            document.getElementById('latitude').innerText = `Latitude: ${clickedLatLng.lat}`;
            document.getElementById('longitude').innerText = `Longitude: ${clickedLatLng.lng}`;
            var infoCard = document.getElementById('countryInfo');
            // Show the info card with animation
            showInfoCard();
        })
        .catch(error => {
            console.error("Error fetching country name:", error);
        });
});

function showInfoCard() {
    var infoCard = document.getElementById('countryInfo');
    infoCard.style.visibility = 'visible';
    infoCard.style.opacity = '0';
    infoCard.style.display = 'block';
    infoCard.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.8s ease-in-out';
    infoCard.style.transform = 'scale(0.5)';
    setTimeout(function() {
        infoCard.style.transform = 'scale(1.01)';
        infoCard.style.opacity = '1';
    }, 200);
}


// Sample list of countries
document.addEventListener("DOMContentLoaded", function () {
    var datalist = document.getElementById("countryList");
    var countrylist = [
        "afghanistan",
    "albania",
    "algeria",
    "american samoa",
    "andorra",
    "angola",
    "antigua and barbuda",
    "arab world",
    "argentina",
    "armenia",
    "aruba",
    "australia",
    "austria",
    "azerbaijan",
    "the bahamas",
    "bahrain",
    "bangladesh",
    "barbados",
    "belarus",
    "belgium",
    "belize",
    "benin",
    "bermuda",
    "bhutan",
    "bolivia",
    "bosnia and herzegovina",
    "botswana",
    "brazil",
    "british virgin islands",
    "brunei darussalam",
    "bulgaria",
    "burkina faso",
    "burundi",
    "cabo verde",
    "cambodia",
    "cameroon",
    "canada",
    "caribbean small states",
    "cayman islands",
    "central african republic",
    "central europe and the baltics",
    "chad",
    "channel islands",
    "chile",
    "china",
    "colombia",
    "comoros",
    "congo, dem. rep.",
    "congo, rep.",
    "costa rica",
    "cote d'ivoire",
    "croatia",
    "cuba",
    "curacao",
    "cyprus",
    "czech republic",
    "denmark",
    "djibouti",
    "dominica",
    "dominican republic",
    "early-demographic dividend",
    "east asia & pacific",
    "east asia & pacific (excluding high income)",
    "east asia & pacific (ida & ibrd countries)",
    "ecuador",
    "egypt, arab rep.",
    "el salvador",
    "equatorial guinea",
    "eritrea",
    "estonia",
    "ethiopia",
    "euro area",
    "europe & central asia",
    "europe & central asia (excluding high income)",
    "europe & central asia (ida & ibrd countries)",
    "european union",
    "faroe islands",
    "fiji",
    "finland",
    "fragile and conflict affected situations",
    "france",
    "french polynesia",
    "gabon",
    "gambia, the",
    "georgia",
    "germany",
    "ghana",
    "gibraltar",
    "greece",
    "greenland",
    "grenada",
    "guam",
    "guatemala",
    "guinea",
    "guinea-bissau",
    "guyana",
    "haiti",
    "heavily indebted poor countries (hipc)",
    "high income",
    "honduras",
    "hong kong sar, china",
    "hungary",
    "iceland",
    "india",
    "indonesia",
    "iran, islamic rep.",
    "iraq",
    "ireland",
    "isle of man",
    "israel",
    "italy",
    "jamaica",
    "japan",
    "jordan",
    "kazakhstan",
    "kenya",
    "kiribati",
    "korea, dem. people’s rep.",
    "korea, rep.",
    "kosovo",
    "kuwait",
    "kyrgyz republic",
    "lao pdr",
    "late-demographic dividend",
    "latin america & caribbean",
    "latin america & caribbean (excluding high income)",
    "latin america & the caribbean (ida & ibrd countries)",
    "latvia",
    "least developed countries: un classification",
    "lebanon",
    "lesotho",
    "liberia",
    "libya",
    "liechtenstein",
    "lithuania",
    "low & middle income",
    "low income",
    "lower middle income",
    "luxembourg",
    "macao sar, china",
    "macedonia, fyr",
    "madagascar",
    "malawi",
    "malaysia",
    "maldives",
    "mali",
    "malta",
    "marshall islands",
    "mauritania",
    "mauritius",
    "mexico",
    "micronesia, fed. sts.",
    "middle east & north africa",
    "middle east & north africa (excluding high income)",
    "middle east & north africa (ida & ibrd countries)",
    "middle income",
    "moldova",
    "monaco",
    "mongolia",
    "montenegro",
    "morocco",
    "mozambique",
    "myanmar",
    "namibia",
    "nauru",
    "nepal",
    "netherlands",
    "new caledonia",
    "new zealand",
    "nicaragua",
    "niger",
    "nigeria",
    "north america",
    "northern mariana islands",
    "norway",
    "not classified",
    "oecd members",
    "oman",
    "other small states",
    "pacific island small states",
    "pakistan",
    "palau",
    "panama",
    "papua new guinea",
    "paraguay",
    "peru",
    "philippines",
    "poland",
    "portugal",
    "post-demographic dividend",
    "pre-demographic dividend",
    "puerto rico",
    "qatar",
    "romania",
    "russia",
    "rwanda",
    "samoa",
    "san marino",
    "sao tome and principe",
    "saudi arabia",
    "senegal",
    "serbia",
    "seychelles",
    "sierra leone",
    "singapore",
    "sint maarten (dutch part)",
    "slovak republic",
    "slovenia",
    "small states",
    "solomon islands",
    "somalia",
    "south africa",
    "south asia",
    "south asia (ida & ibrd)",
    "south sudan",
    "spain",
    "sri lanka",
    "st. kitts and nevis",
    "st. lucia",
    "st. martin (french part)",
    "st. vincent and the grenadines",
    "sub-saharan africa",
    "sub-saharan africa (excluding high income)",
    "sub-saharan africa (ida & ibrd countries)",
    "sudan",
    "suriname",
    "swaziland",
    "sweden",
    "switzerland",
    "syrian arab republic",
    "tajikistan",
    "tanzania",
    "thailand",
    "timor-leste",
    "togo",
    "tonga",
    "trinidad and tobago",
    "tunisia",
    "turkey",
    "turkmenistan",
    "turks and caicos islands",
    "tuvalu",
    "uganda",
    "ukraine",
    "united arab emirates",
    "united kingdom",
    "united states",
    "upper middle income",
    "uruguay",
    "uzbekistan",
    "vanuatu",
    "venezuela, rb",
    "vietnam",
    "virgin islands (u.s.)",
    "west bank and gaza",
    "world",
    "yemen, rep.",
    "zambia",
    "zimbabwe"
    ];

    countrylist.forEach(function (country) {
        var option = document.createElement("option");
        option.value = country;
        datalist.appendChild(option);
    });
});



// ... Your existing code

document.getElementById('searchBtn').addEventListener('click', function () {
    var countryInput = document.getElementById('countryInput').value;

    // Use Geoapify Geocoding API to get coordinates of the searched country
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${countryInput}&apiKey=b9fba085c6964ab5a3f79f445b1426aa`)
        .then(response => response.json())
        .then(data => {
            if (data.features.length > 0) {
                var countryLatLng = data.features[0].geometry.coordinates;
                var clickedLatLng = L.latLng(countryLatLng[1], countryLatLng[0]);

                // Remove the previous marker from the map
                if (previousMarker !== null) {
                    map.removeLayer(previousMarker);
                }

                // Create a new marker at the clicked location
                var newMarker = L.marker(clickedLatLng, { draggable: true }).addTo(map);

                // Update the reference to the previous marker
                previousMarker = newMarker;

                // Fetch country information using Geoapify API
                fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${clickedLatLng.lat}&lon=${clickedLatLng.lng}&type=country&apiKey=b9fba085c6964ab5a3f79f445b1426aa`)
                    .then(response => response.json())
                    .then(data => {
                        const countryName = data.features[0].properties.country;
                        console.log("Location updated to: " + clickedLatLng);
                        console.log("Country: " + countryName);

                        // Display country information in the UI
                        document.getElementById('countryName').innerText = `Country: ${countryName}`;
                        document.getElementById('latitude').innerText = `Latitude: ${clickedLatLng.lat}`;
                        document.getElementById('longitude').innerText = `Longitude: ${clickedLatLng.lng}`;

                        // Show the info card with animation
                        showInfoCard();

                        // Fly to the selected country on the map
                        map.flyTo(clickedLatLng, 5); // You can adjust the zoom level (here, 5) as needed
                    })
                    .catch(error => {
                        console.error("Error fetching country name:", error);
                    });
            } else {
                console.error("No results found for the entered country");
            }
        })
        .catch(error => {
            console.error("Error fetching country coordinates:", error);
        });
});



document.getElementById('predictionForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const selectedCountry = document.getElementById('countryName').innerText.replace('Country: ', '');
    const selectedYear = document.getElementById('yearInput').value;

    // Make an API request to your server or handle prediction locally
    const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            country: selectedCountry,
            year: selectedYear,
        }),
    });

    const data = await response.json();

    // Display the prediction result in a modal
    showModal(selectedCountry, selectedYear, data.prediction);
});

// Autoplay the background video
document.getElementById('backgroundVideo').play();

function showModal(country, year, population) {
    // Create a modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;'; // Close symbol (X)
    closeButton.addEventListener('click', closeModal);

    // Create content for the modal
    const modalText = document.createElement('p');
    modalText.innerText = `Country: ${country}\nYear: ${year}\nPredicted Population: ${population}`;

    // Append elements to the modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalText);
    modalContainer.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modalContainer);
}

function closeModal() {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.remove();
    }
}

