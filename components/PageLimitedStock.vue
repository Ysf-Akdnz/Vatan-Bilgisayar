<template>
  <div class="wrapper-product wrapper-product--dark wrapper-product--limited">
    <div class="global-container">
      <div class="global-component-header clearfix">
        <h3 class="global-component-header__title">Web'e Özel Sınırlı Stok</h3>
      </div>
      <carousel
        :loop="true"
        :margin="10"
        :nav="false"
        :responsive="{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
        }"
      >
        <div v-for="item in 8" :key="item" class="item">
          <div
            class="
              product-list product-list--second product-list--second__first-item
            "
          >
            <div
              class="product-list__image-safe product-list--second__image-safe"
            >
              <a
                href="/s-link-sl-ec62-pd-20w-hizli-ev-sarj-adaptoru.html"
                title=""
                class="product-list__image-safe-link"
              >
                <picture>
                  <!--[if IE 9]><video style="display: none;"><![endif]-->
                  <source
                    srcset="
                      https://cdn.vatanbilgisayar.com/Upload/PRODUCT/s-link/thumb/126588-2_small.jpg
                    "
                    media="(min-width: 1000px)"
                    alt="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                    title="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                  />
                  <source
                    srcset="
                      https://cdn.vatanbilgisayar.com/Upload/PRODUCT/s-link/thumb/126588-2_small.jpg
                    "
                    media="(min-width: 600px)"
                    alt="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                    title="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                  />
                  <source
                    srcset="
                      https://cdn.vatanbilgisayar.com/Upload/PRODUCT/s-link/thumb/126588-2_small.jpg
                    "
                    media="(min-width: 300px)"
                    alt="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                    title="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                  />
                  <!--[if IE 9]></video><![endif]-->
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/s-link/thumb/126588-2_small.jpg"
                    class="img-responsive product-list__image"
                    alt="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                    title="S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ"
                  />
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
                  SL-EC62
                </a>
              </div>
              <div class="product-list__product-name">
                <a
                  href="/s-link-sl-ec62-pd-20w-hizli-ev-sarj-adaptoru.html"
                  class="clasic-link"
                  title=""
                >
                  S-LİNK SL-EC62 PD 20W HIZLI EV ŞARJ ADAPTÖRÜ
                </a>
              </div>
              <div class="product-list__cost">
                <span class="product-list__price">119 </span>
                <span class="product-list__currency">TL</span>
                <span class="product-list__current-price">133 TL</span>
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
export default {
  components: { carousel },
}
</script>