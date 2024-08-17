document.addEventListener('DOMContentLoaded', () => {
    // Health Tracking
    const healthForm = document.getElementById('health-form');
    const healthList = document.getElementById('health-list');

    healthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const healthData = document.getElementById('health-data').value;
        if (healthData) {
            const li = document.createElement('li');
            li.textContent = healthData;
            healthList.appendChild(li);
            healthForm.reset();
        } else {
            alert('Please enter health data.');
        }
    });

    // Wellness Tips
    const wellnessButton = document.getElementById('get-tips');
    const wellnessTip = document.getElementById('wellness-tip');

    wellnessButton.addEventListener('click', () => {
        // Example wellness tip
        wellnessTip.textContent = "Stay hydrated and get at least 7 hours of sleep.";
    });

    // Safety Alerts
    const alertForm = document.getElementById('alert-form');
    const alertList = document.getElementById('alert-list');

    alertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertDescription = document.getElementById('alert-description').value;
        if (alertDescription) {
            const li = document.createElement('li');
            li.textContent = alertDescription;
            alertList.appendChild(li);
            alertForm.reset();
        } else {
            alert('Please describe the safety alert.');
        }
    });

    // Emergency Contact
    const locationButton = document.getElementById('get-location');
    const locationText = document.getElementById('location');

    locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                locationText.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            }, (error) => {
                locationText.textContent = `Error: ${error.message}`;
            });
        } else {
            locationText.textContent = "Geolocation is not supported by this browser.";
        }
    });

    // Local Services Request
    const servicesForm = document.getElementById('services-form');
    const servicesList = document.getElementById('services-list');

    servicesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const serviceType = document.getElementById('service-type').value;
        if (serviceType) {
            const li = document.createElement('li');
            li.textContent = serviceType;
            servicesList.appendChild(li);
            servicesForm.reset();
        } else {
            alert('Please specify the service you need.');
        }
    });

    // Connect with Healthcare Professional
    const connectButton = document.getElementById('connect-healthcare');

    connectButton.addEventListener('click', () => {
        // Placeholder for connecting with healthcare professional
        alert("Connecting with your healthcare professional...");
    });
});
