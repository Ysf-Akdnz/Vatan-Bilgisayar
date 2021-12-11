

<template>
  <div class="opportunity opportunity--home">
    <div
      id="smallBanner"
      class="small-banner hidden-sm hidden-xs"
      style="background-color: #232424"
    >
      <div class="global-container">
        <a href="/intel-evo-laptop/">
          <img
            src="https://cdn.vatanbilgisayar.com/Upload/BANNER//intelBanner/vatan-banner-evo.png"
            alt="small banner"
            class="img-responsive small-banner__image lazy-init"
          />
        </a>
        <div id="smallBannerHide" class="small-banner__button">
          <span class="small-banner__text">Gizle</span>
          <span class><i class="fas fa-times"></i></span>
        </div>
      </div>
    </div>
    <div class="global-container homePageSkin">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="global-component-header clearfix">
            <h3 class="global-component-header__title mb-center-title">
              Günün Fırsatları
            </h3>
          </div>
        </div>
      </div>

      <div class="opportunity-content clearfix">
        <div class="row">
          <div v-for="product in getproducts()" :key="product.code" class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div class="product-list">
              <div class="product-list__image-safe">
                <nuxt-link
                  :to="{ name:'productCode', params:{productCode: product.code}}"
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
              </div>

              <div class="product-list__content__home">
                <a
                  href="/iphone-11-akilli-telefon.html"
                  class="product-list__link"
                >
                  <div class="product-list__product-code">{{product.code}}</div>
                  <div class="product-list__product-name">
                    {{product.name}}
                  </div>
                </a>
                <div class="product-list__cost">
                  <span class="product-list__price">{{product.cost}}</span>
                  <span class="product-list__decimals">,90</span>
                  <span class="product-list__currency"> {{product.currency}}</span>
                  <span class="product-list__current-price"></span>
                  <div
                    class="wrapper-condition wrapper-condition--product-list">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a href="/vitrin-urunler" class="btn-default btn-global mb-mrtop-0">
          <span>TÜM FIRSAT ÜRÜNLERİ</span>
          <span><i class="fas fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
      data() {
        return {
          
        }
      },
         
  computed: {
    ...mapGetters({
      get_products : "get_products"
    })
  },
  methods: {
    getproducts(){
      
      return this.get_products().slice(0,12)
    }
  }
  
}
</script>


