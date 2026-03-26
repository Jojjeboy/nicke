<script setup>
import { useI18n } from 'vue-i18n';
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'

const { t } = useI18n();
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </main>
    
    <footer class="bg-charcoal py-12 px-6 border-t border-offwhite/5 text-center">
      <div class="max-w-7xl mx-auto">
        <p class="text-offwhite/30 text-[10px] uppercase tracking-[0.4em] font-medium">
          &copy; {{ new Date().getFullYear() }} {{ t('footer.rights') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Custom animations if needed */
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
