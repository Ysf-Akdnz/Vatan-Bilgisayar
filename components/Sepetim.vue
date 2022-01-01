<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      get_products: 'get_products',
      getCartProducts: 'getCartProducts',
    }),
  },
  methods: {
    ...mapActions({
      removeFromCart: 'removeFromCart'
    }),
    getproducts() {
      return this.get_products()
    },
    gettotal() {
      let total = 0
      this.getCartProducts().forEach((element) => {
        total += element.product.cost * element.count
      })
      return total
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
      <script src="https://js-agent.newrelic.com/nr-1211.min.js"></script>
      <script
        async=""
        src="https://www.googletagmanager.com/gtm.js?id=GTM-5RJ3235"
      ></script>

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

      <script
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=AW-1029930232"
      ></script>

      <script src="/Scripts/GTM.js?v=10007957020904"></script>
    </head>
    <body class="sticky-wrapper">
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
                            href="javascript:changeProductCount(113155,0,-1,23197315);"
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
                                type="number"
                                value="1"
                                style="text-align: right"
                              />
                            </form>
                            <span>Adet</span>
                          </div>
                          <a
                            href="javascript:changeProductCount(113155,0,1,23197315);"
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
                      href="javascript:void(0)"
                      class="basket-cart__footer-link"
                      onclick="DeleteBasket()"
                      ><i class="fas fa-trash-alt"></i>
                      <span>SEPETİ BOŞALT</span></a
                    >
                  </div>
                </div>
                <div class="basket-tab-area classic-tab">
                  <ul
                    class="
                      nav nav-tabs nav-justified
                      basket-widget-tabs
                      basketWidgetTabs
                    "
                  >
                    <li class="active">
                      <a data-toggle="tab" data-type="tab1" href="#tab1"
                        >Size Özel İndirimler</a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" data-type="tab2" href="#tab2"
                        >İhtiyacınız Olabilir</a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" data-type="tab3" href="#tab3"
                        >Geri Alım Kampanyası</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade active in" id="tab1">
                      <div class="basket-promotion">
                        <h4 class="basket-promotion__title">
                          Sepetinize özel indirimler
                        </h4>
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../s-link-ip-g11m-10-000mah-2-usb-port-tasinabilir-sarj-cihazi-beyaz.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/s-link/thumb/v2-93505_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  S-LİNK IP-G11M 10.000mAh 2 USB PORT
                                  TAŞINABİLİR ŞARJ CİHAZI- BEYAZ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">125,00 TL</span>
                                <strong>68,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(93505,1,true,20250)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../snopy-sn-tws03-mobil-telefon-uyumlu-bluetooth-tws-mikrofonlu-kulaklik-beyaz.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/snopy/thumb/109478_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH
                                  TWS MİKROFONLU KULAKLIK- BEYAZ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">359,00 TL</span>
                                <strong>199,00</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(109478,1,true,21713)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../brita-marella-cool-su-aritmali-akilli-surahi.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/brita/thumb/89002-anaaa_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  BRITA MARELLA COOL SU ARITMALI AKILLI SÜRAHİ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">129,00 TL</span>
                                <strong>98,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(89002,1,true,24025)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../silver-crest-sp-15-sarjli-su-pompasi.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/silvercrest/thumb/127670_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SILVER CREST SP-15 ŞARJLI SU POMPASI
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">50,00 TL</span>
                                <strong>44,98</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(127670,1,true,24990)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../philips-qp6505-20-oneblade-pro-sakali-duzeltin-sekillendirin-ve-tiras-edin.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/philips/thumb/v2-92087_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  PHILIPS QP6505/20 ONE BLADE PRO (SAKALI
                                  DÜZELTİN,ŞEKİLLENDİRİN VE TIRAŞ EDİN)
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">499,00 TL</span>
                                <strong>329,00</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(92087,1,true,26111)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                        <div class="clearfix basket_promo_item">
                          <div class="basket-promotion__left-wrapper">
                            <div class="basket-promotion__left">
                              <a
                                href="../samsung-galaxy-buds-pro-kablosuz-kulaklik-silver.html"
                              >
                                <div class="basket-promotion__image">
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload//Product/samsung/thumb/118219_small.jpg"
                                  />
                                </div>
                                <div class="basket-promotion__name">
                                  SAMSUNG GALAXY BUDS PRO KABLOSUZ KULAKLIK -
                                  GÜMÜŞ
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="basket-promotion__right-wrapper">
                            <div class="basket-promotion__subtitle">
                              Size Özel
                            </div>
                            <div class="basket-promotion__right">
                              <div class="basket-promotion__price">
                                <span class="discount">1.599,00 TL</span>
                                <strong>1.498,99</strong> TL
                              </div>
                              <a
                                href="javascript:void(0)"
                                class="btn btn-default basket-promotion__button"
                                onclick="AddOfferToBasket(118219,1,true,26263)"
                                id="btnBasket"
                                >HEMEN EKLE</a
                              >
                            </div>
                          </div>
                        </div>
                        <hr
                          style="
                            background: transparent;
                            border-color: transparent;
                          "
                        />
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab2">
                      <div class="basket-promotion-others">
                        <h4 class="basket-promotion-others__title">
                          <i class="icon-arrow-down-percent"></i>
                          Bu ürünlere de ihtiyacınız olabilir
                        </h4>
                        <div class="basket-promotion-others__row">
                          <a href="../apple-mhje3tu-a-20w-usb-c-adapor.html">
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/115410_small.jpg"
                                alt="apple-mhje3tu-a-20w-usb-c-adapor.html"
                                title="apple-mhje3tu-a-20w-usb-c-adapor.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MHJE3TU/A 20W USB-C HIZLI ŞARJ GÜÇ
                                ADAPTÖRÜ</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>199,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=115410&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form0"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="b76QKW8ULhBPlsTtGEvxQxYftGqmGSl77ButMgZXLcNGfF_TZRFwcgpCvzvu8nXQ8OOrykCv2IBPzfnNtW_ZEm_VpxU1"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="basket-promotion-others__row">
                          <a
                            href="../apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                          >
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/TeoriV2-104375_small.jpg"
                                alt="apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                                title="apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MWVG2ZM/A IPHONE 11 TELEFON KILIFI -
                                ŞEFFAF</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>399,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=104375&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form1"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="Hd2v7dO10L5XxIH7Mjl8YlZmnX5gHwNYIBkHuL9jMeOkTrCjf5F5rBAjJFgd3-J40Sbv_t1aH6aimDqT7qsuJCyzT-U1"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="basket-promotion-others__row">
                          <a href="../apple-mhxh3tu-a-magsafe-charger.html">
                            <div class="basket-promotion-others__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/115411-1_small.jpg"
                                alt="apple-mhxh3tu-a-magsafe-charger.html"
                                title="apple-mhxh3tu-a-magsafe-charger.html"
                              />
                            </div>
                            <div class="basket-promotion-others__name">
                              <span
                                >APPLE MHXH3TU/A MAGSAFE KABLOSUZ ŞARJ
                                AYGITI</span
                              >
                            </div>
                          </a>
                          <div class="basket-promotion-others__price">
                            <div class="basket-promotion-others__price-wrapper">
                              <strong>399,00</strong> TL
                            </div>
                          </div>
                          <form
                            action="/Basket/AddBundle?ProductId=115411&amp;BundleType=0&amp;MainItemLineId=23197315"
                            class="form-horizontal"
                            data-ajax="true"
                            data-ajax-begin="javascript:locked();"
                            data-ajax-method="POST"
                            data-ajax-success="OnSuccessAddBundle"
                            id="form2"
                            method="post"
                            role="form"
                          >
                            <input
                              name="__RequestVerificationToken"
                              type="hidden"
                              value="KaL_E367sfPn9mvnab5jTeCwtyu1vzt_8mk9CbG1OAimx9r_7rF8wWp5x_MDdAx8ZJuUIpv5CNLlehAg_T0beGmQyr01"
                            />
                            <input
                              type="submit"
                              class="
                                btn btn-primary
                                basket-promotion-others__button
                              "
                              value="EKLE"
                            />
                          </form>
                        </div>
                        <div class="text-center">
                          <a href="#" id="discount" class="discount-link hide">
                            <div class="discount-up">
                              <span>Daha Fazla Göster</span>
                              <span class="icon-angle-down"></span>
                            </div>
                            <div class="discount-down hide">
                              <span>Daha Az Göster</span>
                              <span class="icon-angle-up"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab3">
                      <div class="basket-promotion-others">
                        <h4 class="basket-promotion-others__title">
                          <i class="icon-buyback-1"></i>
                          Geri Alım Kampanyası Süreci
                        </h4>
                        <div class="basket-buyback-list">
                          <ul class="timeline-list">
                            <li>
                              <span>1</span>
                              <p>
                                Yeni bir ürün satın alırken, geri alıma uygun
                                cihazınızı geri alarak en uygun şekilde
                                değerlendirmenizi sağlıyoruz.
                              </p>
                            </li>
                            <li>
                              <span>2</span>
                              <p>
                                Bunun için cihazınızın markası, modeli ve durumu
                                ile ilgili birkaç soruyu yanıtlamanız
                                yeterlidir.
                              </p>
                            </li>
                            <li>
                              <span>3</span>
                              <p>
                                Soruları yanıtladığınızda cihazınızın tahmini
                                takas değerini öğreneceksiniz.
                              </p>
                            </li>
                            <li>
                              <span>4</span>
                              <p>
                                Geri alım teklifimizi kabul ederseniz,
                                cihazınızı bize gönderdiğinizde beyanınıza uygun
                                cihazınız için teklif bedelini banka hesabınıza
                                göndereceğiz.
                              </p>
                            </li>
                            <li>
                              <span>5</span>
                              <p>
                                Yeni bir ürün satın aldığınızda, eski cihazınızı
                                bize güvenli bir şekilde göndermeniz için bir
                                kit göndereceğiz.
                              </p>
                            </li>
                            <li>
                              <span>6</span>
                              <p>
                                Cihazınızı bu kitin içine koyup ücretsiz olarak
                                bize kargolayabilirsiniz.
                              </p>
                            </li>
                            <li>
                              <span>7</span>
                              <p>
                                Cihazınız bize ulaştıktan sonra inceleyeceğiz ve
                                durumunu doğrulayacağız.
                              </p>
                            </li>
                            <li>
                              <span>8</span>
                              <p>
                                Kontrol sonrası her şey beyanınıza uygun ise
                                hesabınıza teklif bedelini havale edeceğiz.
                              </p>
                            </li>
                            <li>
                              <span>9</span>
                              <p>
                                Cihazınızın durumunda beyan ettiğinizden
                                farklılık tespit edersek, yeni bir teklif
                                ileteceğiz.
                              </p>
                            </li>
                            <li>
                              <span>10</span>
                              <p>
                                Yeni teklifi, kabul etme veya reddetme
                                seçeneğiniz olacaktır. Reddederseniz, cihazınız
                                ücretsiz olarak size iade edilecektir.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                          <strong> {{gettotal()}} </strong> TL
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
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery/jquery-3.3.1.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-query-object/jquery.query-object.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/picturefill/picturefill.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap/bootstrap.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap-datetimepicker/moment.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/inputmask/jquery.inputmask.bundle.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/owl-carousel/owl.carousel.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/owl-carousel/OwlCarousel2Thumbs.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/masonry/jquery.masonry.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/slide-product-images/slide-product-images.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/fancybox/jquery.fancybox.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-countdown/jquery.countdown.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/intersection-observer-polyfill/intersection-observer-polyfill.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/js-cookie/jquery.cookie.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-validate/jquery.validate.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-validate-unobtrusive/jquery.validate.unobtrusive.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/jquery-unobtrusive-ajax/jquery.unobtrusive-ajax.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/zooms/jquery.ez-plus.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/lazyload/lazyload.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/gauage/gauge.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/selectize/selectize.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/swiper/swiper.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/simplebar/simplebar.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/tablesort/jquery.tablesorter.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/Uploadhttps://www.vatanbilgisayar.com/assets/tablesort/jquery.tablesorter.widgets.min.js"></script>
      <script src="https://cdn.vatanbilgisayar.com/images/canli/jquery.touchSwipe.min.js"></script>
      <script src="https://www.vatanbilgisayar.com/images/code/gis/gis.js?v=5454654"></script>
      <script src="/Scripts/mfs-client.min.js"></script>
      <script src="/Scripts/mpass.js"></script>
      <script src="https://www.vatanbilgisayar.com/assets/dist/js/bundle.js?v=10007957020904"></script>

      <div class="scroll-top" style="display: none; pointer-events: none">
        <span class="icon-arrow-up"></span>
      </div>
    </body>
  </html>
</template>