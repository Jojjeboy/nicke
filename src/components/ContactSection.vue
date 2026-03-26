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

    <div class="max-w-2xl mx-auto">
      <form class="space-y-8" @submit.prevent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="text-warm uppercase tracking-widest text-[10px] font-bold" for="name">{{ t('contact.form.name') }}</label>
            <input
              id="name"
              type="text"
              class="w-full bg-transparent border-b border-offwhite/20 py-4 text-offwhite placeholder:text-offwhite/10 focus:border-warm transition-colors outline-none"
              :placeholder="t('contact.form.namePlaceholder')"
            />
          </div>
          <div class="space-y-2">
            <label class="text-warm uppercase tracking-widest text-[10px] font-bold" for="email">{{ t('contact.form.email') }}</label>
            <input
              id="email"
              type="email"
              class="w-full bg-transparent border-b border-offwhite/20 py-4 text-offwhite placeholder:text-offwhite/10 focus:border-warm transition-colors outline-none"
              :placeholder="t('contact.form.emailPlaceholder')"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-warm uppercase tracking-widest text-[10px] font-bold" for="message">{{ t('contact.form.message') }}</label>
          <textarea
            id="message"
            rows="4"
            class="w-full bg-transparent border-b border-offwhite/20 py-4 text-offwhite placeholder:text-offwhite/10 focus:border-warm transition-colors outline-none resize-none"
            :placeholder="t('contact.form.messagePlaceholder')"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-5 bg-warm text-charcoal font-bold uppercase tracking-[0.2em] text-xs hover:bg-offwhite transition-all duration-300 transform active:scale-95 shadow-xl"
        >
          {{ t('contact.form.submit') }}
        </button>
      </form>

      <div class="mt-16 pt-12 border-t border-offwhite/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 class="text-warm text-[10px] font-bold uppercase tracking-widest mb-2">{{ t('contact.info.location') }}</h4>
          <p class="text-offwhite/70 text-sm">Stockholm, Sweden</p>
        </div>
        <div>
          <h4 class="text-warm text-[10px] font-bold uppercase tracking-widest mb-2">{{ t('contact.info.email') }}</h4>
          <p class="text-offwhite/70 text-sm underline underline-offset-4">nichlas@photobybehrmann.se</p>
        </div>
        <div>
          <h4 class="text-warm text-[10px] font-bold uppercase tracking-widest mb-2">{{ t('contact.info.social') }}</h4>
          <div class="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" class="text-offwhite/50 hover:text-warm transition-colors text-sm">Instagram</a>
            <a href="#" class="text-offwhite/50 hover:text-warm transition-colors text-sm">Behance</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
