<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleLanguage = () => {
  locale.value = locale.value === 'sv' ? 'en' : 'sv';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navItems = [
  { name: 'nav.home', href: '#home' },
  { name: 'nav.portfolio', href: '#portfolio' },
  { name: 'nav.about', href: '#about' },
  { name: 'nav.contact', href: '#contact' },
];
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
      isScrolled ? 'bg-charcoal/80 backdrop-blur-md shadow-lg py-3 md:py-4' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home" class="text-2xl font-serif font-bold tracking-tight text-offwhite">
        Behrmann<span class="text-warm">.</span>
      </a>

      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-sm uppercase tracking-widest font-medium text-offwhite/70 hover:text-warm transition-colors"
        >
          {{ t(item.name) }}
        </a>
        
        <!-- Language Switcher -->
        <button 
          @click="toggleLanguage"
          class="text-[10px] font-bold tracking-widest uppercase px-2 py-1 border border-offwhite/20 text-offwhite/50 hover:text-warm hover:border-warm transition-all"
        >
          {{ locale === 'sv' ? 'EN' : 'SV' }}
        </button>
      </div>

      <a
        href="#contact"
        class="px-5 py-2 border border-warm/50 text-warm hover:bg-warm hover:text-charcoal transition-all duration-300 text-xs uppercase tracking-widest font-bold"
      >
        {{ t('nav.book') }}
      </a>
    </div>
  </nav>
</template>
