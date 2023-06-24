<template>
  <div>
    <Banner />
    <TrendingApps />
    <!-- <CountrySelections /> -->
    <!-- <OurBrands /> -->
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue';
// import CountrySelections from './CountrySelections.vue';
import TrendingApps from './TrendingApps.vue';
// import OurBrands from './OurBrands.vue';
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    TrendingApps,
    // CountrySelections,
    // OurBrands
  },
};
</script>

<style>
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: normal;
  src: url('@/assets/font/nunito/Nunito-VariableFont_wght.ttf')
    format('opentype');
}
</style>
