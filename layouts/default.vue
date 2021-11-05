<template>
<html lang="tr">
  <div>
    <page-header v-if="$route.name!=='Basket'"></page-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <page-footer v-if="$route.name!=='Basket'" />
  </div>
</html>
</template>

<script>
import PageFooter from '~/components/PageFooter.vue'
export default {
  components: { PageFooter },
  head: {
    script: [
      {
        src: 'https://kit.fontawesome.com/ce94c72459.js',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
      },
      {
        src: 'https://cdn.vatanbilgisayar.com/Upload/assets/swiper/swiper.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        integrity:
          'sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/owl-carousel/owl.carousel.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/owl-carousel/OwlCarousel2Thumbs.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/slide-product-images/slide-product-images.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery/jquery-3.3.1.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery-query-object/jquery.query-object.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/picturefill/picturefill.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/bootstrap/bootstrap.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/bootstrap-datetimepicker/moment.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/inputmask/jquery.inputmask.bundle.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/masonry/jquery.masonry.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/slide-product-images/slide-product-images.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/fancybox/jquery.fancybox.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery-countdown/jquery.countdown.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/intersection-observer-polyfill/intersection-observer-polyfill.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/js-cookie/jquery.cookie.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery-validate/jquery.validate.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery-validate-unobtrusive/jquery.validate.unobtrusive.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/jquery-unobtrusive-ajax/jquery.unobtrusive-ajax.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/zooms/jquery.ez-plus.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/lazyload/lazyload.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/gauage/gauge.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/selectize/selectize.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/simplebar/simplebar.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/tablesort/jquery.tablesorter.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/Upload/assets/tablesort/jquery.tablesorter.widgets.min.js"
      },
      {
        src: "https://cdn.vatanbilgisayar.com/images/canli/jquery.touchSwipe.min.js"
      },
      {
        src: "https://www.vatanbilgisayar.com//Scripts/mfs-client.min.js"
      },
      {
        src: "https://www.vatanbilgisayar.com//Scripts/mpass.js"
      },
      {
        src: "https://www.vatanbilgisayar.com//assets/dist/js/bundle.js?v=10007957020904"
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@7/swiper-bundle.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'owlcarousel/owl.carousel.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'owlcarousel/owl.theme.default.min.css',
      },
    ],
  },
}
</script>
<style>
body.tablesorter-disableSelection {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.tablesorter-resizable-container {
  position: relative;
  height: 1px;
}
.tablesorter-resizable-handle {
  position: absolute;
  display: inline-block;
  width: 8px;
  top: 1px;
  cursor: ew-resize;
  z-index: 3;
  user-select: none;
  -moz-user-select: none;
}
</style>
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


