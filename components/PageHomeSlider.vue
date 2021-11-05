<template>
  <div class="homepage-slider">
    <div class="global-container">
      <div id="homeStoryWrapper" class="home-story-wrapper"></div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div
            v-swiper:mySwiper="swiperOption"
            class="
              homepage-banner
              swiper-container
              swiper-container-initialized
              swiper-container-horizontal
            "
          >
            <div
              class="swiper-wrapper"
              style="
                transition-duration: 300ms;
                transform: translate3d(-8106px, 0px, 0px);
              "
            >
              <div
                v-for="item in sliderData"
                :key="item"
                :data-img="item.src"
                data-swiper-slide-index="4"
                class="swiper-slide swiper-slide-active"
                style="width: 1336px"
              >
                <a href="/canon/yazici/"
                  ><img
                    :src="item.src"
                    class="
                      swiper-lazy
                      img-responsive
                      hidden-xs
                      lazy-init
                      swiper-lazy-loaded
                    " />
                  <img
                    :src="item.src"
                    class="
                      swiper-lazy
                      img-responsive
                      hidden-md hidden-sm hidden-lg
                      swiper-lazy-loaded
                    "
                /></a>
              </div>
            </div>

            <div
              class="
                homepage-banner-pagination
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
    </div>
    <div class="wrap-slide-progress">
      <div class="slide-progress"></div>
    </div>
  </div>
</template>
<script>
import { /* Swiper, SwiperSlide, */ directive } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
import $ from 'jquery'
import appData from '@/store/appData'
export default {
  components: {
    /* Swiper,
    SwiperSlide */
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        // sliderData: appData.HomePageSliderSource,
        effect: 'cube',
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.homepage-banner-pagination',
          clickable: true,
          renderBullet(index, className) {
            return (
              '<div class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"><img class="lazyimg" src="' +
              appData.HomePageSliderSource[index].bulletSrc +
              '"></div>'
            )
          },
        },
      },
    }
  },
  computed: {
    sliderData() {
      return appData.HomePageSliderSource
    },
  },

  mounted() {
    this.mySwiper.slideTo(3, 1000, false)
    $('.swiper-pagination-bullet').hover(function () {
      $(this).trigger('click')
    })
  },
}
</script>
<style type="text/css">
@media screen and (min-width: 769px) {
  .homepage-banner-pagination .swiper-pagination-bullet {
    width: 4%;
    padding: 10px 1px;
  }
}
</style>
<style type="text/css">
.buyback-content {
  color: #cc0a00;
}

@media (max-width: 768px) {
  .category-carousel .swiper-button-next,
  .category-carousel .swiper-button-prev {
    display: none !important;
  }
}
</style>