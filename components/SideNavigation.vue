<template>
    <div class="side-nav">
        <div class="side-nav-container">
            <div class="menu-items">
                <div class="menu-item dropdown">
                    <div class="menu-header">
                        <span>PRODUCTS</span>
                    </div>
                    <div class="dropdown-content" v-if="productsOpen">
                        </div> 
                    <div class="dropdown-container">
                        <div class="dropdown-line">
                    <div class="dropdown-item" v-for="(item, index) in productItems" :key="index">
                            {{ item }}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <span>INSTALLATION GUIDE</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <span>CONTACT</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-header">
                        <span>FAQ</span>
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
    height: calc(100vh - 80px);
    /* Subtract top navbar height */
    position: fixed;
    top: 80px;
    /* Position below top navbar */
    left: 0;
    border-right: 1px solid #757472;
    display: flex;
    flex-direction: column;
    z-index: 10;
    /* Lower z-index than Navigation */
}

.side-nav-container {
    padding: 20px, 0;
    width: 100%;
}

.menu-items {
    display: flex;
    flex-direction: column;
    width: 100%;
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
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    background-color: white;
}

.dropdown-item {
    padding: 12px 20px 12px 20px;
    font-family: 'proxima-nova', sans-serif;
    font-weight: 400;
    color: #757472;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

/* .dropdown-item:hover { */
/*    background-color: rgba(117, 116, 114, 0.1); */
/*  } */
</style>
