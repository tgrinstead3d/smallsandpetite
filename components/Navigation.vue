<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo-container">
                <div class="logo">
                    <img src="~/assets/logo.png" alt="Logo" class="logo-image" />
                </div>
            </div>

            <button class="menu-toggle" @click="toggleMenu" :aria-expanded="mobileMenuOpen.toString()"
                aria-controls="mobile-menu" aria-label="Toggle navigation" :class="{ open: mobileMenuOpen }">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-actions">
                <a href="https://www.instagram.com/smallsandpetite" target="_blank" rel="noopener"
                    class="instagram-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="instagram-icon" aria-hidden="true">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                </a>
                <button class="contact-button">Contact Us</button>
            </div>
        </div>

        <transition name="menu-fade">
            <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMenu"></div>
        </transition>

        <transition name="menu-slide">
            <div v-if="mobileMenuOpen" id="mobile-menu" class="mobile-menu">
                <div class="mobile-menu-section">
                    <a href="https://www.instagram.com/smallsandpetite" target="_blank" rel="noopener"
                        class="instagram-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="instagram-icon" aria-hidden="true">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Instagram</span>
                    </a>
                    <button class="contact-button">Contact Us</button>
                </div>

                <div class="mobile-menu-section">
                    <div class="mobile-menu-heading">Products</div>
                    <div class="mobile-product-list">
                        <div class="mobile-product-item" v-for="(item, index) in productItems" :key="`mobile-${index}`">
                            {{ item }}
                        </div>
                    </div>
                </div>

                <div class="mobile-menu-section">
                    <div class="mobile-menu-heading">Explore</div>
                    <div class="mobile-link-list">
                        <div class="mobile-link-item" v-for="(link, index) in secondaryLinks" :key="`link-${index}`">
                            {{ link }}
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const mobileMenuOpen = ref(false);

const productItems = [
    'Birthdays',
    'Birth Announcements',
    'Graduations',
    'School Events',
    'Showers',
    'Milestones',
    'Holidays',
    'Weddings',
    'Custom'
];

const secondaryLinks = ['Installation Guide', 'Contact', 'FAQ'];

const toggleMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    document.body.classList.toggle('no-scroll', mobileMenuOpen.value);
};

const closeMenu = () => {
    mobileMenuOpen.value = false;
    document.body.classList.remove('no-scroll');
};

const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.classList.remove('no-scroll');
});
</script>

<style scoped>
.navbar {
    height: 80px;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    /* Higher z-index than SideNavigation */
}

.navbar-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    width: 250px;
    /* Same width as side navigation */
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-image {
    max-width: 200px;
    /* Match side navigation width */
    max-height: 60px;
    /* Allow height to scale proportionally */
    width: auto;
    height: auto;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 60;
}

.menu-toggle span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #757472;
    transition: transform 0.2s ease;
}

.menu-toggle.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

.nav-actions {
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 12px;
}

.contact-button {
    background-color: #757472;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: 'proxima-nova', sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-button:hover {
    background-color: #5f5d5b;
}

.instagram-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #757472;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: 'proxima-nova', sans-serif;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.instagram-link:hover {
    background-color: #5f5d5b;
}

.instagram-icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
}

.mobile-menu-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 45;
}

.mobile-menu {
    position: fixed;
    top: 80px;
    right: 0;
    width: min(320px, 80%);
    height: calc(100vh - 80px);
    background-color: white;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.12);
    z-index: 55;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 24px;
    gap: 32px;
}

.mobile-menu-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mobile-menu-heading {
    font-family: 'Relation Two', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #757472;
}

.mobile-product-list,
.mobile-link-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.mobile-product-item,
.mobile-link-item {
    font-family: 'proxima-nova', sans-serif;
    color: #757472;
    font-size: 0.95rem;
}

.mobile-menu .instagram-link,
.mobile-menu .contact-button {
    width: 100%;
    justify-content: center;
    display: inline-flex;
}

.mobile-menu .instagram-link,
.mobile-menu .contact-button {
    min-height: 42px;
    box-sizing: border-box;
}

.mobile-menu .instagram-link:hover,
.mobile-menu .contact-button:hover {
    background-color: #5f5d5b;
}

.mobile-product-item,
.mobile-link-item {
    font-family: 'proxima-nova', sans-serif;
    color: #757472;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    cursor: pointer;
}

.mobile-product-item:hover,
.mobile-link-item:hover {
    color: #5f5d5b;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
    transition: opacity 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
    opacity: 0;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: transform 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    transform: translateX(100%);
}

@media (max-width: 900px) {
    .navbar {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        padding: 0 16px;
    }

    .navbar-container {
        gap: 16px;
    }

    .logo-container {
        width: auto;
    }

    .logo-image {
        max-width: 150px;
    }

    .menu-toggle {
        display: inline-flex;
    }

    .nav-actions {
        display: none;
    }

    .instagram-link,
    .contact-button {
        padding: 8px 16px;
        font-size: 14px;
    }
}
</style>
