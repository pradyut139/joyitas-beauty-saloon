import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { 
    getDatabase, ref, push, set, get, onValue, update, serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// TODO: Replace this with your own Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let selectedServices = [];

// Utility: Show toast notifications
function showToast(message, type='info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Extend with UI toast if desired
}

// Load services from Firebase and display
async function loadServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    if (!servicesContainer) return;
    try {
        const servicesSnap = await get(ref(database, 'services'));
        const servicesData = servicesSnap.val();
        if (!servicesData) {
            servicesContainer.innerHTML = '<p>No services available right now.</p>';
            return;
        }
        let html = '';
        for (const catKey in servicesData) {
            const category = servicesData[catKey];
            html += `<h3>${category.name}</h3><ul>`;
            for (const service of category.services) {
                html += `<li>
                  <label>
                    <input type="checkbox" value='${JSON.stringify(service)}' onchange="toggleService(this)" />
                    ${service.name} - ₹${service.price} (${service.duration}min)
                  </label>
                </li>`;
            }
            html += '</ul>';
        }
        servicesContainer.innerHTML = html;
    } catch (err) {
        showToast('Failed to load services', 'error');
    }
}

window.toggleService = function (checkbox) {
    const service = JSON.parse(checkbox.value);
    if (checkbox.checked) {
        selectedServices.push(service);
    } else {
        selectedServices = selectedServices.filter(s => s.id !== service.id);
    }
    updateBookingSummary();
};

function updateBookingSummary() {
    const summaryContainer = document.getElementById('bookingSummary');
    if (!summaryContainer) return;
    if (selectedServices.length === 0) {
        summaryContainer.innerHTML = '<p>No services selected.</p>';
        return;
    }
    let html = '<h4>Selected Services</h4><ul>';
    let total = 0;
    selectedServices.forEach(s=>{
        html += `<li>${s.name} - ₹${s.price}</li>`;
        total += s.price;
    });
    html += `</ul><p><strong>Total: ₹${total}</strong></p>`;
    summaryContainer.innerHTML = html;
}

// Submit booking data to Firebase
async function submitBooking(event) {
    event.preventDefault();
    if (selectedServices.length === 0) {
        showToast('Please select at least one service', 'warning');
        return;
    }
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const email = document.getElementById('custEmail').value.trim();
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    if (!name || !phone || !date || !time) {
        showToast('Please fill all required fields', 'warning');
        return;
    }
    try {
        // Save customer info or update existing based on phone number
        const customersRef = ref(database, 'customers');
        const snapshot = await get(customersRef);
        let customerId = null;
        let customers = snapshot.val() || {};
        for (const key in customers) {
            if (customers[key].phone === phone) {
                customerId = key;
                break;
            }
        }
        if (!customerId) {
            const newCustomerRef = push(customersRef);
            await set(newCustomerRef, {name, phone, email, registrationDate: serverTimestamp()});
            customerId = newCustomerRef.key;
        }

        // Add booking
        const bookingsRef = ref(database, 'bookings');
        const newBookingRef = push(bookingsRef);
        await set(newBookingRef, {
            customerId,
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            services: selectedServices,
            bookingDate: date,
            timeSlot: time,
            status: 'pending',
            createdAt: serverTimestamp()
        });
        showToast('Appointment booked successfully!', 'success');
        selectedServices = [];
        updateBookingSummary();
        document.getElementById('bookingForm').reset();
        loadServices();
    } catch {
        showToast('Booking failed. Please try again.', 'error');
    }
}

window.submitBooking = submitBooking;

window.onload = () => {
    loadServices();

    // Populate booking date's min as today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // Populate time slots dropdown
    const times = ['09:00', '09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'];
    const timeSelect = document.getElementById('bookingTime');
    if (timeSelect) {
        times.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.innerText = t;
            timeSelect.appendChild(opt);
        });
    }
}
