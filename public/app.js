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


