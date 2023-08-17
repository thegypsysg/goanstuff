<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <Banner :app-details="appDetails1" />
      <TrendingApps :trending-card="categoryCard" :trending-btn="trendingBtn" />
      <!-- <CountrySelections /> -->
      <!-- <OurBrands /> -->
    </div>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue';
// import CountrySelections from './CountrySelections.vue';
import TrendingApps from './TrendingApps.vue';
// import OurBrands from './OurBrands.vue';
</script>

<script>
import axios from '@/util/axios';
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      isLoading: false,
      appDetails1: null,
      categoryCard: [],
      trendingBtn: [],
    };
  },

  mounted() {
    this.getAppDetails1();
    this.getAppDetails2();
  },
  methods: {
    getAppDetails1() {
      this.isLoading = true;
      axios
        .get(`/app/details/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          this.appDetails1 = data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    getAppDetails2() {
      // this.isLoading = true;
      axios
        .get(`/categories/active-website/app/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);

          this.categoryCard = data.map((item) => {
            return {
              id: item.category_id || '',
              img: this.$fileURL + item.image || '',
              desc: item.description || '',
              title: item.category_name || '',
              path: item.slug || '',
            };
          });
          this.trendingBtn = data.map((item) => {
            return {
              title: item.category_name || '',
              tag: item.category_name || '',
            };
          });
          // this.appDetails = data.map((item) => {
          //   return {
          //     ...item,
          //     categoryId: item.category_id || 0,
          //     categoryName: item.category_name || '',
          //     description: item.description || '',
          //     image: item.image || '',
          //     slug: item.slug || '',
          //   };
          // })[0];
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
  },
  // components: {
  //   TrendingApps,
  //   // CountrySelections,
  //   // OurBrands
  // },
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

.loading-page {
  height: 100vh;
  margin-top: 300px;
}

@media (max-width: 599px) {
  .loading-page {
    margin-top: 450px;
  }
}
</style>
