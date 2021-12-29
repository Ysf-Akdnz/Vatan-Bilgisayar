<template>
  <div class="btn-group my-account">
    <button
      type="button"
      id="btnMyAccount"
      class="btn btn-primary btn-login dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="icon-user"></span>
      <span id="type">HESABIM</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-home account">
      <li><a href="/uyeBilgi/uyeBilgi">Üyeliğim</a></li>
      <li><a href="/uyeBilgi/siparistakip">Siparişlerim</a></li>
      <li><a href="/uyeBilgi/favorilistem">Favori Ürünlerim</a></li>
      <li><a href="/uyeBilgi/uyeAdres">Adres Bilgilerim</a></li>
      <li><a href="/uyeBilgi/mesaj">Mesajlarım</a></li>
      <li>
        <a href="/MemberTransaction/Logout?returnUrl=%2F&amp;logtab=signup"
          >ÇIKIŞ <span class="icon-door-open"></span
        ></a>
      </li>
    </ul>
  </div>
</template>