<template>
  <v-container class="mt-6 footer_lks">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">About {{ footerData?.company_name }}</h2>
        <p
          class="footer_paragraph"
          style="margin-bottom: 16px; margin-top: 34px"
        >
          {{ footerData?.company_name + ' is a ' + appDetails1?.app_detail }}
        </p>
        <ul class="footer_social">
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 mdi mdi-map-marker"
              aria-hidden="true"
            ></v-icon>
            {{ footerData?.location }}
          </li>
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 fa fa-phone"
              aria-hidden="true"
            ></v-icon>
            {{ footerData?.mobile_number }}
          </li>
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 fab fa-whatsapp"
            ></v-icon>
            {{ footerData?.whats_app }}
          </li>
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 fa fa-envelope"
              aria-hidden="true"
            ></v-icon>
            <a :href="`mailto:${footerData?.email_id}`">{{
              footerData?.email_id
            }}</a>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title" style="margin-bottom: 16px">Quick links</h2>
        <ul class="footer_links" style="margin-top: 37px">
          <li>
            <v-icon size="15" class="mr-2 fa fa-angle-double-right"></v-icon>
            Job Categories
          </li>
          <li>
            <v-icon size="15" class="mr-2 fa fa-angle-double-right"></v-icon>
            Sign Up/Register
          </li>
          <li>
            <v-icon size="15" class="mr-2 fa fa-angle-double-right"></v-icon>
            Agencies
          </li>
          <li>
            <v-icon size="15" class="mr-2 fa fa-angle-double-right"></v-icon>
            Employers
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Our Booze</h2>
        <v-row
          class="footer_apps"
          style="margin-top: 37px; padding-right: 20px"
        >
          <v-col
            v-for="item in categoryCard.splice(0, 6)"
            :key="item.id"
            cols="4"
          >
            <p style="margin-bottom: 10px">
              {{
                item.title.length >= 8
                  ? item.title.substring(0, 8) + '..'
                  : item.title
              }}
            </p>
            <div class="our-apps">
              <v-img
                class="our-apps-img"
                cover
                transition="fade-transition"
                :src="item.img"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <a
              @click="goToTrending"
              style="
                color: #fa2964;
                font-size: 14px;
                font-weight: 600;
                line-height: 19px;
                text-decoration: none;
              "
            >
              View all</a
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Boozards</h2>
        <p
          class="footer_paragraph"
          style="margin-bottom: 16px; margin-top: 34px"
        >
          Sign Up and be part of our community of Healthcare Jobs around the
          world. Please type your email and press get started.
        </p>
        <input class="footer_input" placeholder="Type your email" />
        <v-btn
          style="
            width: inherit;
            border-radius: 0 !important;
            margin-top: 16px;
            background: #fa2964;
            color: white;
          "
        >
          Get started
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-footer
    class="bg-black text-center footer__content"
    :class="{ 'mb-16 pb-4': isSmall }"
  >
    <v-spacer></v-spacer>

    <div class="footer_text">
      {{ footerData.copyright }}
    </div>
    <div style="display: flex; justify-content: center">
      <v-btn
        :href="footerData.facebook"
        variant="text"
        color="#FA2964"
        icon="mdi-facebook"
      />
      <v-btn
        :href="footerData.twitter"
        variant="text"
        color="#FA2964"
        icon="mdi-twitter"
      />
      <v-btn
        :href="footerData.instagram"
        variant="text"
        color="#FA2964"
        icon="mdi-instagram"
      />
      <v-btn
        :href="footerData.youtube"
        variant="text"
        color="#FA2964"
        icon="mdi-youtube"
      />
    </div>
  </v-footer>
  <a
    onclick='window.scrollTo({top: 0, behavior: "smooth"});'
    class="go-up"
    style="display: inline"
  >
    <i class="fa fa-angle-double-up" aria-hidden="true"></i>
  </a>
  <div
    v-if="isSmall"
    class="cart-mobile d-flex align-center justify-space-between px-2"
  >
    <div class="cart-title py-4">
      <v-icon class="cart-title-icon" size="40" color="black">
        mdi mdi-cart-variant
      </v-icon>
      <div class="cart-title-count d-flex justify-center align-center">
        <span>0</span>
      </div>
      <span class="ml-4">My Cart</span>
    </div>
    <div class="cart-count d-flex align-center justify-center">
      <span>S$0</span>
    </div>
  </div>
</template>

<script>
import axios from '@/util/axios';
import app from '@/util/eventBus';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',

  data() {
    return {
      screenWidth: window.innerWidth,
      categoryCard: [],
      appDetails1: {
        app_detail: '',
      },
      appDetails2: null,
      footerData: {
        company_name: '',
        location: '',
        mobile_number: '',
        whats_app: '',
        email_id: '',
        copyright: '',
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
      },
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
  mounted() {
    this.getAppContact();
    this.getAppDetails1();
    this.getAppDetails2();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    goToTrending() {
      app.config.globalProperties.$eventBus.$emit('scrollToCardSection');
    },
    getAppDetails1() {
      // this.isLoading = true;
      axios
        .get(`/app/details/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          this.appDetails1.app_detail = data.app_detail || '';
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
    getAppDetails2() {
      // this.isLoading = true;
      axios
        .get(`/categories/active-website/app/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);
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
          this.categoryCard = data.map((item) => {
            return {
              id: item.category_id || 0,
              img: this.$fileURL + item.image || '',
              title: item.category_name || '',
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
    getAppContact() {
      // this.isLoading = true;
      axios
        .get(`/app/contact/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          this.footerData = {
            company_name: data.company_name || '',
            location: data.location || '',
            mobile_number: data.mobile_number || '',
            whats_app: data.whats_app || '',
            email_id: data.email_id || '',
            copyright: data.copyright || '',
            facebook: data.facebook || '',
            twitter: data.twitter || '',
            instagram: data.instagram || '',
            youtube: data.youtube || '',
          };
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.our-apps {
  position: relative;
  overflow: hidden;
  min-height: 10px;
  height: 50px;
}
.our-apps-img {
  transition: all 0.3s;
  transform: scale(1);
  width: 100% !important;
  height: 100% !important;
}

.our-apps:hover .our-apps-img {
  transform: scale(1.2);
  cursor: pointer;
}

.cart-title {
  color: black;
}
.cart-title-icon {
  position: relative;
}
.cart-title-count {
  position: absolute;
  top: 7px;
  left: 35px;
  height: 20px;
  border-radius: 50%;
  width: 20px;
  background: #ffa42e;
}
.cart-count {
  border-left: 2px solid #bfbfbf !important;
  min-height: 70px;
  color: black;
  padding-left: 10px;
  padding-right: 20px;
}
.skeleton {
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
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
