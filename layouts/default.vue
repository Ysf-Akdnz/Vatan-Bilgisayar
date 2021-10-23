<template>
  <div>
    <page-header></page-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <PageFooter/>
  </div>
</template>
<script>
export default {
  head: {
    script: [
      {
        src: 'https://kit.fontawesome.com/ce94c72459.js',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
      }
    ],
  },
}
</script>
<style>
body.tablesorter-disableSelection {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.tablesorter-resizable-container {
  position: relative;
  height: 1px;
}
.tablesorter-resizable-handle {
  position: absolute;
  display: inline-block;
  width: 8px;
  top: 1px;
  cursor: ew-resize;
  z-index: 3;
  user-select: none;
  -moz-user-select: none;
}
</style>
<style type="text/css">@media screen and (min-width: 769px) {
    .homepage-banner-pagination .swiper-pagination-bullet {
        width: 4%;
        padding: 10px 1px;
    }
}
</style>
<style type="text/css">.buyback-content {
        color: #CC0A00;
    }
    
    @media (max-width: 768px) {
        .category-carousel .swiper-button-next,
        .category-carousel .swiper-button-prev {
            display: none !important
        }
    }
</style>


