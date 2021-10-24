<script>
export default {
  components: { },
  methods: {
    dropdown_open(event) {
      const target = event.target.parentElement
      target.classList.add('open')
    },
    dropdown_close(event) {
      const target = event.target
      target.classList.remove('open')
    },
  }
}
</script>
<template>
    <div class="wrapper-topbar-menu">
        <div class="global-container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="navbar-collapse collapse" id="navbar">
                <div class="tree-links">
                  <a class="topbar-menu__link" href="/firsat-urunler">
                    <span class="topbar-menu__text">FIRSAT</span>
                  </a>
                  <a class="topbar-menu__link" href="/webeozel-urunler">
                    <span class="topbar-menu__text">WEB'E ÖZEL</span>
                  </a>
                  <a class="topbar-menu__link" href="/yeni-urunler">
                    <span class="topbar-menu__text">YENİ</span>
                  </a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <!-- Başaramadık -->
                    <a
                      class="nav-first-link"
                      href="/cep-telefonu-modelleri/"
                      @mouseover="dropdown_open"
                      >Telefon</a
                    >
                    <!-- Böyle oldu en fazla -->
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>
                              Telefon<i
                                class="close-mebile-menu icon-times"
                              ></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/cep-telefonu-modelleri/"
                                >
                                  Tüm Telefonlar
                                </a>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/cep-telefonu-modelleri/"
                                >
                                  Cep Telefonları
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Cep Telefonları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/cep-telefonu-modelleri/"
                                          >
                                            Tüm Cep Telefonları
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/cep-telefonu-modelleri/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/general-mobile/cep-telefonu-modelleri/"
                                          >
                                            General Mobile
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/cep-telefonu-modelleri/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/oppo/cep-telefonu-modelleri/"
                                            >Oppo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/realme/cep-telefonu-modelleri/"
                                            >Realme</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/cep-telefonu-modelleri/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tecno/cep-telefonu-modelleri/"
                                            >Tecno</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/xiaomi/cep-telefonu-modelleri/"
                                            >Xiaomi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/vivo/cep-telefonu-modelleri/"
                                            >Vivo</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/tabletler/"
                                  >Tabletler</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Tabletler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/tabletler/"
                                            >Tüm Tabletler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/alcatel/tabletler/"
                                            >Alcatel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/tabletler/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/everpad/tabletler/"
                                            >Everpad</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hometech/tabletler/"
                                            >Hometech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/tabletler/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/tabletler/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/tabletler/"
                                            >Samsung</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/akilli-saatler/"
                                >
                                  Akıllı Saatler
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Akıllı Saatler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/akilli-saatler/"
                                          >
                                            Tüm Akıllı Saatler
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/alcatel/akilli-saatler/"
                                            >Alcatel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/akilli-saatler/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/honor/akilli-saatler/"
                                            >Honor</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/akilli-saatler/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/oppo/akilli-saatler/"
                                            >Oppo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/realme/akilli-saatler/"
                                            >Realme</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/akilli-saatler/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/xiaomi/akilli-saatler/"
                                            >Xiaomi</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/telefon-kiliflari/"
                                >
                                  Telefon Kılıfları
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Telefon Kılıfları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/telefon-kiliflari/"
                                          >
                                            Tüm Telefon Kılıfları
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/addison/telefon-kiliflari/"
                                            >Addison</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/telefon-kiliflari/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/belkin/telefon-kiliflari/"
                                            >Belkin</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cellularline/telefon-kiliflari/"
                                            >Cellularline</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hama/telefon-kiliflari/"
                                            >Hama</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/telefon-kiliflari/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/telefon-kiliflari/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trust/telefon-kiliflari/"
                                            >Trust</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ttec/telefon-kiliflari/"
                                            >Ttec</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/tablet-kiliflari/"
                                >
                                  Tablet Kılıfları
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Tablet Kılıfları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/tablet-kiliflari/"
                                          >
                                            Tüm Tablet Kılıfları
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/tablet-kiliflari/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/case-logic/tablet-kiliflari/"
                                            >Case Logic</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cellularline/tablet-kiliflari/"
                                            >Cellularline</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/tablet-kiliflari/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/targus/tablet-kiliflari/"
                                            >Targus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trust/tablet-kiliflari/"
                                            >Trust</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/ekran-koruyucu/"
                                >
                                  Ekran Koruyucular
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bluetooth-kulaklik/"
                                >
                                  Bluetooth Ürünleri
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kablosuz-telefon-modelleri/"
                                  >Kablosuz Telefonlar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/tasinabilir-batarya/"
                                >
                                  Taşınabilir Şarj Aletleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bluetooth-kulaklik-mikrofon/"
                                  >Kulaklık ve Mikrofon</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hafiza-karti/"
                                  >Hafıza Kartı
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hoparlor-ve-speaker/"
                                  >Hoparlör Speaker
                                </a>
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/telefonlar"
                              >Tüm Telefon Ürünlerini Gör</a
                            >
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/outlet/cep-telefonu-modelleri/"
                              style="margin-left: 15px"
                            >
                              Outlet Cep Telefonları
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/telefon.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/bilgisayar/"
                      @mouseover="dropdown_open"
                      >Bilgisayar</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-12">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>
                              Bilgisayar<i
                                class="close-mebile-menu icon-times"
                              ></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-3">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/bilgisayar/"
                                >
                                  Tüm Bilgisayarlar
                                </a>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/notebook/"
                                  >Notebook</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Notebooklar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/notebook/"
                                            >Tüm Notebooklar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/acer/notebook/"
                                            >Acer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/notebook/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/notebook/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dell/notebook/"
                                            >Dell</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dynabook/notebook/"
                                            >Dynabook</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/everbook/notebook/"
                                            >Everbook</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hometech/notebook/"
                                            >Hometech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/notebook/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hp/notebook/"
                                            >HP</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/notebook/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/notebook/"
                                            >MSI</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/honor/notebook/"
                                            >Honor</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/microsoft/notebook/"
                                            >Microsoft</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/masaustu-bilgisayarlar/"
                                  >Masaüstü Bilgisayarlar</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Masaüstü Bilgisayarlar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/masaustu-bilgisayarlar/"
                                          >
                                            Tüm Masaüstü Bilgisayarlar
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/acer/masaustu-bilgisayarlar/"
                                            >Acer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/masaustu-bilgisayarlar/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/masaustu-bilgisayarlar/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/exper/masaustu-bilgisayarlar/"
                                            >Exper</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hp/masaustu-bilgisayarlar/"
                                            >HP</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/masaustu-bilgisayarlar/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/masaustu-bilgisayarlar/"
                                            >MSI</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/tabletler/"
                                  >Tabletler</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Tabletler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/tabletler/"
                                            >Tüm Tabletler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/alcatel/tabletler/"
                                            >Alcatel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/tabletler/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/everpad/tabletler/"
                                            >Everpad</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hometech/tabletler/"
                                            >Hometech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/tabletler/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/tabletler/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/tabletler/"
                                            >Samsung</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/oyun-bilgisayari"
                                >
                                  Oyun Bilgisayarı
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Oyun Bilgisayarı
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/oyun-bilgisayari"
                                          >
                                            Tüm Oyun Bilgisayarları
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/acer/oyun-bilgisayari/"
                                            >Acer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/oyun-bilgisayari/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dell/oyun-bilgisayari/"
                                            >Dell</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hp/oyun-bilgisayari/"
                                            >HP</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/oyun-bilgisayari/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/oyun-bilgisayari/"
                                            >Msi</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/harici-diskler/"
                                >
                                  Harici Diskler
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Harici Diskler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/harici-diskler/"
                                          >
                                            Tüm Harici Diskler
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/seagate/harici-diskler/"
                                            >Seagate</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/toshiba/harici-diskler/"
                                            >Toshiba</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/wd/harici-diskler/"
                                            >WD</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/bluetooth-kulaklik-mikrofon/"
                                  >Kulaklık ve Mikrofon</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Kulaklık ve Mikrofonlar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/bluetooth-kulaklik-mikrofon/"
                                          >
                                            Tüm Kulaklık ve Mikrofonlar
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/bluetooth-kulaklik-mikrofon/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/bluetooth-kulaklik-mikrofon/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/beats/bluetooth-kulaklik-mikrofon/"
                                            >Beats</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hp/bluetooth-kulaklik-mikrofon/"
                                            >Hp</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/huawei/bluetooth-kulaklik-mikrofon/"
                                            >Huawei</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hypergear/bluetooth-kulaklik-mikrofon/"
                                            >Hypergear</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hyperx/bluetooth-kulaklik-mikrofon/"
                                            >Hyperx</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/honor/bluetooth-kulaklik-mikrofon/"
                                            >Honor</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/jabra/bluetooth-kulaklik-mikrofon/"
                                            >Jabra</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/jbl/bluetooth-kulaklik-mikrofon/"
                                            >JBL</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/logitech/bluetooth-kulaklik-mikrofon/"
                                            >Logitech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/oppo/bluetooth-kulaklik-mikrofon/"
                                            >Oppo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/philips/bluetooth-kulaklik-mikrofon/"
                                            >Philips</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/pioneer/bluetooth-kulaklik-mikrofon/"
                                            >Pioneer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/realme/bluetooth-kulaklik-mikrofon/"
                                            >Realme</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/rampage/bluetooth-kulaklik-mikrofon/"
                                            >Rampage</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/razer/bluetooth-kulaklik-mikrofon/"
                                            >Razer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/bluetooth-kulaklik-mikrofon/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sbs/bluetooth-kulaklik-mikrofon/"
                                            >SBS</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sennheiser/bluetooth-kulaklik-mikrofon/"
                                            >Sennheiser</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/skypal/bluetooth-kulaklik-mikrofon/"
                                            >Skypal</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/snopy/bluetooth-kulaklik-mikrofon/"
                                            >Snopy</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sony/bluetooth-kulaklik-mikrofon/"
                                            >Sony</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trust/bluetooth-kulaklik-mikrofon/"
                                            >Trust</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ttec/bluetooth-kulaklik-mikrofon/"
                                            >Ttec</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="no-brand-li">
                                <a
                                  class="magic-parent-link normal-nav-link"
                                  href="/oem-hazir-sistemler/"
                                >
                                  <strong> OEM Hazır Sistemler </strong>
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-monitorleri/"
                                  >Monitörler</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/yazici/"
                                  >Yazıcılar &amp; Tarayıcılar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/network-urunleri/"
                                  >Network Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/modemler/"
                                  >Modemler</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/guvenlik-antivirus-yazilimlari/"
                                >
                                  Güvenlik Yazılımları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/microsoft-office/"
                                  >Microsoft Office Programları
                                </a>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/isletim-sistemleri/"
                                  >İşletim Sistemleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/cantalar-kiliflar/"
                                  >Çanta ve Kılıflar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/notebook-stand-ve-sogutucular/"
                                  >Notebook Soğutucu</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    blue-menu-item
                                  "
                                  href="/pc-toplama/"
                                >
                                  <strong>PC/Bilgisayar Toplama</strong></a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-bilesenleri/"
                                  >Tüm OEM Ürünleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    red-menu-text
                                  "
                                  href="/gaming/"
                                  >Tüm Gaming Ürünleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    red-menu-text
                                  "
                                  href="/hoparlor-ve-speaker/"
                                  >Hoparlör Speaker</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/bilgisayar"
                            >
                              Tüm Bilgisayar Ürünlerini Gör
                            </a>
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/outlet/notebook/"
                              style="margin-left: 15px"
                            >
                              Outlet Notebooklar
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/tv-ev-elektronigi/"
                      @mouseover="dropdown_open"
                      >Tv, Ev Elektroniği</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>

                              TV &amp; Ev Elektroniği
                              <i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/tv-ev-elektronigi/"
                                >
                                  Tüm Tv &amp; Ev Elektroniği
                                </a>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/televizyon/"
                                >
                                  Televizyonlar
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Televizyonlar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/televizyon/"
                                            >Tüm Televizyonlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/axen/televizyon/"
                                            >Axen</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/grundig/televizyon/"
                                            >Grundig</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lg/televizyon/"
                                            >LG</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/philips/televizyon/"
                                            >Philips</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/televizyon/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/seg/televizyon/"
                                            >Seg</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sony/televizyon/"
                                            >Sony</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/vestel/televizyon/"
                                            >Vestel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tcl/televizyon/"
                                            >TCL</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/projeksiyon-cihazlari/"
                                  >Projeksiyon</a
                                >
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/dvd-ev-sinema-sistemleri/"
                                  >DVD ve Ev Sinema Sistemleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/uydu-sistemleri/"
                                  >Uydu Alıcısı ve Receiver</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/aski-aparatlari/"
                                  >TV Askı Aparatı</a
                                >
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/drone/"
                                  >Drone</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hoverboard/"
                                  >Hoverboard</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/smart-home/"
                                  >Akıllı Ev Sistemleri</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/tv-ev-elektronigi"
                            >
                              Tüm TV &amp; Ev Elektroniği Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/televizyon.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/bilgisayar-bilesenleri/"
                      @mouseover="dropdown_open"
                    >
                      Bilgisayar Parçaları
                    </a>
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-12">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>

                              Bilgisayar Parçaları
                              <i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-3">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/bilgisayar-bilesenleri/"
                                >
                                  Tüm Bilgisayar Parçaları
                                </a>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/anakart/"
                                  >Anakart</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Anakartlar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/anakart/"
                                            >Tüm Anakartlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/anakart/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gigabyte/anakart/"
                                            >Gigabyte</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/anakart/"
                                            >MSI</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-kasasi/"
                                  >Bilgisayar Kasaları</a
                                >
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/ekran-kartlari/"
                                >
                                  Ekran Kartları
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Ekran Kartları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/ekran-kartlari/"
                                          >
                                            Tüm Ekran Kartları
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/ekran-kartlari/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/evga/ekran-kartlari/"
                                            >Evga</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gigabyte/ekran-kartlari/"
                                            >Gigabyte</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/ekran-kartlari/"
                                            >MSI</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sapphire/ekran-kartlari/"
                                            >Sapphire</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/zotac/ekran-kartlari/"
                                            >Zotac</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/guc-kaynaklari-power/"
                                  >Güç Kaynakları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/guvenlik-antivirus-yazilimlari/"
                                >
                                  Güvenlik Yazılımları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hard-disk/"
                                  >Hard Disk</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/harici-diskler/"
                                  >Harici Disk</a
                                >
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hoparlor-ve-speaker/"
                                  >Hoparlör Speaker</a
                                >
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/islemciler/"
                                  >İşlemciler</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm İşlemciler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/islemciler/"
                                            >Tüm İşlemciler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/amd/islemciler/"
                                            >AMD</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/intel/islemciler/"
                                            >Intel</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/isletim-sistemleri/"
                                  >İşletim Sistemleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kesintisiz-guc-kaynaklari/"
                                >
                                  Kesintisiz Güç Kaynakları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/klavyeler/"
                                  >Klavye</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/microsoft-office/"
                                  >Microsoft Office Programları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/modemler/"
                                  >Modemler</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-monitorleri/"
                                  >Monitörler</a
                                >
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-mouse/"
                                  >Mouse</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/network-urunleri/"
                                  >Network Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-ram-bellek/"
                                  >Ram</a
                                >
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/solid-state-disk/"
                                  >SSD</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm SDD
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/solid-state-disk/"
                                          >
                                            Tüm SSD Ürünleri
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/corsair/solid-state-disk/"
                                            >Corsair</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/crucial/solid-state-disk/"
                                            >Crucial</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kingston/solid-state-disk/"
                                            >Kingston</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kioxia/solid-state-disk/"
                                            >Kioxia</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/micron/solid-state-disk/"
                                            >Micron</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ocz/solid-state-disk/"
                                            >OCZ</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/solid-state-disk/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sandisk/solid-state-disk/"
                                            >Sandisk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/wd/solid-state-disk/"
                                            >WD</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sogutma-sistemleri/"
                                  >Soğutma Sistemleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/usb-bellek/"
                                  >USB Bellek</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bluetooth-hoparlor/"
                                  >Bluetooth Hoparlör</a
                                >
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/bilgisayar-bilesenleri/"
                                  >Tüm OEM Ürünleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm OEM Ürünleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/bilgisayar-bilesenleri/"
                                          >
                                            Tüm Oem Ürünleri
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/a4-tech/bilgisayar-bilesenleri/"
                                            >A4-Tech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/amd/bilgisayar-bilesenleri/"
                                            >AMD</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/aoc/bilgisayar-bilesenleri/"
                                            >AOC</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/apple/bilgisayar-bilesenleri/"
                                            >Apple</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/asus/bilgisayar-bilesenleri/"
                                            >Asus</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cooler-master/bilgisayar-bilesenleri/"
                                          >
                                            Cooler Master
                                          </a>
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/corsair/bilgisayar-bilesenleri/"
                                            >Corsair</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cougar/bilgisayar-bilesenleri/"
                                            >Cougar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/crucial/bilgisayar-bilesenleri/"
                                            >Crucial</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dell/bilgisayar-bilesenleri/"
                                            >Dell</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/everest/bilgisayar-bilesenleri/"
                                            >Everest</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/evga/bilgisayar-bilesenleri/"
                                            >Evga</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/frisby/bilgisayar-bilesenleri/"
                                            >Frisby</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gigabyte/bilgisayar-bilesenleri/"
                                            >Gigabyte</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gskill/bilgisayar-bilesenleri/"
                                            >Gskill</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hp/bilgisayar-bilesenleri/"
                                            >HP</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/inca/bilgisayar-bilesenleri/"
                                            >Inca</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/intel/bilgisayar-bilesenleri/"
                                            >Intel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kingston/bilgisayar-bilesenleri/"
                                            >Kingston</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lenovo/bilgisayar-bilesenleri/"
                                            >Lenovo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lg/bilgisayar-bilesenleri/"
                                            >LG</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/logitech/bilgisayar-bilesenleri/"
                                            >Logitech</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/microsoft/bilgisayar-bilesenleri/"
                                            >Microsoft</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/msi/bilgisayar-bilesenleri/"
                                            >MSI</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/lexar/bilgisayar-bilesenleri/"
                                            >Lexar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ocz/bilgisayar-bilesenleri/"
                                            >OCZ</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/oem/bilgisayar-bilesenleri/"
                                            >OEM</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/philips/bilgisayar-bilesenleri/"
                                            >Philips</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/pioneer/bilgisayar-bilesenleri/"
                                            >Pioneer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/rampage/bilgisayar-bilesenleri/"
                                            >Rampage</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/razer/bilgisayar-bilesenleri/"
                                            >Razer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/samsung/bilgisayar-bilesenleri/"
                                            >Samsung</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sandisk/bilgisayar-bilesenleri/"
                                            >Sandisk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sapphire/bilgisayar-bilesenleri/"
                                            >Sapphire</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/seagate/bilgisayar-bilesenleri/"
                                            >Seagate</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/s-link/bilgisayar-bilesenleri/"
                                            >S-Link</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/thermaltake/bilgisayar-bilesenleri/"
                                            >Thermaltake</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/toshiba/bilgisayar-bilesenleri/"
                                            >Toshiba</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trust/bilgisayar-bilesenleri/"
                                            >Trust</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/viewsonic/bilgisayar-bilesenleri/"
                                            >Viewsonic</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/wd/bilgisayar-bilesenleri/"
                                            >WD</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/xigmatek/bilgisayar-bilesenleri/"
                                            >Xigmatek</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/zalman/bilgisayar-bilesenleri/"
                                            >Zalman</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/zotac/bilgisayar-bilesenleri/"
                                            >Zotac</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/yayinci-ekipmani/"
                                  >Yayıncı Ekipmanları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    blue-menu-item
                                  "
                                  href="/pc-toplama/"
                                >
                                  <strong>PC/Bilgisayar Toplama</strong></a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    blue-menu-item
                                  "
                                  href="/oem-hazir-sistemler/"
                                >
                                  <strong> OEM Hazır Sistemler </strong>
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                    red-menu-text
                                  "
                                  href="/gaming/"
                                  >Tüm Gaming Ürünleri</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/bilgisayar-bilesenleri"
                            >
                              Tüm Bilgisayar Bileşenleri Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/fotograf-makinesi-video-kamera"
                      @mouseover="dropdown_open"
                    >
                      Foto, Kamera
                    </a>
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a
                              >Kamera<i
                                class="close-mebile-menu icon-times"
                              ></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/fotograf-makinesi-video-kamera"
                                  >Tüm Kameralar</a
                                >
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/fotograf-makinesi/"
                                  >Dijital Kompakt Fotoğraf Makineleri
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Dijital Kompakt Fotoğraf
                                          Makineleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/fotograf-makinesi/"
                                            >Tüm Dijital Kompakt Fotoğraf
                                            Makineleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/canon/fotograf-makinesi/"
                                            >Canon</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/nikon/fotograf-makinesi/"
                                            >Nikon</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sony/fotograf-makinesi/"
                                            >Sony</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/dijital-slr-fotograf-makinesi/"
                                >
                                  Dijital SLR Fotoğraf Makineleri
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Dijital SLR Fotoğraf Makineleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/dijital-slr-fotograf-makinesi/"
                                            >Tüm Dijital SLR Fotoğraf
                                            Makineleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/canon/dijital-slr-fotograf-makinesi/"
                                            >Canon</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/nikon/dijital-slr-fotograf-makinesi/"
                                            >Nikon</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/video-kamera-modelleri/"
                                  >Video Kamera
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Video Kamera
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/video-kamera-modelleri/"
                                            >Tüm Video Kamera</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/canon/video-kamera-modelleri/"
                                            >Canon</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/everest/video-kamera-modelleri/"
                                            >Everest</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gopro/video-kamera-modelleri/"
                                            >GoPro</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/mio/video-kamera-modelleri/"
                                            >Mio</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sony/video-kamera-modelleri/"
                                            >Sony</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/aksiyon-kamerasi/"
                                  >Aksiyon Kameraları
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Aksiyon Kameraları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/aksiyon-kamerasi/"
                                            >Tüm Aksiyon Kameraları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gopro/aksiyon-kamerasi/"
                                            >GoPro</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/fotograf-makinesi-lensleri/"
                                  >Lens ve Aksesuarlar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hafiza-karti/"
                                  >Hafıza Kartları
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/dijital-cerceveler/"
                                  >Dijital Çerçeveler
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/araca-ici-kamera/"
                                  >Araç İçi Kamera</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/web-camera/"
                                  >Web Kamera</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/fotograf-makinesi-video-kamera"
                            >
                              Tüm Kamera Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/camera.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/ofis-malzemeleri/"
                      @mouseover="dropdown_open"
                      >Ofis, Kırtasiye</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>

                              Ofis, Kırtasiye
                              <i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/ofis-malzemeleri/"
                                >
                                  Tüm Ofis ve Kırtasiye Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kirtasiye/"
                                  >Kırtasiye</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/yazici/"
                                  >Yazıcılar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/tarayicilar/"
                                  >Tarayıcılar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/hesap-makinesi/"
                                  >Hesap Makinesi
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/yazici-aksesuar/"
                                  >Evrak İmha Makineleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/ozel-kagitlar/"
                                  >Kağıt</a
                                >
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kartus/"
                                  >Kartuş</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/toner/"
                                  >Toner</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/serit/"
                                  >Şerit</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/projeksiyon-cihazlari/"
                                  >Projeksiyon Cihazları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/microsoft-office/"
                                  >Microsoft Office Programları
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/program-kitaplari/"
                                  >Program Kitapları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/cd-dvd/"
                                >
                                  CD &amp; DVD
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kablolu-ev-telefonlari/"
                                  >Kablolu Ev Telefonları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kablosuz-telefon-modelleri/"
                                  >Kablosuz Telefonlar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/filament/"
                                  >Filament</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/ofis-malzemeleri"
                            >
                              Tüm Ofis Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/yazici.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/aksesuarlar/"
                      @mouseover="dropdown_open"
                      >Aksesuar</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>
                              Aksesuarlar<i
                                class="close-mebile-menu icon-times"
                              ></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/aksesuarlar/"
                                >
                                  Tüm Aksesuarlar
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/telefon-kiliflari/"
                                  >Telefon Kılıfları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kablolar/"
                                  >Kablolar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bluetooth-kulaklik-mikrofon/"
                                  >Kulaklıklar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/ekran-koruyucu/"
                                  >Ekran Koruyucular
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/piller-ve-sarj-aletleri/"
                                  >Pil ve Şarj Cihazları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/cantalar-kiliflar/"
                                  >Çanta ve Kılıflar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/mp3-calar/"
                                  >MP3 Çalarlar
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bataryalar/"
                                  >Bataryalar</a
                                >
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oto-ses-sistemleri/"
                                  >Oto Ses Sistemleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/muzik-aletleri/"
                                  >Müzik Aletleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/ses-kayit-cihazlari/"
                                  >Ses Kayıt Cihazları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/grafik-tabletler/"
                                  >Grafik Tabletler
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/aydinlatma-urunleri-2/"
                                  >Aydınlatıcılar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/baglanti-cihazlari-ve-ceviriciler/"
                                >
                                  Bağlantı Cihazları ve Çeviriciler
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kart-okuyucular/"
                                  >Kart Okuyucular</a
                                >
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/kumandalar/"
                                  >Kumandalar</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/mouse-pad/"
                                  >Mouse Pad</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/notebook-stand-ve-sogutucular/"
                                  >Notebook Soğutucu</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyun-kollari-ve-direksiyonlar/"
                                >
                                  Oyun Kolları ve Direksiyonlar
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/prizler/"
                                  >Prizler</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/tablet-kalemleri/"
                                  >Tablet Kalemleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bilgisayar-temizlik-urunleri/"
                                >
                                  Temizlik Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/bluetooth-hoparlor/"
                                >
                                  Bluetooth Hoparlör
                                </a>
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/aksesuarlar"
                              >Tüm Aksesuar Ürünlerini Gör</a
                            >
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/aksesuar.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/oyun-hobi"
                      @mouseover="dropdown_open"
                      >Oyun, Hobi</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a
                              >Hobi<i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a class="magic-parent-link" href="/oyun-hobi">
                                  Tüm Oyun Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyun-konsollari/"
                                  >Tüm Oyun Konsolları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/playstation/"
                                  >Playstation</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyun-konsollari-xbox/"
                                  >XBOX</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyunlar/"
                                  >Tüm Oyunlar
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyun-kollari/"
                                  >Tüm Oyun Kolları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sony/oyun-kollari/"
                                  >Playstation Oyun Kolları
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/microsoft/oyun-kollari/"
                                  >XBOX Oyun Kolları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/yeni-urunler/oyunlar/"
                                  >Yeni Çıkan Oyunlar
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyun-kulakligi/"
                                  >Gaming Kulaklık
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/gaming-mouse/"
                                  >Gaming Mouse
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/gaming-klavye/"
                                  >Gaming Klavye
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/oyuncu-koltuklari/"
                                  >Oyuncu Koltukları
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/robotik-kodlama/"
                                  >Robotik Kodlama</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/gamepass/"
                                  >Game Pass</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/egitici-oyunlar/"
                                  >Eğitici Oyunlar</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/oyun-hobi"
                              >Tüm Oyun Ürünlerini Gör</a
                            >
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <a href="/playstation/">
                                <img
                                  class="lazyimg"
                                  data-src="/Upload/GENERAL/menu-banner/ps.jpg"
                                  src="/assets/dist/images/_blank_1x1.png"
                                />
                              </a>
                            </div>
                            <div class="banner-list__item">
                              <a href="/oyun-konsollari-xbox/">
                                <img
                                  class="lazyimg lazy-init"
                                  data-src="/Upload/GENERAL/menu-banner/xbox.jpg"
                                  src="/assets/dist/images/_blank_1x1.png"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/elektrikli-ev-aletleri/"
                      @mouseover="dropdown_open"
                      >Ev, Mutfak</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-12">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>

                              Ev &amp; Mutfak Aletleri
                              <i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-12">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link second_sub"
                                  href="/elektrikli-ev-aletleri/"
                                  >Elektrikli Ev Aletleri
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Elektrikli Ev Aletleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <div class="col-md-3">
                                          <li>
                                            <a
                                              class="magic-parent-link"
                                              href="/elektrikli-ev-aletleri/"
                                              >Tüm Elektrikli Ev Aletleri</a
                                            >
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/elektrikli-supurgeler/"
                                              >Süpürgeler</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Süpürgeler
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/elektrikli-supurgeler/"
                                                        >Tüm Süpürgeler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/buharli-temizleyiciler/"
                                                        >Buharlı
                                                        Temizleyiciler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/dikey-supurgeler/"
                                                        >Dikey Süpürgeler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/robot-supurgeler/"
                                                        >Robot Süpürgeler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sarjli-supurgeler/"
                                                        >Şarjlı Süpürgeler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/toz-torbali-supurgeler/"
                                                        >Toz Torbalı
                                                        Süpürgeler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/toz-torbasiz-supurgeler/"
                                                        >Toz Torbasız
                                                        Süpürgeler</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/utuler/"
                                              >Ütüler</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Ütüler
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/utuler/"
                                                        >Tüm Ütüler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/buhar-kazanli-utuler/"
                                                        >Buhar Kazanlı Ütüler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/buharli-utuler/"
                                                        >Buharlı Ütüler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/dikey-utuler/"
                                                        >Dikey Ütüler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/seyahat-utusu/"
                                                        >Seyahat Ütüsü</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/sogutma-ve-isitma/"
                                              >Soğutma ve Isıtma</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Soğutma ve Isıtma
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/sogutma-ve-isitma/"
                                                        >Tüm Soğutma ve
                                                        Isıtma</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/klima/"
                                                        >Klimalar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/isiticilar/"
                                                        >Isıtıcılar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/hava-nemlendirici/"
                                                        >Hava Nemlendirici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/hava-temizleyici/"
                                                        >Hava Temizleyici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sofben/"
                                                        >Şofben</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/vantilator/"
                                                        >Vantilatör</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/aksesuar-9997618/"
                                              >Aksesuarlar</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Aksesuarlar
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/aksesuar-9997618/"
                                                        >Tüm Aksesuarlar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/utu-aksesuar/"
                                                        >Ütü Aksesuarı</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-12">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link second_sub"
                                  href="/mutfak-urunleri/"
                                  >Mutfak Aletleri
                                </a>
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Mutfak Aletleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <div class="col-md-3">
                                          <li>
                                            <a
                                              class="magic-parent-link"
                                              href="/mutfak-urunleri/"
                                              >Tüm Mutfak Aletleri</a
                                            >
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/blender/"
                                              >Blenderlar</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Blenderlar
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/blender/"
                                                        >Tüm Blenderlar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/blender-setleri/"
                                                        >Blender Setleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kisisel-blender/"
                                                        >Kişisel Blender</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tekli-blender/"
                                                        >Tekli Blender</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/surahi-tip-blender-smoothie/"
                                                        >Sürahi Tip Blender</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/surahi-tip-blender-smoothie-corba-makinesi/"
                                                        >Çorba Makinesi</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/ekmek-kizartma-makineleri/"
                                              >Ekmek Kızartma Makineleri</a
                                            >
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/ekmek-yapma-makineleri/"
                                              >Ekmek Yapma Makineleri
                                            </a>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/et-kiyma-makineleri/"
                                              >Et Kıyma Makineleri
                                            </a>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/izgara-makineleri/"
                                              >Izgara Makineleri
                                            </a>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/mutfak-tartilari-9997595/"
                                              >Mutfak Tartıları
                                            </a>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/rondolar-ve-dograyicilar/"
                                              >Rondolar ve Doğrayıcılar
                                            </a>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/su-isiticilari/"
                                              >Su Isıtıcıları</a
                                            >
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/yumurta-pisirme-makineleri/"
                                              >Yumurta Pişirme Makineleri
                                            </a>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="
                                                dropdown-menu-list__link
                                                special-menu-link
                                              "
                                              href="/elektrikli-ocaklar/"
                                              >Ocaklar</a
                                            >
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/firinlar-9997608/"
                                              >Fırınlar</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Fırınlar
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/firinlar-9997608/"
                                                        >Tüm Fırınlar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/mikrodalga-firinlar/"
                                                        >Mikrodalga Fırınlar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/mini-firinlar/"
                                                        >Mini Fırınlar</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/fritozler-ve-cok-amacli-pisiriciler/"
                                              >Fritözler ve Çok Amaçlı
                                              Pişiriciler</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Fritözler ve Çok
                                                      Amaçlı Pişiriciler
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/fritozler-ve-cok-amacli-pisiriciler/"
                                                        >Tüm Fritözler ve Çok
                                                        Amaçlı Pişiriciler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cok-amacli-pisiriciler/"
                                                        >Çok Amaçlı
                                                        Pişiriciler</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/fritozler/"
                                                        >Fritözler</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/icecek-hazirlama-urunleri/"
                                              >İçecek Hazırlama Makineleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm İçecek Hazırlama
                                                      Makineleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/icecek-hazirlama-urunleri/"
                                                        >Tüm İçecek Hazırlama
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cezve-tipi-turk-kahve-makineleri/"
                                                        >Cezve Tipi Türk Kahve
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cay-makineleri/"
                                                        >Çay Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cay-ve-kahve-makinesi-setleri/"
                                                        >Çay ve Kahve Makinesi
                                                        Setleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/espresso-makineleri/"
                                                        >Espresso Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/filtre-kahve-makineleri/"
                                                        >Filtre Kahve
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sut-kopurtme-makineleri/"
                                                        >Süt Köpürtme
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/turk-kahve-makineleri/"
                                                        >Türk Kahve
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/meyve-sikacagi/"
                                              >Meyve Sıkacakları</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Meyve Sıkacakları
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/meyve-sikacagi/"
                                                        >Tüm Meyve
                                                        Sıkacakları</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kati-meyve-sikacaklari/"
                                                        >Katı Meyve Sıkacağı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/narenciye-sikacaklari/"
                                                        >Narenciye Sıkacağı</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/mikser-makineleri/"
                                              >Mikser Makineleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Mikser Makineleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/mikser-makineleri/"
                                                        >Tüm Mikser
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/mikserler/"
                                                        >Mikserler</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/mutfak-sefleri-ve-robotlari/"
                                              >Mutfak Şefleri ve Robotlar</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Mutfak Şefleri ve
                                                      Robotlar
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/mutfak-sefleri-ve-robotlari/"
                                                        >Tüm Mutfak Şefleri ve
                                                        Robotlar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/mutfak-sefleri/"
                                                        >Mutfak Şefleri</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/ogutme-makineleri/"
                                              >Öğütme Makineleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Öğütme Makineleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/ogutme-makineleri/"
                                                        >Tüm Öğütme
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kahve-ogutme-makineleri/"
                                                        >Kahve Öğütme
                                                        Makineleri</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/su-filtre-cihazlari-ve-filtreleri/"
                                              >Su Filtre Cihazları ve
                                              Filtreleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Su Filtre Cihazları ve
                                                      Filtreleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/su-filtre-cihazlari-ve-filtreleri/"
                                                        >Tüm Su Filtre Cihazları
                                                        ve Filtreleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/musluk-suyu-filtreleme-cihazi-filtresi/"
                                                        >Musluk Suyu Filtreleme
                                                        Cihazı Filtresi</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/musluk-suyu-filtreleme-cihazlari/"
                                                        >Musluk Suyu Filtreleme
                                                        Cihazı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/surahi-filtreleri/"
                                                        >Sürahi Filtreleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/surahiler/"
                                                        >Sürahiler</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/tost-ve-waffle-yapma-makineleri/"
                                              >Tost ve Waffle Yapma
                                              Makineleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Tost ve Waffle Yapma
                                                      Makineleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/tost-ve-waffle-yapma-makineleri/"
                                                        >Tüm Tost ve Waffle
                                                        Yapma Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tost-makineleri/"
                                                        >Tost Makineleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/waffle-makineleri/"
                                                        >Waffle Makineleri</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                        <div class="col-md-3">
                                          <li
                                            class="
                                              dropdown-menu-list__item
                                              third-child
                                            "
                                          >
                                            <a
                                              class="dropdown-menu-list__link"
                                              href="/mutfak-gerecleri/"
                                              >Mutfak Gereçleri</a
                                            >
                                            <div class="dropdown-menu">
                                              <div class="row">
                                                <div class="menu-wrapper">
                                                  <ul
                                                    class="
                                                      dropdown-menu-list
                                                      go-back-wrapper
                                                    "
                                                  >
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          go-parent
                                                          dropdown-menu-list__link
                                                        "
                                                      ></a>

                                                      Tüm Mutfak Gereçleri
                                                      <i
                                                        class="
                                                          close-mebile-menu
                                                          icon-times
                                                        "
                                                      ></i>
                                                    </li>
                                                  </ul>
                                                  <ul
                                                    class="dropdown-menu-list"
                                                  >
                                                    <li>
                                                      <a
                                                        class="
                                                          magic-parent-link
                                                        "
                                                        href="/mutfak-gerecleri/"
                                                        >Tüm Mutfak Gereçleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/bicak-9997579/"
                                                        >Bıçak</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/buharli-pisirici/"
                                                        >Buharlı Pişirici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/buz-kalibi/"
                                                        >Buz Kalıbı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/ceviz-kirici/"
                                                        >Ceviz Kırıcı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cay-suzgeci/"
                                                        >Çay Süzgeci</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/caydanlik/"
                                                        >Çaydanlık</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cekirdek-cikarici/"
                                                        >Çekirdek Çıkarıcı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/cirpici/"
                                                        >Çırpıcı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/degirmen/"
                                                        >Değirmen</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/dilimleyici/"
                                                        >Dilimleyici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/dograyici/"
                                                        >Doğrayıcı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/dondurma-kasigi/"
                                                        >Dondurma Kaşığı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/firca/"
                                                        >Fırça</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/hamur-kesici/"
                                                        >Hamur Kesici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kek-kalibi/"
                                                        >Kek Kalıbı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kepce/"
                                                        >Kepçe</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/konserve-acacagi/"
                                                        >Konserve Açacağı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/limon-sikacagi/"
                                                        >Limon Sıkacağı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/makas/"
                                                        >Makas</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/masa-9997524/"
                                                        >Maşa</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/muffin-kalibi/"
                                                        >Muffin Kalıbı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/pasta-pompasi/"
                                                        >Pasta Pompası</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/patates-dilimleyici/"
                                                        >Patates Dilimleyici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/pipet/"
                                                        >Pipet</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/pizza-borek-kesici/"
                                                        >Pizza Börek Kesici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/pratik-mutfak-robotlari/"
                                                        >Pratik Mutfak
                                                        Robotları</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/rende/"
                                                        >Rende</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/rutubet-onleyici/"
                                                        >Rutubet Önleyici</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sarimsak-presi/"
                                                        >Sarımsak Presi</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sebze-soyucu/"
                                                        >Sebze Soyucu</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/servis-kasigi/"
                                                        >Servis Kaşığı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sicratmaz/"
                                                        >Sıçratmaz</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/soyma-seti/"
                                                        >Soyma Seti</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/spatula/"
                                                        >Spatula</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/suzgec/"
                                                        >Süzgeç</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sise-acacagi/"
                                                        >Şişe Açacağı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tart-kalibi/"
                                                        >Tart Kalıbı</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tava/"
                                                        >Tava</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tencere/"
                                                        >Tencere</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tencere-seti/"
                                                        >Tencere Seti</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/termoslar/"
                                                        >Termoslar</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/tuzluk/"
                                                        >Tuzluk</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/servis-setleri/"
                                                        >Servis Setleri</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/duduklu-tencere/"
                                                        >Düdüklü Tencere</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/kahve-presi/"
                                                        >Kahve Presi</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/sinek-oldurucu/"
                                                        >Sinek Öldürücü</a
                                                      >
                                                    </li>
                                                    <li
                                                      class="
                                                        dropdown-menu-list__item
                                                      "
                                                    >
                                                      <a
                                                        class="
                                                          dropdown-menu-list__link
                                                          special-menu-link
                                                        "
                                                        href="/su-pompasi/"
                                                        >Su Pompası</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/ev-aletleri-kisisel-bakim"
                            >
                              Tüm Ev Aletleri Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/kisisel-bakim-urunleri/"
                      @mouseover="dropdown_open"
                      >Kişisel Bakım</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-9">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a>

                              Kişisel Bakım Ürünleri
                              <i class="close-mebile-menu icon-times"></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-4">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/kisisel-bakim-urunleri/"
                                >
                                  Tüm Kişisel Bakım Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/tiras-makineleri/"
                                  >Tıraş Makineleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/epilasyon-aletleri"
                                  >Epilasyon Aletleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sac-kurutma-makineleri/"
                                  >Saç Kurutma Makineleri</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sac-sekillendirme-setleri/"
                                >
                                  Saç Şekillendirme Setleri
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/agiz-ve-dis-bakim-urunleri/"
                                >
                                  Ağız ve Diş Bakım Ürünleri
                                </a>
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sarjli-dis-fircalari/"
                                  >Şarjlı Diş Fırçaları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sac-duzlestiriciler/"
                                  >Saç Düzleştiriciler</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sakal-sekillendirme-makineleri/"
                                >
                                  Sakal Şekillendirme Makineleri
                                </a>
                              </li>
                            </div>
                            <div class="col-md-4">
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/sac-masalari/"
                                  >Saç Maşaları</a
                                >
                              </li>
                              <li class="no-brand-li">
                                <a
                                  class="
                                    magic-parent-link
                                    normal-nav-link
                                    no-brand
                                  "
                                  href="/tartilar/"
                                  >Tartılar</a
                                >
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/kisisel-bakim-urunleri/"
                            >
                              Tüm Kişisel Bakım Ürünlerini Gör
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-3 banner-list-wrapper">
                          <div class="banner-list">
                            <div class="banner-list__item">
                              <img
                                class="lazyimg"
                                data-src="/Upload/GENERAL/menu-banner/kisisel-bakim.jpg"
                                src="/assets/dist/images/_blank_1x1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown" @mouseleave="dropdown_close">
                    <a
                      class="nav-first-link"
                      href="/spor-aletleri/"
                      @mouseover="dropdown_open"
                      >Spor, Outdoor</a
                    >
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="menu-wrapper col-lg-12">
                          <ul class="dropdown-menu-list go-back-wrapper">
                            <li class="dropdown-menu-list__item">
                              <a class="go-parent dropdown-menu-list__link"></a
                              >Spor, Outdoor<i
                                class="close-mebile-menu icon-times"
                              ></i>
                            </li>
                          </ul>
                          <ul class="dropdown-menu-list parent-wrappers">
                            <div class="col-md-3">
                              <li>
                                <a
                                  class="magic-parent-link"
                                  href="/spor-aletleri/"
                                >
                                  Tüm Spor Ürünleri
                                </a>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/kosu-bandi/"
                                  >Koşu Bandı</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Koşu Bantları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/kosu-bandi/"
                                            >Tüm Koşu Bantları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kosu-bandi-aksesuarlari/"
                                            >Koşu Bandı Aksesuarları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/manuel-eglimli/"
                                            >Manuel Eğimli</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/masajli-ve-manuel-eglimli/"
                                            >Masajlı ve Manuel Eğimli</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/otomatik-egimli/"
                                            >Otomatik Eğimli</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/kamp-urunleri/"
                                  >Kamp Ürünleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Kamp Ürünleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/kamp-urunleri/"
                                            >Tüm Kamp Ürünleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/acil-durum-ekipmanlari/"
                                            >Acil Durum Ekipmanları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/buzluk-sogutucu/"
                                            >Buzluk/Soğutucu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kamp-cadirlari/"
                                            >Çadırlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cakilar/"
                                            >Çakılar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/el-aletleri/"
                                            >El Aletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hamaklar/"
                                            >Hamaklar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kamp-mati/"
                                            >Kamp Matı</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kamp-sandalyeleri/"
                                            >Kamp Sandalyeleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kamp-yataklari/"
                                            >Kamp Yatakları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/musambalar/"
                                            >Muşambalar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/outdoor-aksesuarlar/"
                                            >Outdoor Aksesuarlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/semsiyeler/"
                                            >Şemsiyeler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/termos-ve-bardaklar/"
                                            >Termos ve Bardaklar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/uyku-tulumlari/"
                                            >Uyku Tulumları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yastiklar/"
                                            >Yastıklar</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/kondisyon-bisikletleri/"
                                  >Kondisyon Bisikletleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Kondisyon Bisikletleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/kondisyon-bisikletleri/"
                                            >Tüm Kondisyon Bisikletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dikey-bisiklet/"
                                            >Dikey Bisiklet</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/eliptik-bisikletler/"
                                            >Eliptik Bisiklet</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/spinners/"
                                            >Spinners</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yatay-bisiklet/"
                                            >Yatay Bisiklet</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/pilates-yoga-urunleri/"
                                  >Pilates/Yoga Ürünleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Pilates/Yoga Ürünleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/pilates-yoga-urunleri/"
                                            >Tüm Pilates/Yoga Ürünleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bar/"
                                            >Bar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/blok/"
                                            >Blok</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bungee/"
                                            >Bungee</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cember/"
                                            >Çember</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/egzersiz-bandi/"
                                            >Egzersiz Bandı</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/mat-minder/"
                                            >Mat/Minder</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/pilates-setleri/"
                                            >Pilates Setleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/pilates-topu/"
                                            >Pilates Topu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/silindir/"
                                            >Silindir</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/step/"
                                            >Step</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/spor-giyim/"
                                  >Giyim</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Giyim
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/spor-giyim/"
                                            >Tüm Giyim</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/alin-bandi/"
                                            >Alın Bandı</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/atki/"
                                            >Atkı</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/atlet/"
                                            >Atlet</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/balaklava/"
                                            >Balaklava</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bandana/"
                                            >Bandana</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bere/"
                                            >Bere</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bileklik-9997335/"
                                            >Bileklik</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/boxer/"
                                            >Boxer</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/boyunluk/"
                                            >Boyunluk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bra/"
                                            >Bra</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ceket/"
                                            >Ceket</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/corap/"
                                            >Çorap</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/eldiven-urunleri/"
                                            >Eldiven</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/etek/"
                                            >Etek</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gomlek/"
                                            >Gömlek</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/havlu-urunleri/"
                                            >Havlu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/iclik/"
                                            >İçlik</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kapri/"
                                            >Kapri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kolluk-urunleri/"
                                            >Kolluk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kulaklik/"
                                            >Kulaklık</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/mayo/"
                                            >Mayo</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/mont/"
                                            >Mont</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/pantolon/"
                                            >Pantolon</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/polar/"
                                            >Polar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sweatshirt/"
                                            >Sweatshirt</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sapka/"
                                            >Şapka</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sort/"
                                            >Şort</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tayt/"
                                            >Tayt</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tozluk/"
                                            >Tozluk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/t-shirt/"
                                            >T-Shirt</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tulum-urunleri/"
                                            >Tulum</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yagmurluk/"
                                            >Yağmurluk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yelek/"
                                            >Yelek</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/vucut-gelistirme-aletleri/"
                                  >Vücut Geliştirme Aletleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Vücut Geliştirme Aletleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/vucut-gelistirme-aletleri/"
                                            >Tüm Vücut Geliştirme Aletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/agirlik-kemerleri/"
                                            >Ağırlık Kemerleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/atlama-ipi/"
                                            >Atlama İpi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ayak-agirliklari/"
                                            >Ayak Ağırlıkları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/barfiks-bari/"
                                            >Barfiks ve Barlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/calisma-istasyonlarii/"
                                            >Çalışma İstasyonları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dambil/"
                                            >Dambıl</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/egzersiz-aletleri/"
                                            >Egzersiz Aletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/fitness-cantalari/"
                                            >Fitness Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/flans/"
                                            >Flanş</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kondisyon-kurekleri/"
                                            >Kürekler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/mekik-ve-sinav/"
                                            >Mekik ve Şınav</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/spor-ayakkabi/"
                                  >Ayakkabılar</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Ayakkabılar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/spor-ayakkabi/"
                                            >Tüm Ayakkabılar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bot-ve-cizgiler/"
                                            >Bot ve Çizmeler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/gunluk/"
                                            >Günlük</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kosu/"
                                            >Koşu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kosu-ve-yuruyus/"
                                            >Koşu ve Yürüyüş</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sandalet/"
                                            >Sandalet</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sprey/"
                                            >Sprey</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tabanlik-9997106/"
                                            >Tabanlık</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/terlikler/"
                                            >Terlikler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tirmanis-ayakkabilari/"
                                            >Tırmanış</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trekking-ayakkabilari/"
                                            >Trekking</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/bisiklet/"
                                  >Bisikletler ve Tekerlekli Ürünler</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Bisikletler ve Tekerlekli Ürünler
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/bisiklet/"
                                            >Tüm Bisikletler ve Tekerlekli
                                            Ürünler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cocuk-bisikleti/"
                                            >Çocuk Bisikleti</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dag-bisikletleri/"
                                            >Dağ Bisikletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/elektrikli-bisikletler/"
                                            >Elektrikli Bisikletler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/elektrikli-scooter-9997708/"
                                            >Elektrikli Scooter</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bisiklet-kasklari/"
                                            >Kasklar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kaykay-urunleri/"
                                            >Kaykay</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/koruyucu-urunleri/"
                                            >Koruyucu Ürünler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/paten-urunleri/"
                                            >Paten</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/scooter-urunleri/"
                                            >Scooter</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sehir-bisikletleri/"
                                            >Şehir Bisikletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yaris-bisikletleri/"
                                            >Yarış Bisikletleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yedek-parcalar/"
                                            >Yedek Parçalar</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/deniz-havuz-urunleri/"
                                  >Deniz/Havuz Ürünleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Deniz/Havuz Ürünleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/deniz-havuz-urunleri/"
                                            >Tüm Deniz/Havuz Ürünleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/agirlik-kemeri/"
                                            >Ağırlık Kemeri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/baslik/"
                                            >Başlık</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bebek-koltugu/"
                                            >Bebek Koltuğu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bone/"
                                            >Bone</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bot/"
                                            >Bot</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/can-simidi/"
                                            >Can Simidi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/can-yelegi/"
                                            >Can Yeleği</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cocuk-botlari/"
                                            >Çocuk Botları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dalis-elbisesi/"
                                            >Dalış Elbisesi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/deniz-topu/"
                                            >Deniz Topu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/havuz/"
                                            >Havuz</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kolluk/"
                                            >Kolluk</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kurek/"
                                            >Kürek</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/maske2/"
                                            >Maske</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/paletler/"
                                            >Paletler</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/plaj-setleri/"
                                            >Plaj Setleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/su-oyunlari/"
                                            >Su Oyunları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/snorkel/"
                                            >Şnorkel</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tikaclar/"
                                            >Tıkaçlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yatak/"
                                            >Yatak</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yuzme-tahtasi/"
                                            >Yüzme Tahtası</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/yuzucu-gozlukleri/"
                                            >Yüzücü Gözlükleri</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/toplar/"
                                  >Toplar</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Toplar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/toplar/"
                                            >Tüm Toplar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/amerikan-futbolu/"
                                            >Amerikan Futbolu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/badminton-toplari/"
                                            >Badminton</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/basketbol-topu/"
                                            >Basketbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/futbol-topu/"
                                            >Futbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/futsal-9997428/"
                                            >Futsal</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hentbol-topu/"
                                            >Hentbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/korfball/"
                                            >Korfball</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/squash/"
                                            >Squash</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/su-topu/"
                                            >Su Topu</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tenis-9997350/"
                                            >Tenis</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/top-aksesuarlari/"
                                            >Top Aksesuarları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/voleybol-topu/"
                                            >Voleybol</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                            <div class="col-md-3">
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/canta-ve-bavullar/"
                                  >Çanta ve Bavullar</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Çanta ve Bavullar
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/canta-ve-bavullar/"
                                            >Tüm Çanta ve Bavullar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/ayakkabi-cantasi/"
                                            >Ayakkabı Çantası</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bebek-bakim-cantalari/"
                                            >Bebek Bakım Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bel-cantalari/"
                                            >Bel Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bisiklet-cantalari/"
                                            >Bisiklet Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/boyun-cantalari/"
                                            >Boyun Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/cuzdan/"
                                            >Cüzdan</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/canta-aksesuarlari/"
                                            >Çanta Aksesuarları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/canta-kilitleri/"
                                            >Çanta Kilitleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/el-cantalari/"
                                            >El Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/omuz-cantalari/"
                                            >Omuz Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/piknik-cantalari/"
                                            >Piknik Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/plaj-cantalari/"
                                            >Plaj Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/seyahat-cantalari/"
                                            >Seyahat Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sirt-cantalari/"
                                            >Sırt Çantaları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/sogutucu-canta/"
                                            >Soğutucu Çanta</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/su-gecirmez-aksesuarlar/"
                                            >Su Geçirmez Aksesuarlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/su-gecirmez-canta/"
                                            >Su Geçirmez Çanta</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/top-cantasi/"
                                            >Top Çantası</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/toz-torbasi/"
                                            >Toz Torbası</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/trekking-cantalari/"
                                            >Trekking Çantaları</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/bireysel-takim-sporlari/"
                                  >Bireysel/Takım Sporları</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Bireysel/Takım Sporları
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/bireysel-takim-sporlari/"
                                            >Tüm Bireysel/Takım Sporları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/badminton/"
                                            >Badminton</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/basketbol/"
                                            >Basketbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/beyzbol-urunleri/"
                                            >Beyzbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dart-urunleri/"
                                            >Dart</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/dovus-sporlari/"
                                            >Dövüş Sporları</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/frizbi-urunleri/"
                                            >Frizbi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/futbol/"
                                            >Futbol</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/hakem-urunleri/"
                                            >Hakem Ürünleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/masa-tenisi/"
                                            >Masa Tenisi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/tenis/"
                                            >Tenis</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/voleybol/"
                                            >Voleybol</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="dropdown-menu-list__item second-child">
                                <a
                                  class="dropdown-menu-list__link"
                                  href="/spor-saatleri/"
                                  >Spor Saatleri</a
                                >
                                <div class="dropdown-menu">
                                  <div class="row">
                                    <div class="menu-wrapper">
                                      <ul
                                        class="
                                          dropdown-menu-list
                                          go-back-wrapper
                                        "
                                      >
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              go-parent
                                              dropdown-menu-list__link
                                            "
                                          ></a>

                                          Tüm Spor Saatleri
                                          <i
                                            class="close-mebile-menu icon-times"
                                          ></i>
                                        </li>
                                      </ul>
                                      <ul class="dropdown-menu-list">
                                        <li>
                                          <a
                                            class="magic-parent-link"
                                            href="/spor-saatleri/"
                                            >Tüm Spor Saatleri</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kalp-atis-monitor-aksesuarlari/"
                                            >Aksesuarlar</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/bisiklet-serisi/"
                                            >Bisiklet Serisi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/fitness-serisi/"
                                            >Fitness Serisi</a
                                          >
                                        </li>
                                        <li class="dropdown-menu-list__item">
                                          <a
                                            class="
                                              dropdown-menu-list__link
                                              special-menu-link
                                            "
                                            href="/kosu-ve-multisport-serisi/"
                                            >Koşu ve Multisport Serisi</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </ul>
                          <div class="m-b-30 m-l-45">
                            <a
                              class="
                                btn
                                btn-default
                                btn-transparent
                                btn-show-all-pc-product
                              "
                              href="/spor-aletleri"
                              >Tüm Spor Ürünlerini Gör</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="static-pages-links auth-link">
                    <a class="topbar-menu__link" href="/uyeBilgi/siparistakip">
                      <span class="topbar-menu__text">Siparişlerim</span>
                    </a>
                  </li>
                  <li class="static-pages-links auth-link">
                    <a class="topbar-menu__link" href="/uyeBilgi/favorilistem">
                      <span class="topbar-menu__text">Favorilerim</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/uyeBilgi/siparistakip">
                      <span class="topbar-menu__text">Sipariş Takibi</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/pc-toplama">
                      <span class="topbar-menu__text">PC Toplama</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/gaming">
                      <span class="topbar-menu__text">Gaming</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/hakkimizda">
                      <span class="topbar-menu__text">Kurumsal</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/outlet">
                      <span class="topbar-menu__text">Outlet</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/magazalar">
                      <span class="topbar-menu__text">Mağazalar</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/servis-takip-formu">
                      <span class="topbar-menu__text">Servis Takip Formu</span>
                    </a>
                  </li>
                  <li class="static-pages-links">
                    <a class="topbar-menu__link" href="/iletisim">
                      <span class="topbar-menu__text">Bize Ulaşın</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>