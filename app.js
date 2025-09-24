// Enhanced Beauty Salon Management Application - Fixed Version
class BeautySalonApp {
    constructor() {
        this.currentUser = null;
        this.currentAdmin = null;
        this.selectedServices = [];
        this.editingService = null;
        this.viewHistory = ['home'];
        
        // Initialize data and bind events
        this.initializeData();
        this.bindEvents();
        this.init();
    }

    initializeData() {
        // Default admin credentials
        const defaultAdmin = {
            username: 'admin',
            password: 'admin123'
        };

        // Initialize admin if not exists
        if (!localStorage.getItem('admin')) {
            localStorage.setItem('admin', JSON.stringify(defaultAdmin));
        }

        // Initialize comprehensive service data
        if (!localStorage.getItem('services')) {
            const defaultServices = {
                "hair": {
                    "name": "Hair Services",
                    "icon": "💇‍♀️",
                    "color": "#EC4899",
                    "services": [
                        {"id": "hair_cut_basic", "name": "Basic Hair Cutting", "price": 150, "duration": 30, "description": "Professional hair cutting with basic styling", "popular": true},
                        {"id": "hair_cut_layer", "name": "Layer Cutting", "price": 300, "duration": 45, "description": "Trendy layered haircut with advanced styling", "popular": true},
                        {"id": "hair_cut_step", "name": "Step Cutting", "price": 350, "duration": 45, "description": "Modern step cut hairstyle for a fresh look"},
                        {"id": "hair_cut_bob", "name": "Bob Cutting", "price": 400, "duration": 50, "description": "Classic and modern bob cuts"},
                        {"id": "hair_styling", "name": "Hair Styling & Blow Dry", "price": 200, "duration": 30, "description": "Professional hair styling and blow dry", "popular": true},
                        {"id": "hair_color_full", "name": "Full Hair Coloring", "price": 800, "duration": 120, "description": "Complete hair coloring with premium products"},
                        {"id": "hair_color_roots", "name": "Root Touch-up", "price": 450, "duration": 60, "description": "Root touch-up hair coloring service"},
                        {"id": "hair_highlights", "name": "Hair Highlights", "price": 1200, "duration": 180, "description": "Professional hair highlighting with foils"},
                        {"id": "hair_spa", "name": "Hair Spa Treatment", "price": 800, "duration": 90, "description": "Nourishing hair spa with deep conditioning", "popular": true},
                        {"id": "hair_straightening", "name": "Hair Straightening", "price": 3500, "duration": 240, "description": "Professional hair straightening treatment"},
                        {"id": "keratin_treatment", "name": "Keratin Treatment", "price": 4000, "duration": 300, "description": "Premium keratin hair smoothing treatment"},
                        {"id": "hair_rebonding", "name": "Hair Rebonding", "price": 5000, "duration": 360, "description": "Chemical hair rebonding for straight hair"}
                    ]
                },
                "skin": {
                    "name": "Skin Care",
                    "icon": "✨",
                    "color": "#14B8A6",
                    "services": [
                        {"id": "facial_basic", "name": "Basic Facial", "price": 600, "duration": 60, "description": "Deep cleansing and moisturizing facial", "popular": true},
                        {"id": "facial_fruit", "name": "Fruit Facial", "price": 800, "duration": 75, "description": "Vitamin-rich fruit facial for glowing skin"},
                        {"id": "facial_gold", "name": "Gold Facial", "price": 1500, "duration": 90, "description": "Luxurious gold facial for anti-aging"},
                        {"id": "facial_diamond", "name": "Diamond Facial", "price": 1800, "duration": 90, "description": "Premium diamond facial for instant glow"},
                        {"id": "facial_anti_aging", "name": "Anti-Aging Facial", "price": 1200, "duration": 90, "description": "Advanced anti-aging facial treatment"},
                        {"id": "facial_hydrating", "name": "Hydrating Facial", "price": 900, "duration": 75, "description": "Deep hydrating facial for dry skin"},
                        {"id": "cleanup_basic", "name": "Basic Clean-up", "price": 350, "duration": 45, "description": "Deep cleansing and blackhead removal", "popular": true},
                        {"id": "cleanup_premium", "name": "Premium Clean-up", "price": 500, "duration": 60, "description": "Advanced cleanup with exfoliation"},
                        {"id": "detan_face", "name": "De-tan Face", "price": 400, "duration": 45, "description": "Face de-tanning treatment"},
                        {"id": "detan_full_body", "name": "Full Body De-tan", "price": 1200, "duration": 120, "description": "Complete body de-tanning treatment"},
                        {"id": "skin_brightening", "name": "Skin Brightening", "price": 1000, "duration": 90, "description": "Skin brightening and glow enhancement"},
                        {"id": "acne_treatment", "name": "Anti-Acne Treatment", "price": 800, "duration": 60, "description": "Specialized acne reduction treatment"}
                    ]
                },
                "body": {
                    "name": "Body Care",
                    "icon": "💆‍♀️",
                    "color": "#F59E0B",
                    "services": [
                        {"id": "wax_full_body", "name": "Full Body Waxing", "price": 1500, "duration": 120, "description": "Complete body hair removal with premium wax", "popular": true},
                        {"id": "wax_half_body", "name": "Half Body Waxing", "price": 900, "duration": 75, "description": "Upper or lower body hair removal"},
                        {"id": "wax_arms_full", "name": "Full Arms Waxing", "price": 300, "duration": 30, "description": "Arms and underarms waxing", "popular": true},
                        {"id": "wax_legs_full", "name": "Full Legs Waxing", "price": 500, "duration": 45, "description": "Complete legs hair removal"},
                        {"id": "wax_face", "name": "Face Waxing", "price": 100, "duration": 15, "description": "Gentle face hair removal"},
                        {"id": "wax_bikini", "name": "Bikini Waxing", "price": 400, "duration": 30, "description": "Bikini area hair removal"},
                        {"id": "massage_full_body", "name": "Full Body Massage", "price": 1800, "duration": 90, "description": "Relaxing full body oil massage"},
                        {"id": "massage_head", "name": "Head Massage", "price": 300, "duration": 30, "description": "Therapeutic head and scalp massage"},
                        {"id": "massage_back", "name": "Back Massage", "price": 600, "duration": 45, "description": "Relaxing back and shoulder massage"},
                        {"id": "body_polishing", "name": "Body Polishing", "price": 2000, "duration": 120, "description": "Exfoliating body polishing treatment"},
                        {"id": "body_scrub", "name": "Body Scrub", "price": 1200, "duration": 60, "description": "Rejuvenating body scrub treatment"},
                        {"id": "body_wrap", "name": "Body Wrap", "price": 2500, "duration": 150, "description": "Detoxifying and slimming body wrap"}
                    ]
                },
                "hands_feet": {
                    "name": "Hands & Feet",
                    "icon": "💅",
                    "color": "#6B46C1",
                    "services": [
                        {"id": "manicure_basic", "name": "Basic Manicure", "price": 400, "duration": 45, "description": "Basic hand and nail care with polish", "popular": true},
                        {"id": "manicure_deluxe", "name": "Deluxe Manicure", "price": 600, "duration": 60, "description": "Premium manicure with hand massage"},
                        {"id": "manicure_gel", "name": "Gel Manicure", "price": 800, "duration": 75, "description": "Long-lasting gel manicure"},
                        {"id": "manicure_french", "name": "French Manicure", "price": 700, "duration": 60, "description": "Classic French manicure"},
                        {"id": "pedicure_basic", "name": "Basic Pedicure", "price": 500, "duration": 60, "description": "Basic foot and nail care with polish", "popular": true},
                        {"id": "pedicure_deluxe", "name": "Deluxe Pedicure", "price": 700, "duration": 75, "description": "Premium pedicure with foot massage"},
                        {"id": "pedicure_spa", "name": "Spa Pedicure", "price": 900, "duration": 90, "description": "Luxurious spa pedicure treatment"},
                        {"id": "pedicure_french", "name": "French Pedicure", "price": 750, "duration": 75, "description": "Classic French pedicure"},
                        {"id": "nail_art_simple", "name": "Simple Nail Art", "price": 300, "duration": 30, "description": "Basic nail art designs"},
                        {"id": "nail_art_intricate", "name": "Intricate Nail Art", "price": 600, "duration": 60, "description": "Complex nail art designs"},
                        {"id": "nail_extension", "name": "Nail Extensions", "price": 1000, "duration": 120, "description": "Professional acrylic nail extensions"},
                        {"id": "callus_removal", "name": "Callus Removal", "price": 300, "duration": 30, "description": "Professional callus and dead skin removal"}
                    ]
                },
                "threading": {
                    "name": "Threading & Grooming",
                    "icon": "🪒",
                    "color": "#EF4444",
                    "services": [
                        {"id": "eyebrow_threading", "name": "Eyebrow Threading", "price": 80, "duration": 15, "description": "Precise eyebrow shaping and threading", "popular": true},
                        {"id": "eyebrow_tinting", "name": "Eyebrow Tinting", "price": 200, "duration": 20, "description": "Eyebrow coloring and shaping"},
                        {"id": "face_threading", "name": "Full Face Threading", "price": 150, "duration": 25, "description": "Complete face threading"},
                        {"id": "upper_lip_threading", "name": "Upper Lip Threading", "price": 40, "duration": 10, "description": "Upper lip hair removal", "popular": true},
                        {"id": "chin_threading", "name": "Chin Threading", "price": 50, "duration": 10, "description": "Chin hair removal"},
                        {"id": "forehead_threading", "name": "Forehead Threading", "price": 60, "duration": 15, "description": "Forehead hair removal"},
                        {"id": "side_locks_threading", "name": "Side Locks Threading", "price": 70, "duration": 15, "description": "Side locks hair removal"},
                        {"id": "neck_threading", "name": "Neck Threading", "price": 80, "duration": 15, "description": "Neck hair removal"},
                        {"id": "arms_threading", "name": "Arms Threading", "price": 200, "duration": 30, "description": "Arms hair removal by threading"},
                        {"id": "legs_threading", "name": "Legs Threading", "price": 300, "duration": 45, "description": "Legs hair removal by threading"}
                    ]
                },
                "bridal": {
                    "name": "Bridal & Special",
                    "icon": "👰",
                    "color": "#BE185D",
                    "services": [
                        {"id": "bridal_makeup_basic", "name": "Basic Bridal Makeup", "price": 8000, "duration": 180, "description": "Complete bridal makeup with traditional look"},
                        {"id": "bridal_makeup_hd", "name": "HD Bridal Makeup", "price": 15000, "duration": 240, "description": "High definition bridal makeup for photos"},
                        {"id": "bridal_makeup_airbrush", "name": "Airbrush Bridal Makeup", "price": 20000, "duration": 300, "description": "Premium airbrush bridal makeup", "popular": true},
                        {"id": "bridal_trial", "name": "Bridal Makeup Trial", "price": 3000, "duration": 120, "description": "Pre-wedding makeup trial session"},
                        {"id": "party_makeup", "name": "Party Makeup", "price": 3000, "duration": 90, "description": "Glamorous party and event makeup", "popular": true},
                        {"id": "cocktail_makeup", "name": "Cocktail Makeup", "price": 4000, "duration": 120, "description": "Elegant cocktail party makeup"},
                        {"id": "engagement_makeup", "name": "Engagement Makeup", "price": 5000, "duration": 120, "description": "Special engagement ceremony makeup"},
                        {"id": "reception_makeup", "name": "Reception Makeup", "price": 6000, "duration": 150, "description": "Reception party makeup"},
                        {"id": "pre_bridal_package_1week", "name": "1 Week Pre-Bridal Package", "price": 15000, "duration": 420, "description": "Complete 1-week pre-bridal grooming"},
                        {"id": "pre_bridal_package_2week", "name": "2 Week Pre-Bridal Package", "price": 25000, "duration": 840, "description": "Comprehensive 2-week pre-bridal treatment"},
                        {"id": "mehendi_design", "name": "Mehendi/Henna Design", "price": 1500, "duration": 120, "description": "Traditional mehendi application"},
                        {"id": "saree_draping", "name": "Saree Draping", "price": 800, "duration": 30, "description": "Professional saree draping service"},
                        {"id": "hair_styling_bridal", "name": "Bridal Hair Styling", "price": 2500, "duration": 90, "description": "Elegant bridal hairstyling with accessories"}
                    ]
                }
            };
            localStorage.setItem('services', JSON.stringify(defaultServices));
        }

        // Initialize empty arrays if not exist
        if (!localStorage.getItem('customers')) {
            localStorage.setItem('customers', JSON.stringify([]));
        }
        if (!localStorage.getItem('bookings')) {
            localStorage.setItem('bookings', JSON.stringify([]));
        }

        // Time slots
        this.timeSlots = [
            "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
            "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
            "18:00", "18:30", "19:00", "19:30"
        ];
    }

    bindEvents() {
        // Navigation
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            navToggle.addEventListener('click', this.toggleNavMenu.bind(this));
        }

        // Authentication forms
        const loginToggle = document.getElementById('loginToggle');
        const registerToggle = document.getElementById('registerToggle');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        if (loginToggle) loginToggle.addEventListener('click', () => this.toggleAuthForm('login'));
        if (registerToggle) registerToggle.addEventListener('click', () => this.toggleAuthForm('register'));
        if (loginForm) loginForm.addEventListener('submit', (e) => this.handleCustomerLogin(e));
        if (registerForm) registerForm.addEventListener('submit', (e) => this.handleCustomerRegister(e));

        // Admin login
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => this.handleAdminLogin(e));
        }

        // Booking form
        const quickBookingForm = document.getElementById('quickBookingForm');
        if (quickBookingForm) {
            quickBookingForm.addEventListener('submit', (e) => this.handleBooking(e));
        }

        // Service management
        const serviceForm = document.getElementById('serviceForm');
        if (serviceForm) {
            serviceForm.addEventListener('submit', (e) => this.handleServiceSave(e));
        }

        // Search functionality
        const servicesSearch = document.getElementById('servicesSearch');
        if (servicesSearch) {
            servicesSearch.addEventListener('input', (e) => this.searchServices(e.target.value));
        }

        // FIXED: Properly handle date input
        const bookingDate = document.getElementById('bookingDate');
        if (bookingDate) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const minDate = tomorrow.toISOString().split('T')[0];
            bookingDate.setAttribute('min', minDate);
            
            // Add proper event listeners for date changes
            bookingDate.addEventListener('change', (e) => {
                console.log('Date selected:', e.target.value);
                this.updateTimeSlots();
            });
            
            bookingDate.addEventListener('input', (e) => {
                console.log('Date input:', e.target.value);
            });
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') && !e.target.classList.contains('hidden')) {
                this.closeModal(e.target.id);
            }
        });
    }

    init() {
        // Hide loading screen after 2 seconds
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 2000);

        // Initialize the app
        this.populateTimeSlots();
        this.loadServices();
        this.setupCategoryFilter();
    }

    // Navigation Functions
    showView(viewName) {
        // Update view history
        if (this.viewHistory[this.viewHistory.length - 1] !== viewName) {
            this.viewHistory.push(viewName);
        }

        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Show selected view
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
        }

        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }

        // Update breadcrumb
        this.updateBreadcrumb(viewName);

        // Load view-specific content
        switch (viewName) {
            case 'services':
                this.loadServices();
                this.checkCustomerAuth();
                break;
            case 'admin-dashboard':
                this.loadAdminDashboard();
                break;
            case 'home':
                // Reset view history when going home
                this.viewHistory = ['home'];
                break;
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    updateBreadcrumb(viewName) {
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb) {
            if (viewName === 'home') {
                breadcrumb.classList.add('hidden');
            } else {
                breadcrumb.classList.remove('hidden');
            }
        }
    }

    goBack() {
        if (this.viewHistory.length > 1) {
            this.viewHistory.pop(); // Remove current view
            const previousView = this.viewHistory[this.viewHistory.length - 1];
            this.showView(previousView);
        } else {
            this.showView('home');
        }
    }

    toggleNavMenu() {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    }

    // Authentication Functions - FIXED
    toggleAuthForm(type) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginToggle = document.getElementById('loginToggle');
        const registerToggle = document.getElementById('registerToggle');
        
        if (type === 'login') {
            if (loginForm) loginForm.classList.remove('hidden');
            if (registerForm) registerForm.classList.add('hidden');
            if (loginToggle) loginToggle.classList.add('active');
            if (registerToggle) registerToggle.classList.remove('active');
        } else {
            if (loginForm) loginForm.classList.add('hidden');
            if (registerForm) registerForm.classList.remove('hidden');
            if (loginToggle) loginToggle.classList.remove('active');
            if (registerToggle) registerToggle.classList.add('active');
        }
    }

    handleCustomerLogin(e) {
        e.preventDefault();
        const phone = document.getElementById('loginPhone')?.value;
        const password = document.getElementById('loginPassword')?.value;
        
        if (!phone || !password) {
            this.showToast('Please fill in all fields!', 'error');
            return;
        }
        
        const customers = JSON.parse(localStorage.getItem('customers') || '[]');
        const customer = customers.find(c => c.phone === phone && c.password === password);
        
        if (customer) {
            this.currentUser = customer;
            this.showCustomerDashboard();
            this.showToast(`Welcome back, ${customer.name}!`, 'success');
        } else {
            this.showToast('Invalid credentials! Please check your phone number and password.', 'error');
        }
    }

    handleCustomerRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName')?.value;
        const phone = document.getElementById('registerPhone')?.value;
        const email = document.getElementById('registerEmail')?.value;
        const password = document.getElementById('registerPassword')?.value;
        
        if (!name || !phone || !email || !password) {
            this.showToast('Please fill in all fields!', 'error');
            return;
        }
        
        // Basic phone number validation
        const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            this.showToast('Please enter a valid phone number!', 'error');
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showToast('Please enter a valid email address!', 'error');
            return;
        }
        
        const customers = JSON.parse(localStorage.getItem('customers') || '[]');
        
        // Check if customer already exists
        if (customers.find(c => c.phone === phone)) {
            this.showToast('A customer with this phone number already exists! Please try logging in instead.', 'error');
            return;
        }
        
        if (customers.find(c => c.email === email)) {
            this.showToast('A customer with this email already exists! Please try logging in instead.', 'error');
            return;
        }
        
        const newCustomer = {
            id: Date.now().toString(),
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim().toLowerCase(),
            password: password,
            createdAt: new Date().toISOString()
        };
        
        customers.push(newCustomer);
        localStorage.setItem('customers', JSON.stringify(customers));
        
        this.currentUser = newCustomer;
        this.showCustomerDashboard();
        this.showToast(`Registration successful! Welcome to Joyita's Beauty Saloon, ${newCustomer.name}!`, 'success');
    }

    handleAdminLogin(e) {
        e.preventDefault();
        const username = document.getElementById('adminUsername')?.value;
        const password = document.getElementById('adminPassword')?.value;
        
        const admin = JSON.parse(localStorage.getItem('admin') || '{}');
        
        if (admin.username === username && admin.password === password) {
            this.currentAdmin = admin;
            this.showView('admin-dashboard');
            this.showToast('Admin login successful!', 'success');
        } else {
            this.showToast('Invalid admin credentials!', 'error');
        }
    }

    checkCustomerAuth() {
        const authSection = document.getElementById('customer-auth-section');
        const bookingSection = document.getElementById('services-booking-section');
        
        if (this.currentUser) {
            if (authSection) authSection.classList.add('hidden');
            if (bookingSection) bookingSection.classList.remove('hidden');
            
            const customerNameDisplay = document.getElementById('customerNameDisplay');
            if (customerNameDisplay) {
                customerNameDisplay.textContent = this.currentUser.name;
            }
            
            this.loadCustomerBookings();
        } else {
            if (authSection) authSection.classList.remove('hidden');
            if (bookingSection) bookingSection.classList.add('hidden');
        }
    }

    showCustomerDashboard() {
        this.checkCustomerAuth();
        this.loadServices();
        this.loadCustomerBookings();
    }

    customerLogout() {
        this.currentUser = null;
        this.selectedServices = [];
        this.checkCustomerAuth();
        
        // Reset forms
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        if (loginForm) loginForm.reset();
        if (registerForm) registerForm.reset();
        
        this.updateBookingSummary();
        this.showToast('Logged out successfully!', 'info');
    }

    adminLogout() {
        this.currentAdmin = null;
        this.showView('home');
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) adminLoginForm.reset();
        this.showToast('Admin logged out successfully!', 'info');
    }

    // Services Functions
    loadServices() {
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        const servicesGrid = document.getElementById('servicesGrid');
        
        if (!servicesGrid) return;
        
        servicesGrid.innerHTML = '';
        
        Object.keys(services).forEach(categoryId => {
            const category = services[categoryId];
            category.services.forEach(service => {
                const serviceCard = this.createServiceCard(service, category);
                servicesGrid.appendChild(serviceCard);
            });
        });
    }

    createServiceCard(service, category) {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.dataset.serviceId = service.id;
        serviceCard.dataset.category = category.name.toLowerCase();
        
        const isSelected = this.selectedServices.some(s => s.id === service.id);
        if (isSelected) {
            serviceCard.classList.add('selected');
        }
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <h4 class="service-name">${service.name}</h4>
                <span class="service-price">₹${service.price}</span>
            </div>
            <div class="service-duration">${service.duration} minutes</div>
            <p class="service-description">${service.description}</p>
            ${service.popular ? '<span class="popular-badge" style="background: var(--salon-secondary); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; margin-top: 8px; display: inline-block;">⭐ Popular</span>' : ''}
        `;
        
        serviceCard.addEventListener('click', () => this.toggleServiceSelection(service));
        
        return serviceCard;
    }

    setupCategoryFilter() {
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        const categoryFilter = document.getElementById('categoryFilter');
        
        if (!categoryFilter) return;
        
        // Clear existing filters except "All Services"
        const allServicesBtn = categoryFilter.querySelector('[data-category="all"]');
        categoryFilter.innerHTML = '';
        if (allServicesBtn) {
            categoryFilter.appendChild(allServicesBtn);
        } else {
            // Create "All Services" button if it doesn't exist
            const allBtn = document.createElement('button');
            allBtn.className = 'filter-btn active';
            allBtn.dataset.category = 'all';
            allBtn.textContent = 'All Services';
            allBtn.addEventListener('click', () => this.filterByCategory('all', allBtn));
            categoryFilter.appendChild(allBtn);
        }
        
        // Add category filters
        Object.keys(services).forEach(categoryId => {
            const category = services[categoryId];
            const filterBtn = document.createElement('button');
            filterBtn.className = 'filter-btn';
            filterBtn.dataset.category = category.name.toLowerCase();
            filterBtn.innerHTML = `${category.icon} ${category.name}`;
            filterBtn.addEventListener('click', () => this.filterByCategory(category.name.toLowerCase(), filterBtn));
            categoryFilter.appendChild(filterBtn);
        });
    }

    filterByCategory(categoryName, button) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter services
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (categoryName === 'all' || cardCategory === categoryName) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchServices(query) {
        const serviceCards = document.querySelectorAll('.service-card');
        const lowerQuery = query.toLowerCase();

        serviceCards.forEach(card => {
            const name = card.querySelector('.service-name')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.service-description')?.textContent.toLowerCase() || '';
            
            if (name.includes(lowerQuery) || description.includes(lowerQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Reset category filter if searching
        if (query.length > 0) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            const allBtn = document.querySelector('.filter-btn[data-category="all"]');
            if (allBtn) allBtn.classList.add('active');
        }
    }

    toggleServiceSelection(service) {
        if (!this.currentUser) {
            this.showToast('Please login or register to select services!', 'warning');
            return;
        }
        
        const index = this.selectedServices.findIndex(s => s.id === service.id);
        const serviceCard = document.querySelector(`[data-service-id="${service.id}"]`);
        
        if (index > -1) {
            this.selectedServices.splice(index, 1);
            if (serviceCard) serviceCard.classList.remove('selected');
            this.showToast(`${service.name} removed from selection`, 'info');
        } else {
            this.selectedServices.push(service);
            if (serviceCard) serviceCard.classList.add('selected');
            this.showToast(`${service.name} added to selection`, 'success');
        }
        
        this.updateBookingSummary();
    }

    updateBookingSummary() {
        const selectedServicesList = document.getElementById('selectedServicesList');
        const bookingSummaryFooter = document.getElementById('bookingSummaryFooter');
        const selectedCount = document.querySelector('.selected-count');
        const totalPrice = document.getElementById('totalPrice');
        const totalDuration = document.getElementById('totalDuration');
        
        if (!selectedServicesList) return;
        
        // Update selected count
        if (selectedCount) {
            selectedCount.textContent = `${this.selectedServices.length} selected`;
        }
        
        if (this.selectedServices.length === 0) {
            selectedServicesList.innerHTML = '<p class="no-selection">Select services from the left to start booking</p>';
            if (bookingSummaryFooter) bookingSummaryFooter.classList.add('hidden');
            return;
        }
        
        // Show booking footer
        if (bookingSummaryFooter) bookingSummaryFooter.classList.remove('hidden');
        
        // Update selected services list
        selectedServicesList.innerHTML = this.selectedServices.map(service => `
            <div class="selected-service-item">
                <span class="selected-service-name">${service.name}</span>
                <span class="selected-service-price">₹${service.price}</span>
                <button class="remove-service" onclick="app.removeService('${service.id}')" title="Remove service">×</button>
            </div>
        `).join('');
        
        // Calculate totals
        const priceTotal = this.selectedServices.reduce((sum, service) => sum + service.price, 0);
        const durationTotal = this.selectedServices.reduce((sum, service) => sum + service.duration, 0);
        
        if (totalPrice) totalPrice.textContent = priceTotal.toLocaleString();
        if (totalDuration) totalDuration.textContent = durationTotal;
    }

    removeService(serviceId) {
        const serviceToRemove = this.selectedServices.find(s => s.id === serviceId);
        const index = this.selectedServices.findIndex(s => s.id === serviceId);
        if (index > -1) {
            this.selectedServices.splice(index, 1);
            const serviceCard = document.querySelector(`[data-service-id="${serviceId}"]`);
            if (serviceCard) serviceCard.classList.remove('selected');
            this.updateBookingSummary();
            if (serviceToRemove) {
                this.showToast(`${serviceToRemove.name} removed from selection`, 'info');
            }
        }
    }

    populateTimeSlots() {
        const timeSelect = document.getElementById('bookingTime');
        if (!timeSelect) return;
        
        timeSelect.innerHTML = '<option value="">Select Time</option>';
        
        this.timeSlots.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    updateTimeSlots() {
        // For now, show all time slots. In a real app, you'd filter based on existing bookings
        this.populateTimeSlots();
    }

    // Booking Functions - FIXED
    handleBooking(e) {
        e.preventDefault();
        
        if (!this.currentUser) {
            this.showToast('Please login or register first!', 'error');
            return;
        }
        
        if (this.selectedServices.length === 0) {
            this.showToast('Please select at least one service!', 'error');
            return;
        }
        
        const dateInput = document.getElementById('bookingDate');
        const timeInput = document.getElementById('bookingTime');
        
        const date = dateInput?.value;
        const time = timeInput?.value;
        
        console.log('Booking attempt - Date:', date, 'Time:', time); // Debug log
        
        if (!date || !time) {
            this.showToast('Please select both date and time for your appointment!', 'error');
            if (!date) {
                dateInput?.focus();
            } else if (!time) {
                timeInput?.focus();
            }
            return;
        }
        
        // Validate that the selected date is in the future
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate <= today) {
            this.showToast('Please select a future date for your appointment!', 'error');
            dateInput?.focus();
            return;
        }
        
        // Create booking object
        const booking = {
            id: Date.now().toString(),
            customerId: this.currentUser.id,
            customerName: this.currentUser.name,
            customerPhone: this.currentUser.phone,
            customerEmail: this.currentUser.email,
            services: [...this.selectedServices],
            date,
            time,
            status: 'pending',
            totalPrice: this.selectedServices.reduce((sum, service) => sum + service.price, 0),
            totalDuration: this.selectedServices.reduce((sum, service) => sum + service.duration, 0),
            createdAt: new Date().toISOString()
        };
        
        // Save booking
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        console.log('Booking created:', booking); // Debug log
        
        // Show confirmation modal
        this.showBookingConfirmation(booking);
        
        // Reset form
        this.resetBookingForm();
        
        // Reload customer bookings
        this.loadCustomerBookings();
    }

    resetBookingForm() {
        this.selectedServices = [];
        const quickBookingForm = document.getElementById('quickBookingForm');
        if (quickBookingForm) quickBookingForm.reset();
        
        document.querySelectorAll('.service-card.selected').forEach(card => {
            card.classList.remove('selected');
        });
        
        this.updateBookingSummary();
    }

    showBookingConfirmation(booking) {
        const confirmationDetails = document.getElementById('confirmationDetails');
        if (!confirmationDetails) return;
        
        const bookingDate = new Date(booking.date);
        const formattedDate = bookingDate.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        confirmationDetails.innerHTML = `
            <h4>🎉 Your appointment has been booked successfully!</h4>
            <div class="confirmation-details" style="background: var(--salon-bg-accent); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: left;">
                <p><strong>Booking ID:</strong> #${booking.id}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
                <p><strong>Customer:</strong> ${booking.customerName}</p>
                <p><strong>Phone:</strong> ${booking.customerPhone}</p>
                
                <div style="margin: 16px 0;">
                    <strong>Services Booked:</strong>
                    <ul style="margin: 8px 0; padding-left: 20px;">
                        ${booking.services.map(service => `<li>${service.name} - ₹${service.price} (${service.duration} mins)</li>`).join('')}
                    </ul>
                </div>
                
                <div style="border-top: 1px solid rgba(107, 70, 193, 0.2); padding-top: 16px; margin-top: 16px;">
                    <p><strong>Total Amount:</strong> <span style="color: var(--salon-accent); font-size: 18px; font-weight: bold;">₹${booking.totalPrice.toLocaleString()}</span></p>
                    <p><strong>Estimated Duration:</strong> ${booking.totalDuration} minutes</p>
                </div>
                
                <p style="margin-top: 16px;"><strong>Status:</strong> <span class="booking-status pending">PENDING CONFIRMATION</span></p>
            </div>
            
            <div style="background: var(--salon-bg-gold); padding: 16px; border-radius: 8px; border-left: 4px solid var(--salon-secondary);">
                <p style="margin: 0; color: var(--text-secondary); font-size: 14px;">
                    📞 We will contact you shortly at ${booking.customerPhone} to confirm your appointment. 
                    Please keep your phone available. Thank you for choosing Joyita's Beauty Saloon!
                </p>
            </div>
        `;
        
        const confirmationModal = document.getElementById('confirmationModal');
        if (confirmationModal) {
            confirmationModal.classList.remove('hidden');
        }
        
        this.showToast('Booking confirmed! We will contact you soon.', 'success');
    }

    loadCustomerBookings() {
        if (!this.currentUser) return;
        
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const customerBookings = bookings.filter(b => b.customerId === this.currentUser.id);
        const container = document.getElementById('customerBookingsList');
        
        if (!container) return;
        
        if (customerBookings.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; color: var(--text-light); padding: 32px;">
                    <div style="font-size: 3rem; margin-bottom: 16px;">📅</div>
                    <p>No bookings found yet.</p>
                    <p style="font-size: 14px;">Select services above to book your first appointment!</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = customerBookings
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5) // Show only recent 5 bookings
            .map(booking => {
                const bookingDate = new Date(booking.date);
                const formattedDate = bookingDate.toLocaleDateString('en-IN', { 
                    weekday: 'short',
                    month: 'short', 
                    day: 'numeric' 
                });
                
                return `
                    <div class="booking-item">
                        <div class="booking-header">
                            <span class="booking-id">Booking #${booking.id}</span>
                            <span class="booking-status ${booking.status}">${booking.status.toUpperCase()}</span>
                        </div>
                        <div class="booking-details">
                            <p><strong>📅 ${formattedDate} at ${booking.time}</strong></p>
                            <div style="margin: 8px 0; font-size: 14px;">
                                <strong>Services:</strong> ${booking.services.map(s => s.name).join(', ')}
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
                                <span style="font-weight: bold; color: var(--salon-accent);">₹${booking.totalPrice.toLocaleString()}</span>
                                <span style="color: var(--text-secondary); font-size: 12px;">${booking.totalDuration} mins</span>
                            </div>
                            ${booking.status === 'pending' ? 
                                '<p style="font-size: 12px; color: var(--text-light); margin-top: 8px; font-style: italic;">⏳ We will contact you soon to confirm your appointment.</p>' 
                                : ''
                            }
                        </div>
                    </div>
                `;
            }).join('');
    }

    // Admin Functions
    loadAdminDashboard() {
        this.updateAdminStats();
        this.loadAdminServices();
        this.loadAdminBookings();
        this.loadAdminCustomers();
    }

    updateAdminStats() {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const customers = JSON.parse(localStorage.getItem('customers') || '[]');
        
        const today = new Date().toISOString().split('T')[0];
        const todayBookings = bookings.filter(b => b.date === today);
        const totalRevenue = bookings.filter(b => b.status !== 'cancelled').reduce((sum, b) => sum + b.totalPrice, 0);
        
        const totalBookingsEl = document.getElementById('totalBookings');
        const todayBookingsEl = document.getElementById('todayBookings');
        const totalRevenueEl = document.getElementById('totalRevenue');
        const totalCustomersEl = document.getElementById('totalCustomers');
        
        if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;
        if (todayBookingsEl) todayBookingsEl.textContent = todayBookings.length;
        if (totalRevenueEl) totalRevenueEl.textContent = `₹${totalRevenue.toLocaleString()}`;
        if (totalCustomersEl) totalCustomersEl.textContent = customers.length;
    }

    showAdminTab(tab) {
        document.querySelectorAll('.admin-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.querySelectorAll('.admin-tabs .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const tabContent = document.getElementById(`admin-${tab}`);
        if (tabContent) tabContent.classList.remove('hidden');
        
        // Add active class to clicked button
        event.target.classList.add('active');
        
        // Load tab-specific content
        switch (tab) {
            case 'overview':
                this.updateAdminStats();
                break;
            case 'services':
                this.loadAdminServices();
                break;
            case 'bookings':
                this.loadAdminBookings();
                break;
            case 'customers':
                this.loadAdminCustomers();
                break;
        }
    }

    loadAdminServices() {
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        const container = document.getElementById('adminServicesList');
        
        if (!container) return;
        
        let allServices = [];
        Object.keys(services).forEach(categoryId => {
            services[categoryId].services.forEach(service => {
                allServices.push({...service, category: categoryId, categoryName: services[categoryId].name});
            });
        });
        
        container.innerHTML = `
            <div class="admin-list">
                ${allServices.map(service => `
                    <div class="admin-list-item">
                        <div class="item-info">
                            <div class="item-title">${service.name}</div>
                            <div class="item-subtitle">${service.categoryName} | ₹${service.price} | ${service.duration} mins</div>
                            <div style="font-size: 12px; color: var(--text-light); margin-top: 4px;">${service.description}</div>
                        </div>
                        <div class="item-actions">
                            <button class="btn btn--outline btn--sm" onclick="app.editService('${service.id}', '${service.category}')">✏️ Edit</button>
                            <button class="btn btn--outline btn--sm" style="color: #EF4444; border-color: #EF4444;" onclick="app.deleteService('${service.id}', '${service.category}')">🗑️ Delete</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    loadAdminBookings() {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const container = document.getElementById('adminBookingsList');
        
        if (!container) return;
        
        if (bookings.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: var(--text-light); padding: 32px;"><div style="font-size: 3rem; margin-bottom: 16px;">📅</div><p>No bookings found.</p></div>';
            return;
        }
        
        container.innerHTML = `
            <div class="admin-list">
                ${bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(booking => {
                    const bookingDate = new Date(booking.date);
                    const formattedDate = bookingDate.toLocaleDateString('en-IN', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                    });
                    
                    return `
                        <div class="admin-list-item">
                            <div class="item-info">
                                <div class="item-title">Booking #${booking.id} - ${booking.customerName}</div>
                                <div class="item-subtitle">${formattedDate} at ${booking.time} | ₹${booking.totalPrice.toLocaleString()} | <span class="booking-status ${booking.status}">${booking.status.toUpperCase()}</span></div>
                                <div style="font-size: 12px; color: var(--text-light); margin-top: 4px;">
                                    📞 ${booking.customerPhone} | Services: ${booking.services.map(s => s.name).join(', ')}
                                </div>
                            </div>
                            <div class="item-actions">
                                <button class="btn btn--outline btn--sm" onclick="app.viewBookingDetails('${booking.id}')">👁️ View</button>
                                ${booking.status === 'pending' ? `<button class="btn btn--primary btn--sm" onclick="app.updateBookingStatus('${booking.id}', 'confirmed')">✅ Confirm</button>` : ''}
                                ${booking.status === 'confirmed' ? `<button class="btn btn--secondary btn--sm" onclick="app.updateBookingStatus('${booking.id}', 'completed')">✅ Complete</button>` : ''}
                                ${booking.status !== 'cancelled' && booking.status !== 'completed' ? `<button class="btn btn--outline btn--sm" style="color: #EF4444;" onclick="app.updateBookingStatus('${booking.id}', 'cancelled')">❌ Cancel</button>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    loadAdminCustomers() {
        const customers = JSON.parse(localStorage.getItem('customers') || '[]');
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const container = document.getElementById('adminCustomersList');
        
        if (!container) return;
        
        if (customers.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: var(--text-light); padding: 32px;"><div style="font-size: 3rem; margin-bottom: 16px;">👥</div><p>No customers found.</p></div>';
            return;
        }
        
        container.innerHTML = `
            <div class="admin-list">
                ${customers.map(customer => {
                    const customerBookings = bookings.filter(b => b.customerId === customer.id);
                    const totalSpent = customerBookings.filter(b => b.status !== 'cancelled').reduce((sum, b) => sum + b.totalPrice, 0);
                    const joinDate = new Date(customer.createdAt).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });
                    
                    return `
                        <div class="admin-list-item">
                            <div class="item-info">
                                <div class="item-title">${customer.name}</div>
                                <div class="item-subtitle">📞 ${customer.phone} | 📧 ${customer.email}</div>
                                <div style="font-size: 12px; color: var(--text-light); margin-top: 4px;">
                                    Joined: ${joinDate} | ${customerBookings.length} bookings | ₹${totalSpent.toLocaleString()} spent
                                </div>
                            </div>
                            <div class="item-actions">
                                <span class="btn btn--outline btn--sm" style="background: var(--salon-bg-accent); cursor: default;">
                                    💰 ₹${totalSpent.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Service Management Functions
    showAddServiceModal() {
        this.editingService = null;
        const serviceModalTitle = document.getElementById('serviceModalTitle');
        const serviceForm = document.getElementById('serviceForm');
        
        if (serviceModalTitle) serviceModalTitle.textContent = 'Add New Service';
        if (serviceForm) serviceForm.reset();
        
        const serviceModal = document.getElementById('serviceModal');
        if (serviceModal) serviceModal.classList.remove('hidden');
    }

    editService(serviceId, categoryId) {
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        const service = services[categoryId]?.services?.find(s => s.id === serviceId);
        
        if (!service) return;
        
        this.editingService = {serviceId, categoryId};
        
        const serviceModalTitle = document.getElementById('serviceModalTitle');
        const serviceCategory = document.getElementById('serviceCategory');
        const serviceName = document.getElementById('serviceName');
        const servicePrice = document.getElementById('servicePrice');
        const serviceDuration = document.getElementById('serviceDuration');
        const serviceDescription = document.getElementById('serviceDescription');
        
        if (serviceModalTitle) serviceModalTitle.textContent = 'Edit Service';
        if (serviceCategory) serviceCategory.value = categoryId;
        if (serviceName) serviceName.value = service.name;
        if (servicePrice) servicePrice.value = service.price;
        if (serviceDuration) serviceDuration.value = service.duration;
        if (serviceDescription) serviceDescription.value = service.description;
        
        const serviceModal = document.getElementById('serviceModal');
        if (serviceModal) serviceModal.classList.remove('hidden');
    }

    deleteService(serviceId, categoryId) {
        if (!confirm('Are you sure you want to delete this service?')) return;
        
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        if (services[categoryId]?.services) {
            services[categoryId].services = services[categoryId].services.filter(s => s.id !== serviceId);
            localStorage.setItem('services', JSON.stringify(services));
            
            this.loadAdminServices();
            this.loadServices();
            this.showToast('Service deleted successfully!', 'success');
        }
    }

    handleServiceSave(e) {
        e.preventDefault();
        
        const categoryId = document.getElementById('serviceCategory')?.value;
        const name = document.getElementById('serviceName')?.value;
        const price = parseInt(document.getElementById('servicePrice')?.value || '0');
        const duration = parseInt(document.getElementById('serviceDuration')?.value || '0');
        const description = document.getElementById('serviceDescription')?.value;
        
        if (!categoryId || !name || !price || !duration || !description) {
            this.showToast('Please fill in all fields!', 'error');
            return;
        }
        
        if (price <= 0) {
            this.showToast('Price must be greater than 0!', 'error');
            return;
        }
        
        if (duration <= 0) {
            this.showToast('Duration must be greater than 0!', 'error');
            return;
        }
        
        const services = JSON.parse(localStorage.getItem('services') || '{}');
        
        if (this.editingService) {
            // Edit existing service
            const service = services[this.editingService.categoryId]?.services?.find(s => s.id === this.editingService.serviceId);
            if (service) {
                service.name = name;
                service.price = price;
                service.duration = duration;
                service.description = description;
                
                // If category changed, move service
                if (categoryId !== this.editingService.categoryId) {
                    services[this.editingService.categoryId].services = 
                        services[this.editingService.categoryId].services.filter(s => s.id !== this.editingService.serviceId);
                    services[categoryId].services.push(service);
                }
            }
        } else {
            // Add new service
            const newService = {
                id: Date.now().toString(),
                name,
                price,
                duration,
                description,
                popular: false
            };
            
            if (!services[categoryId].services) {
                services[categoryId].services = [];
            }
            services[categoryId].services.push(newService);
        }
        
        localStorage.setItem('services', JSON.stringify(services));
        
        this.closeModal('serviceModal');
        this.loadAdminServices();
        this.loadServices();
        this.setupCategoryFilter();
        this.showToast('Service saved successfully!', 'success');
    }

    viewBookingDetails(bookingId) {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const booking = bookings.find(b => b.id === bookingId);
        
        if (!booking) return;
        
        const detailsContainer = document.getElementById('bookingDetails');
        if (!detailsContainer) return;
        
        const bookingDate = new Date(booking.date);
        const formattedDate = bookingDate.toLocaleDateString('en-IN', { 
            weekday: 'long',
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        const createdDate = new Date(booking.createdAt).toLocaleDateString('en-IN');
        
        detailsContainer.innerHTML = `
            <div class="booking-item" style="margin: 0;">
                <div class="booking-header">
                    <span class="booking-id">Booking #${booking.id}</span>
                    <span class="booking-status ${booking.status}">${booking.status.toUpperCase()}</span>
                </div>
                
                <div style="margin: 20px 0; padding: 16px; background: var(--salon-bg-secondary); border-radius: 8px;">
                    <h4 style="margin: 0 0 12px 0; color: var(--salon-primary);">Customer Details</h4>
                    <p style="margin: 4px 0;"><strong>Name:</strong> ${booking.customerName}</p>
                    <p style="margin: 4px 0;"><strong>Phone:</strong> ${booking.customerPhone}</p>
                    <p style="margin: 4px 0;"><strong>Email:</strong> ${booking.customerEmail}</p>
                </div>
                
                <div style="margin: 20px 0; padding: 16px; background: var(--salon-bg-accent); border-radius: 8px;">
                    <h4 style="margin: 0 0 12px 0; color: var(--salon-primary);">Appointment Details</h4>
                    <p style="margin: 4px 0;"><strong>Date:</strong> ${formattedDate}</p>
                    <p style="margin: 4px 0;"><strong>Time:</strong> ${booking.time}</p>
                    <p style="margin: 4px 0;"><strong>Booked on:</strong> ${createdDate}</p>
                </div>
                
                <div style="margin: 20px 0; padding: 16px; background: var(--salon-bg-pink); border-radius: 8px;">
                    <h4 style="margin: 0 0 12px 0; color: var(--salon-primary);">Services Booked</h4>
                    <ul style="margin: 8px 0; padding-left: 20px;">
                        ${booking.services.map(service => `
                            <li style="margin: 4px 0;">${service.name} - ₹${service.price} (${service.duration} mins)</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 16px; background: var(--salon-bg-gold); border-radius: 8px; border-left: 4px solid var(--salon-secondary);">
                    <p style="margin: 4px 0;"><strong>Total Amount:</strong> <span style="color: var(--salon-accent); font-size: 18px;">₹${booking.totalPrice.toLocaleString()}</span></p>
                    <p style="margin: 4px 0;"><strong>Total Duration:</strong> ${booking.totalDuration} minutes</p>
                </div>
            </div>
        `;
        
        const bookingModal = document.getElementById('bookingModal');
        if (bookingModal) bookingModal.classList.remove('hidden');
    }

    updateBookingStatus(bookingId, status) {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const booking = bookings.find(b => b.id === bookingId);
        
        if (booking) {
            booking.status = status;
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            this.loadAdminBookings();
            this.updateAdminStats();
            
            let message = '';
            switch (status) {
                case 'confirmed':
                    message = 'Booking confirmed successfully!';
                    break;
                case 'completed':
                    message = 'Booking marked as completed!';
                    break;
                case 'cancelled':
                    message = 'Booking cancelled successfully!';
                    break;
                default:
                    message = `Booking status updated to ${status}!`;
            }
            
            this.showToast(message, 'success');
        }
    }

    // Utility Functions
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('hidden');
    }

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = '';
        switch (type) {
            case 'success':
                icon = '✅';
                break;
            case 'error':
                icon = '❌';
                break;
            case 'warning':
                icon = '⚠️';
                break;
            default:
                icon = 'ℹ️';
        }
        
        toast.innerHTML = `<div class="toast-message">${icon} ${message}</div>`;
        
        toastContainer.appendChild(toast);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 4000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BeautySalonApp();
});

// Global functions for onclick handlers
function showView(viewName) {
    if (window.app) {
        window.app.showView(viewName);
    }
}

function goBack() {
    if (window.app) {
        window.app.goBack();
    }
}

function showAddServiceModal() {
    if (window.app) {
        window.app.showAddServiceModal();
    }
}

function closeModal(modalId) {
    if (window.app) {
        window.app.closeModal(modalId);
    }
}

function customerLogout() {
    if (window.app) {
        window.app.customerLogout();
    }
}

function adminLogout() {
    if (window.app) {
        window.app.adminLogout();
    }
}

function showAdminTab(tab) {
    if (window.app) {
        window.app.showAdminTab(tab);
    }
}