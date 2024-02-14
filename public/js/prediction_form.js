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
