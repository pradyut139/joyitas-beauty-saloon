// Joyita's Beauty Saloon - Application Logic (Fixed)

// Application data from the provided JSON
const SALON_DATA = {
  salon_info: {
    name: "Joyita's Beauty Saloon",
    tagline: "Where Beauty Meets Excellence",
    phone: "+91 9876543210",
    email: "info@joyitasbeauty.com",
    address: "123 Beauty Street, Hyderabad, Telangana 500001",
    hours: "9:00 AM - 8:00 PM",
    instagram: "@joyitasbeauty",
    facebook: "JoyitasBeautySaloon"
  },
  service_categories: [
    {
      id: "hair",
      name: "Hair Services",
      icon: "💇‍♀️",
      color: "#EC4899",
      services: [
        {id: "hair_cut_basic", name: "Basic Hair Cutting", price: 150, duration: 30, description: "Professional hair cutting with basic styling", popular: true},
        {id: "hair_cut_layer", name: "Layer Cutting", price: 300, duration: 45, description: "Trendy layered haircut with styling", popular: true},
        {id: "hair_cut_step", name: "Step Cutting", price: 350, duration: 50, description: "Modern step cut hairstyle"},
        {id: "hair_cut_bob", name: "Bob Cutting", price: 400, duration: 45, description: "Classic and trendy bob cuts"},
        {id: "hair_cut_pixie", name: "Pixie Cut", price: 450, duration: 60, description: "Short and stylish pixie haircut"},
        {id: "hair_styling", name: "Hair Styling & Blow Dry", price: 200, duration: 30, description: "Professional styling and blow dry", popular: true},
        {id: "hair_color_full", name: "Full Hair Coloring", price: 800, duration: 120, description: "Complete hair coloring service"},
        {id: "hair_color_roots", name: "Root Touch-up", price: 450, duration: 60, description: "Root touch-up coloring"},
        {id: "hair_highlights", name: "Hair Highlights", price: 1200, duration: 180, description: "Professional highlighting with foils"},
        {id: "hair_balayage", name: "Balayage", price: 1500, duration: 200, description: "Hand-painted highlighting technique"},
        {id: "hair_spa", name: "Hair Spa Treatment", price: 800, duration: 90, description: "Deep conditioning hair spa", popular: true},
        {id: "keratin_treatment", name: "Keratin Treatment", price: 4000, duration: 300, description: "Professional keratin smoothing"},
        {id: "hair_straightening", name: "Hair Straightening", price: 3500, duration: 240, description: "Chemical hair straightening"},
        {id: "hair_rebonding", name: "Hair Rebonding", price: 5000, duration: 360, description: "Hair rebonding for straight hair"},
        {id: "bridal_hair", name: "Bridal Hair Styling", price: 2500, duration: 120, description: "Complete bridal hairstyling"}
      ]
    },
    {
      id: "skincare",
      name: "Skin Care",
      icon: "✨",
      color: "#14B8A6",
      services: [
        {id: "facial_basic", name: "Basic Facial", price: 600, duration: 60, description: "Deep cleansing facial treatment", popular: true},
        {id: "facial_fruit", name: "Fruit Facial", price: 800, duration: 75, description: "Vitamin-rich fruit facial"},
        {id: "facial_gold", name: "Gold Facial", price: 1500, duration: 90, description: "Luxurious gold facial treatment"},
        {id: "facial_diamond", name: "Diamond Facial", price: 1800, duration: 90, description: "Premium diamond facial"},
        {id: "facial_anti_aging", name: "Anti-Aging Facial", price: 1200, duration: 90, description: "Advanced anti-aging treatment"},
        {id: "facial_hydrating", name: "Hydrating Facial", price: 900, duration: 75, description: "Deep hydrating facial"},
        {id: "cleanup_basic", name: "Basic Clean-up", price: 350, duration: 45, description: "Basic facial cleanup", popular: true},
        {id: "cleanup_premium", name: "Premium Clean-up", price: 500, duration: 60, description: "Advanced cleanup with extraction"},
        {id: "cleanup_detan", name: "De-tan Clean-up", price: 450, duration: 60, description: "De-tanning cleanup treatment"},
        {id: "skin_brightening", name: "Skin Brightening", price: 1000, duration: 90, description: "Skin brightening treatment"},
        {id: "acne_treatment", name: "Anti-Acne Treatment", price: 800, duration: 75, description: "Specialized acne treatment"},
        {id: "pigmentation_treatment", name: "Pigmentation Treatment", price: 1200, duration: 90, description: "Pigmentation reduction treatment"},
        {id: "face_pack", name: "Face Pack Treatment", price: 300, duration: 30, description: "Nourishing face pack"},
        {id: "exfoliation", name: "Face Exfoliation", price: 400, duration: 45, description: "Deep exfoliation treatment"}
      ]
    },
    {
      id: "bodycare",
      name: "Body Care",
      icon: "💆‍♀️",
      color: "#F59E0B",
      services: [
        {id: "wax_full_body", name: "Full Body Waxing", price: 1500, duration: 120, description: "Complete body hair removal", popular: true},
        {id: "wax_half_body", name: "Half Body Waxing", price: 900, duration: 75, description: "Upper or lower body waxing"},
        {id: "wax_arms", name: "Full Arms Waxing", price: 300, duration: 30, description: "Arms and underarms waxing", popular: true},
        {id: "wax_legs", name: "Full Legs Waxing", price: 500, duration: 45, description: "Complete legs waxing"},
        {id: "wax_face", name: "Face Waxing", price: 100, duration: 15, description: "Gentle facial hair removal"},
        {id: "wax_bikini", name: "Bikini Waxing", price: 400, duration: 30, description: "Bikini area hair removal"},
        {id: "massage_full_body", name: "Full Body Massage", price: 1800, duration: 90, description: "Relaxing full body massage"},
        {id: "massage_back", name: "Back Massage", price: 600, duration: 45, description: "Therapeutic back massage"},
        {id: "massage_head", name: "Head Massage", price: 300, duration: 30, description: "Relaxing head massage"},
        {id: "massage_foot", name: "Foot Massage", price: 400, duration: 30, description: "Soothing foot massage"},
        {id: "body_polishing", name: "Body Polishing", price: 2000, duration: 120, description: "Exfoliating body treatment"},
        {id: "body_scrub", name: "Body Scrub", price: 1200, duration: 90, description: "Rejuvenating body scrub"},
        {id: "body_wrap", name: "Body Wrap", price: 2500, duration: 150, description: "Detoxifying body wrap treatment"}
      ]
    },
    {
      id: "nails",
      name: "Nail Care",
      icon: "💅",
      color: "#6B46C1",
      services: [
        {id: "manicure_basic", name: "Basic Manicure", price: 400, duration: 45, description: "Basic nail care and polish", popular: true},
        {id: "manicure_deluxe", name: "Deluxe Manicure", price: 600, duration: 60, description: "Premium manicure with massage"},
        {id: "manicure_gel", name: "Gel Manicure", price: 800, duration: 75, description: "Long-lasting gel polish"},
        {id: "manicure_french", name: "French Manicure", price: 700, duration: 60, description: "Classic French style"},
        {id: "pedicure_basic", name: "Basic Pedicure", price: 500, duration: 60, description: "Basic foot care and polish", popular: true},
        {id: "pedicure_deluxe", name: "Deluxe Pedicure", price: 700, duration: 75, description: "Premium pedicure treatment"},
        {id: "pedicure_spa", name: "Spa Pedicure", price: 900, duration: 90, description: "Luxurious spa pedicure"},
        {id: "pedicure_french", name: "French Pedicure", price: 750, duration: 75, description: "Classic French pedicure"},
        {id: "nail_art_simple", name: "Simple Nail Art", price: 300, duration: 30, description: "Basic nail art designs"},
        {id: "nail_art_complex", name: "Complex Nail Art", price: 600, duration: 60, description: "Intricate nail art designs"},
        {id: "nail_extensions", name: "Nail Extensions", price: 1000, duration: 120, description: "Acrylic nail extensions"},
        {id: "nail_repair", name: "Nail Repair", price: 200, duration: 20, description: "Broken nail repair service"}
      ]
    },
    {
      id: "threading",
      name: "Threading & Grooming",
      icon: "🪒",
      color: "#EF4444",
      services: [
        {id: "eyebrow_threading", name: "Eyebrow Threading", price: 80, duration: 15, description: "Precise eyebrow shaping", popular: true},
        {id: "eyebrow_shaping", name: "Eyebrow Shaping", price: 120, duration: 20, description: "Professional eyebrow design"},
        {id: "eyebrow_tinting", name: "Eyebrow Tinting", price: 200, duration: 25, description: "Eyebrow coloring service"},
        {id: "face_threading", name: "Full Face Threading", price: 150, duration: 25, description: "Complete face threading"},
        {id: "upper_lip", name: "Upper Lip Threading", price: 40, duration: 10, description: "Upper lip hair removal", popular: true},
        {id: "chin_threading", name: "Chin Threading", price: 50, duration: 10, description: "Chin hair removal"},
        {id: "forehead_threading", name: "Forehead Threading", price: 60, duration: 15, description: "Forehead hair threading"},
        {id: "side_locks", name: "Side Locks Threading", price: 70, duration: 15, description: "Side locks hair removal"},
        {id: "neck_threading", name: "Neck Threading", price: 80, duration: 15, description: "Neck area threading"}
      ]
    },
    {
      id: "bridal",
      name: "Bridal & Special",
      icon: "👰",
      color: "#BE185D",
      services: [
        {id: "bridal_basic", name: "Basic Bridal Makeup", price: 8000, duration: 180, description: "Traditional bridal makeup"},
        {id: "bridal_hd", name: "HD Bridal Makeup", price: 15000, duration: 240, description: "High definition bridal makeup"},
        {id: "bridal_airbrush", name: "Airbrush Bridal Makeup", price: 20000, duration: 300, description: "Premium airbrush makeup", popular: true},
        {id: "bridal_trial", name: "Bridal Makeup Trial", price: 3000, duration: 120, description: "Pre-wedding makeup trial"},
        {id: "party_makeup", name: "Party Makeup", price: 3000, duration: 90, description: "Glamorous party makeup", popular: true},
        {id: "cocktail_makeup", name: "Cocktail Makeup", price: 4000, duration: 120, description: "Elegant cocktail makeup"},
        {id: "engagement_makeup", name: "Engagement Makeup", price: 5000, duration: 120, description: "Special engagement makeup"},
        {id: "reception_makeup", name: "Reception Makeup", price: 6000, duration: 150, description: "Reception ceremony makeup"},
        {id: "pre_bridal_1week", name: "1 Week Pre-Bridal Package", price: 15000, duration: 420, description: "Complete 1-week grooming"},
        {id: "pre_bridal_2week", name: "2 Week Pre-Bridal Package", price: 25000, duration: 840, description: "Comprehensive 2-week package"},
        {id: "mehendi", name: "Mehendi/Henna Design", price: 1500, duration: 120, description: "Traditional mehendi application"},
        {id: "saree_draping", name: "Saree Draping", price: 800, duration: 30, description: "Professional saree draping"}
      ]
    }
  ],
  time_slots: [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30"
  ],
  admin_credentials: {
    username: "admin",
    password: "admin123"
  }
};

// Application State
let appState = {
  currentView: 'customer',
  currentCategory: 'all',
  cart: [],
  isAdmin: false,
  services: [...SALON_DATA.service_categories],
  bookings: [],
  customers: [],
  editingService: null,
  cartVisible: false
};

// Mock Firebase functionality (since we can't use real Firebase without config)
const firebaseConfig = {
  apiKey: "AIzaSyDSw6BqdgEwq6XtCIZ4PN7E6JJ5g0ZZvb0",
  authDomain: "joyitas-beauty-saloon.firebaseapp.com",
  databaseURL: "https://joyitas-beauty-saloon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "joyitas-beauty-saloon",
  storageBucket: "joyitas-beauty-saloon.firebasestorage.app",
  messagingSenderId: "706560769170",
  appId: "1:706560769170:web:2a70e5a79634d3c6517a4b"
};

  // Simulate Firebase database operations
  ref(path) {
    return {
      set: (data) => {
        this.setData(path, data);
        this.notifyListeners(path);
        return Promise.resolve();
      },
      push: (data) => {
        const key = this.generateKey();
        const newPath = `${path}/${key}`;
        this.setData(newPath, { ...data, id: key });
        this.notifyListeners(path);
        return Promise.resolve({ key });
      },
      once: (eventType) => {
        return Promise.resolve({
          val: () => this.getData(path)
        });
      },
      on: (eventType, callback) => {
        this.listeners.push({ path, callback });
        callback({ val: () => this.getData(path) });
      }
    };
  }

  generateKey() {
    return 'key_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  setData(path, data) {
    const pathParts = path.split('/').filter(p => p);
    let current = this.data;
    
    for (let i = 0; i < pathParts.length - 1; i++) {
      if (!current[pathParts[i]]) {
        current[pathParts[i]] = {};
      }
      current = current[pathParts[i]];
    }
    
    if (pathParts.length > 0) {
      current[pathParts[pathParts.length - 1]] = data;
    }
  }

  getData(path) {
    const pathParts = path.split('/').filter(p => p);
    let current = this.data;
    
    for (const part of pathParts) {
      if (current[part] === undefined) {
        return null;
      }
      current = current[part];
    }
    
    return current;
  }

  notifyListeners(path) {
    this.listeners.forEach(listener => {
      if (listener.path === path) {
        listener.callback({ val: () => this.getData(path) });
      }
    });
  }
}

// Initialize mock Firebase
const mockFirebase = new MockFirebase();
const database = mockFirebase;

// DOM Elements
let elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  initializeApp();
});

function initializeElements() {
  elements = {
    // Loading
    loadingScreen: document.getElementById('loading-screen'),
    
    // Customer App
    customerApp: document.getElementById('customer-app'),
    categoryNav: document.getElementById('category-nav'),
    servicesGrid: document.getElementById('services-grid'),
    cartIcon: document.getElementById('cart-icon'),
    cartCount: document.getElementById('cart-count'),
    cartSummary: document.getElementById('cart-summary'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    
    // Admin App
    adminApp: document.getElementById('admin-app'),
    adminLoginBtn: document.getElementById('admin-login-btn'),
    adminLogout: document.getElementById('admin-logout'),
    
    // Modals
    adminLoginModal: document.getElementById('admin-login-modal'),
    bookingModal: document.getElementById('booking-modal'),
    serviceModal: document.getElementById('service-modal'),
    
    // Forms
    adminLoginForm: document.getElementById('admin-login-form'),
    bookingForm: document.getElementById('booking-form'),
    serviceForm: document.getElementById('service-form'),
    
    // Admin sections
    adminSections: {
      services: document.getElementById('admin-services'),
      bookings: document.getElementById('admin-bookings'),
      customers: document.getElementById('admin-customers'),
      analytics: document.getElementById('admin-analytics')
    },
    
    // Toast
    toast: document.getElementById('toast'),
    toastContent: document.getElementById('toast-content')
  };
}

function setupEventListeners() {
  // Admin login
  elements.adminLoginBtn?.addEventListener('click', () => showModal('admin-login-modal'));
  elements.adminLoginForm?.addEventListener('submit', handleAdminLogin);
  elements.adminLogout?.addEventListener('click', handleAdminLogout);
  
  // Cart functionality
  elements.cartIcon?.addEventListener('click', toggleCart);
  document.getElementById('clear-cart')?.addEventListener('click', clearCart);
  document.getElementById('book-appointment')?.addEventListener('click', () => {
    if (appState.cart.length === 0) {
      showToast('Please select at least one service first', 'error');
      return;
    }
    showModal('booking-modal');
  });
  
  // Booking form
  elements.bookingForm?.addEventListener('submit', handleBooking);
  
  // Service form
  elements.serviceForm?.addEventListener('submit', handleServiceForm);
  document.getElementById('add-service-btn')?.addEventListener('click', () => showAddServiceModal());
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      hideModal(modal.id);
    });
  });
  
  // Modal backdrop click to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal(modal.id);
      }
    });
  });
  
  // Admin navigation
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.target.dataset.section;
      switchAdminSection(section);
    });
  });
}

function initializeApp() {
  // Show loading screen
  setTimeout(() => {
    elements.loadingScreen.style.display = 'none';
    renderCategoryNav();
    renderServices();
    populateTimeSlots();
    loadFirebaseData();
  }, 1500);
}

function loadFirebaseData() {
  // Load existing data from mock Firebase
  database.ref('bookings').once('value').then(snapshot => {
    const bookings = snapshot.val();
    if (bookings) {
      appState.bookings = Object.values(bookings);
      updateAnalytics();
    }
  });
  
  database.ref('customers').once('value').then(snapshot => {
    const customers = snapshot.val();
    if (customers) {
      appState.customers = Object.values(customers);
      updateAnalytics();
    }
  });
}

function renderCategoryNav() {
  const navScroll = elements.categoryNav.querySelector('.nav-scroll');
  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    ...SALON_DATA.service_categories
  ];
  
  navScroll.innerHTML = categories.map(cat => 
    `<button class="nav-item ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
      ${cat.icon} ${cat.name}
    </button>`
  ).join('');
  
  // Add event listeners to category buttons
  navScroll.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      switchCategory(category);
    });
  });
}

function switchCategory(category) {
  appState.currentCategory = category;
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  renderServices();
}

function renderServices() {
  let servicesToShow = [];
  
  if (appState.currentCategory === 'all') {
    // Show all services from all categories
    servicesToShow = SALON_DATA.service_categories.flatMap(cat => 
      cat.services.map(service => ({...service, category: cat.name, categoryId: cat.id}))
    );
  } else {
    // Show services from specific category
    const category = SALON_DATA.service_categories.find(cat => cat.id === appState.currentCategory);
    if (category) {
      servicesToShow = category.services.map(service => ({...service, category: category.name, categoryId: category.id}));
    }
  }
  
  elements.servicesGrid.innerHTML = servicesToShow.map(service => 
    `<div class="service-card ${isServiceInCart(service.id) ? 'selected' : ''}" data-service-id="${service.id}">
      ${service.popular ? '<div class="popular-badge">Popular</div>' : ''}
      <div class="service-category">${service.category}</div>
      <h3 class="service-name">${service.name}</h3>
      <p class="service-description">${service.description}</p>
      <div class="service-meta">
        <div class="service-price">₹${service.price}</div>
        <div class="service-duration">${service.duration} min</div>
      </div>
    </div>`
  ).join('');
  
  // Add click listeners to service cards
  elements.servicesGrid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const serviceId = e.currentTarget.dataset.serviceId;
      toggleServiceInCart(serviceId);
    });
  });
}

function isServiceInCart(serviceId) {
  return appState.cart.some(item => item.id === serviceId);
}

function toggleServiceInCart(serviceId) {
  const existingIndex = appState.cart.findIndex(item => item.id === serviceId);
  
  if (existingIndex > -1) {
    // Remove from cart
    appState.cart.splice(existingIndex, 1);
    showToast(`Service removed from cart`, 'success');
  } else {
    // Add to cart
    const service = findServiceById(serviceId);
    if (service) {
      appState.cart.push(service);
      showToast(`${service.name} added to cart`, 'success');
    }
  }
  
  updateCartUI();
  renderServices(); // Re-render to update selected states
}

function findServiceById(serviceId) {
  for (const category of SALON_DATA.service_categories) {
    const service = category.services.find(s => s.id === serviceId);
    if (service) {
      return {...service, category: category.name, categoryId: category.id};
    }
  }
  return null;
}

function updateCartUI() {
  const cartCount = appState.cart.length;
  const cartTotal = appState.cart.reduce((total, item) => total + item.price, 0);
  
  elements.cartCount.textContent = cartCount;
  elements.cartTotal.textContent = cartTotal;
  
  if (cartCount > 0) {
    // Always show cart summary when there are items
    elements.cartSummary.classList.remove('hidden');
    appState.cartVisible = true;
    renderCartItems();
  } else {
    elements.cartSummary.classList.add('hidden');
    appState.cartVisible = false;
  }
}

function renderCartItems() {
  elements.cartItems.innerHTML = appState.cart.map(item => 
    `<div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
    </div>`
  ).join('');
}

function removeFromCart(serviceId) {
  const index = appState.cart.findIndex(item => item.id === serviceId);
  if (index > -1) {
    const serviceName = appState.cart[index].name;
    appState.cart.splice(index, 1);
    updateCartUI();
    renderServices();
    showToast(`${serviceName} removed from cart`, 'success');
  }
}

function clearCart() {
  if (appState.cart.length === 0) {
    showToast('Cart is already empty', 'error');
    return;
  }
  
  appState.cart = [];
  updateCartUI();
  renderServices();
  showToast('Cart cleared successfully', 'success');
}

function toggleCart() {
  if (appState.cart.length === 0) {
    showToast('Your cart is empty. Please select some services first.', 'error');
    return;
  }
  
  appState.cartVisible = !appState.cartVisible;
  elements.cartSummary.classList.toggle('hidden', !appState.cartVisible);
}

function populateTimeSlots() {
  const timeSelect = document.getElementById('appointment-time');
  if (timeSelect) {
    timeSelect.innerHTML = '<option value="">Select Time</option>' +
      SALON_DATA.time_slots.map(time => `<option value="${time}">${time}</option>`).join('');
  }
}

// Modal functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    // Set minimum date to today for appointment booking
    if (modalId === 'booking-modal') {
      const dateInput = document.getElementById('appointment-date');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
      }
    }
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Admin functionality
function handleAdminLogin(e) {
  e.preventDefault();
  
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;
  
  if (username === SALON_DATA.admin_credentials.username && 
      password === SALON_DATA.admin_credentials.password) {
    appState.isAdmin = true;
    hideModal('admin-login-modal');
    switchToAdminView();
    showToast('Welcome, Admin! You have full access to manage the salon.', 'success');
    
    // Clear form
    elements.adminLoginForm.reset();
  } else {
    showToast('Invalid credentials. Please check username and password.', 'error');
  }
}

function handleAdminLogout() {
  appState.isAdmin = false;
  switchToCustomerView();
  showToast('Logged out successfully. Thank you!', 'success');
}

function switchToAdminView() {
  elements.customerApp.classList.add('hidden');
  elements.adminApp.classList.remove('hidden');
  appState.currentView = 'admin';
  
  // Make sure the first section is shown
  switchAdminSection('services');
}

function switchToCustomerView() {
  elements.customerApp.classList.remove('hidden');
  elements.adminApp.classList.add('hidden');
  appState.currentView = 'customer';
}

function switchAdminSection(section) {
  // Update nav active state
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });
  
  // Show/hide sections
  Object.keys(elements.adminSections).forEach(key => {
    const sectionElement = elements.adminSections[key];
    if (sectionElement) {
      sectionElement.classList.toggle('hidden', key !== section);
    }
  });
  
  // Load section-specific data
  switch(section) {
    case 'services':
      renderAdminServices();
      break;
    case 'bookings':
      renderBookings();
      break;
    case 'customers':
      renderCustomers();
      break;
    case 'analytics':
      updateAnalytics();
      break;
  }
}

function renderAdminServices() {
  const container = document.getElementById('admin-categories');
  if (!container) return;
  
  container.innerHTML = SALON_DATA.service_categories.map(category => 
    `<div class="admin-category">
      <div class="admin-category-header">
        <h3 class="admin-category-title">${category.icon} ${category.name}</h3>
      </div>
      <div class="admin-services-list">
        ${category.services.map(service => 
          `<div class="admin-service-item">
            <div class="admin-service-info">
              <h4>${service.name}</h4>
              <div class="admin-service-meta">₹${service.price} • ${service.duration} min • ${service.description}</div>
            </div>
            <div class="admin-service-actions">
              <button class="btn btn-edit" onclick="editService('${service.id}', '${category.id}')">Edit</button>
              <button class="btn btn-delete" onclick="deleteService('${service.id}', '${category.id}')">Delete</button>
            </div>
          </div>`
        ).join('')}
      </div>
    </div>`
  ).join('');
}

function showAddServiceModal() {
  appState.editingService = null;
  document.getElementById('service-modal-title').textContent = 'Add New Service';
  
  // Populate category dropdown
  const categorySelect = document.getElementById('service-category');
  categorySelect.innerHTML = '<option value="">Select Category</option>' +
    SALON_DATA.service_categories.map(cat => 
      `<option value="${cat.id}">${cat.name}</option>`
    ).join('');
  
  // Clear form
  elements.serviceForm.reset();
  showModal('service-modal');
}

function editService(serviceId, categoryId) {
  const category = SALON_DATA.service_categories.find(cat => cat.id === categoryId);
  const service = category?.services.find(s => s.id === serviceId);
  
  if (!service) return;
  
  appState.editingService = { serviceId, categoryId };
  document.getElementById('service-modal-title').textContent = 'Edit Service';
  
  // Populate category dropdown
  const categorySelect = document.getElementById('service-category');
  categorySelect.innerHTML = '<option value="">Select Category</option>' +
    SALON_DATA.service_categories.map(cat => 
      `<option value="${cat.id}" ${cat.id === categoryId ? 'selected' : ''}>${cat.name}</option>`
    ).join('');
  
  // Fill form with service data
  document.getElementById('service-name').value = service.name;
  document.getElementById('service-category').value = categoryId;
  document.getElementById('service-price').value = service.price;
  document.getElementById('service-duration').value = service.duration;
  document.getElementById('service-description').value = service.description;
  document.getElementById('service-popular').checked = service.popular || false;
  
  showModal('service-modal');
}

function handleServiceForm(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('service-name').value.trim(),
    category: document.getElementById('service-category').value,
    price: parseInt(document.getElementById('service-price').value),
    duration: parseInt(document.getElementById('service-duration').value),
    description: document.getElementById('service-description').value.trim(),
    popular: document.getElementById('service-popular').checked
  };
  
  // Validation
  if (!formData.name || !formData.category || !formData.price || !formData.duration) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  if (appState.editingService) {
    // Update existing service
    const { serviceId, categoryId } = appState.editingService;
    const category = SALON_DATA.service_categories.find(cat => cat.id === categoryId);
    const serviceIndex = category.services.findIndex(s => s.id === serviceId);
    
    if (serviceIndex > -1) {
      category.services[serviceIndex] = { 
        ...category.services[serviceIndex], 
        ...formData 
      };
    }
    
    showToast('Service updated successfully!', 'success');
  } else {
    // Add new service
    const categoryId = formData.category;
    const category = SALON_DATA.service_categories.find(cat => cat.id === categoryId);
    
    if (category) {
      const newService = {
        id: `${categoryId}_${Date.now()}`,
        ...formData
      };
      category.services.push(newService);
      showToast('Service added successfully!', 'success');
    }
  }
  
  // Save to Firebase (mock)
  database.ref('services').set(SALON_DATA.service_categories);
  
  hideModal('service-modal');
  renderAdminServices();
  renderServices(); // Update customer view too
}

function deleteService(serviceId, categoryId) {
  if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
    const category = SALON_DATA.service_categories.find(cat => cat.id === categoryId);
    const serviceIndex = category.services.findIndex(s => s.id === serviceId);
    
    if (serviceIndex > -1) {
      const serviceName = category.services[serviceIndex].name;
      category.services.splice(serviceIndex, 1);
      
      // Save to Firebase (mock)
      database.ref('services').set(SALON_DATA.service_categories);
      
      renderAdminServices();
      renderServices(); // Update customer view too
      showToast(`${serviceName} deleted successfully!`, 'success');
    }
  }
}

// Booking functionality
function handleBooking(e) {
  e.preventDefault();
  
  if (appState.cart.length === 0) {
    showToast('Please select at least one service', 'error');
    return;
  }
  
  // Get form data
  const customerName = document.getElementById('customer-name').value.trim();
  const customerPhone = document.getElementById('customer-phone').value.trim();
  const appointmentDate = document.getElementById('appointment-date').value;
  const appointmentTime = document.getElementById('appointment-time').value;
  
  // Validation
  if (!customerName || !customerPhone || !appointmentDate || !appointmentTime) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  const bookingData = {
    id: `booking_${Date.now()}`,
    customerName: customerName,
    customerPhone: customerPhone,
    customerEmail: document.getElementById('customer-email').value.trim(),
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime,
    specialNotes: document.getElementById('special-notes').value.trim(),
    services: [...appState.cart],
    totalAmount: appState.cart.reduce((total, item) => total + item.price, 0),
    totalDuration: appState.cart.reduce((total, item) => total + item.duration, 0),
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };
  
  // Save booking to Firebase (mock)
  database.ref('bookings').push(bookingData).then(() => {
    // Save customer data
    const customerData = {
      id: `customer_${Date.now()}`,
      name: bookingData.customerName,
      phone: bookingData.customerPhone,
      email: bookingData.customerEmail,
      lastVisit: bookingData.appointmentDate,
      totalBookings: 1,
      totalSpent: bookingData.totalAmount
    };
    
    // Check if customer already exists
    const existingCustomerIndex = appState.customers.findIndex(c => c.phone === customerData.phone);
    if (existingCustomerIndex > -1) {
      appState.customers[existingCustomerIndex].totalBookings += 1;
      appState.customers[existingCustomerIndex].lastVisit = bookingData.appointmentDate;
      appState.customers[existingCustomerIndex].totalSpent += bookingData.totalAmount;
    } else {
      appState.customers.push(customerData);
      database.ref('customers').push(customerData);
    }
    
    appState.bookings.push(bookingData);
    
    showToast('🎉 Appointment booked successfully! We will see you soon.', 'success');
    hideModal('booking-modal');
    clearCart();
    elements.bookingForm.reset();
    
    // Update analytics
    updateAnalytics();
  });
}

function renderBookings() {
  const container = document.getElementById('bookings-list');
  if (!container) return;
  
  if (appState.bookings.length === 0) {
    container.innerHTML = '<div class="card"><div class="card__body"><p style="text-align: center; color: var(--color-text-secondary);">No bookings yet. When customers book appointments, they will appear here.</p></div></div>';
    return;
  }
  
  // Sort bookings by date (newest first)
  const sortedBookings = [...appState.bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  container.innerHTML = sortedBookings.map(booking => 
    `<div class="booking-item">
      <div class="booking-header">
        <div>
          <h4 class="booking-customer">${booking.customerName}</h4>
          <div class="booking-date-time">
            📅 ${new Date(booking.appointmentDate).toLocaleDateString('en-IN')} 
            🕒 ${booking.appointmentTime}
          </div>
        </div>
        <div class="status status--${booking.status === 'confirmed' ? 'success' : 'info'}">${booking.status.toUpperCase()}</div>
      </div>
      <div class="booking-services">
        <strong>Services:</strong><br>
        ${booking.services.map(service => 
          `<div class="booking-service">• ${service.name} - ₹${service.price} (${service.duration}min)</div>`
        ).join('')}
      </div>
      <div class="booking-total">Total: ₹${booking.totalAmount} (${booking.totalDuration} min total duration)</div>
      <div class="booking-contact">📞 ${booking.customerPhone}${booking.customerEmail ? ` 📧 ${booking.customerEmail}` : ''}</div>
      ${booking.specialNotes ? `<div class="booking-notes"><strong>Notes:</strong> ${booking.specialNotes}</div>` : ''}
    </div>`
  ).join('');
}

function renderCustomers() {
  const container = document.getElementById('customers-list');
  if (!container) return;
  
  if (appState.customers.length === 0) {
    container.innerHTML = '<div class="card"><div class="card__body"><p style="text-align: center; color: var(--color-text-secondary);">No customer data yet. When customers book appointments, their information will be saved here.</p></div></div>';
    return;
  }
  
  container.innerHTML = appState.customers.map(customer => 
    `<div class="customer-item">
      <h4 class="customer-name">${customer.name}</h4>
      <div class="customer-details">
        📞 ${customer.phone}<br>
        ${customer.email ? `📧 ${customer.email}<br>` : ''}
        📅 Last visit: ${new Date(customer.lastVisit).toLocaleDateString('en-IN')}<br>
        📊 Total bookings: ${customer.totalBookings}<br>
        💰 Total spent: ₹${customer.totalSpent || 0}
      </div>
    </div>`
  ).join('');
}

function updateAnalytics() {
  const totalBookings = appState.bookings.length;
  const totalCustomers = appState.customers.length;
  const totalRevenue = appState.bookings.reduce((total, booking) => total + booking.totalAmount, 0);
  
  document.getElementById('total-bookings').textContent = totalBookings;
  document.getElementById('total-customers').textContent = totalCustomers;
  document.getElementById('total-revenue').textContent = totalRevenue.toLocaleString('en-IN');
  
  // Find most popular service
  const serviceCount = {};
  appState.bookings.forEach(booking => {
    booking.services.forEach(service => {
      serviceCount[service.name] = (serviceCount[service.name] || 0) + 1;
    });
  });
  
  const popularServiceEntry = Object.entries(serviceCount).sort((a, b) => b[1] - a[1])[0];
  document.getElementById('popular-service').textContent = popularServiceEntry ? 
    `${popularServiceEntry[0]} (${popularServiceEntry[1]} bookings)` : 'No data yet';
}

// Toast notifications
function showToast(message, type = 'success') {
  elements.toast.className = `toast ${type}`;
  elements.toastContent.textContent = message;
  elements.toast.classList.remove('hidden');
  
  setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 4000);
}

// PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register service worker for PWA functionality
    const swUrl = '/sw.js';
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Install PWA prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button
  const installBtn = document.createElement('button');
  installBtn.className = 'install-prompt';
  installBtn.textContent = '📱 Install App';
  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        showToast('App installed successfully! 🎉', 'success');
      }
      deferredPrompt = null;
      installBtn.remove();
    });
  });
  
  document.body.appendChild(installBtn);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (installBtn.parentNode) {
      installBtn.remove();
    }
  }, 10000);
});

// Make functions globally available for onclick handlers
window.removeFromCart = removeFromCart;
window.editService = editService;
window.deleteService = deleteService;