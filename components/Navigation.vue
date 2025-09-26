<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo-container">
                <div class="logo">
                    <img src="~/assets/logo.png" alt="Logo" class="logo-image" />
                </div>
            </div>
            <div class="nav-actions">
                <a href="https://www.instagram.com/smallsandpetite" target="_blank" rel="noopener" class="instagram-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="instagram-icon" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                </a>
                <button class="contact-button">Contact Us</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
// Navigation component logic can be added here
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
</style>
