<script>
import { mapActions } from 'vuex'
import { auth } from '../plugins/firebase.js'

export default {
  name: 'login',
  props: {
    openLogin: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isAlreadyLogged: false,
      email: '',
      password: '',
      name: '',
      phone: '',
      showPassword: true,
    }
  },
  created() {
    this.OnStateChanged()
  },
  methods: {
    ...mapActions({
      register: 'register',
      login: 'login',
    }),
    girisYap() {
      this.login({ email: this.email, password: this.password }).then(() => {
        this.OnStateChanged()
      })
    },
    OnStateChanged() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.isAlreadyLogged = true
          this.$router.push('/') // Anasayfaya yönlendiriyor giriş yapılmışsa
        } else this.isAlreadyLogged = false
      })
    },
    _register() {
      this.register({
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
      })
    },
  },
}
</script>
<template>
  <main class="signup basket-signup clear-singin">
    <div v-if="!isAlreadyLogged" class="clearfix">
      <div id="signup-form-container" class="signup-form">
        <ul class="nav" id="loginTab">
          <li :class="{ active: openLogin === true }">
            <nuxt-link
              :to="{
                name: 'login-signstate',
                params: { openLogin: true, signstate: 'signin' },
              }"
              >Giriş Yap</nuxt-link
            >
          </li>
          <li :class="{ active: openLogin === false }">
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
        <div class="tab-content">
          <div
            id="signin-section"
            class="tab-pane collapse fade"
            :class="{ 'active in': openLogin === true }"
          >
            <form
              action="/login?returnUrl=%2F"
              class="form-horizontal"
              id="loginform"
              method="post"
              role="form"
              novalidate="novalidate"
            >
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="WrD45UB9aqwCxOq5eq3owDcm_95vKKtfb3MafqT9P9RxCmdAY00GBBzQzDxl1OFH2F72gnWt--AzHEbNBNpNq77M0ro1"
              />
              <div class="form-group">
                <label for="">E-mail</label>
                <input
                  v-model="email"
                  v-model.lazy="email"
                  class="form-control email-input text-box single-line"
                  data-val="true"
                  data-val-email="Geçersiz e-posta adresi"
                  data-val-length="E-Posta alanı en az 5 ve en fazla 100 karakter olmalıdır."
                  data-val-length-max="100"
                  data-val-length-min="5"
                  data-val-required="E-Posta alanı boş geçilemez"
                  id="email"
                  name="Email"
                  placeholder="ad.soyad@example.com"
                  type="email"
                  value=""
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                  style="font-size=12px !important;"
                ></span>
              </div>
              <div class="form-group">
                <label for="">Şifre</label>
                <div class="input-group">
                  <input
                    v-model="password"
                    class="form-control"
                    data-val="true"
                    data-val-required="Şifre alanı boş geçilemez"
                    id="pass"
                    name="Password"
                    placeholder="****"
                    :type="showPassword ? 'password' : 'text'"
                  />
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="Password"
                    data-valmsg-replace="true"
                    style="font-size=12px !important;"
                  ></span>
                  <div class="input-group-addon">
                    <a
                      href="#"
                      class="toggle-password-visible"
                      @click.prevent="
                        {
                          showPassword = !showPassword
                        }
                      "
                      ><i class="fas fa-eye"></i
                    ></a>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                class="g-recaptcha-response"
                name="g-recaptcha-response"
                value="03AGdBq26hXu90xz2PWIyEozSdVTPMRmetqhUFtP_C_qYosPbbyg802kGiqkWggfJk_HNYPe7Kx7AWfLpC7iTuwo1zqQXBuCzvYiXMY38H9674DvugiqGTR1tukk4FYtXbrK5vnDSfRLq36hwH4pD63LaCcLYe3QXh7dM2Ai9Unbkb4J8LCWmpdGWile7F80esCmO_c8y_t3oUhV95iWcBKdQkWhwJbAvbLWgBTXbQmQw_Ouv6iM8pYi94Tei4XJP5qCqCGVa76AtgG-ordupT7mIqKLEcuoXbINaKdw5ZqMfeuHoHRfiV4jORo7squWscjWdGi-S59n_BfU9pTzSADglbqlbern-ynHq9mwYCJtgsaCQFW5loS4CN-24-lgj3-lK9ArE0BIG9AraAL0YRvEujyrXVvBpuyuDk13pJsheOw-81JYy-x63rpkElzv29JO0kQsOcSBBF"
              />
              <div class="form-group text-center">
                <button
                  id="login-button"
                  type="submit"
                  class="btn btn-primary signup-form__button"
                  @click.prevent="girisYap()"
                >
                  GİRİŞ YAP
                </button>
              </div>
              <div class="form-group text-center">
                <a
                  href="/uyeBilgi/sifremiunuttum?ReturnUrl=%2Flogin%2F%3FreturnUrl%3D%252F%26logtab%3Dsignin"
                  class="signup-form__forgot"
                  >Şifremi Unuttum</a
                >
              </div>
              <div class="form-group text-center">
                <div class="or">Veya</div>
              </div>
              <div class="form-group text-center">
                <a
                  href="javascript:void(0)"
                  onclick="loginWithFacebook()"
                  class="signup-form__facebook-login"
                  ><i class="icon-facebook"></i>FACEBOOK İLE BAĞLAN</a
                >
              </div>
            </form>
          </div>
          <div
            class="tab-pane"
            id="signup-section"
            :class="{ 'active in': openLogin === false }"
          >
            <form
              action="/Account/Register?returnUrl=%2F"
              class="form-horizontal"
              method="post"
              role="form"
              novalidate="novalidate"
            >
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="h3q1Nu0f-F2Fd_pJJPkBOiI5pRGfg24iqlNA7gPVaX_JkKQXYlH-S3J_idrknmJcOB9d_BX8w5MxwenODT8M9cb6MMA1"
              />
              <div style="color: red"></div>
              <div class="form-group">
                <label for="">İsim Soyisim<sup>*</sup></label>
                <input
                  v-model="name"
                  class="form-control text-box single-line"
                  data-val="true"
                  data-val-maxlength="İsim Soyisim alanı en fazla 50 karakter olmalıdır"
                  data-val-maxlength-max="50"
                  data-val-regex="Adınızı ve soyadınızı arada boşluk bırakarak doğru giriniz."
                  data-val-regex-pattern="^\s*([a-zA-ZğüşöçıİĞÜŞÖÇ\.-]{2,})(\s+([a-zA-ZğüşöçıİĞÜŞÖÇ\. -]{2,}))+\s*$"
                  data-val-required="İsim Soyisim alanı boş geçilemez"
                  id="Name"
                  name="Name"
                  placeholder=""
                  type="name"
                  value=""
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div class="form-group">
                <label for="">E-mail Adresi<sup>*</sup></label>
                <input
                  v-model="email"
                  class="form-control email-input text-box single-line"
                  data-val="true"
                  data-val-email="Geçersiz e-posta adresi"
                  data-val-length="E-Mail Adresi alanı en az 5 ve en fazla 100 karakter olmalıdır."
                  data-val-length-max="100"
                  data-val-length-min="5"
                  data-val-remote="Bu e-posta zaten kayıtlı."
                  data-val-remote-additionalfields="*.Email"
                  data-val-remote-type="POST"
                  data-val-remote-url="/Account/IsEmailAlreadyExists"
                  data-val-required="E-Mail Adresi alanı boş geçilemez"
                  id="Email"
                  name="Email"
                  placeholder=""
                  type="email"
                  value=""
                  list="email-options"
                /><datalist id="email-options"></datalist>
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div class="form-group">
                <label for="">Şifre<sup>*</sup></label>
                <div class="input-group w-100">
                  <div class="db-block">
                    <input
                      v-model="password"
                      class="form-control text-box single-line"
                      data-val="true"
                      data-val-minlength="En az 6 karakter girmelisiniz."
                      data-val-minlength-min="6"
                      data-val-required="Şifre alanı boş geçilemez"
                      id="Password"
                      name="Password"
                      placeholder=""
                      :type="showPassword ? 'password' : 'text'"
                      value=""
                    />
                    <div class="input-group-addon">
                      <a
                        href="#"
                        class="toggle-password-visible"
                        @click.prevent="
                          {
                            showPassword = !showPassword
                          }
                        "
                        ><i class="fas fa-eye"></i
                      ></a>
                    </div>
                  </div>
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="Password"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="form-group">
                <label for="">Cep Telefonu<sup>*</sup></label>
                <input
                  v-model="phone"
                  class="form-control phone-input text-box single-line"
                  data-val="true"
                  data-val-regex="Geçerli telefon numarası giriniz"
                  data-val-regex-pattern="^(\+\s?)?((?<!\+.*)\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$"
                  data-val-required="Cep Telefonu alanı boş geçilemez"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  placeholder=""
                  type="tel"
                  value=""
                  inputmode="text"
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="PhoneNumber"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <input
                type="hidden"
                class="g-recaptcha-response"
                name="g-recaptcha-response"
                value="03AGdBq26hXu90xz2PWIyEozSdVTPMRmetqhUFtP_C_qYosPbbyg802kGiqkWggfJk_HNYPe7Kx7AWfLpC7iTuwo1zqQXBuCzvYiXMY38H9674DvugiqGTR1tukk4FYtXbrK5vnDSfRLq36hwH4pD63LaCcLYe3QXh7dM2Ai9Unbkb4J8LCWmpdGWile7F80esCmO_c8y_t3oUhV95iWcBKdQkWhwJbAvbLWgBTXbQmQw_Ouv6iM8pYi94Tei4XJP5qCqCGVa76AtgG-ordupT7mIqKLEcuoXbINaKdw5ZqMfeuHoHRfiV4jORo7squWscjWdGi-S59n_BfU9pTzSADglbqlbern-ynHq9mwYCJtgsaCQFW5loS4CN-24-lgj3-lK9ArE0BIG9AraAL0YRvEujyrXVvBpuyuDk13pJsheOw-81JYy-x63rpkElzv29JO0kQsOcSBBF"
              />
              <div class="form-group">
                <div style="color: red"></div>
              </div>
              <div class="form-group">
                <div>
                  <label class="wrapper-checkbox">
                    <input
                      data-val="true"
                      data-val-required="The Kampanya Maili field is required."
                      id="AcceptCampaignMail"
                      name="AcceptCampaignMail"
                      type="checkbox"
                      value="true"
                    /><input
                      name="AcceptCampaignMail"
                      type="hidden"
                      value="false"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="AcceptCampaignMail"
                      data-valmsg-replace="true"
                    ></span>
                    <span
                      class="
                        checkmark
                        tlt-custom tlt-blue tlt-blue tlt-nonopacity
                      "
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-html="true"
                      title=""
                      data-original-title="Bu alanın doldurulması zorunludur."
                    ></span>
                    Kampanyalar ile ilgili eposta mesajları almak istiyorum.
                  </label>
                </div>
              </div>
              <div class="form-group signup-form__kvkk clearfix">
                Kişisel Verilerin Korunması Kanunu hakkında detaylı bilgi almak
                için
                <a
                  href="/kisisel-verilerin-korunmasi"
                  target="_blank"
                  class="btn-link"
                  >tıklayınız.</a
                >
                <br />
                Gönder butonuna basarak
                <a
                  href="#"
                  class="btn-link button-acik-riza-metni"
                  data-original-title=""
                  title=""
                  >Açık Rıza Metnini</a
                >
                okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
              </div>
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-primary signup-form__button"
                  @click.prevent="_register()"
                >
                  GÖNDER
                </button>
              </div>
              <div class="form-group text-center"></div>
            </form>
          </div>
          <div class="tab-pane collapse fade"></div>
        </div>
        <div class="signup-form__footer">
          <img src="/assets/dist/images/signup_logos.png" alt="Logos" />
        </div>
      </div>
    </div>
    <!--Giriş yapıldıysa-->
    <div v-if="isAlreadyLogged" class="row">
      <div class="col-xs-12">
        <div class="empty-basket">
          <div class="empty-basket-content">
            <span class="icon-website"></span>
          </div>
          <h2 style="color: red">Bu sayfaya erişemezsiniz !</h2>
          <h4>Zaten giriş yapmışsınız.</h4>
          <img
            style="width: 640px; height: 512px"
            src="https://www.freepnglogos.com/uploads/minions-png/minions-png-the-minion-language-despicable-38.png"
          />
          <p>Eğer isterseniz Anasayfa'ya geri dönebilirsiniz.</p>
          <a
            class="
              btn btn-primary
              signup-form__button
              change-password-form__button
            "
            href="/"
            >ANASAYFA</a
          >
        </div>
      </div>
    </div>
  </main>
</template>