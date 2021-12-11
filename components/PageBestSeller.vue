<template>
  <div class="wrapper-product wrapper-product--light visilabs-best_seller">
    <div class="global-container">
      <div
        v-swiper:mySwiper="swiperOption"
        class="
          five-carousel
          classic-carousel
          swiper-container-initialized swiper-container-horizontal
        "
      >
        <div class="global-component-header clearfix">
          <h3 class="global-component-header__title">En Çok Satanlar</h3>
        </div>
        <div class="classic-navigation">
          <span class="js-prev1"><i class="fas fa-chevron-left"></i></span>
          <span class="js-next1"><i class="fas fa-chevron-right"></i></span>
        </div>
        <div
          class="swiper-wrapper"
          style="
            transition-duration: 0ms;
            transform: translate3d(-1360px, 0px, 0px);
          "
        >
          <div
          v-for="product in getproducts2()" :key="product.code"
            class="swiper-slide carousel-item item"
            style="width: 216.667px; margin-right: 10px"
          >
            <div class="product-list product-list--fourth">
              <div class="product-list__image-safe">
                 <nuxt-link
                  :to="{ name:'productCode2', params:{productCode2: product.code}}"
                  title=""
                  class="product-list__image-safe-link sld"
                >
                  <div class="slider-img">
                    <img
                      class="lazyimg"
                      :src="product.img_url"
                    />
                  </div>                 
                </nuxt-link>
                <a
                  href="/philips-50pus8505-50-126-cm-4k-uhd-android-tv-3-tarafli-ambilight-dahili-uydu.html"
                  class="product-list__image-safe-link"
                >
                  
                </a>
              </div>

              <div class="product-list__content">
                <div class="product-list__product-name">
                  {{product.name}}
                </div>
                <div class="product-list__cost">
                  <span class="product-list__price">{{product.cost}}</span>
                  <span class="product-list__currency">{{product.currency}}</span>
                </div>
              </div>

              <div class="product-list__comp"></div>
            </div>
          </div>
          
        </div>
        <div
          class="
            classic-pagination
            swiper-pagination-clickable swiper-pagination-bullets
          "
        ></div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import { directive } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.classic-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-next1',
          prevEl: '.js-prev1',
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<script>
import {mapGetters} from "vuex";
export default {
      data() {
        return {
          
        }
      },
         
  computed: {
    ...mapGetters({
      get_products2 : "get_products2"
    })
  },
  methods: {
    getproducts2(){
      return this.get_products2()
    }
  }
  
}
</script>