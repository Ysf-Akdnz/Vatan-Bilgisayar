<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getCartProducts: 'getCartProducts',
    }),
    cartLength() {
      return this.getCartProducts().length
    },
  },
  methods: {
    dropdown_open2(event) {
      const target = event.target
      target.classList.add('open')
    },
    dropdown_close2(event) {
      const target = event.target
      target.classList.remove('open')
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
  <div
    class="btn-group basketGroup"
    @mouseleave="dropdown_close2"
    @mouseenter="dropdown_open2"
  >
    <button
      type="button"
      id="btnMyBasket"
      class="btn btn-primary btn-basket dropdown-toggle"
      style="color: white"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span><i class="fas fa-shopping-cart"></i></span>
      <span class="btn-basket--text">SEPETİM</span>
      <span class="btn-basket--count">{{ cartLength }}</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-basket openBasket">
      <div class="basket-lists">
        <span v-if="!getCartProducts()" class="nothing-prod-in-basket"
          >Sepetinizde Ürün Bulunmamaktadır.</span
        >
        <li
          v-for="item in getCartProducts()"
          :key="item.id"
          id="24078076"
          class="test"
          data-l2="CELCEP"
          data-k3="Akıllı Telefon"
          data-br="SAMSUNG"
          data-count="1"
        >
          <nuxt-link
            :to="{
              name: 'productCode',
              params: { productCode: item.product.code },
            }"
          >
            <picture class="active">
              <img
                :src="item.product.img_url"
                class="img-responsive product-list__image"
              />
            </picture>
            <div class="wrapper-product-text">
              <span class="product-name">{{ item.product.name }}</span>
              <span class="product-cost">{{ item.product.cost }} TL</span>
            </div>
          </nuxt-link>
        </li>
      </div>
      <li class="basket-bottom-dp">
        <div class="wrapper-total-cost">
          <span class="basket-sum-txt">TOPLAM:</span>
          <span class="update-"
            >{{ gettotal() }} <span class="price-cent-txt">TL</span></span
          >
        </div>
        <div class="text-center">
          <form action="/Basket" class="loaderForm" method="post" role="form">
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="5mjDcMtkLrO3DGxLVRbfmgC_HrYSup93tIAY3b488AO0LGqDKdHOm3Xg61SGfdhByXGGDk14wE_9qbvUCcF9XJwGGGQ1"
            />
            <input type="hidden" id="current" name="current" value="0" />
            <input
              class="btn btn-finish btn-finish__dropdown"
              type="submit"
              value="ALIŞVERİŞİ TAMAMLA"
            />
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>