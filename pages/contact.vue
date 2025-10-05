<template>
  <div class="contact-page-wrapper">
    <section class="contact-hero">
      <div class="contact-hero__content">
        <p class="contact-hero__eyebrow">Contact</p>
        <h1 class="contact-hero__title">We Would Love to Hear From You</h1>
        <p class="contact-hero__subtitle">
          Have a question about our yard signs or need help planning the perfect celebration? Fill out the
          form below or reach out using your preferred method and we will get back to you soon.
        </p>
      </div>
    </section>

    <section class="contact-content">
      <div class="contact-card">
        <h2>Get in Touch</h2>
        <p>
          Email us at
          <a href="mailto:hello@smallsandpetite.com" class="contact-link">hello@smallsandpetite.com</a>
          or give us a call at
          <a href="tel:+16145550123" class="contact-link">(614) 555-0123</a>.
        </p>
        <p>
          You can also send a message directly using the form. Let us know your event details and we will help
          you bring your celebration to life.
        </p>
      </div>

      <form class="contact-form" name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <label class="contact-field">
          <span>Name</span>
          <input type="text" name="name" required autocomplete="name" />
        </label>

        <label class="contact-field">
          <span>Email</span>
          <input type="email" name="email" required autocomplete="email" />
        </label>

        <label class="contact-field">
          <span>Event Date</span>
          <input type="date" name="event-date" />
        </label>

        <label class="contact-field">
          <span>Message</span>
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit" class="contact-submit">Send Message</button>
      </form>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '~/components/FooterSection.vue';
</script>

<style scoped>
.contact-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: clamp(48px, 6vw, 96px);
  padding: clamp(48px, 8vw, 120px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 80px);
  box-sizing: border-box;
}

.contact-hero {
  background: linear-gradient(135deg, rgba(117, 116, 114, 0.08), rgba(117, 116, 114, 0.15));
  border-radius: 32px;
  padding: clamp(48px, 6vw, 96px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(214, 210, 203, 0.6);
}

.contact-hero__content {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  color: #757472;
}

.contact-hero__eyebrow {
  font-family: 'Relation Two', sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0 0 12px;
}

.contact-hero__title {
  font-family: 'Relation One', sans-serif;
  font-size: clamp(2.4rem, 4vw, 3rem);
  letter-spacing: 0.35rem;
  margin: 0 0 16px;
}

.contact-hero__subtitle {
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.contact-content {
  display: grid;
  gap: clamp(32px, 4vw, 64px);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: start;
}

.contact-card {
  background: #ffffff;
  border-radius: 24px;
  padding: clamp(24px, 4vw, 40px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 116, 114, 0.12);
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
}

.contact-card h2 {
  margin: 0 0 16px;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.25rem;
  font-size: 1.6rem;
  text-transform: uppercase;
}

.contact-card p {
  margin: 0 0 16px;
  line-height: 1.7;
}

.contact-link {
  color: #757472;
  text-decoration: underline;
}

.contact-form {
  display: grid;
  gap: 20px;
  background: #ffffff;
  border-radius: 24px;
  padding: clamp(24px, 4vw, 40px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 116, 114, 0.12);
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  color: #757472;
}

.contact-field span {
  font-weight: 600;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.contact-field input,
.contact-field textarea {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgba(117, 116, 114, 0.25);
  font-size: 1rem;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  color: #454443;
  background: rgba(255, 255, 255, 0.9);
}

.contact-field input:focus,
.contact-field textarea:focus {
  outline: none;
  border-color: #757472;
  box-shadow: 0 0 0 3px rgba(117, 116, 114, 0.15);
}

.contact-submit {
  justify-self: start;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  background-color: #757472;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  transition: background-color 0.3s ease;
}

.contact-submit:hover {
  background-color: #5f5d5b;
}

@media (max-width: 900px) {
  .contact-page-wrapper {
    padding: clamp(48px, 8vw, 80px) clamp(16px, 6vw, 40px) clamp(40px, 6vw, 60px);
  }

  .contact-hero {
    padding: 48px 24px;
  }

  .contact-card,
  .contact-form {
    padding: clamp(20px, 4vw, 32px);
  }
}
</style>
