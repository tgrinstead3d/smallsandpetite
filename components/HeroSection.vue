<template>
    <div class="hero-section">
        <div class="slideshow-container">
            <div v-for="(image, index) in images" :key="index" class="slide"
                :class="{ active: currentSlide === index }">
                <img :src="image" alt="Hero image" class="slide-image" />
            </div>

            <div class="hero-content">
                <h1 class="hero-title">Celebrate Big!</h1>
                <p class="hero-description">
                    Personalized yard signs for themed birthdays, announcement, and showers! Our themes are fit for all
                    ages!
                    Each illustrative theme comes with a unique set of weather-resistant yard signs and metal stakes.
                    Simple, durable, and easy to install, our themed yard signs make a big impression.
                </p>
            </div>

            <div class="controls">
                <div class="dots">
                    <span v-for="(image, index) in images" :key="index" class="dot"
                        :class="{ active: currentSlide === index }" @click="setSlide(index)"></span>
                </div>

                <div class="arrow-controls">
                    <button class="arrow prev" @click="prevSlide">&lt;</button>
                    <button class="arrow next" @click="nextSlide">&gt;</button>
                </div>
            </div>
        </div>

        <a href="#" class="instagram-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Follow Us</span>
        </a>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import bg1 from '~/assets/bg1.jpg';
import bg2 from '~/assets/bg2.png';
import bg3 from '~/assets/bg3.jpg';
import bg4 from '~/assets/bg4.jpg';

// Load all fonts
const preloadFonts = () => {
    if (process.client) {
        // Satisfy
        const satisfyLink = document.createElement('link');
        satisfyLink.rel = 'preload';
        satisfyLink.href = 'https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2';
        satisfyLink.as = 'font';
        satisfyLink.type = 'font/woff2';
        satisfyLink.crossOrigin = 'anonymous';
        document.head.appendChild(satisfyLink);

        // Relation One
        const relationOneLink = document.createElement('link');
        relationOneLink.rel = 'preload';
        relationOneLink.href = 'https://fonts.cdnfonts.com/s/54629/RelationOne.woff';
        relationOneLink.as = 'font';
        relationOneLink.type = 'font/woff';
        relationOneLink.crossOrigin = 'anonymous';
        document.head.appendChild(relationOneLink);

        // Relation Two
        const relationTwoLink = document.createElement('link');
        relationTwoLink.rel = 'preload';
        relationTwoLink.href = 'https://fonts.cdnfonts.com/s/54630/Relation-Two.woff';
        relationTwoLink.as = 'font';
        relationTwoLink.type = 'font/woff';
        relationTwoLink.crossOrigin = 'anonymous';
        document.head.appendChild(relationTwoLink);

        // Shelby
        const shelbyLink = document.createElement('link');
        shelbyLink.rel = 'preload';
        shelbyLink.href = 'https://fonts.cdnfonts.com/s/15050/Shelby.woff';
        shelbyLink.as = 'font';
        shelbyLink.type = 'font/woff';
        shelbyLink.crossOrigin = 'anonymous';
        document.head.appendChild(shelbyLink);
    }
};

// Background images from assets folder
const images = [
    bg1,
    bg2,
    bg3,
    bg4
];

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};

const setSlide = (index) => {
    currentSlide.value = index;
};

// Auto-advance slides
onMounted(() => {
    preloadFonts();
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
});

onBeforeUnmount(() => {
    if (slideInterval) clearInterval(slideInterval);
});
</script>

<style scoped>
/* Import all fonts directly in the component for faster loading */
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.cdnfonts.com/css/relation-one?styles=122872');
@import url('https://fonts.cdnfonts.com/css/relation-two');
@import url('https://fonts.cdnfonts.com/css/shelby');
@import url('https://use.typekit.net/xts7lxl.css');

.hero-section {
    position: absolute;
    width: calc(100% - 250px);
    height: calc(100vh - 80px);
    left: 250px;
    top: 80px;
    overflow: hidden;
}

.slideshow-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slide.active {
    opacity: 1;
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 600px;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    text-align: center;
}

.hero-title {
    font-family: 'Satisfy', 'satisfy-fallback', cursive;
    font-size: 4rem;
    font-weight: normal;
    margin-bottom: 25px;
    color: #333;
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.hero-description {
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
}

.controls {
    position: absolute;
    bottom: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    z-index: 5;
}

.dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    width: 100%;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active,
.dot:hover {
    background-color: white;
}

.arrow-controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
}

.arrow {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
}

.arrow:hover {
    background-color: rgba(255, 255, 255, 0.6);
}

.instagram-button {
    position: absolute;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #757472;
    color: white;
    padding: 10px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    z-index: 5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.instagram-button:hover {
    background-color: #5f5d5b;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

.instagram-button svg {
    width: 18px;
    height: 18px;
}
</style>