<template>
  <div class="wrapper-product wrapper-product--dark wrapper-product--limited">
    <div class="global-container">
      <div class="global-component-header clearfix">
        <h3 class="global-component-header__title">Web'e Özel Sınırlı Stok</h3>
      </div>
      <carousel
      v-if="getproducts()"
        :loop="true"
        :margin="10"
        :nav="false"
        :responsive="{
          0: {
            items: 1
          },
          600: {
            items: 2,
          },
        }"
      >
        <div v-for="product in getproducts()" :key="product.code" class="item" >
          <div
            class="
              product-list product-list--second product-list--second__first-item
            "
          >
            <div
              class="product-list__image-safe product-list--second__image-safe"
            >
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
              <a
                href="/s-link-sl-ec62-pd-20w-hizli-ev-sarj-adaptoru.html"
                title=""
                class="product-list__image-safe-link"
              >
                <picture>
                  <!--[if IE 9]><video style="display: none;"><![endif]-->
                 
                  <!--[if IE 9]></video><![endif]-->
                  
                </picture>
              </a>
            </div>

            <div class="product-list__content product-list--second__content">
              <div
                class="
                  product-list__campaign-bar
                  product-list--second__campaign-bar
                  flash-animated
                "
              >
                <span>Web'e Özel</span>
                <span>
                  <span>Bu Fiyata <span>Son 9 Ürün</span></span>
                </span>
              </div>
              <div class="product-list__product-code">
                <a
                  href="/s-link-sl-ec62-pd-20w-hizli-ev-sarj-adaptoru.html"
                  class="clasic-link"
                  title=""
                >
                  {{product.code}}
                </a>
              </div>
              <div class="product-list__product-name">
                <a
                  href="/s-link-sl-ec62-pd-20w-hizli-ev-sarj-adaptoru.html"
                  class="clasic-link"
                  title=""
                >
                  {{product.name}}
                </a>
              </div>
              <div class="product-list__cost">
                <span class="product-list__price">{{product.cost}} </span>
                <span class="product-list__currency">{{product.currency}}</span>
                
              </div>
              <div class="wrapper-condition">
                <div class="in-wrapper-condition">
                  <span class="icon-truck-alt wrapper-condition__icon"></span
                  ><span class="wrapper-condition__text">KARGO BEDAVA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </carousel>
      <div class="text-center">
        <a
          href="/webeozel-urunler"
          class="btn btn-default btn-transparent btn-global mb-mrtop-0"
        >
          <span>TÜMÜNÜ GÖR</span>
          <span><i class="fas fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'
import {mapGetters} from "vuex";

export default {
  components: { carousel},
  computed: {
    ...mapGetters({
      get_products : "get_products"
    })
  },
  methods: {
    getproducts(){
      return this.get_products().slice(13,19)
    }
  }
}
</script>