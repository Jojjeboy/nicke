<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleLanguage = () => {
  locale.value = locale.value === 'sv' ? 'en' : 'sv';
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Prevent scrolling when menu is open
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
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
      'fixed top-0 left-0 right-0 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
      isMenuOpen ? 'z-[100]' : 'z-50',
      isScrolled && !isMenuOpen ? 'bg-charcoal/90 backdrop-blur-md shadow-lg py-3 md:py-4' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
      <a href="#home" @click="closeMenu" class="text-2xl font-serif font-bold tracking-tight text-offwhite">
        Behrmann<span class="text-warm">.</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-sm uppercase tracking-widest font-medium text-offwhite/70 hover:text-warm transition-colors"
        >
          {{ t(item.name) }}
        </a>
        
        <!-- Language Switcher Desktop -->
        <button 
          @click="toggleLanguage"
          class="text-[10px] font-bold tracking-widest uppercase px-2 py-1 border border-offwhite/20 text-offwhite/50 hover:text-warm hover:border-warm transition-all"
        >
          {{ locale === 'sv' ? 'EN' : 'SV' }}
        </button>
      </div>

      <!-- Mobile Controls -->
      <div class="flex md:hidden items-center space-x-6">
         <a
          href="#contact"
          @click="closeMenu"
          class="px-4 py-2 border border-warm/50 text-warm hover:bg-warm hover:text-charcoal transition-all duration-300 text-[10px] uppercase tracking-widest font-bold"
        >
          {{ t('nav.book') }}
        </a>
        
        <button 
          @click="toggleMenu"
          class="text-offwhite focus:outline-none w-8 h-8 flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span 
              :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isMenuOpen ? 'rotate-45 translate-x-1' : '']"
            ></span>
            <span 
              :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"
            ></span>
            <span 
              :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isMenuOpen ? '-rotate-45 translate-x-1' : '']"
            ></span>
          </div>
        </button>
      </div>

      <!-- CTA Desktop -->
      <a
        href="#contact"
        class="hidden md:block px-5 py-2 border border-warm/50 text-warm hover:bg-warm hover:text-charcoal transition-all duration-300 text-xs uppercase tracking-widest font-bold"
      >
        {{ t('nav.book') }}
      </a>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-20px]"
    >
      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 bg-charcoal z-[90] md:hidden flex flex-col items-center justify-center p-6"
      >
        <div class="flex flex-col items-center space-y-12 w-full">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="closeMenu"
            class="text-4xl font-serif font-bold text-offwhite hover:text-warm transition-colors"
          >
            {{ t(item.name) }}
          </a>

          <!-- Language Switcher Mobile -->
          <div class="pt-12 border-t border-offwhite/10 w-full flex flex-col items-center">
             <button 
              @click="toggleLanguage"
              class="text-sm font-bold tracking-[0.3em] uppercase px-8 py-4 border border-warm/30 text-warm hover:bg-warm hover:text-charcoal transition-all"
            >
              {{ locale === 'sv' ? 'Switch to English' : 'Byt till Svenska' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
