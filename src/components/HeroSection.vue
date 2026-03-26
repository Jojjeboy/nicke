<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0 text-charcoal">
      <img
        src="https://picsum.photos/seed/behrmann-hero/1920/1080?grayscale&blur=2"
        alt="Hero Background"
        class="w-full h-full object-cover opacity-40 scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
      <span class="text-warm uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{{ t('hero.subtitle') }}</span>
      <h1 class="text-5xl md:text-8xl font-serif font-bold text-offwhite mb-6 leading-tight">
        {{ t('hero.title') }}
      </h1>
      <p class="text-lg md:text-xl text-offwhite/60 font-light max-w-2xl mx-auto mb-10 text-balance">
        {{ t('hero.description') }}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="#portfolio"
          class="px-8 py-4 bg-warm text-charcoal font-bold uppercase tracking-widest text-sm hover:bg-offwhite transition-all duration-300"
        >
          {{ t('hero.viewGallery') }}
        </a>
        <a
          href="#about"
          class="text-offwhite hover:text-warm transition-colors uppercase tracking-widest text-sm font-bold border-b border-warm/30 pb-1"
        >
          {{ t('hero.readBio') }}
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
      <div class="w-[1px] h-12 bg-offwhite mb-2"></div>
    </div>
  </section>
</template>
