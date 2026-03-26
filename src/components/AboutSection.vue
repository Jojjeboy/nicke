<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="about" class="py-24 px-6 md:px-12 bg-offwhite text-charcoal">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div class="w-full lg:w-1/2 relative">
        <div class="absolute -top-4 -left-4 w-full h-full border-2 border-warm/30 z-0"></div>
        <img
          src="https://picsum.photos/seed/nichlas/800/1000?grayscale"
          alt="Nichlas Behrmann"
          class="relative z-10 w-full h-auto grayscale shadow-2xl"
        />
        <div class="absolute bottom-8 right-8 z-20 bg-warm px-8 py-4 shadow-lg hidden md:block">
          <p class="text-charcoal font-bold uppercase tracking-widest text-xs italic">{{ t('about.est') }}</p>
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <span class="text-warm-dark uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{{ t('about.subtitle') }}</span>
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-charcoal" v-html="t('about.title')">
        </h2>
        <div class="space-y-6 text-muted font-light leading-relaxed text-lg">
          <p>{{ t('about.bio1') }}</p>
          <p>{{ t('about.bio2') }}</p>
          <p>{{ t('about.bio3') }}</p>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-charcoal uppercase tracking-widest text-xs mb-4">{{ t('about.competencies.title') }}</h4>
            <ul class="space-y-2 text-sm text-muted">
              <li v-for="item in ['wildlife', 'drone', 'landscape', 'urban']" :key="item">
                {{ t(`gallery.categories.${item}`) }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-charcoal uppercase tracking-widest text-xs mb-4">{{ t('about.equipment.title') }}</h4>
            <ul class="space-y-2 text-sm text-muted">
              <li v-for="(item, index) in [0,1,2,3]" :key="index">
                {{ t(`about.equipment.list[${index}]`) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
