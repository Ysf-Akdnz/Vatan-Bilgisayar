<template>
  <div > 
    <page-home-slider/>
    <PageDealsOfDay/>
    <PageCategories/> 
    <PageLimitedStock/>
    <PageBestSeller/>
    <PageBestSellingBrands/>
    
  </div>
</template>
<script>
import $ from 'jquery';
import PageHomeSlider from '~/components/PageHomeSlider.vue';
export default {
  components: { PageHomeSlider },
  mounted() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel()
    })
  },
}
</script>
