// Simulating GPS data updates
setInterval(() => {
    document.getElementById("user-location").innerHTML = `
        <h2>User Location</h2>
        <p>Latitude: ${Math.random().toFixed(5)}, Longitude: ${Math.random().toFixed(5)}</p>
    `;
    document.getElementById("ambulance-location").innerHTML = `
        <h2>Ambulance Location</h2>
        <p>Latitude: ${Math.random().toFixed(5)}, Longitude: ${Math.random().toFixed(5)}</p>
    `;
}, 2000);
