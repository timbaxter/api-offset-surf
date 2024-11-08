fetch('https://hook.eu2.make.com/kwrobdamrwxbp6o2i1a1rckwem1xtovq', {
    method: 'POST',
    body: formData
})
    .then(response => response.json()) // Parse as JSON
    .then(data => {
        console.log(data); // Log data to see structure
        let totalKgCO2e = 0;
        // Your existing code to calculate total emissions
    })

fetch('/get-publishable-key')
    .then(response => response.json())
    .then(data => {
        const stripe = Stripe(data.publishableKey);
        // Proceed with your Stripe setup, e.g., create checkout session
    })
    .catch(error => console.error('Error fetching publishable key:', error));


