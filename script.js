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