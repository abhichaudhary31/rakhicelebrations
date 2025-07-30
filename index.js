
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- DATA ---
const PREMADE_HAMPERS = [
    { id: 'h1', name: 'The Classic Bond', price: 799, contents: 'Designer Rakhi, Kaju Katli (200g), Roli Chawal', imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png', tag: 'Bestseller' },
    { id: 'h2', name: 'Brotherly Indulgence', price: 1299, contents: 'Premium Stone Rakhi, Ferrero Rocher, Personalized Mug', imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
    { id: 'h3', name: 'Kid\'s Fun Pack', price: 599, contents: 'Cartoon Rakhi, Dairy Milk Silks, Toy Car', imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png', tag: 'Trending' },
    { id: 'h4', name: 'The Silver Lining', price: 1999, contents: '925 Silver Rakhi, Dry Fruits Box, Chocolates', imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
];

const CUSTOM_ITEMS = [
    { 
        id: 'cat1', 
        name: 'Choose Your Rakhi', 
        imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png',
        subItems: [
            { id: 'c1', name: 'Peacock Rakhi', price: 250, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c1a', name: 'Floral Rakhi', price: 220, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c1b', name: 'Modern Rakhi', price: 270, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c1', name: 'Peacock Rakhi', price: 250, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c1a', name: 'Floral Rakhi', price: 220, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c1b', name: 'Modern Rakhi', price: 270, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
        ]
    },
    { 
        id: 'cat2', 
        name: 'Select a Sweet', 
        imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png',
        subItems: [
            { id: 'c2', name: 'Kaju Katli (200g)', price: 350, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
            { id: 'c2a', name: 'Motichoor Ladoo', price: 300, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
            { id: 'c2b', name: 'Soan Papdi', price: 280, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
        ]
    },
    { 
        id: 'cat3', 
        name: 'Pick a Chocolate', 
        imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png',
        subItems: [
            { id: 'c3', name: 'Ferrero Rocher', price: 300, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
            { id: 'c3a', name: 'Lindt Excellence', price: 450, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
            { id: 'c3b', name: 'Godiva Assortment', price: 600, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
        ]
    },
    { 
        id: 'cat4', 
        name: 'Add a Personal Touch', 
        imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png',
        subItems: [
            { id: 'c4', name: 'Personalized Mug', price: 450, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c4a', name: 'Engraved Pen', price: 550, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
            { id: 'c4b', name: 'Custom Keychain', price: 350, imageUrl: '/images/Gemini_Generated_Image_hfjxykhfjxykhfjx.png' },
        ]
    },
    { 
        id: 'cat5', 
        name: 'Healthy Treats', 
        imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png',
        subItems: [
            { id: 'c5', name: 'Dry Fruits Box', price: 500, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
            { id: 'c5a', name: 'Gourmet Tea Box', price: 400, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
            { id: 'c5b', name: 'Organic Honey', price: 320, imageUrl: '/images/Gemini_Generated_Image_z3fripz3fripz3fr.png' },
        ]
    },
    { 
        id: 'cat6', 
        name: 'Traditional Add-ons', 
        imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png',
        subItems: [
            { id: 'c6', name: 'Roli Chawal Pack', price: 50, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
            { id: 'c6a', name: 'Decorative Thali', price: 350, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
            { id: 'c6b', name: 'Shagun Envelope', price: 100, imageUrl: '/images/Google_AI_Studio_2025-07-30T11_47_11.249Z.png' },
        ]
    }
];

// --- STATE ---
let currentOrder = {
    type: null, // 'premade' or 'custom'
    items: [],
    total: 0,
};

let recipientDetails = {
    fullName: '',
    address: '',
    phone: '',
};

// --- DOM ELEMENTS ---
const premadeGrid = document.getElementById('premade-hampers-grid');
const customGrid = document.getElementById('custom-items-grid');
const summaryItemsEl = document.getElementById('order-summary-items');
const totalPriceEl = document.getElementById('total-price');
const placeOrderBtn = document.getElementById('place-order-btn');
const recipientForm = document.getElementById('recipient-form');
const successModal = document.getElementById('success-modal');
const successModalContent = document.getElementById('success-modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const orderIdDisplay = document.getElementById('order-id-display');
const subitemModalBackdrop = document.getElementById('subitem-modal-backdrop');
const subitemModalTitle = document.getElementById('subitem-modal-title');
const subitemModalGrid = document.getElementById('subitem-modal-grid');

// --- RENDER FUNCTIONS ---

function renderPremadeHampers() {
    premadeGrid.innerHTML = PREMADE_HAMPERS.map(hamper => `
        <div id="${hamper.id}" class="hamper-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group border-4 border-transparent">
            <div class="relative">
                <img src="${hamper.imageUrl}" alt="${hamper.name}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                ${hamper.tag ? `<span class="absolute top-3 left-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">${hamper.tag}</span>` : ''}
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-brand-dark group-hover:text-brand-primary transition-colors">${hamper.name}</h3>
                <p class="text-sm text-gray-500 mt-1 h-10">${hamper.contents}</p>
                <div class="mt-4 flex justify-between items-center">
                    <p class="font-bold text-2xl text-brand-dark">₹${hamper.price}</p>
                    <span class="font-bold text-sm text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-x-1">CHOOSE ME &rarr;</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCustomItems() {
    customGrid.innerHTML = CUSTOM_ITEMS.map(category => `
        <div id="${category.id}" class="custom-category-card bg-white rounded-lg shadow-md p-3 text-center cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105">
            <img src="${category.imageUrl}" alt="${category.name}" class="w-full h-32 object-cover rounded-md mb-2">
            <h3 class="text-lg font-bold text-brand-dark">${category.name}</h3>
        </div>
    `).join('');
}

function updateOrderSummary() {
    if (currentOrder.items.length === 0) {
        summaryItemsEl.innerHTML = `<p class="text-gray-400 italic text-center py-4">Your cart is empty.</p>`;
        currentOrder.total = 0;
    } else {
        summaryItemsEl.innerHTML = currentOrder.items.map(item => `
            <div class="flex justify-between items-center text-sm py-1.5">
                <span class="text-brand-dark">${item.name}</span>
                <div class="flex items-center gap-2">
                    <span class="font-medium text-brand-dark">₹${item.price}</span>
                    <button data-id="${item.id}" class="remove-item-btn text-red-500 hover:text-red-700 font-bold transition-opacity">&times;</button>
                </div>
            </div>
        `).join('');
    }
    totalPriceEl.textContent = `₹${currentOrder.total}`;
    validateOrder();
}

function showSubitemModal(category) {
    subitemModalTitle.textContent = category.name;
    subitemModalGrid.innerHTML = category.subItems.map(item => `
        <div id="${item.id}" class="custom-item-card bg-white rounded-lg shadow-md p-3 text-center cursor-pointer border-2 border-transparent transition-all duration-200 hover:shadow-xl hover:scale-105">
            <img src="${item.imageUrl}" alt="${item.name}" class="w-full h-24 object-cover rounded-md mb-2">
            <h4 class="text-sm font-semibold text-brand-dark">${item.name}</h4>
            <p class="text-sm font-bold text-brand-primary mt-1">₹${item.price}</p>
        </div>
    `).join('');
    subitemModalBackdrop.classList.add('visible');
}

function hideSubitemModal() {
    subitemModalBackdrop.classList.remove('visible');
}

// --- LOGIC & EVENT HANDLERS ---

function clearOrder() {
    currentOrder = { type: null, items: [], total: 0 };
    document.querySelectorAll('.selected-card, .selected-item').forEach(el => {
        el.classList.remove('selected-card', 'selected-item');
    });
    updateOrderSummary();
}

function selectPremadeHamper(hamper) {
    if (currentOrder.type === 'custom' && currentOrder.items.length > 0) {
        clearOrder();
    }
    currentOrder.type = 'premade';
    currentOrder.items = [hamper];
    currentOrder.total = hamper.price;
    updateOrderSummary();
    
    document.querySelectorAll('.hamper-card').forEach(card => card.classList.remove('selected-card'));
    document.getElementById(hamper.id).classList.add('selected-card');
    
    const selectedCard = document.getElementById(hamper.id);
    selectedCard.classList.add('animated-pulse');
    selectedCard.addEventListener('animationend', () => {
        selectedCard.classList.remove('animated-pulse');
    }, { once: true });
}

function toggleCustomItem(item) {
    if (currentOrder.type === 'premade') {
        clearOrder();
    }
    currentOrder.type = 'custom';
    
    const itemIndex = currentOrder.items.findIndex(i => i.id === item.id);
    const itemCard = document.getElementById(item.id);

    if (itemIndex > -1) {
        currentOrder.items.splice(itemIndex, 1);
        currentOrder.total -= item.price;
        itemCard.classList.remove('selected-item');
    } else {
        currentOrder.items.push(item);
        currentOrder.total += item.price;
        itemCard.classList.add('selected-item');
    }

    itemCard.classList.add('animated-pulse');
    itemCard.addEventListener('animationend', () => {
        itemCard.classList.remove('animated-pulse');
    }, { once: true });
    
    updateOrderSummary();
}

function removeItemFromOrder(itemId) {
    const itemIndex = currentOrder.items.findIndex(i => i.id === itemId);
    if (itemIndex > -1) {
        const item = currentOrder.items[itemIndex];
        currentOrder.items.splice(itemIndex, 1);
        currentOrder.total -= item.price;
        
        // Un-select the card in the main list
        const itemCard = document.getElementById(item.id);
        if (itemCard) {
            itemCard.classList.remove('selected-card', 'selected-item');
        }
    }
    updateOrderSummary();
}

function validateOrder() {
    const isOrderSelected = currentOrder.items.length > 0;
    const areDetailsFilled = Object.values(recipientDetails).every(val => val.trim() !== '');
    placeOrderBtn.disabled = !(isOrderSelected && areDetailsFilled);
}

async function placeOrder() {
    placeOrderBtn.disabled = true;
    placeOrderBtn.textContent = 'Placing Order...';

    try {
        const orderId = `RAKHI-${Date.now()}`;
        
        const fullName = document.getElementById('fullName').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        
        // --- Definitive fix for 'TypeError: cyclic object value' ---
        // Manually build a clean array of item objects. This ensures no unexpected 
        // properties or references are carried over from the original state objects,
        // which is the most robust way to prevent cyclical reference errors.
        const cleanItems = currentOrder.items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price
        }));

        const cleanOrderPayload = {
            type: currentOrder.type,
            items: cleanItems,
            total: currentOrder.total,
        };

        const orderData = {
            orderId: orderId,
            recipient: {
                fullName: fullName,
                address: address,
                phone: phone,
            },
            order: cleanOrderPayload,
            createdAt: new Date().toISOString(), // Using ISO string for robustness
        };
        
        await addDoc(collection(db, "orders"), orderData);
        
        // Update Pay Now links with dynamic amount
        const recipientName = "Rakhi Celebration";
        const orderNote = encodeURIComponent(`Order ${orderId}`);
        
        // Google Pay
        const googlePayLink = `tez://upi/pay?pa=chaudharyabhishek031@okicici&pn=${recipientName}&am=${currentOrder.total}&cu=INR&tn=${orderNote}`;
        document.getElementById('google-pay-link').href = googlePayLink;

        // PhonePe
        const phonePeLink = `phonepe://pay?pa=chaudharyabhishek031@okicici&pn=${recipientName}&am=${currentOrder.total}&cu=INR&tn=${orderNote}`;
        document.getElementById('phonepe-link').href = phonePeLink;

        // Paytm
        const paytmLink = `paytmmp://pay?pa=chaudharyabhishek031@okicici&pn=${recipientName}&am=${currentOrder.total}&cu=INR&tn=${orderNote}`;
        document.getElementById('paytm-link').href = paytmLink;

        orderIdDisplay.textContent = orderId;
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
        setTimeout(() => {
            successModalContent.classList.remove('scale-95', 'opacity-0');
        }, 10);

    } catch (e) {
        console.error("Error placing order: ", e);
        alert("There was a critical error placing your order. Please refresh and try again.");
        
        // Re-enable button on error
        placeOrderBtn.textContent = 'Place Order';
        validateOrder();
    }
}

function resetApp() {
    clearOrder();
    recipientForm.reset();
    recipientDetails = { fullName: '', address: '', phone: '' };
    placeOrderBtn.textContent = 'Place Order';
    validateOrder();
    
    // Hide the success modal
    successModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        successModal.classList.add('hidden');
        successModal.classList.remove('flex');
    }, 300);
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    renderPremadeHampers();
    renderCustomItems();
    updateOrderSummary();

    premadeGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.hamper-card');
        if (!card) return;
        const selectedHamper = PREMADE_HAMPERS.find(h => h.id === card.id);
        if (selectedHamper) {
            selectPremadeHamper(selectedHamper);
        }
    });

    summaryItemsEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item-btn')) {
            const itemId = e.target.dataset.id;
            removeItemFromOrder(itemId);
        }
    });

    customGrid.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.custom-category-card');
        if (categoryCard) {
            const category = CUSTOM_ITEMS.find(c => c.id === categoryCard.id);
            if (category) {
                showSubitemModal(category);
            }
        }
    });

    subitemModalGrid.addEventListener('click', (e) => {
        const itemCard = e.target.closest('.custom-item-card');
        if (itemCard) {
            const selectedItem = CUSTOM_ITEMS
                .flatMap(c => c.subItems)
                .find(i => i.id === itemCard.id);
            
            if (selectedItem) {
                toggleCustomItem(selectedItem);
                hideSubitemModal();
            }
        }
    });

    subitemModalBackdrop.addEventListener('click', (e) => {
        if (e.target === subitemModalBackdrop) {
            hideSubitemModal();
        }
    });

    document.getElementById('close-subitem-modal-btn').addEventListener('click', hideSubitemModal);

    recipientForm.addEventListener('input', (e) => {
        recipientDetails[e.target.name] = e.target.value;
        validateOrder();
    });

    placeOrderBtn.addEventListener('click', placeOrder);

    document.getElementById('display-qr-btn').addEventListener('click', () => {
        document.getElementById('qr-code-container').classList.toggle('hidden');
    });

    closeModalBtn.addEventListener('click', resetApp);
});
