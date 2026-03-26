<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="contact" class="py-24 px-6 md:px-12 bg-charcoal">
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-offwhite mb-6">{{ t('contact.title') }}</h2>
      <p class="text-offwhite/60 font-light text-lg">
        {{ t('contact.description') }}
      </p>
    </div>

    <!-- Official Contact Details Card -->
    <div class="max-w-4xl mx-auto mb-20 bg-offwhite/5 border border-offwhite/10 p-8 md:p-12 animate-fade-in transition-all duration-500 hover:border-warm/30">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-offwhite/5 pb-12">
        <!-- Row 1: Name & Email -->
        <div class="space-y-8">
          <div>
            <h3 class="text-warm text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{{ t('contact.details.name') }}</h3>
            <p class="text-2xl font-serif text-offwhite">{{ t('contact.details.name') }}</p>
          </div>
          <div>
            <h4 class="text-warm text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{{ t('contact.details.email_label') }}</h4>
            <a 
              :href="`mailto:${t('contact.details.email')}`"
              class="text-xl md:text-2xl font-serif text-offwhite hover:text-warm transition-colors underline underline-offset-8 decoration-warm/30"
            >
              {{ t('contact.details.email') }}
            </a>
          </div>
        </div>

        <!-- Row 2: Phone & Address -->
        <div class="space-y-8">
          <div>
            <h4 class="text-warm text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{{ t('contact.details.phone_label') }}</h4>
            <p class="text-2xl font-serif text-offwhite">{{ t('contact.details.phone') }}</p>
          </div>
          <div>
            <h4 class="text-warm text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{{ t('contact.details.address_label') }}</h4>
            <p class="text-offwhite/70 leading-relaxed text-lg">{{ t('contact.details.address') }}</p>
          </div>
        </div>
      </div>

      <!-- Row 3: Billing Info -->
      <div class="text-center md:text-left">
        <h4 class="text-warm text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{{ t('contact.details.billing_label') }}</h4>
        <p class="text-offwhite/50 italic text-sm tracking-wide">{{ t('contact.details.billing') }}</p>
      </div>
    </div>

    <div class="max-w-2xl mx-auto">
      <!-- Contact form is currently hidden as requested -->
      <!--<form class="space-y-8" @submit.prevent>
        ...
      </form>-->
    </div>
  </section>
</template>
