// ============================================
// INTERACTIVE BUTTON FUNCTIONALITY FOR SQUARE ONLINE
// ============================================

const modalContainer = document.createElement('div');

const contactModal = document.createElement('div');
contactModal.className = 'modal fade';
contactModal.id = 'contactModal';
contactModal.tabIndex = -1;
contactModal.innerHTML = `
    <div class="modal-dialog modal-lg">
        <div class="modal-content rounded-4">
            <div class="modal-header border-0">
                <h5 class="modal-title">Contact Sales</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4">
                <form id="contactForm">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" id="contactName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="contactEmail" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Business Type</label>
                        <select class="form-select" id="businessType" required>
                            <option value="">Select business type</option>
                            <option value="retail">Retail</option>
                            <option value="food">Food & Beverage</option>
                            <option value="services">Services</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message</label>
                        <textarea class="form-control" id="contactMessage" rows="4" placeholder="Tell us about your business needs..."></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="submitContact">Send Message</button>
            </div>
        </div>
    </div>
`;

const signupModal = document.createElement('div');
signupModal.className = 'modal fade';
signupModal.id = 'signupModal';
signupModal.tabIndex = -1;
signupModal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header border-0">
                <h5 class="modal-title">Get Started with Square</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4">
                <form id="signupForm">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="signupEmail" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Business Name</label>
                        <input type="text" class="form-control" id="businessName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone (optional)</label>
                        <input type="tel" class="form-control" id="businessPhone">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="submitSignup">Create Account</button>
            </div>
        </div>
    </div>
`;

const signInModal = document.createElement('div');
signInModal.className = 'modal fade';
signInModal.id = 'signInModal';
signInModal.tabIndex = -1;
signInModal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header border-0">
                <h5 class="modal-title">Sign in</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4">
                <form id="signInForm">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="signInEmail" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="signInPassword" required>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" id="submitSignIn">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

const supportModal = document.createElement('div');
supportModal.className = 'modal fade';
supportModal.id = 'supportModal';
supportModal.tabIndex = -1;
supportModal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header border-0">
                <h5 class="modal-title">Customer Support</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4">
                <form id="supportForm">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="supportEmail" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">How can we help?</label>
                        <textarea class="form-control" id="supportMessage" rows="4" required></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="submitSupport">Send request</button>
            </div>
        </div>
    </div>
`;

modalContainer.appendChild(contactModal);
modalContainer.appendChild(signupModal);
modalContainer.appendChild(signInModal);
modalContainer.appendChild(supportModal);
document.body.appendChild(modalContainer);

const cleanupModalBackdrop = () => {
    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
};

const signInModalEl = document.getElementById('signInModal');
if (signInModalEl) {
    signInModalEl.addEventListener('hidden.bs.modal', cleanupModalBackdrop);
}

const signInLink = document.getElementById('signInLink');

const setHeaderAccount = email => {
    if (!signInLink) return;
    if (!email) {
        signInLink.textContent = 'Sign in';
        signInLink.title = 'Sign in';
        signInLink.classList.remove('account-link');
        return;
    }
    const username = email.split('@')[0] || email;
    signInLink.textContent = `Account: ${username}`;
    signInLink.title = email;
    signInLink.classList.add('account-link');
};

if (signInLink) {
    signInLink.addEventListener('click', e => {
        e.preventDefault();
        const modal = new bootstrap.Modal(document.getElementById('signInModal'));
        modal.show();
    });
}

const cartButton = document.getElementById('cartButton');
const searchButton = document.getElementById('searchButton');
let cartCount = 0;
const updateCartCount = () => {
    const countEl = document.querySelector('.cart-count');
    if (countEl) countEl.textContent = cartCount;
};

const showCartSuccess = product => {
    showSuccessPanel(`${product} added to cart`);
};

const addCartButtons = document.querySelectorAll('.add-to-cart');
addCartButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        cartCount += 1;
        updateCartCount();
        const product = button.dataset.product || 'Item';
        showCartSuccess(product);
    });
});

if (cartButton) {
    cartButton.addEventListener('click', () => {
        showSuccessPanel(`You have ${cartCount} ${cartCount === 1 ? 'item' : 'items'} in your cart.`);
    });
}

if (searchButton) {
    searchButton.addEventListener('click', () => {
        showSuccessPanel('Search is coming soon.');
    });
}

const goToTemplateEditor = (theme, image) => {
    const params = new URLSearchParams({ theme, image });
    window.location.href = `edit-template.html?${params.toString()}`;
};

const goToShippingDetail = shippingType => {
    const params = new URLSearchParams({ shippingType });
    window.location.href = `shipping-detail.html?${params.toString()}`;
};

const onCardClick = card => {
    if (card.classList.contains('theme-card')) {
        const theme = card.dataset.theme || card.querySelector('h5')?.textContent || 'selected theme';
        const image = card.dataset.image || card.querySelector('img')?.src || '';
        goToTemplateEditor(theme, image);
        return;
    }
    if (card.classList.contains('shipping-card')) {
        const shippingType = card.dataset.shipping || card.querySelector('h5')?.textContent || 'shipping';
        goToShippingDetail(shippingType);
        return;
    }
    if (card.classList.contains('resource-card') || card.classList.contains('pricing-card')) {
        const title = card.querySelector('h5, h6')?.textContent || 'Item';
        alert(`Opening: ${title}`);
    }
};

const makeElementClickable = element => {
    element.classList.add('clickable-card');
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    element.addEventListener('click', e => {
        if (e.target.closest('button, a, input, select, textarea')) return;
        onCardClick(element);
    });
    element.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick(element);
        }
    });
};

const cardElements = document.querySelectorAll('.theme-card, .resource-card, .pricing-card, .try-square-card, .shipping-card');
cardElements.forEach(makeElementClickable);

const onButtonClick = (buttonText, button) => {
    if (buttonText.includes('contact sales') || buttonText.includes('talk to our team')) {
        const modal = new bootstrap.Modal(document.getElementById('contactModal'));
        modal.show();
    } else if (buttonText.includes('create your site') || buttonText.includes('get started') || buttonText.includes('signup')) {
        const modal = new bootstrap.Modal(document.getElementById('signupModal'));
        modal.show();
    } else if (buttonText.includes('create your free site') || buttonText.includes('try free for 30 days')) {
        const planName = button.closest('.pricing-card')?.querySelector('.badge')?.textContent?.trim() || 'your plan';
        alert(`Starting free trial for ${planName}. You will be redirected to account setup.`);
    } else if (buttonText.includes('explore themes')) {
        alert('Theme explorer would open with customization options.');
    } else if (buttonText.includes('sign in')) {
        const modal = new bootstrap.Modal(document.getElementById('signInModal'));
        modal.show();
    } else if (buttonText.includes('support')) {
        const modal = new bootstrap.Modal(document.getElementById('supportModal'));
        modal.show();
    }
};

const allButtons = Array.from(document.querySelectorAll('a')).filter(button => {
    const text = button.textContent.toLowerCase().trim();
    return [
        'contact sales',
        'talk to our team',
        'create your free site',
        'try free for 30 days',
        'explore themes',
        'sign in',
        'support',
        'learn more'
    ].some(keyword => text.includes(keyword));
});
allButtons.forEach(button => {
    const text = button.textContent.toLowerCase().trim();
    button.addEventListener('click', function(e) {
        e.preventDefault();
        onButtonClick(text, button);
    });
});

const submitContactBtn = document.getElementById('submitContact');
if (submitContactBtn) {
    submitContactBtn.addEventListener('click', function() {
        const form = document.getElementById('contactForm');
        if (form.checkValidity()) {
            alert('Thank you! Our sales team will contact you shortly.');
            bootstrap.Modal.getInstance(document.getElementById('contactModal')).hide();
            form.reset();
        } else {
            form.reportValidity();
        }
    });
}

const showSuccessPanel = message => {
    let panel = document.getElementById('successPanel');
    if (!panel) {
        panel = document.createElement('div');
        panel.id = 'successPanel';
        panel.className = 'success-panel';
        document.body.appendChild(panel);
    }
    panel.textContent = message;
    panel.classList.add('visible');
    clearTimeout(panel.dismissTimeout);
    panel.dismissTimeout = setTimeout(() => {
        panel.classList.remove('visible');
    }, 4000);
};

const submitSignupBtn = document.getElementById('submitSignup');
if (submitSignupBtn) {
    submitSignupBtn.addEventListener('click', function() {
        const form = document.getElementById('signupForm');
        if (form.checkValidity()) {
            showSuccessPanel('Account created successfully! Welcome to Square Online');
            bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
            form.reset();
        } else {
            form.reportValidity();
        }
    });
}

const submitSignInBtn = document.getElementById('submitSignIn');
const signInForm = document.getElementById('signInForm');
if (signInForm) {
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (signInForm.checkValidity()) {
            const email = document.getElementById('signInEmail')?.value || '';
            showSuccessPanel('Account created successfully!');
            setHeaderAccount(email);
            const modalInstance = bootstrap.Modal.getInstance(document.getElementById('signInModal'));
            if (modalInstance) {
                modalInstance.hide();
            }
            cleanupModalBackdrop();
            signInForm.reset();
        } else {
            signInForm.reportValidity();
        }
    });
}

if (submitSignInBtn) {
    submitSignInBtn.addEventListener('click', function() {
        signInForm?.requestSubmit();
    });
}

const submitSupportBtn = document.getElementById('submitSupport');
if (submitSupportBtn) {
    submitSupportBtn.addEventListener('click', function() {
        const form = document.getElementById('supportForm');
        if (form.checkValidity()) {
            alert('Support request sent. Our team will reply soon.');
            bootstrap.Modal.getInstance(document.getElementById('supportModal')).hide();
            form.reset();
        } else {
            form.reportValidity();
        }
    });
}

const ctaForm = document.getElementById('ctaSubscribe');
if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('ctaEmail');
        if (emailInput.checkValidity()) {
            alert(`Thanks! We will send the latest Square updates to ${emailInput.value}.`);
            emailInput.value = '';
        } else {
            emailInput.reportValidity();
        }
    });
}

const anchorButtons = document.querySelectorAll('.resource-card, .brand-card, .pricing-card');
anchorButtons.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h5, h6')?.textContent || 'Item';
        alert(`Opening: ${title}`);
    });
});

// Video play functionality
const heroVideo = document.getElementById('heroVideo');
const heroPlay = document.querySelector('.hero-play');

if (heroVideo && heroPlay) {
    let isPlaying = false;
    let currentButton = null;

    function updateButton() {
        if (isPlaying) {
            heroPlay.innerHTML = '<span class="pause-button"></span>';
            currentButton = document.querySelector('.pause-button');
        } else {
            heroPlay.innerHTML = '<span class="play-button" id="playButton"></span>';
            currentButton = document.getElementById('playButton');
        }
        if (currentButton) {
            currentButton.addEventListener('click', handleButtonClick);
        }
    }

    function handleButtonClick() {
        if (!isPlaying) {
            // Start playing
            isPlaying = true;
            heroVideo.classList.add('playing');
            heroPlay.style.display = 'none';
            // Simulate video controls appearing after 3 seconds
            setTimeout(() => {
                if (isPlaying) {
                    updateButton();
                    heroPlay.style.display = 'flex';
                }
            }, 3000);
        } else {
            // Stop playing
            isPlaying = false;
            heroVideo.classList.remove('playing');
            updateButton();
        }
    }

    // Auto-play the video when page loads
    function startAutoPlay() {
        isPlaying = true;
        heroVideo.classList.add('playing');
        heroPlay.style.display = 'none';
        // Show pause button after 3 seconds
        setTimeout(() => {
            if (isPlaying) {
                updateButton();
                heroPlay.style.display = 'flex';
            }
        }, 3000);
    }

    // Start playing automatically
    startAutoPlay();
}
