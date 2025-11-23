.faq-link {
  color: #757472;
  text-decoration: none;
}
<template>
  <div class="faq-page-wrapper">
    <div class="faq-page">
      <header class="faq-hero">
        <div class="faq-hero__content">
          <p class="faq-hero__eyebrow">FAQ</p>
          <h1 class="faq-hero__title">Frequently Asked Questions</h1>
          <p class="faq-hero__subtitle">
            Find answers about our custom yard signs, ordering, installation, and more.
          </p>
        </div>
      </header>

      <main class="faq-content">
        <section class="faq-group">
          <h2 class="faq-group__title">General</h2>
          <div v-for="(item, index) in generalFaqs" :key="`general-${index}`" class="faq-item">
            <h3 class="faq-item__question">{{ item.question }}</h3>
            <p class="faq-item__answer" v-html="item.answer"></p>
          </div>
        </section>

        <section class="faq-group">
          <h2 class="faq-group__title">Ordering</h2>
          <div v-for="(item, index) in orderingFaqs" :key="`ordering-${index}`" class="faq-item">
            <h3 class="faq-item__question">{{ item.question }}</h3>
            <p class="faq-item__answer" v-html="item.answer"></p>
          </div>
        </section>

        <section class="faq-group">
          <h2 class="faq-group__title">Installation & Care</h2>
          <div v-for="(item, index) in installationFaqs" :key="`installation-${index}`" class="faq-item">
            <h3 class="faq-item__question">{{ item.question }}</h3>
            <p class="faq-item__answer" v-html="item.answer"></p>
          </div>
        </section>
      </main>

      <aside class="faq-cta">
        <div class="faq-cta__content">
          <div class="faq-cta-inner">
            <h2>Still have questions?</h2>
            <p>
              We are happy to help you plan the perfect celebration. Reach out and our team will get back to
              you soon.
            </p>
            <div class="faq-cta__actions">
              <a class="faq-cta__button" href="/contact">Contact Us</a>
              <a class="faq-cta__link" href="/installation-guide">Installation Guide</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
const installationGuideLink =
  '<a class="faq-link" href="/installation-guide">Installation Guide</a>';

const generalFaqs = [
  {
    question: 'Can I rent these signs?',
    answer:
      'No, these signs are yours to keep. They are 100% recyclable, and they make great indoor decor for bedrooms, nurseries, and playrooms. We hope you have fun with it!'
  },
  {
    question: 'How will my signs arrive?',
    answer: `Your signs will arrive in a box. You will assemble the signs according to the instructions included. Please see the ${installationGuideLink}.`
  },
  {
    question: 'Can I pick up my signs?',
    answer:
      'Yes. We work with a local printer located in Westerville, Ohio. Please indicate that you would like to arrange a pick-up and we will contact you with more information about when and how to do so.'
  },
  {
    question: 'Can I cancel my order?',
    answer:
      'You have 24 hours to cancel your order. After that it is sent to the printer and cannot be canceled. Please contact us within the first 24 hours to cancel your order.'
  },
  {
    question: 'Can I change my order?',
    answer:
      'You have 24 hours to change your order. After that it is sent to the printer and cannot be changed. Please contact us within the first 24 hours to change details of your order.'
  },
  {
    question: 'Are there discount codes available?',
    answer:
      'Yes, keep a lookout on our Facebook, Instagram, and website for discounts. If you’re interested in advertising for us, sharing us with your friends on social media, or telling your friends about us, we will send you a discount code for your next order.'
  }
];

const orderingFaqs = [
  {
    question: 'What do I do with these when I am done with them?',
    answer:
      'The signs are yours to keep, so you can celebrate for as long as you wish! This artwork makes for lovely keepsake decorations in bedrooms, nurseries, playrooms, or for themed backyard fun. Your signs are 100% recyclable, so if you’re done with them, please separate the stakes from the signs and recycle.'
  },
  {
    question: 'Can you install the signs?',
    answer:
      'For a fee, we will install local signs. Please tell us that you are interested, and we will do our best to accommodate the request.'
  },
  {
    question: 'How far in advance should I place my order?',
    answer:
      'We recommend placing orders 5 days or more in advance of your event. All local orders will be delivered within 4 days of placing your order. Depending on location this may vary slightly.'
  },
  {
    question: 'When can I expect my delivery?',
    answer:
      'After your order is placed, you should expect your delivery within 4-5 business days.'
  },
  {
    question: 'What are the signs made of?',
    answer: 'Your signs will be printed on durable corrugated plastic.'
  }
];

const installationFaqs = [
  {
    question: 'How do I set my signs up?',
    answer: `Your signs will arrive in a box. You will assemble the signs according to the instructions included. Please see the ${installationGuideLink}.`
  },
  {
    question: 'What can I do if the stakes are not going into the ground?',
    answer:
      'If the ground is dry or frozen it might be a little harder to put the stakes in the ground. Sometimes roots or rocks get in the way. First try to readjust the position of the sign. If the ground is dry, water lightly before installing the signs. If the ground is frozen, install signs during the warmest/sunniest part of the day.'
  },
  {
    question: 'What if my sign is damaged when it arrives?',
    answer: 'Please contact us and we will make every effort to fix the issue. Make sure to send pictures.'
  },
  {
    question: 'Will the signs damage my yard?',
    answer:
      'No, the signs should not damage your yard. When installing, please steer clear of any irrigation lines or invisible fences.'
  }
];
</script>

<style scoped>

.faq-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.faq-page {
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6vw, 80px);
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: clamp(48px, 8vw, 120px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 80px);
  box-sizing: border-box;
  flex: 1 0 auto;
}

.faq-hero {
  background: linear-gradient(135deg, rgba(117, 116, 114, 0.08), rgba(117, 116, 114, 0.15));
  padding: clamp(48px, 6vw, 80px);
  border-radius: 32px;
  width: 100%;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(214, 210, 203, 0.6);
  box-sizing: border-box;
}

.faq-hero__content,
.faq-content,
.faq-cta-inner {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.faq-hero__content {
  text-align: center;
  color: #757472;
  padding: 0 clamp(16px, 4vw, 48px);
}

.faq-hero__eyebrow {
  font-family: 'Relation Two', sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0 0 12px;
}

.faq-hero__title {
  font-family: 'Relation One', sans-serif;
  font-size: clamp(2.2rem, 3vw, 3rem);
  letter-spacing: 0.35rem;
  margin: 0 0 16px;
}

.faq-hero__subtitle {
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}


.faq-content {
  display: grid;
  gap: 48px;
}

.faq-group {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  padding: 40px;
  border: 1px solid rgba(117, 116, 114, 0.12);
}

.faq-group__title {
  margin: 0 0 24px;
  font-family: 'Relation One', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.25rem;
  color: #757472;
  text-transform: uppercase;
}

.faq-item + .faq-item {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(117, 116, 114, 0.12);
}

.faq-item__question {
  margin: 0 0 12px;
  font-size: 1.1rem;
  font-family: 'Relation Two', sans-serif;
  letter-spacing: 0.08rem;
  color: #757472;
}

.faq-item__answer {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
}

.faq-link {
  color: #757472;
  text-decoration: none;
}

.faq-cta {
  width: 100%;
  box-sizing: border-box;
}

.faq-cta__content {
  background-color: #f9f8f6;
  border-radius: 20px;
  padding: 48px;
  text-align: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  color: #757472;
}

.faq-cta__content > .faq-cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 48px;
}

.faq-cta__content h2 {
  margin: 0 0 16px;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.25rem;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.faq-cta__content p {
  margin: 0 0 24px;
  font-size: 1rem;
  line-height: 1.7;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
}

.faq-cta__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.faq-cta__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  background-color: #757472;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  transition: background-color 0.3s ease;
}

.faq-cta__button:hover {
  background-color: #5f5d5b;
}

.faq-cta__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  border: 2px solid #757472;
  color: #757472;
  text-decoration: none;
  font-family: 'Proxima Nova', 'proxima-nova', Arial, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.faq-cta__link:hover {
  background-color: #757472;
  color: #ffffff;
}

@media (max-width: 900px) {
  .faq-page {
    padding: clamp(48px, 8vw, 80px) clamp(16px, 6vw, 40px) clamp(40px, 6vw, 60px);
    gap: 48px;
  }

  .faq-hero {
    padding: 48px 24px;
  }

  .faq-hero__content {
    padding: 0 16px;
  }

  .faq-content {
    gap: 40px;
  }

  .faq-group {
    padding: 32px 24px;
  }

  .faq-cta__content {
    padding: 36px 24px;
  }
}

@media (max-width: 600px) {
  .faq-item__question {
    font-size: 1rem;
  }

  .faq-item__answer {
    font-size: 0.95rem;
  }

  .faq-hero,
  .faq-cta__content {
    border-radius: 24px;
  }
}
</style>

