<template>
  <v-container>
    <div
      id="trending-section"
      class="jumbotron-text"
      :class="{ 'mb-n4 mt-n10': isSmall }"
    >
      <h1
        align="center"
        class="header-title mb-n10"
        style="font-size: 56px; font-style: normal; font-weight: 700"
      >
        COUNTRY SELECTIONS
      </h1>
      <div class="line-divider mt-10 mx-auto" />
      <!-- <p class="header-title-sub" style="margin-top: 32px">
        The gypsy Trending Web Apps
      </p> -->
    </div>
  </v-container>

  <v-container id="trending" class="wrapper-box">
    <template v-if="isSmall">
      <v-row>
        <transition-group name="card-transition" mode="out-in">
          <v-col cols="12" class="card">
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
                <div class="title-card mx-auto">
                  <h1>Indian Booze</h1>
                </div>
                <v-card
                  style="
                    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
                    border-radius: 10px;
                  "
                  elevation="0"
                >
                  <div class="img-cont">
                    <div class="cart clearfix animate-effect">
                      <div class="action">
                        <div class="card-desc-cont-mobile text-center">
                          <h2 class="mb-2" style="font-size: 30px !important">
                            Indian Booze
                          </h2>
                          <v-btn
                            elevation="4"
                            style="background-color: #ffa42e; border-radius: 0"
                            class="pa-8 mx-auto d-flex align-center justify-center"
                          >
                            <span style="font-size: 16px" class="text-black"
                              >VIEW PRICES</span
                            >
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-2-mobile"></div>
                    <v-img
                      :src="require('@/assets/image/indian-booze.jpg')"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item-2 img-item-2-mobile"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                  <div class="desktop__app">
                    <div class="desktop-card-desc-2-mobile">
                      <p
                        class="text_subtitle text-left"
                        style="
                          font-size: 25px !important;
                          line-height: 30px !important;
                        "
                      >
                        Old Monk Rum , Signature Whisky , Imperial Blue and More
                        ...
                      </p>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </transition-group>
      </v-row>
      <v-row class="trending__app__wrapper">
        <transition-group name="card-transition" mode="out-in">
          <v-col
            v-for="(card, i) in trendingCard"
            :key="i"
            cols="6"
            class="card"
          >
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
                <div class="title-card title-card-mobile mx-auto">
                  <h1>{{ card.title }}</h1>
                </div>
                <v-card
                  style="
                    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
                    border-radius: 10px;
                  "
                  elevation="0"
                >
                  <div class="img-cont">
                    <div class="cart cart-2 clearfix animate-effect">
                      <div class="action">
                        <div class="card-desc-cont-mobile text-center">
                          <h2 class="mb-2">{{ card.title }}</h2>
                          <v-btn
                            elevation="4"
                            style="
                              background-color: #ffa42e;
                              border-radius: 0;
                              padding-left: 6px;
                              padding-right: 6px;
                              padding-top: 4px;
                              padding-bottom: 4px;
                              font-weight: 600;
                              font-size: 12px;
                            "
                          >
                            <span class="text-black" style="">VIEW PRICES</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-mobile"></div>
                    <v-img
                      :src="card.img"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item img-item-mobile"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                  <div class="desktop__app">
                    <div class="desktop-card-desc-mobile">
                      <p class="text_subtitle text-left">
                        {{ card.desc }}
                      </p>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </transition-group>
      </v-row>
    </template>
    <template v-if="!isSmall">
      <v-row>
        <transition-group name="card-transition" mode="out-in">
          <v-col cols="6" class="card">
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
                <div class="title-card mx-auto">
                  <h1>Indian Booze</h1>
                </div>
                <v-card
                  style="
                    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
                    border-radius: 10px;
                  "
                  elevation="0"
                >
                  <div class="img-cont">
                    <div class="cart clearfix animate-effect">
                      <div class="action">
                        <div class="card-desc-cont text-center">
                          <h2>Indian Booze</h2>
                          <v-btn
                            elevation="4"
                            style="
                              background-color: #ffa42e;
                              border-radius: 0;
                              padding-left: 16px;
                              padding-right: 16px;
                              padding-top: 10px;
                              padding-bottom: 10px;
                            "
                          >
                            <span class="text-black" style="">VIEW PRICES</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-2"></div>
                    <v-img
                      :src="require('@/assets/image/indian-booze.jpg')"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item-2"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                  <div class="desktop__app">
                    <div class="desktop-card-desc-2">
                      <p
                        class="text_subtitle text-left"
                        style="
                          font-size: 30px !important;
                          line-height: 35px !important;
                        "
                      >
                        Old Monk Rum , Signature Whisky , Imperial Blue and More
                        ...
                      </p>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </transition-group>
        <v-col cols="6">
          <v-row class="trending__app__wrapper">
            <transition-group name="card-transition" mode="out-in">
              <v-col
                v-for="(card, i) in trendingCard"
                :key="i"
                cols="6"
                class="card"
              >
                <v-lazy :options="{ threshold: 0.5 }" min-height="200">
                  <div class="trending__app d-flex justify-center">
                    <div class="title-card mx-auto">
                      <h1>{{ card.title }}</h1>
                    </div>
                    <v-card
                      style="
                        box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
                        border-radius: 10px;
                      "
                      elevation="0"
                    >
                      <div class="img-cont">
                        <div class="cart clearfix animate-effect">
                          <div class="action">
                            <div class="card-desc-cont text-center">
                              <h2>{{ card.title }}</h2>
                              <v-btn
                                elevation="4"
                                style="
                                  background-color: #ffa42e;
                                  border-radius: 0;
                                  padding-left: 16px;
                                  padding-right: 16px;
                                  padding-top: 10px;
                                  padding-bottom: 10px;
                                "
                              >
                                <span class="text-black" style=""
                                  >VIEW PRICES</span
                                >
                              </v-btn>
                            </div>
                          </div>
                        </div>
                        <div class="overlay"></div>
                        <v-img
                          :src="card.img"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          cover
                          class="img-item"
                        >
                          <template #placeholder>
                            <div class="skeleton" />
                          </template>
                        </v-img>
                      </div>
                      <div class="desktop__app">
                        <div class="desktop-card-desc">
                          <p class="text_subtitle text-left">
                            {{ card.desc }}
                          </p>
                        </div>
                      </div>
                    </v-card>
                  </div>
                </v-lazy>
              </v-col>
            </transition-group>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <div
      class="card-footer d-flex justify-center align-center"
      :class="{ 'mt-16 mb-10': !isSmall, 'mt-8 mb-6': isSmall }"
      style="gap: 10px"
    >
      <!-- <div class="line-divider" /> -->
      <v-btn
        class="btn-section btn-primary v-btn v-btn--has-bg theme--light elevation-0 text-white d-flex align-center py-8 px-16"
        :class="{ 'btn-section-2': isSmall }"
      >
        <span>VIEW ALL COUNTRY SELECTIONS</span>
      </v-btn>
      <!-- <div class="line-divider" /> -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'CountrySelections',
  data() {
    return {
      selectedTag: null,
      // activeTagHeader: null,
      // trendingBtn: [
      //   {
      //     title: "View All",
      //   },
      //   { title: "Promo App", tag: "Promo App" },
      //   { title: "Alcohol App", tag: "Alcohol App" },
      //   { title: "Jobs App", tag: "Job App" },
      //   { title: "On The Run Apps", tag: "On the Run App" },
      //   { title: "Housing App", tag: "Housing App" },
      //   { title: "Travel App", tag: "Travel App" },
      //   { title: "Staycation App", tag: "Staycation App" },
      //   { title: "Listings App", tag: "Listing App" },
      //   { title: "Tournaments App", tag: "Tournament App" },
      //   { title: "Cafe App", tag: "Cafe App" },
      //   { title: "Overseas Study App", tag: "Overseas Study App" },
      // ],
      trendingCard: [
        {
          img: require('@/assets/image/img-Japanese.jpg'),
          title: 'Japanese Booze',
          desc: 'Roku Gin , The Yamazaki , Hibiki and More....',
        },
        {
          img: require('@/assets/image/img-American.jpg'),
          title: 'American Booze',
          desc: 'Jack Daniels , Makers Mark and More ...',
        },
        {
          img: require('@/assets/image/img-Scottish.jpg'),
          title: 'Scottish Booze',
          desc: 'Chivas Regal , Johnnie Walker , Glenfiddich and More ...',
        },
        {
          img: require('@/assets/image/img-Irish.jpg'),
          title: 'Irish Booze',
          desc: 'Guinness Stout , Jameson Irish Whisky and More ...',
        },
      ],
      // filteredCards: [],
      selectedType: 0,
      activeIndex: 1,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isSmall() {
      return this.screenWidth < 640;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.line-divider {
  height: 2px;
  width: 150px;
  background: #ffa42e;
}

.title-card {
  position: absolute;
  top: -20px;
  font-size: 12px;
  width: 80%;
  color: white;
  background-color: #ffa42e;
  padding: 15px auto;
  z-index: 100;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 30px;
}

.title-card-mobile {
  width: 90%;
  font-size: 10px !important;
}

.card-desc-cont h2 {
  color: white;
}
.card-desc-cont p {
  color: white;
  margin-bottom: 10px;
}

.card-desc-cont-mobile h2 {
  font-size: 16px;
  color: white;
}
.card-desc-cont-mobile p {
  font-size: 12px;
  color: white;
  margin-bottom: 10px;
}
.my-slide {
  position: relative !important;
}
.view-all {
  background: #0596d5;
  color: white;
  height: 50px !important;
  z-index: 100 !important;
  /* Gaya view all yang sticky */
}
.card-transition-enter-active,
.card-transition-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}

.card-transition-enter {
  opacity: 0;
  transform: translateX(-50%);
}

.card-transition-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.img-item {
  transition: all 0.3s;
  width: 100%;
  height: 300px;
  transform: scale(1);
}
.img-item-2 {
  height: 694px;
}
.img-item-mobile {
  height: 200px;
}
.img-item-2-mobile {
  height: 494px;
}

.trending__app {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 81%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}

.overlay-2 {
  height: 87%;
}
.overlay-mobile {
  height: 68%;
}
.overlay-2-mobile {
  height: 77%;
}

.trending__app:hover .overlay {
  opacity: 1;
}
.trending__app:hover .title-card {
  display: none;
}

.skeleton {
  width: 100%;
  height: 100%;
  border-radius: 0;

  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
}

.desktop-card-desc {
  height: 70px !important;
}
.desktop-card-desc-2- {
  height: 100px !important;
}
.desktop-card-desc-mobile {
  height: 95px !important;
}
.desktop-card-desc-2-mobile {
  height: 145px !important;
}

.btn-section {
  background-color: #ffa42e;
  border-color: #ffa42e;
  font-weight: 400;
  font-size: 20px;
  border-radius: 50px;
}
.btn-section-2 {
  font-size: 14px;
}

@keyframes skeleton {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
