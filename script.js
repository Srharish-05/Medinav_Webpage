
// Handle Location Retrieval
document.getElementById("get-location").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Save latitude and longitude in the hidden fields
            document.getElementById("user-lat").value = latitude;
            document.getElementById("user-long").value = longitude;

            alert(`Location fetched: Latitude ${latitude}, Longitude ${longitude}`);
        }, (error) => {
            alert("Unable to fetch location. Make sure location services are enabled.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Handle User Registration Submission
document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
        name: document.getElementById("user-name").value,
        email: document.getElementById("user-email").value,
        phone: document.getElementById("user-phone").value,
        password: document.getElementById("user-password").value,
    };

    localStorage.setItem("registeredUsers", JSON.stringify(userData));
    alert("User registered successfully!");
});

document.getElementById("driver-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const driverData = {
        name: document.getElementById("driver-name").value,
        email: document.getElementById("driver-email").value,
        phone: document.getElementById("driver-phone").value,
        password: document.getElementById("driver-password").value,
        vehicle: document.getElementById("vehicle-number").value
    };

    localStorage.setItem("registeredDrivers", JSON.stringify(driverData));
    alert("Driver registered successfully!");
});

// Accept or Reject Request
document.getElementById("accept-request").addEventListener("click", () => {
    alert("Ambulance request accepted.");
});

document.getElementById("reject-request").addEventListener("click", () => {
    alert("Ambulance request rejected.");
});
        address: document.getElementById("user-address").value,
        latitude: document.getElementById("user-lat").value,
        longitude: document.getElementById("user-long").value,
    };

    console.log("User Registered with Location:", userData);
    alert("User registration successful with GPS location!");
});
