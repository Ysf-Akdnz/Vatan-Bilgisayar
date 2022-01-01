<template>
  <div>
    <div v-if="!get_product()" class="deneme">
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
        alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
      />
    </div>
    <div v-else class="detailPartialPage">
      <input type="hidden" id="visilabs-categoryId" value="cep_telefonu" />
      <div class="wrapper-breadcrumb">
        <div class="global-container">
          <div class="row">
            <div class="col-xs-12">
              <ul class="breadcrumb">
                <li>
                  <a href="/tuketici-elektronigi/" class="bradcrumb-item"
                    >Tüketici Elektroniği</a
                  >
                </li>
                <li>
                  <a href="/cep-telefonu-modelleri/" class="bradcrumb-item"
                    >Cep Telefonu</a
                  >
                </li>
                <li>
                  <a href="/akilli-telefon/" class="bradcrumb-item"
                    >Akıllı Telefon</a
                  >
                </li>
                <li>
                  <a href="/apple/akilli-telefon/" class="bradcrumb-item"
                    >APPLE</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="bradcrumb-item">{{
                    get_product().code
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid wrapper-linear product-detail-wrapper">
        <div class="row">
          <div class="col-xs-12">
            <div class="global-container top-pd-update linear-gradient">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-left">
                  <div class="hidden-sm hidden-md hidden-lg wrapper-pd-buttons">
                    <a
                      id="favorite-button"
                      data-message="Yukarıdaki Ürünün Fiyatı Düşünce Size Haber Verilecek"
                      data-producttitle="iPhone&nbsp;11 64 Gb Siyah"
                      data-checkfav="/ProductDetail/CheckFavorite"
                      href="javascript:void(0)"
                      data-productid="113155"
                      data-url="/ProductDetail/AddProductToFavorites"
                      data-type="2"
                      class="wrapper-detail-icon favoriteButton"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Favoriye Ekle"
                    >
                      <span class="icon-heart-alt"></span>
                    </a>
                    <a
                      class="
                        wrapper-detail-icon
                        icon-exchange
                        addProductToCompare
                      "
                      href="javascript:void(0);"
                      data-name="iPhone&nbsp;11 64 Gb Siyah"
                      data-code="0HMjsXD+sHLb2cvnstDWHw=="
                      data-url="iphone-11-akilli-telefon.html"
                      data-category="CELCEP"
                      data-id="113155"
                      data-price="7.999"
                      data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg"
                      data-placement="top"
                      title="Karşılaştır"
                    >
                    </a>
                    <a
                      class="wrapper-detail-icon socialShareBtn"
                      href="javascript:void(0);"
                      title="Paylaş"
                    >
                      <i class="fas fa-share-alt"></i>
                    </a>
                    <div class="social-share hide">
                      <a
                        href="javascript:socialShare('fb', 'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                        class="icon-facebook"
                      ></a>
                      <a
                        href="javascript:socialShare('tt',  'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                        class="icon-twitter"
                      ></a>
                      <a
                        href="javascript:socialShare('wp', 'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                        class="icon-whatsapp"
                      ></a>
                    </div>
                  </div>
                  <div class="person-count"></div>
                  <div class="clearfix">
                    <div id="product-detail" data-video="" data-slider-id="1">
                      <div
                        class="
                          swiper-container
                          product-img-slide
                          swiper-container-fade
                          swiper-container-initialized
                          swiper-container-horizontal
                        "
                      >
                        <div
                          class="swiper-wrapper"
                          style="transition-duration: 0ms"
                        >
                          <div
                            class="
                              swiper-slide
                              swiper-slide-duplicate
                              swiper-slide-prev
                            "
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                            data-swiper-slide-index="6"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(0px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide swiper-slide-active"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg"
                            data-swiper-slide-index="0"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 1;
                              transform: translate3d(-624px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg"
                            >
                              <img
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                  swiper-lazy-loaded
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg"
                                :srcset="get_product().img_url"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide swiper-slide-next"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_small.jpg"
                            data-swiper-slide-index="1"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-1248px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-2_small.jpg"
                            data-swiper-slide-index="2"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-1872px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-2_large.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-2_large.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-2_large.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-3_small.jpg"
                            data-swiper-slide-index="3"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-2496px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-3_large.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-3_large.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-3_large.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-4_small.jpg"
                            data-swiper-slide-index="4"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-3120px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-4_large.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-4_large.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-4_large.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-5_small.jpg"
                            data-swiper-slide-index="5"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-3744px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-5_large.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-5_large.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-5_large.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="swiper-slide swiper-slide-duplicate-prev"
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                            data-swiper-slide-index="6"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-4368px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                            >
                              <img
                                data-srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vatan/kg.jpg"
                              />
                            </a>
                          </div>
                          <div
                            class="
                              swiper-slide
                              swiper-slide-duplicate
                              swiper-slide-duplicate-active
                            "
                            data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg"
                            data-swiper-slide-index="0"
                            style="
                              width: 624px;
                              transition-duration: 0ms;
                              opacity: 0;
                              transform: translate3d(-4992px, 0px, 0px);
                            "
                          >
                            <a
                              data-fancybox="images"
                              href="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg"
                            >
                              <img
                                class="
                                  swiper-lazy
                                  img-responsive
                                  wrapper-main-slider__image
                                  swiper-lazy-loaded
                                "
                                alt="iPhone&nbsp;11 64 Gb Siyah"
                                src="/assets/dist/images/placeHolder.gif"
                                title="iPhone&nbsp;11 64 Gb Siyah"
                                data-zoom-image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg"
                                srcset="
                                  https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg
                                "
                              />
                            </a>
                          </div>
                        </div>
                        <div class="product-img-slide-pagination-dots"></div>
                        <div class="wrapper-product-brand">
                          <a href="apple/akilli-telefon">
                            <img
                              alt="APPLE"
                              title="APPLE"
                              src="https://cdn.vatanbilgisayar.com/Upload//MARKA/apple/apple.jpg"
                              class="lazy-init"
                            />
                            <span>Apple Türkiye Garantili</span>
                          </a>
                        </div>
                        <span
                          class="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <ul
                    class="
                      wrapper-product-tab-list
                      hidden-xs hidden-sm hidden-md
                    "
                  >
                    <li>
                      <a
                        href="javascript:void(0);"
                        id="allFeatures"
                        onclick="focusTab('urun-ozellikleri')"
                      >
                        TÜM ÖZELLİKLER
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript:void(0);"
                        id="paymentOptions"
                        onclick="focusTab('odeme-secenekleri')"
                      >
                        ÖDEME SEÇENEKLERİ
                      </a>
                    </li>
                  </ul>
                  <div class="discount-prod-detail fibaBank fibafor-desktop">
                    <div class="images-area">
                      <a
                        href="/eskiyi-getir-yeniyi-gotur-telefon-buyback"
                        target="_blank"
                      >
                        <img
                          class="lazyimg lazy-init"
                          src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/buyback9.png"
                        />
                      </a>
                    </div>
                    <div class="text-area">
                      <a
                        href="/eskiyi-getir-yeniyi-gotur-telefon-buyback"
                        target="_blank"
                      >
                        <h5><strong>Geri Alım Kampanyası</strong></h5>
                      </a>
                      <span
                        >Eski telefonunuzu alıyoruz, yepyeni telefonunuzu
                        benzersiz değişim fırsatlarıyla veriyoruz!</span
                      >
                    </div>
                  </div>
                  <div
                    class="
                      discount-prod-detail
                      fibaBank
                      fibafor-desktop
                      tlt-custom
                      tlt-blue
                      tlt-wid
                      tlt-nonopacity
                      tlt-textleft
                      tlt-delay
                    "
                    data-toggle="tooltip"
                    data-delay='{"show":"200", "hide":"100"}'
                    data-placement="top"
                    data-html="true"
                    title=""
                    data-original-title="<strong>Taksit Avantajından Faydalanabilmek İçin Sırasıyla Aşağıdaki Adımları İzlemeniz Gerekmektedir:</strong><br /> 1.	Ürün sayfasındaki “Sepete Ekle” butonuna tıklayın.<br /> 2.	“Sepete Git” butonuna tıklayın.<br />3.	“Devam Et” butonuna tıklayın. <br />4.	Adresinizi doğrulayın ve “Devam Et” butonuna tıklayın. <br />5.	“Ödeme Seçenekleri” kısmından “Alışveriş Kredisi” butonuna tıklayın. <br />6.	Bankalardan Fibabanka’yı seçtikten sonra aylık ve toplam geri ödeme tutarlarını görüntüleyeceksiniz, ardındandan “siparişi onayla” butonuna tıklayın. <br />7.	Siparişi onayladıktan sonra TC kimlik numaranız ve cep telefonunuz ile kredi başvurunuza başlayabilirsiniz."
                  >
                    <div class="images-area">
                      <a href="/fibabanka-internet-kampanyasi/" target="_blank">
                        <img
                          class="lazyimg lazy-init"
                          src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/fiba2.png"
                        />
                      </a>
                    </div>
                    <div class="text-area">
                      <a href="/fibabanka-internet-kampanyasi/" target="_blank">
                        <h5>
                          <strong>Fibabanka Alışveriş Kredisi Fırsatı</strong>
                        </h5>
                      </a>
                      <span
                        >Taksitli alışveriş fırsatı için ürünü sepete ekleyerek,
                        ödeme adımında taksit bilgilerini
                        görüntüleyebilirsiniz.</span
                      >
                    </div>
                  </div>
                  <div class="discount-prod-detail fibaBank fibafor-desktop">
                    <div class="images-area">
                      <a href="/alisveris-kredisi" target="_blank">
                        <img
                          class="lazyimg lazy-init"
                          src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/kredi2.png"
                        />
                      </a>
                    </div>
                    <div class="text-area">
                      <a href="/alisveris-kredisi" target="_blank">
                        <h5><strong>Vatan'da Alışveriş Kredisi</strong></h5>
                      </a>
                      <span
                        >Akbank, YapıKredi ve Garanti müşterilerine alışveriş
                        kredisi fırsatı.</span
                      >
                    </div>
                  </div>
                  <div class="discount-prod-detail fibaBank fibafor-desktop">
                    <div class="images-area">
                      <a href="/keyifli-garanti/" target="_blank">
                        <img
                          class="video-pic lazy-init"
                          src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/video-pic2.png"
                        />
                      </a>
                    </div>
                    <div class="text-area">
                      <a href="/keyifli-garanti/" target="_blank">
                        <h5><strong>Garanti Uzatma Fırsatı</strong></h5>
                      </a>
                      <span>
                        Yeni ürününüzü Gulf Sigorta, sigorta teminatları ile
                        güvence altına alabilirsiniz.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-right">
                  <div id="demo-containers"></div>
                  <div class="container-fluid">
                    <div class="row">
                      <div
                        class="
                          col-xs-12 col-sm-12 col-md-12 col-lg-12
                          product-detail
                        "
                      >
                        <div class="clearfix prod-code-rank">
                          <div class="wrapper-star">
                            <div class="rank-star">
                              <span
                                class="score"
                                id="topAverageRank"
                                style="width: 80%"
                              ></span>
                            </div>
                            <a
                              href="javascript:void(0);"
                              onclick="focusTab('yorumlar')"
                              class="comment-count"
                            >
                              <span>(982)</span>
                            </a>
                          </div>

                          <div
                            class="product-list__product-code pull-left"
                            data-productcode="MHDA3TU/A"
                          >
                            {{ get_product().code }}
                          </div>
                        </div>

                        <div
                          class="product-list__content product-detail-big-price"
                        >
                          <h1 class="product-list__product-name">
                            {{ get_product().name }}
                          </h1>

                          <div
                            class="product-list__cost product-list__description"
                          >
                            <h3
                              class="
                                product-list_explanation
                                product-list__description-text
                              "
                            ></h3>
                            <span class="product-list__price">{{
                              get_product().cost
                            }}</span>
                            <span class="product-list__currency">{{
                              get_product().currency
                            }}</span>
                          </div>
                        </div>
                        <div class="d-table hidden-xs">
                          <div class="d-cell product-button--cell">
                            <button
                              id="add-to-cart-button"
                              class="btn btn-success basketBTN"
                              @click="addToCart({pid:prd_code, count: 1})"
                            >
                              <i class="fas fa-shopping-cart"></i>
                              <span>SEPETE EKLE</span>
                            </button>
                          </div>
                          <div class="d-cell product-icon--cell">
                            <a
                              class="wrapper-detail-icon favoriteButton"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Favoriye Ekle"
                            >
                              <i class="fas fa-heart"></i>
                            </a>
                            <a
                              class="wrapper-detail-icon addProductToCompare"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Karşılaştır"
                            >
                              <i class="fas fa-exchange-alt"></i>
                            </a>
                            <a
                              class="wrapper-detail-icon socialShareBtn"
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Paylaş"
                              ><i class="fas fa-share-alt"></i>
                            </a>
                            <div class="social-share hide">
                              <a
                                href="javascript:socialShare('fb', 'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                                class="icon-facebook"
                              ></a>
                              <a
                                href="javascript:socialShare('tt',  'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                                class="icon-twitter"
                              ></a>
                              <a
                                href="javascript:socialShare('wp', 'iPhone&nbsp;11 64 Gb Siyah - 7.999 TL'); void(0);"
                                class="icon-whatsapp"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <ul class="product-under-list">
                          <li
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Vatanbilgisayar’da sizlere sunulan tüm ürünler Türkiye’deki yetkili ithalatçı ve üretici firmaların garantisi altındadır, Uluslararası markaların sadece Türkiye için üretilen veya özelleştirilen ve yetkili servislerin ülke garantisi sağladığı modelleri sizlere sunulmaktadır."
                          >
                            <span class="icon-warranty"></span>
                            <span>Garanti</span>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              data-name="iPhone&nbsp;11 64 Gb Siyah"
                              data-code="0HMjsXD+sHLb2cvnstDWHw=="
                              data-url="iphone-11-akilli-telefon.html"
                              data-category="CELCEP"
                              data-id="113155"
                              data-price="7.999"
                              data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg"
                              class="addProductToCompare"
                            >
                              <i class="fas fa-exchange-alt"></i>
                              <span>Karşılaştır</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-productid="113155"
                              data-url="/ProductDetail/ShopStockByProductQ"
                              class="stockBTN"
                            >
                              <span class="icon-map-marker-alt"></span>
                              <span>Stoktaki Mağazalar</span>
                            </a>
                          </li>
                          <li
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Ürünü teslim aldığınız tarihten itibaren 14 gün içerisinde , ön bilgilendirme formunda ve sözleşme metninde yazılı olan usule uyarak mağazalarımızdan ve kargo ile ücretsiz iade edebilir veya değiştirebilirsiniz. Cayma bildirimi tarafımıza ulaştığı tarihten itibaren 20 gün içerisinde, ürüne herhangi bir hasar verilmemesi ve eksiksiz teslim edilmesi şartıyla, tercihinize göre ürünü iade alarak bedelini tarafınıza ödemeyi veya ürün bedeli kadar alış veriş kuponu vermeyi taahhüt ederiz. Ancak satın alınan elektronik ürünlerde; sim kart takılması, wifi ile network bağlantı kurulması, kurulum yapılması, sarf malzemesinin kullanılmış olması, koruyucu bantların çıkarılmış olması, aktivasyon yapılması ve kullanıcı yaratılması halinde iade kabul edilmemektedir. Kişisel bakım ürünleri de hijyen kuralları gereği iadeye uygun değildir. Ticari veya mesleki amaçlarla hareket eden tüzel kişi ve / veya kişiler cayma hakkından ve cayma hakkından doğan hiçbir haktan faydalanamaz."
                          >
                            <span class="icon-truck-alt"></span>
                            <span>Mağazadan İade</span>
                          </li>
                        </ul>
                        <div class="discount-prod-detail delivery-options">
                          <div class="discount-head clearfix">
                            <span>Teslimat Seçenekleri</span>
                          </div>
                          <div class="discount-item-wrapper">
                            <div
                              class="delivery-item standart-delivery-item"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="100 tl üzeri siparişleriniz kargo ücretsizdir. Standart teslimat ile verilen siparişler ortalama 2 iş gününde kargoya verilmektedir."
                            >
                              <span class="first-key"
                                ><strong
                                  >Standart teslimat (ücretsiz):</strong
                                ></span
                              >
                              <span>
                                Siparişiniz ortalama 2 iş gününde kargoya teslim
                                edilir.</span
                              >
                            </div>
                            <div
                              class="delivery-item"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="Bu ürüne bugün gün içerisinde sahip olmak istiyorsanız, 1000 TL ye kadar olan siparişlerinizde 9.90 TL, 1000 TL Üzeri siparişlerinizde ise BUGÜN TESLİM hizmetinden ücretsiz yararlanabilirsiniz.  Bugün 00:00 - 11:00 arası verdiğiniz siparişler, bugün 22:00'a kadar teslim edilecektir.(3D güvenlik şifresi kullanılmadan verilen siparişlerde bu süre uzayabilmektedir.)"
                            >
                              <span class="first-key"
                                ><strong>Bugün teslim:</strong></span
                              ><span>
                                11:00'a kadar verilen siparişleriniz aynı gün
                                adresinize teslim edilir.</span
                              >
                            </div>
                            <div
                              class="delivery-item"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="Sepetin teslimat aşamasında mağazadan teslimat seçeneğini ve size uygun teslim almak istediğiniz mağazayı seçerek sipariş verebilirsiniz. Seçtiğiniz mağazadan ürününüzü hemen teslim alabilirsiniz."
                            >
                              <span class="first-key"
                                ><strong>Mağazadan teslim:</strong></span
                              ><span
                                >Dilediğiniz mağazamızdan ürünü hemen teslim
                                alabilirsiniz.</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="wisho-call-wrapper hide">
                          <div class="wishoCallBtnDiv">
                            <span id="wisho_cancel"></span>
                            <a
                              id="wishoCallBtn"
                              data-category="CELCEP"
                              href="javascript:;"
                            >
                              <span id="wisho_text_one">Mağazaya</span>
                              <span id="wisho_text_two">Canlı Bağlan</span>
                              <span id="wisho_online"></span>
                              <span id="wisho_swipe"></span>
                            </a>
                          </div>
                        </div>
                        <div
                          class="discount-prod-detail fibaBank fibafor-mobile"
                        >
                          <div class="images-area">
                            <a
                              href="/eskiyi-getir-yeniyi-gotur-telefon-buyback"
                              target="_blank"
                            >
                              <img
                                data-src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/buyback9.png"
                                class="only-pic"
                              />
                            </a>
                          </div>
                          <div class="text-area">
                            <a
                              href="/eskiyi-getir-yeniyi-gotur-telefon-buyback"
                              target="_blank"
                            >
                              <h5><strong>Geri Alım Kampanyası</strong></h5>
                            </a>
                            <span
                              >Eski telefonunuzu alıyoruz, yepyeni telefonunuzu
                              benzersiz değişim fırsatlarıyla veriyoruz!</span
                            >
                          </div>
                        </div>
                        <div
                          class="discount-prod-detail fibaBank fibafor-mobile"
                        >
                          <div class="images-area">
                            <a
                              href="/fibabanka-internet-kampanyasi/"
                              target="_blank"
                            >
                              <img
                                data-src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/fiba2.png"
                              />
                            </a>
                          </div>
                          <div class="text-area">
                            <a
                              href="/fibabanka-internet-kampanyasi/"
                              target="_blank"
                            >
                              <h5>
                                <strong
                                  >Fibabanka Alışveriş Kredisi Fırsatı</strong
                                >
                              </h5>
                            </a>
                            <span
                              >Taksitli alışveriş fırsatı için ürünü sepete
                              ekleyerek, ödeme adımında taksit bilgilerini
                              görüntüleyebilirsiniz.</span
                            >
                          </div>
                        </div>
                        <div
                          class="discount-prod-detail fibaBank fibafor-mobile"
                        >
                          <div class="images-area">
                            <a href="/alisveris-kredisi" target="_blank">
                              <img
                                data-src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/kredi2.png"
                                class="only-pic"
                              />
                            </a>
                          </div>
                          <div class="text-area">
                            <a href="/alisveris-kredisi" target="_blank">
                              <h5>
                                <strong>Vatan'da Alışveriş Kredisi</strong>
                              </h5>
                            </a>
                            <span
                              >Akbank, YapıKredi ve Garanti müşterilerine
                              alışveriş kredisi fırsatı.</span
                            >
                          </div>
                        </div>
                        <div class="container-fluid product-specs">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="prd-spec-head">Ekran Boyutu:</div>
                              <div class="rank-dots">
                                <span class="score" style="width: 100%"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="prd-spec-head">Dahili Hafıza:</div>
                              <div class="rank-dots">
                                <span class="score" style="width: 80%"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="discount-prod-detail">
                          <div class="discount-text clearfix">
                            <span class="icon-arrow-down-percent"></span>
                            <span
                              >Bu ürünle birlikte alabileceğiniz ürünler</span
                            >
                          </div>
                          <div class="discount-item-wrapper">
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="apple-mhje3tu-a-20w-usb-c-adapor.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/apple/thumb/115410_small.jpg"
                                        alt="APPLE MHJE3TU/A 20W USB-C HIZLI ŞARJ GÜÇ ADAPTÖRÜ"
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >APPLE MHJE3TU/A 20W USB-C HIZLI ŞARJ GÜÇ
                                      ADAPTÖRÜ</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="price"
                                    >199,00 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="
                                      hidden-check
                                      bundle-check
                                      bundleProcess
                                    "
                                    name="chkBndURN_115410"
                                    id="chkBndURN_115410"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_115410"
                                    >SEÇ</label
                                  >
                                </div>
                                <input
                                  type="hidden"
                                  name="hdnUBN_KOD"
                                  id="hdnUBN_KOD_115410"
                                  class="inputCheck"
                                  value="115410"
                                />
                              </div>
                            </div>
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="apple-mhxh3tu-a-magsafe-charger.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/apple/thumb/115411-1_small.jpg"
                                        alt="APPLE MHXH3TU/A MAGSAFE KABLOSUZ ŞARJ AYGITI"
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >APPLE MHXH3TU/A MAGSAFE KABLOSUZ ŞARJ
                                      AYGITI</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="price"
                                    >399,00 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="
                                      hidden-check
                                      bundle-check
                                      bundleProcess
                                    "
                                    name="chkBndURN_115411"
                                    id="chkBndURN_115411"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_115411"
                                    >SEÇ</label
                                  >
                                </div>
                                <input
                                  type="hidden"
                                  name="hdnUBN_KOD"
                                  id="hdnUBN_KOD_115411"
                                  class="inputCheck"
                                  value="115411"
                                />
                              </div>
                            </div>
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/apple/thumb/TeoriV2-104375_small.jpg"
                                        alt="APPLE MWVG2ZM/A IPHONE 11 TELEFON KILIFI -  ŞEFFAF"
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >APPLE MWVG2ZM/A IPHONE 11 TELEFON KILIFI
                                      - ŞEFFAF</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="price"
                                    >399,00 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="
                                      hidden-check
                                      bundle-check
                                      bundleProcess
                                    "
                                    name="chkBndURN_104375"
                                    id="chkBndURN_104375"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_104375"
                                    >SEÇ</label
                                  >
                                </div>
                                <input
                                  type="hidden"
                                  name="hdnUBN_KOD"
                                  id="hdnUBN_KOD_104375"
                                  class="inputCheck"
                                  value="104375"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="text-center">
                            <a
                              href="#"
                              id="discount"
                              class="discount-link hide"
                            >
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
                        <div class="discount-prod-detail best-comment-view">
                          <div class="discount-text">
                            <div class="wrapper-star best-comment-star">
                              <div class="rank-star">
                                <span class="score" style="width: 80%"></span>
                              </div>
                            </div>
                            <a
                              href="javascript:void(0);"
                              class="btn-new-comment"
                              onclick="focusTab('yorumlar')"
                            >
                              <strong>Yorum Yap</strong>
                            </a>
                          </div>
                          <div class="discount-item-wrapper">
                            <p class="best-comment-text">
                              Merhabalar, Öncelikle daha öncede yaptığım
                              alışverişler gibi bu alışverişimde de
                              çalışanlarınızın yardımlarından dolayı çok
                              teşekkür ederim. Yine mağzanıza olan güvenimden
                              dolayı 3 yıllık kasko yaptırdım. Ancak kaskonun
                              sözle ifade edilen kısmı ile daha sonra telefon
                              müşteri hizmetlerinden anladığım kısmı biraz
                              farklı ve bu yüzden en iyisi yazılı olarak elimde
                              bulunması diye düşündüm ve telefon hattından
                              poliçeyi mail olarak istedim ama ne yazık ki
                              poliçeyi mail yolu ile alamadım ve tekrar mağazaya
                              gitmek durumumda kalıcam. Önerim kasko
                              işlemlerinde gerek pazarlama tanıtım sırasında
                              gerek ise satış sonrası bir evrak (basılı veya
                              digital) olarak müşteriye verilmesinin mağzanızın
                              prestiji açısından daha iyi olacağı kanısındayım.
                              Ayrıca satış sonrası bu yazıları yazma fırsatı
                              sunduğunuz için ayrıca teşekkür ederim.
                              Saygılarımla
                            </p>
                            <div class="item-all-comment">
                              <span class="d-inline-block"
                                ><strong></strong
                              ></span>
                              <a
                                href="javascript:void(0);"
                                id="allCommentBtn"
                                onclick="focusTab('yorumlar')"
                              >
                                <strong class="text-danger"
                                  >Tüm Yorumlar (982)</strong
                                >
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="discount-prod-detail fibaBank fibafor-mobile"
                        >
                          <div class="images-area">
                            <a href="/keyifli-garanti/" target="_blank">
                              <img
                                data-src="https://cdn.vatanbilgisayar.com/Upload/GENERAL/frontend/video-pic2.png"
                                class="video-pic"
                              />
                            </a>
                          </div>
                          <div class="text-area">
                            <a href="/keyifli-garanti/" target="_blank">
                              <h5><strong>Garanti Uzatma Fırsatı</strong></h5>
                            </a>
                            <span>
                              Keyifli garanti paket sigortası ile ürününüzün
                              garanti süresini +1 yıl uzatın ve ürününüzü
                              güvence altına alın.
                            </span>
                            <a
                              href="https://www.youtube.com/watch?v=M8rHFbw32ww&amp;feature=youtu.be"
                              class="yt-icon"
                              data-fancybox="yut2"
                            >
                              <i class="icon-youtube"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-product-info">
        <div class="product-info-head">
          <div class="global-container">
            <ul class="nav nav-tabs nav-product-detail" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="#genel-bakis"
                  aria-controls="genel-bakis"
                  role="tab"
                  data-toggle="tab"
                  >Ürün Açıklaması</a
                >
              </li>
              <li role="presentation">
                <a
                  href="#urun-ozellikleri"
                  aria-controls="urun-ozellikleri"
                  role="tab"
                  data-toggle="tab"
                  >Teknik Özellikler</a
                >
              </li>
              <li
                id="prdCommentsButton"
                data-url="/ProductDetail/Comments"
                data-productid="113155"
                role="presentation"
              >
                <a
                  href="#yorumlar"
                  aria-controls="messages"
                  role="tab"
                  data-toggle="tab"
                  >Yorumlar (984)</a
                >
              </li>
              <li role="presentation">
                <a
                  href="#odeme-secenekleri"
                  aria-controls="odeme-secenekleri"
                  role="tab"
                  data-toggle="tab"
                  >Ödeme Seçenekleri</a
                >
              </li>
              <li role="presentation">
                <a
                  href="#hata-bildir"
                  aria-controls="settings"
                  role="tab"
                  data-toggle="tab"
                  >Hata Bildir</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      prd_code: this.$route.params.productCode,
    }
  },

  computed: {
    ...mapGetters({
      get_productwithcode: 'get_productwithcode',
    }),
  },
  methods: {
    get_product() {
      return this.get_productwithcode(this.prd_code)
    },
    ...mapActions({
      addToCart: 'addToCart',
    }),
  },
}
</script>