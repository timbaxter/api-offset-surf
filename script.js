then(text => {
    try {
        const data = JSON.parse(text);
        if (data && data.kgCO2e) { // Check if data exists
            // Continue with total emissions calculations
        } else {
            document.getElementById('result').innerHTML = `<p>No emissions data returned.</p>`;
        }
    } catch (error) {
        console.error('Parsing error:', error);
        document.getElementById('result').innerHTML = `<p>Failed to retrieve valid emissions data.</p>`;
    }
})
