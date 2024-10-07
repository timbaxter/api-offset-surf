fetch('https://hook.eu2.make.com/lx4g7emrs7e4pw41i4lmpbh2qnnsoqqi', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('result').innerHTML = "Emissions calculated. Total CO2: " + data.kgCO2e + " kg";
    })
    .catch(error => {
        console.error('Error:', error);
    });
