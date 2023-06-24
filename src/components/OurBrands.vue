<template>
  <v-container v-if="isSmall">
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
        OUR BRANDS
      </h1>
      <div class="line-divider mt-12 mx-auto" />
      <!-- <p class="header-title-sub" style="margin-top: 32px">
        The gypsy Trending Web Apps
      </p> -->
    </div>
  </v-container>

  <v-container id="trending" class="wrapper-box">
    <div class="job-categories d-flex align-center mb-8" v-if="!isSmall">
      <div class="job-categories-title">
        <h1>Our Brands</h1>
        <div class="line-divider my-3" />
        <p>Discover all the leading brands from all over.</p>
      </div>

      <v-lazy :options="{ threshold: 0.5 }" min-height="200">
        <div class="trending__app d-flex justify-center">
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
                    <h2>Macallan</h2>
                    <p>12 Year Old , 15 Year Old</p>
                    <v-btn
                      elevation="4"
                      style="
                        background-color: #ffa42e;
                        border-radius: 0;
                        padding-left: 16px;
                        padding-right: 16px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        font-weight: 600;
                      "
                    >
                      <span class="text-black" style="">VIEW PRICES</span>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="overlay overlay-2"></div>
              <v-img
                :src="require('@/assets/image/macallan.jpg')"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
                class="img-item"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </v-card>
        </div>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" min-height="200">
        <div class="trending__app d-flex justify-center">
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
                    <h2>Hendricks</h2>
                    <p>Hendrick's Gin</p>
                    <p>750 ml, 1000 ml</p>
                    <v-btn
                      elevation="4"
                      style="
                        background-color: #ffa42e;
                        border-radius: 0;
                        padding-left: 16px;
                        padding-right: 16px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        font-weight: 600;
                      "
                    >
                      <span class="text-black" style="">VIEW PRICES</span>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="overlay overlay-2"></div>
              <v-img
                :src="require('@/assets/image/brand3.png')"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
                class="img-item"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </v-card>
        </div>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" min-height="200">
        <div class="trending__app d-flex justify-center">
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
                    <h2>Jack Daniel's</h2>
                    <p>No.7 , Gentlemans Jack, Tennesse Fire</p>
                    <v-btn
                      elevation="4"
                      style="
                        background-color: #ffa42e;
                        border-radius: 0;
                        padding-left: 16px;
                        padding-right: 16px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        font-weight: 600;
                      "
                    >
                      <span class="text-black" style="">VIEW PRICES</span>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="overlay overlay-2"></div>
              <v-img
                :src="require('@/assets/image/jack.jpg')"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
                class="img-item"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </v-card>
        </div>
      </v-lazy>
    </div>
    <template v-if="isSmall">
      <transition-group name="card-transition" mode="out-in">
        <v-row>
          <v-col cols="12" class="card">
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
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
                          <h2>Macallan</h2>
                          <p>12 Year Old , 15 Year Old</p>
                          <v-btn
                            elevation="4"
                            style="
                              background-color: #ffa42e;
                              border-radius: 0;
                              padding-left: 16px;
                              padding-right: 16px;
                              padding-top: 10px;
                              padding-bottom: 10px;
                              font-weight: 600;
                            "
                          >
                            <span class="text-black" style="">VIEW PRICES</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-2"></div>
                    <v-img
                      :src="require('@/assets/image/macallan.jpg')"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="card">
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
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
                          <h2>Hendricks</h2>
                          <p>Hendrick's Gin</p>
                          <p>750 ml, 1000 ml</p>
                          <v-btn
                            elevation="4"
                            style="
                              background-color: #ffa42e;
                              border-radius: 0;
                              padding-left: 16px;
                              padding-right: 16px;
                              padding-top: 10px;
                              padding-bottom: 10px;
                              font-weight: 600;
                            "
                          >
                            <span class="text-black" style="">VIEW PRICES</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-2"></div>
                    <v-img
                      :src="require('@/assets/image/brand3.png')"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="card">
            <v-lazy :options="{ threshold: 0.5 }" min-height="200">
              <div class="trending__app d-flex justify-center">
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
                          <h2>Jack Daniel's</h2>
                          <p>No.7 , Gentlemans Jack, Tennesse Fire</p>
                          <v-btn
                            elevation="4"
                            style="
                              background-color: #ffa42e;
                              border-radius: 0;
                              padding-left: 16px;
                              padding-right: 16px;
                              padding-top: 10px;
                              padding-bottom: 10px;
                              font-weight: 600;
                            "
                          >
                            <span class="text-black" style="">VIEW PRICES</span>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="overlay overlay-2"></div>
                    <v-img
                      :src="require('@/assets/image/jack.jpg')"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      cover
                      class="img-item"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                </v-card>
              </div>
            </v-lazy>
          </v-col>
        </v-row>
      </transition-group>
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
        <span>VIEW ALL OUR BRANDS</span>
      </v-btn>
      <!-- <div class="line-divider" /> -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'OurBrands',
  data() {
    return {
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
  height: 4px;
  width: 200px;
  border-radius: 100%;
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
  height: 400px;
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
  height: 100%;
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

.job-categories {
  gap: 20px;
}
.job-categories-title {
  max-width: 300px;
}

@media screen and (max-width: 1170px) {
  .job-categories-title {
    max-width: 200px;
  }
}

.job-categories-title h1 {
  font-weight: 500;
  width: 250px;
}

.job-categories-item {
  position: relative;
  overflow: hidden;
  border-radius: 5px !important;
}
.job-categories-item-img {
  transition: all 0.3s;
  transform: scale(1);
  object-fit: cover !important;
  object-position: center !important;
  width: 100% !important;
  height: auto !important;
}

.job-categories-item:hover .job-categories-item-img {
  transform: scale(1.2);
}

.job-categories-info {
  position: absolute;
  bottom: 20px;
  color: white;
  z-index: 100;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  width: 100%;
}

.job-categories-item:hover .job-categories-info {
  font-weight: 500;
}

.job-categories-info-2 {
  text-align: left;
}

.job-categories-info-2 p {
  font-size: 14px;
  margin-bottom: 5px;
}
.job-categories-info-2 div {
  font-size: 12px;
  line-height: -20px !important;
}

.job-categories-link {
  background: rgba(0, 0, 0, 0.429);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: -100px;
}
.job-categories-link-2 {
  height: 100px;
}

.job-categories-item:hover .job-categories-link {
  bottom: 0;
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
