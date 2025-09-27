<template>
    <div class="side-nav">
        <div class="side-nav-container">
            <div class="menu-items">
                <div class="menu-item dropdown">
                    <div class="menu-header">
                        <span>PRODUCTS</span>
                    </div>
                    <div class="dropdown-content" v-if="productsOpen">
                        <div class="dropdown-container">
                            <div class="dropdown-line"></div>
                            <div class="dropdown-list">
                                <div class="dropdown-item" v-for="(item, index) in productItems" :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <NuxtLink to="/installation-guide">INSTALLATION GUIDE</NuxtLink>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <span>CONTACT</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <NuxtLink to="/faq">FAQ</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const productsOpen = ref(true);
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

const toggleProducts = () => {
    productsOpen.value = !productsOpen.value;
};
</script>

<style scoped>
.side-nav {
    width: 250px;
    background-color: white;
    min-height: calc(100vh - 80px);
    position: fixed;
    top: 80px;
    left: 0;
    border-right: 1px solid #757472;
    display: flex;
    flex-direction: column;
    z-index: 10;
    /* Lower z-index than Navigation */
}

.side-nav-container {
    padding: 20px 0;
    width: 100%;
}

.menu-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-item {
    width: 100%;
    cursor: pointer;
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    font-family: 'proxima-nova', sans-serif;
    font-weight: 500;
    color: #757472;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.menu-header:hover {
    background-color: rgba(117, 116, 114, 0.1);
}

.menu-header a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.dropdown-line {
    
    width: 1px;
    background-color:  #757472;
    min-height: 80px;
    margin-left: 15px;
    
}

.dropdown-icon {
    font-size: 12px;
}

.dropdown-container {
    display: flex;
    flex-direction: row;
    padding: 0 20px 0 30px;
    gap: 16px;
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    background-color: white;
}

.dropdown-list {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.dropdown-item {
    padding: 12px 20px;
    font-family: 'proxima-nova', sans-serif;
    font-weight: 400;
    color: #757472;
    font-size: 14px;
    position: relative;
    transition: color 0.25s ease, background-color 0.25s ease;
}

.dropdown-item a {
    color: inherit;
    text-decoration: none;
}

.dropdown-item::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(117, 116, 114, 0), rgba(117, 116, 114, 0.12), rgba(117, 116, 114, 0));
    opacity: 0;
    transform: scaleX(0.7);
    transform-origin: center;
    transition: opacity 0.25s ease, transform 0.25s ease;
    z-index: -1;
}

.dropdown-item:hover {
    color: #5f5d5b;
}

.dropdown-item:hover::before {
    opacity: 1;
    transform: scaleX(1);
}

@media (max-width: 900px) {
    .side-nav {
        display: none;
    }
}
</style>
