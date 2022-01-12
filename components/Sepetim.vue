<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      getCartProducts: 'getCartProducts',
    }),
  },
  methods: {
    ...mapActions({
      removeFromCart: 'removeFromCart',
      changeCountCart: 'changeCountCart',
      deleteBasket: 'deleteBasket',
    }),
    gettotal() {
      let total = 0
      this.getCartProducts().forEach((element) => {
        total += element.product.cost * element.count
      })
      return total
    },
    fnc(x) {
      return Number.parseFloat(x).toFixed(2)
    },
  },
}
</script>
<template>
  <html lang="tr">
    <head>
      <meta charset="UTF-8" />
      <meta name="theme-color" content="#003177" />
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <meta name="content-language" content="tr-TR" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Vatan Bilgisayar" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
      <title>VATAN BİLGİSAYAR - Teknoloji &amp; Bilgisayar Hiperstore'u</title>
      <meta
        name="Description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta name="Keywords" content="" />
      <meta
        name="twitter:description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="og:description"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="twitter:title"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta
        property="og:title"
        content="Masaüstü bilgisayar, dizüstü bilgisayar, cep telefonu, televizyon, tablet, fotoğraf makinesi ve binlerce teknoloji ürünü Vatan Bilgisayar' da."
      />
      <meta property="og:keywords" content="" />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://www.vatanbilgisayar.com/images/frontend/favicon.ico"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://www.vatanbilgisayar.com/images/frontend/favicon.ico"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="https://www.vatanbilgisayar.com/assets/dist/images/pwa/logo_192_white.png"
      />
      <link
        rel="stylesheet"
        href="https://www.vatanbilgisayar.com/assets/dist/css/app.css?v=10007957020904"
      />

      
    </head>
    <body v-if="getCartProducts()" class="sticky-wrapper">
      <div id="Visilabs-openclose" data-isvisilabs="False"></div>
      <div id="basketpopup-openclose" data-isbasketpopup="True"></div>
      <form action="/sepet/sepetim" id="__AjaxAntiForgeryForm" method="post">
        <input
          name="__RequestVerificationToken"
          type="hidden"
          value="6-gYHXhuaaCGEeeVPhcpJxQ_gwTTBx5vkfT-BqANqU9jfd2bBSwBBV9mtpBGubHa0Xp4rYJtrrAQCpWpd2eSlwkHSvI1"
        />
      </form>

      <header class="basket-header sticky-header">
        <a class="navbar-brand" href="/">
          <img
            src="https://www.vatanbilgisayar.com/assets/dist/images/vatanlogo.svg"
            alt="Vatan Bilgisayar"
          />
        </a>
      </header>
      <input type="hidden" name="basketCount" id="basketCount" value="1" />
      <main class="basket-main-area">
        <div class="basket">
          <div class="basket-process">
            <div class="global-container">
              <div class="row">
                <div class="col-xs-12">
                  <ul class="basket-process__inner">
                    <li class="active">
                      <a href="/Basket">
                        <span class="basket-process__icon">
                          <i class="fas fa-shopping-cart"></i>
                        </span>
                        <span class="basket-process__text"> Sepetim </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span class="basket-process__icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="basket-process__text"> Teslimat </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span class="basket-process__icon">
                          <i class="far fa-credit-card"></i>
                        </span>
                        <span class="basket-process__text"> Ödeme </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="global-container">
            <div class="row">
              <div class="col-xs-12 col-lg-8">
                <div class="basket-cart">
                  <div class="clearfix basket-cart__header">
                    <a href="/" class="pull-right basket-cart__header-link"
                      ><i class="fas fa-arrow-left"></i> Alışverişe Geri Dön</a
                    >
                  </div>
                  <div></div>
                  <div class="basket-cart__table" id="basketList">
                    <div
                      class="basket-cart__table-row basket-cart__table-header"
                    >
                      <div class="basket-cart__table-column info">
                        Ürünlerim
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          count
                          hidden-xs hidden-sm
                        "
                      >
                        Adet
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          price
                          hidden-xs hidden-sm
                        "
                      >
                        Avantajlı Fiyat
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          warranty
                          hidden-xs hidden-sm
                        "
                      >
                        Garantiyi Uzat
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          remove
                          hidden-xs hidden-sm
                        "
                      >
                        Sil
                      </div>
                    </div>
                    <div
                      v-for="item in getCartProducts()"
                      :key="item.id"
                      class="basket-cart__table-row"
                    >
                      <div class="basket-cart__table-column info">
                        <div class="basket-cart__product-info">
                          <a href="/iphone-11-akilli-telefon.html">
                            <div class="basket-cart__product-image">
                              <img
                                :src="item.product.img_url"
                                class=""
                                alt=""
                              />
                            </div>
                            <div class="basket-cart__product-name">
                              {{ item.product.name }}
                            </div>
                          </a>
                          <ul
                            class="
                              basket-cart__product-badges
                              hidden-xs hidden-sm
                            "
                          >
                            <li class="discount"></li>
                          </ul>
                        </div>
                      </div>
                      <div class="basket-cart__table-column count">
                        <div class="number-input">
                          <a
                            @click.prevent="
                              changeCountCart({ id: item.product.code, count: -1 })
                            "
                            >-</a
                          >
                          <div class="input-wrapper">
                            <form novalidate="novalidate">
                              <input
                                data-limitedstok="False"
                                data-lineid="23197315"
                                data-target="0"
                                data-toggle="113155"
                                data-val="true"
                                data-val-number="The field TQuantityA must be a number."
                                data-val-required="The TQuantityA field is required."
                                id="productCount_23197315"
                                min="1"
                                name="item.BasketItem.TQuantityA"
                                onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                                :value="item.count"
                                style="text-align: right"
                              />
                            </form>
                            <span>Adet</span>
                          </div>
                          <a
                            @click.prevent="
                              changeCountCart({ id: item.product.code, count: 1 })
                            "
                            >+</a
                          >
                        </div>
                      </div>
                      <div class="basket-cart__table-column price">
                        <div class="basket-cart__product-price">
                          <span class="product-list__price">{{
                            item.product.cost
                          }}</span
                          ><span class="product-list__decimals">,00</span
                          ><span class="product-list__currency">{{
                            item.product.currency
                          }}</span>
                        </div>
                      </div>
                      <div
                        class="
                          basket-cart__table-column
                          info
                          badges
                          visible-xs visible-sm
                        "
                      >
                        <ul class="basket-cart__product-badges">
                          <li></li>
                        </ul>
                      </div>
                      <div class="basket-cart__table-column warranty">
                        <span>Garantiyi Uzat</span>
                        <input
                          class="
                            apple-switch
                            basket-cart__product-switch
                            warranty-toggler
                          "
                          checked=""
                          type="checkbox"
                          onchange="warrantyToggler(event)"
                        />
                      </div>
                      <div class="basket-cart__table-column text-center remove">
                        <a
                          class="basket-cart__product-remove"
                          @click.prevent="removeFromCart(item.id)"
                          ><i class="far fa-times-circle"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix basket-cart__footer text-center">
                    <a
                      class="basket-cart__footer-link"
                      @click.prevent="deleteBasket()"
                      ><i class="fas fa-trash-alt"></i>
                      <span>SEPETİ BOŞALT</span></a
                    >
                  </div>
                </div>
                <div
                  class="
                    wrapper-product wrapper-product--dark
                    visilabs-basket-promoted
                    basket-promoted-products
                    hide
                  "
                >
                  <div class="global-container">
                    <div class="global-component-header clearfix">
                      <h3 class="global-component-header__title">
                        Bunu Alanlar Bunları da Aldı
                      </h3>
                    </div>
                    <div
                      class="
                        owl-carousel
                        basket-owl
                        owl-theme
                        vis-basket-widget
                        owl-loaded owl-drag owl-hidden
                      "
                    >
                      <div class="owl-stage-outer">
                        <div class="owl-stage"></div>
                      </div>
                      <div class="owl-nav disabled">
                        <button
                          type="button"
                          role="presentation"
                          class="owl-prev"
                        >
                          <span
                            class="btn-carousel-controls icon-angle-left"
                          ></span></button
                        ><button
                          type="button"
                          role="presentation"
                          class="owl-next"
                        >
                          <span
                            class="btn-carousel-controls icon-angle-right"
                          ></span>
                        </button>
                      </div>
                      <div class="owl-dots disabled"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="basket-ordersummary">
                  <h4 class="basket-ordersummary__title">Sipariş Özeti</h4>
                  <div class="basket-ordersummary__secure-shopping">
                    <img
                      src="https://www.vatanbilgisayar.com/assets/dist/images/secure-shopping-icon.png"
                      alt="#"
                      class="img-responsive"
                    />
                    <div class="basket-ordersummary__secure-shopping-text">
                      <strong>GÜVENLİ</strong>
                      <span>ALIŞVERİŞ</span>
                    </div>
                  </div>
                  <img src="" alt="" />
                  <table class="table basket-ordersummary__list">
                    <tbody>
                      <tr class="basket-ordersummary__total">
                        <td>TOPLAM</td>
                        <td class="text-right active">
                          <strong> {{ fnc(gettotal()) }} </strong> TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="basket-button-wrapper">
                    <div class="row">
                      <div
                        class="
                          col-xs-5
                          hidden-lg hidden-sm
                          basket-summary-button-left
                        "
                      >
                        <h5>Toplam</h5>
                        <span class="basket-sm-button-price"> 7.999,00 </span>
                        <span class="basket-sm-button-price_rate"> TL </span>
                      </div>
                      <div class="col-sm-12 col-xs-7 basket-summary-button">
                        <form
                          action="/Basket/ToSecondStep?returnUrl=%2Fsepet%2Fsepetim%2F"
                          class="form-horizontal"
                          id="continueForm"
                          method="post"
                          role="form"
                        >
                          <input
                            name="__RequestVerificationToken"
                            type="hidden"
                            value="NTiQJGgIkQCCY-RxnVBPue6vl78H-DErgwNlRJS9q5U6Ydpy2pLbNltEcBltvhtnqSlRy8-o5EUJLz_jqeW8aszfM-k1"
                          />
                          <input
                            type="hidden"
                            id="current"
                            name="current"
                            value="0"
                          />
                          <button
                            class="
                              btn btn-block btn-success
                              input-lg
                              basket-ordersummary__button
                              continuebutton
                              btn-arrow
                            "
                          >
                            Sepeti Onayla
                            <span><i class="fas fa-chevron-right"></i></span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://www.vatanbilgisayar.com/assets/dist/images/signup_logos.png"
                    alt="#"
                    class="basket-ordersummary__logos"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="courier courier-basket">
              <div class="global-container">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div class="courier-item">
                        <div
                          class="
                            courier-item__wrapper courier-item__wrapper--first
                          "
                        >
                          <span class="courier-item__img"
                            ><i class="fas fa-box-open"></i>&nbsp;</span
                          >
                        </div>
                        <div class="courier-item__wrapper">
                          <h4 class="courier-item__title">YARIN TESLİM</h4>
                          <p class="courier-item__content">
                            Seçili ürünlere ertesi gün sahip olma fırsatı
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div class="courier-item">
                        <div
                          class="
                            courier-item__wrapper courier-item__wrapper--first
                          "
                        >
                          <span class="courier-item__img"
                            ><i class="fas fa-people-carry"></i
                          ></span>
                        </div>
                        <div class="courier-item__wrapper">
                          <h4 class="courier-item__title">BUGÜN TESLİM</h4>
                          <p class="courier-item__content">
                            Seçili ürünlere gün içerisinde sahip olma fırsatı.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div class="courier-item">
                        <div
                          class="
                            courier-item__wrapper courier-item__wrapper--first
                          "
                        >
                          <span class="courier-item__img"
                            ><i class="fas fa-truck-moving"></i
                          ></span>
                        </div>
                        <div class="courier-item__wrapper">
                          <h4 class="courier-item__title" title="KARGO BEDAVA">
                            KARGO BEDAVA
                          </h4>
                          <p class="courier-item__content">
                            Seçili ürünlerde standart kargo bedava.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div class="courier-item">
                        <div
                          class="
                            courier-item__wrapper courier-item__wrapper--first
                          "
                        >
                          <span class="courier-item__img"
                            ><i class="fas fa-calendar-alt"></i
                          ></span>
                        </div>
                        <div class="courier-item__wrapper">
                          <h4 class="courier-item__title" title="KOLAY İADE">
                            KOLAY İADE
                          </h4>
                          <p class="courier-item__content">
                            14 gün içerisinde cayma hakkı.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <span id="emessage"></span>
      

      <div class="scroll-top" style="display: none; pointer-events: none">
        <span class="icon-arrow-up"></span>
      </div>
    </body>
  </html>
</template>