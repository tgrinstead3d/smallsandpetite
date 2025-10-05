<template>
  <div class="install-page-wrapper">
    <div class="install-page">
      <header class="install-hero">
        <div class="install-hero__content">
          <p class="install-hero__eyebrow">Installation Guide</p>
          <h1 class="install-hero__title">Set Up Your Celebration</h1>
          <p class="install-hero__subtitle">
            Follow these simple steps to assemble and display your custom yard signs. Each kit includes everything
            you need for a show-stopping celebration.
          </p>

          <div class="install-meta">
            <div class="install-meta__item">
              <span class="install-meta__label">Assembly time:</span>
              <span class="install-meta__value">20-30 Minutes</span>
            </div>
            <a class="install-meta__link" href="#">Download PDF</a>
          </div>
        </div>
      </header>

      <main class="install-content">
        <section class="install-steps">
          <div class="install-step" v-for="(step, index) in steps" :key="`step-${index}`">
            <div class="install-step__header">
              <div class="install-step__badge">Step {{ index + 1 }}</div>
              <h2 class="install-step__title">{{ step.title }}</h2>
            </div>
            <p class="install-step__description">{{ step.description }}</p>

            <ul v-if="step.tips?.length" class="install-step__tips">
              <li v-for="(tip, i) in step.tips" :key="`tip-${index}-${i}`">{{ tip }}</li>
            </ul>
          </div>
        </section>

        <aside class="install-advice">
          <div class="install-advice__card">
            <h3>Helpful Reminders</h3>
            <ul>
              <li>Firmly press stakes into the ground using the horizontal bar for leverage.</li>
              <li>If the ground is dry, lightly water the area to make installation easier.</li>
              <li>Avoid electrical lines, irrigation systems, and invisible fencing.</li>
              <li>Once the celebration wraps, the signs and stakes are 100% recyclable.</li>
              <li>Share your setup with us on Instagram and Facebook &mdash; we love seeing your celebrations!</li>
            </ul>
          </div>
        </aside>
      </main>

      <section class="install-cta">
        <div class="install-cta__content">
          <h2>Need a hand?</h2>
          <p>
            We can install local orders for a small fee. Let us know when you place your order, and we will coordinate the
            details.
          </p>
          <div class="install-cta__actions">
            <a class="install-cta__button" href="/contact">Contact Us</a>
            <a class="install-cta__link" href="/faq">Visit FAQ</a>
          </div>
        </div>
      </section>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '~/components/FooterSection.vue';

const steps = [
  {
    title: 'Unbox',
    description: 'Unbox your kit and lay out every sign and stake in your yard so you can see the full collection.',
    tips: ['Keep the packaging nearby in case you want to store or reuse the signs later.']
  },
  {
    title: 'Arrange',
    description:
      'Line up the signs in the order you would like to display them. The bottom of each sign lists its number so you can place them in sequence or get creative.',
    tips: ['Refer to Diagram 1 for a sample layout.']
  },
  {
    title: 'Assemble',
    description:
      'Attach the metal stakes to each sign. Match the stake style and placement to the arrows printed on the sign, then slide the stakes into the corrugated channels.',
    tips: ['Push the stake gently until the horizontal bar sits about an inch from the bottom of the sign (Diagrams 2 & 3).']
  },
  {
    title: 'Position and Adjust',
    description:
      'Press the staked signs into the ground, using the horizontal bar to help seat them securely. Adjust heights and spacing until everything looks perfect.',
    tips: ['Water the ground lightly if it is very dry.', 'Be mindful of utility lines and irrigation systems (Diagram 4).']
  },
  {
    title: 'Take a Few Pictures!',
    description:
      'Celebrate the moment and snap plenty of photos. Tag @smallsandpetite on Instagram and Facebook or send us your feedback.',
    tips: ['After the celebration, keep the signs for future fun or recycle stakes and panels separately.']
  }
];
</script>

<style scoped>
.install-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.install-page {
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6vw, 80px);
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: clamp(48px, 8vw, 120px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 80px);
  box-sizing: border-box;
  flex: 1 0 auto;
}

.install-hero {
  background: linear-gradient(135deg, rgba(117, 116, 114, 0.08), rgba(117, 116, 114, 0.15));
  padding: clamp(48px, 6vw, 80px);
  border-radius: 32px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(214, 210, 203, 0.6);
}

.install-hero__content {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  color: #757472;
}

.install-hero__eyebrow {
  font-family: 'Relation Two', sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0 0 12px;
}

.install-hero__title {
  font-family: 'Relation One', sans-serif;
  font-size: clamp(2.4rem, 3.5vw, 3.4rem);
  letter-spacing: 0.35rem;
  margin: 0 0 16px;
}

.install-hero__subtitle {
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.install-meta {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.install-meta__item {
  display: flex;
  gap: 8px;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  font-size: 0.95rem;
}

.install-meta__label {
  letter-spacing: 0.12rem;
  text-transform: uppercase;
}

.install-meta__value {
  font-weight: 600;
}

.install-meta__link {
  color: #757472;
  text-decoration: none;
  border: 2px solid #757472;
  padding: 10px 22px;
  border-radius: 6px;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.install-meta__link:hover {
  background-color: #757472;
  color: #ffffff;
}

.install-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
  gap: 32px;
  box-sizing: border-box;
}

.install-steps {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.install-step {
  background-color: #ffffff;
  border-radius: 18px;
  padding: 36px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 116, 114, 0.12);
  color: #757472;
}

.install-step__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.install-step__badge {
  background-color: #757472;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.install-step__title {
  margin: 0;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.25rem;
  text-transform: uppercase;
}

.install-step__description {
  margin: 0;
  line-height: 1.7;
  font-size: 1rem;
}

.install-step__tips {
  margin: 16px 0 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;
}

.install-step__tips li {
  line-height: 1.6;
}

.install-advice {
  display: flex;
}

.install-advice__card {
  background-color: #f9f8f6;
  border-radius: 18px;
  padding: 32px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 116, 114, 0.12);
  color: #757472;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.install-advice__card h3 {
  margin: 0;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 1.1rem;
}

.install-advice__card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.95rem;
  line-height: 1.7;
}

.install-cta {
  width: 100%;
  box-sizing: border-box;
}

.install-cta__content {
  max-width: 1100px;
  margin: 0 auto;
  background-color: #f9f8f6;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  color: #757472;
  text-align: center;
}

.install-cta__content h2 {
  margin: 0 0 16px;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.25rem;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.install-cta__content p {
  margin: 0 0 24px;
  font-size: 1rem;
  line-height: 1.7;
}

.install-cta__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.install-cta__button,
.install-cta__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.install-cta__button {
  background-color: #757472;
  color: #ffffff;
}

.install-cta__button:hover {
  background-color: #5f5d5b;
}

.install-cta__link {
  border: 2px solid #757472;
  color: #757472;
}

.install-cta__link:hover {
  background-color: #757472;
  color: #ffffff;
}

@media (max-width: 1100px) {
  .install-content {
    grid-template-columns: 1fr;
  }

  .install-advice {
    order: -1;
  }
}

@media (max-width: 900px) {
  .install-page {
    padding: clamp(48px, 8vw, 80px) clamp(16px, 6vw, 40px) clamp(40px, 6vw, 60px);
    gap: 48px;
  }

  .install-hero {
    padding: 48px 24px;
  }

  .install-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .install-cta__content {
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .install-meta {
    gap: 12px;
  }

  .install-step {
    padding: 28px;
  }

  .install-step__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .install-advice__card {
    padding: 28px;
  }

  .install-hero,
  .install-cta__content {
    border-radius: 24px;
  }
}
</style>

