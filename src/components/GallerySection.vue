<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const images = [
  { id: 1, src: 'https://picsum.photos/seed/n1/800/1200', alt: 'gallery.categories.wildlife', title: 'gallery.items.silent_watcher', span: 'col-span-1 row-span-2' },
  { id: 2, src: 'https://picsum.photos/seed/n2/1200/800', alt: 'gallery.categories.landscape', title: 'gallery.items.eternal_horizon', span: 'col-span-2 row-span-1' },
  { id: 3, src: 'https://picsum.photos/seed/n3/800/800', alt: 'gallery.categories.drone', title: 'gallery.items.above_mist', span: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://picsum.photos/seed/n4/1200/900', alt: 'gallery.categories.portrait', title: 'gallery.items.human_essence', span: 'col-span-2 row-span-2' },
  { id: 5, src: 'https://picsum.photos/seed/n5/800/1000', alt: 'gallery.categories.nature', title: 'gallery.items.green_whisper', span: 'col-span-1 row-span-2' },
  { id: 6, src: 'https://picsum.photos/seed/n6/1000/800', alt: 'gallery.categories.urban', title: 'gallery.items.city_pulse', span: 'col-span-2 row-span-1' },
];
</script>

<template>
  <section id="portfolio" class="py-24 px-6 md:px-12 bg-charcoal">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-offwhite mb-4">{{ t('gallery.title') }}</h2>
        <div class="w-12 h-1 bg-warm"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
        <div
          v-for="img in images"
          :key="img.id"
          :class="['group relative overflow-hidden cursor-pointer', img.span]"
        >
          <img
            :src="img.src"
            :alt="t(img.alt)"
            class="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div class="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div>
              <p class="text-warm text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{{ t(img.alt) }}</p>
              <h3 class="text-offwhite text-xl font-serif font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{{ t(img.title) }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
