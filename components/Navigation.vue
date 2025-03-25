<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo-container">
                <div class="logo">
                    <img src="~/assets/logo.png" alt="Logo" class="logo-image" />
                </div>
            </div>
            <div class="nav-actions">
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
    position: relative;
    z-index: 20;
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
</style>
