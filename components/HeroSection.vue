<template>
    <div class="hero-section">
        <div class="slideshow-container">
            <div v-for="(image, index) in images" :key="index" class="slide"
                :class="{ active: currentSlide === index }">
                <img :src="image" alt="Hero image" class="slide-image" />
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

        <main class="page-content">
            <section class="celebrate-section">
                <div class="celebrate-content">
                    <h1 class="celebrate-title">Celebrate Big!</h1>
                    <div class="celebrate-divider" aria-hidden="true"></div>
                    <p class="celebrate-description">
                        Personalized yard signs for themed birthdays, announcement, and showers! Our themes are fit for
                        all ages! Each illustrative theme comes with a unique set of weather-resistant yard signs and
                        metal stakes. Simple, durable, and easy to install, our themed yard signs make a big impression.
                    </p>
                </div>
            </section>

            <section class="shop-section">
                <div class="section-header">
                    <h2 class="section-title">Shop by Occasion</h2>
                    <p class="section-subtitle">Choose from our curated celebrations to make your next milestone
                        unforgettable.</p>
                </div>
                <div class="occasion-grid">
                    <article v-for="(occasion, index) in occasions" :key="index" class="occasion-card">
                        <img :src="occasion.image" :alt="occasion.title" class="occasion-image" />
                        <div class="occasion-content">
                            <h3>{{ occasion.title }}</h3>
                            <p>{{ occasion.description }}</p>
                        </div>
                    </article>
                </div>
                <button class="secondary-button">Browse All Occasions</button>
            </section>

            <section class="testimonials-section">
                <div class="section-header">
                    <h2 class="section-title">Testimonials</h2>
                    <p class="section-subtitle">Families and friends love celebrating with Smalls &amp; Petite.</p>
                </div>
                <div class="testimonial-grid">
                    <article v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
                        <p class="testimonial-quote">“{{ testimonial.quote }}”</p>
                        <div class="testimonial-author">{{ testimonial.author }}</div>
                        <div class="testimonial-detail">{{ testimonial.detail }}</div>
                    </article>
                </div>
            </section>

            <section class="about-section">
                <div class="about-content">
                    <div class="about-media">
                        <img src="~/assets/logo.png" alt="Smalls and Petite logo"
                            class="about-image" />
                    </div>
                    <div class="about-divider" aria-hidden="true"></div>
                    <div class="about-text">
                        <h2 class="section-title">Who We Are</h2>
                        <p><span class="about-greeting">Hello,</span><br />
                            Thanks for getting to know us. Our story goes back 15 years. Ambitious and newly graduated
                            from design schools, we met in a small design firm in Dublin, Ohio.</p>
                        <p>After many long nights and countless deadlines, we fell in love with the design process and
                            the ultimate goal of creating beautiful spaces. Our partnership stems from a shared passion
                            for design, our love of family and an unwavering friendship.</p>
                        <p>We're excited to see what the next 15 years bring!</p>
                        <p class="about-signature">Megan "Smalls" and Caroline "Petite"</p>
                    </div>
                </div>
            </section>

            <footer class="site-footer">
                <div class="footer-top">
                    <div class="footer-brand">
                        <img src="~/assets/logo.png" alt="Smalls and Petite" class="footer-logo-image" />
                        <p>Custom yard greetings for life’s biggest moments.</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Occasions</h4>
                            <ul>
                                <li v-for="(occasion, index) in occasions" :key="`footer-${index}`">{{ occasion.title }}</li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li>About</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li>Instagram</li>
                                <li>Email</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>&copy; {{ currentYear }} Smalls &amp; Petite. All rights reserved.</span>
                    <div class="footer-meta">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </main>
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

const occasions = [
    {
        title: 'Birthdays',
        description: 'Make every age feel larger than life with colorful, custom yard greetings.',
        image: 'https://via.placeholder.com/320x220?text=Birthdays'
    },
    {
        title: 'Baby Showers',
        description: 'Welcome new arrivals with sweet storks, tiny shoes, and a burst of joy.',
        image: 'https://via.placeholder.com/320x220?text=Baby+Showers'
    },
    {
        title: 'Graduations',
        description: 'Celebrate the grad with school colors, caps, and cheers from the lawn.',
        image: 'https://via.placeholder.com/320x220?text=Graduations'
    },
    {
        title: 'Holidays',
        description: 'Deck the yard for every season with festive displays and twinkling details.',
        image: 'https://via.placeholder.com/320x220?text=Holidays'
    }
];

const testimonials = [
    {
        quote: 'The setup was seamless and the signs were a huge hit with our guests!',
        author: 'Jasmine K.',
        detail: 'Birthday Celebration'
    },
    {
        quote: 'Our graduation photos turned out amazing thanks to the vibrant display.',
        author: 'The Nguyen Family',
        detail: 'High School Graduation'
    },
    {
        quote: 'They took care of everything from delivery to pick-up. Highly recommend!',
        author: 'Melissa R.',
        detail: 'Baby Shower'
    }
];

const currentYear = new Date().getFullYear();

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
    position: relative;
    width: calc(100% - 250px);
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-left: 250px;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
}

.slideshow-container {
    width: 100%;
    position: relative;
    height: clamp(420px, 70vh, 720px);
    flex-shrink: 0;
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

.page-content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 0;
    flex: 1 1 auto;
}

.celebrate-section {
    background-color: white;
    padding: 60px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    z-index: 6;
    border-bottom: 1px solid #e6e5e3;
}

.celebrate-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
}

.celebrate-title {
    flex: 0 0 30%;
    font-family: 'Satisfy', 'satisfy-fallback', cursive;
    font-size: 3.5rem;
    font-weight: normal;
    margin: 0;
    color: #757472;
}

.celebrate-description {
    flex: 1 1 auto;
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: #757472;
    margin: 0;
}

.celebrate-divider {
    width: 1px;
    background-color: #757472;
    opacity: 0.6;
    align-self: stretch;
}

.shop-section,
.testimonials-section,
.about-section {
    padding: 0 60px;
}

.shop-section .section-header,
.testimonials-section .section-header {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 40px;
}

.section-title {
    font-family: 'Relation One', sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    color: #757472;
    margin-bottom: 12px;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    text-align: center;
}

.section-subtitle {
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    font-size: 1.05rem;
    color: #757472;
    margin: 0;
    line-height: 1.7;
}

.occasion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
}

.occasion-card {
    background-color: #f9f8f6;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    min-height: 360px;
}

.occasion-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.occasion-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
}

.occasion-content h3 {
    font-family: 'Relation Two', sans-serif;
    color: #757472;
    font-size: 1.4rem;
    margin: 0;
}

.occasion-content p {
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    color: #757472;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

.secondary-button {
    align-self: center;
    margin-top: 40px;
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #757472;
    color: #757472;
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.secondary-button:hover {
    background-color: #757472;
    color: white;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
}

.testimonial-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #757472;
}

.testimonial-quote {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.8;
}

.testimonial-author {
    font-weight: 600;
    font-size: 1rem;
}

.testimonial-detail {
    font-size: 0.9rem;
    color: #9b9a98;
}

.about-content {
    display: flex;
    gap: 40px;
    align-items: stretch;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
}

.about-text {
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #757472;
    padding: 40px 60px 40px 80px;
}

.about-text p {
    margin: 0;
    line-height: 1.7;
    font-size: 1rem;
    font-family: 'Proxima Nova', 'proxima-nova', 'proxima-nova-fallback', Helvetica, Arial, sans-serif;
}

.about-greeting {
    font-family: 'Relation One', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.about-signature {
    font-weight: 700;
}


.about-media {
    flex: 1 1 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 80px 40px 60px;
}

.about-image {
    width: 100%;
    max-width: 320px;
}

.about-divider {
    position: absolute;
    top: 12%;
    bottom: 12%;
    left: 50%;
    width: 1px;
    background-color: #757472;
    opacity: 0.6;
}

.site-footer {
    background-color: #f9f8f6;
    padding: 60px;
    color: #757472;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
}

.footer-brand {
    max-width: 320px;
}

.footer-logo-image {
    max-width: 220px;
    margin-bottom: 16px;
}

.footer-links {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.footer-column h4 {
    margin: 0 0 16px 0;
    font-family: 'Relation Two', sans-serif;
    font-size: 1.1rem;
}

.footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.95rem;
}

.footer-bottom {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.9rem;
}

.footer-meta {
    display: flex;
    gap: 20px;
}

.footer-meta a {
    color: #757472;
    text-decoration: none;
    position: relative;
}

.footer-meta a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: #b8b7b5;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.footer-meta a:hover::after {
    transform: scaleX(1);
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