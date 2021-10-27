<script>
export default {
  methods: {
    dropdown_open2(event) {
      const target = event.target
      target.classList.add('open')
    },
    dropdown_close2(event) {
      const target = event.target
      target.classList.remove('open')
    },
  },
}
</script>
<template>
  <div
    class="btn-group basketGroup "
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
      <span class="btn-basket--count">0</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-basket openBasket">
      <div class="basket-lists"></div>
      <li class="basket-bottom-dp">
        <div class="wrapper-total-cost">
          <span class="basket-sum-txt">TOPLAM:</span>
          <span class="update-"
            >0,00 <span class="price-cent-txt">TL</span></span
          >
        </div>
        <div class="text-center">
          <form
            action="/Basket"
            class="loaderForm"
            method="post"
            role="form"
          >
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