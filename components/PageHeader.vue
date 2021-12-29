<script>
import { mapActions } from 'vuex'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../plugins/firebase.js'

import HeaderCartButton from './HeaderCartButton.vue'
import PageHeaderCategories from './PageHeaderCategories.vue'

export default {
  components: { HeaderCartButton, PageHeaderCategories },
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      name: '',
      mailim: '',
      dropbarName: 'GİRİŞ',
      uid: null,
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true
        this.dropbarName = 'HESABIM'
      } else {
        this.isLoggedIn = false
        this.dropbarName = 'GİRİŞ YAP'
      }
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout',
    }),
    getUserdata() {
      // Kullanıcı verilerini çekiyoruz.
      if (this.isLoggedIn) {
        // kullanici diye bir variable tanımladık. Email ile ismi çektik.
        const kullanici = auth.currentUser
        this.mailim = kullanici.email
        this.name = kullanici.displayName
        this.uid = kullanici.uid
      }
    },
    dk() {
      alert(this.mailim + ' ' + name + ' ' + this.uid)
    },
    dropdown_toggle(open) {
      const target = event.target
      if (open) {
        target.parentElement.classList.add('open')
      } else {
        setTimeout(function () {
          target.parentElement.classList.remove('open')
        }, 100)
      }
    },
    parent_open(event) {
      const Target = event.target
      return Target.parentElement.classList.contains('open')
    },
  },
}
</script>
<template>
  <header>
    <nav class="navbar navbar--inverse navbar-fixed-top">
      <div
        class="header-banner"
        style="
          background-image: url(https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/10-2021/morarkaplan.jpg);
        "
      >
        <a href="/iphone-13-akilli-telefon.html">
          <img
            src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/10-2021/iphone13-header.jpg"
            class="lazyimg hidden-xs lazy-init"
          />
          <img
            src="/assets/dist/images/_blank_1x1.png"
            data-src="https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/10-2021/iphone13-header.jpg"
            class="lazyimg hidden-md hidden-sm hidden-lg"
          />
        </a>
      </div>
      <div class="wrapper-topbar-menu no-border-bottom">
        <div class="global-container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <ul class="topbar-menu">
                <li class="topbar-menu__item">
                  <a
                    href="/magazalar"
                    class="topbar-menu__link"
                    style="color: #3a3a3a; font-weight: 700"
                  >
                    <span class="icon-store-line topbar-menu__icon"></span>
                    <span class="topbar-menu__text"
                      >Mağaza Çalışma Saatleri</span
                    >
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a
                    href="/webeozel-urunler"
                    class="topbar-menu__link"
                    style="color: #337ab7; font-weight: 700"
                  >
                    <span class="icon-globe topbar-menu__icon"></span>
                    <span class="topbar-menu__text">Web'e Özel</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/firsat-urunler" class="topbar-menu__link">
                    <span
                      class="icon-arrow-down-percent topbar-menu__icon"
                    ></span>
                    <span class="topbar-menu__text">Fırsat</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/yeni-urunler" class="topbar-menu__link">
                    <span class="icon-warranty topbar-menu__icon"></span>
                    <span class="topbar-menu__text">Yeni</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/pc-toplama" class="topbar-menu__link">
                    <span class="icon-warranty topbar-menu__icon"></span>
                    <span class="topbar-menu__text">PC Toplama</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/outlet" class="topbar-menu__link">
                    <span class="icon-box-hand topbar-menu__icon"></span>
                    <span class="topbar-menu__text">Outlet</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/uyeBilgi/siparistakip" class="topbar-menu__link">
                    <span class="icon-box-open topbar-menu__icon"></span>
                    <span class="topbar-menu__text">Sipariş Takibi</span>
                  </a>
                </li>
                <li class="topbar-menu__item">
                  <a href="/iletisim" class="topbar-menu__link">
                    <span class="icon-callcenter topbar-menu__icon"></span>
                    <span class="topbar-menu__text">Bize Ulaşın!</span>
                  </a>
                </li>
                <li class="topbar-menu__item topbar-head-apple">
                  <a href="/marka/apple/" class="topbar-menu__link">
                    <span><i class="fab fa-apple fa-2x"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-topbar-menu menu-toptools">
        <div class="global-container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bars"></span>
                </button>
              </div>

              <div class="navbar-header__content">
                <div class="navbar-header__area">
                  <a class="navbar-brand" href="/">
                    <img
                      src="https://www.vatanbilgisayar.com/assets/dist/images/vatanlogo.svg"
                      alt="Vatan Bilgisayar"
                    />
                  </a>
                </div>
                <div class="navbar-header__area">
                  <div class="search search-light">
                    <div class="search__form">
                      <input
                        autocomplete="off"
                        enterkeyhint="search"
                        data-searchurl="/Partial/Search"
                        id="navbar-search-input"
                        class="search__input"
                        type="text"
                        name="search"
                        placeholder="Aramak istediğiniz ürünü yazın"
                      />
                      <a href="javascript:void(0);" class="remove__button">
                        <span class="icon-times"></span>
                      </a>
                      <button class="search__button">
                        <span><i class="fas fa-search"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="navbar-header__area">
                  <div class="wrap-button">
                    <div class="btn-group my-account">
                      <button
                        id="btnMyAccount"
                        type="button"
                        class="btn btn-primary btn-login dropdown-toggle"
                        style="color: white"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        @blur="dropdown_toggle(false)"
                        @focus="dropdown_toggle(true)"
                        @mouseover="getUserdata"
                      >
                        <span><i class="fas fa-user"></i></span>
                        <span id="type">{{ dropbarName }}</span>
                      </button>
                      <ul
                        v-show="parent_open && isLoggedIn === true"
                        class="dropdown-menu dropdown-menu-home account"
                      >
                        <li><a href="/uyeBilgi/uyeBilgi">Üyeliğim</a></li>
                        <li>
                          <a @click.prevent="dk()">Hesap bilgilerini göster</a>
                        </li>
                        <li>
                          <a href="/uyeBilgi/siparistakip">Siparişlerim</a>
                        </li>
                        <li>
                          <a href="/uyeBilgi/favorilistem">Favori Ürünlerim</a>
                        </li>
                        <li>
                          <a href="/uyeBilgi/uyeAdres">Adres Bilgilerim</a>
                        </li>
                        <li><a href="/uyeBilgi/mesaj">Mesajlarım</a></li>
                        <li @click.prevent="logout()">
                          <a>ÇIKIŞ <i class="fas fa-sign-out-alt"></i></a>
                        </li>
                      </ul>
                      <ul
                        v-show="parent_open && isLoggedIn === false"
                        class="dropdown-menu dropdown-menu-home login"
                      >
                        <li>
                          <nuxt-link
                            :to="{
                              name: 'login-signstate',
                              params: { openLogin: true, signstate: 'signin' },
                            }"
                            >Giriş Yap</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="{
                              name: 'login-signstate',
                              params: {
                                openLogin: false,
                                signstate: 'signup',
                              },
                            }"
                            >Üye Ol</nuxt-link
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="btn-group referrer-search-area">
                      <i class="icon-search"></i>
                    </div>
                    <header-cart-button />
                    <!-- Burası SEPETİM BUTONU -->
                  </div>
                </div>
                <div id="navbar-search-results"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <page-header-categories />
      <!-- Burası Kategori -->
    </nav>
  </header>
</template>