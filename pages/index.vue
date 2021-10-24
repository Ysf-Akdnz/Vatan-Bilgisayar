<template>
  <div > 
    <PageDealsOfDay/>
    <PageCategories/> 
    <PageLimitedStock/>
    <PageBestSeller/>
    <PageBestSellingBrands/>
    
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  mounted() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel()
    })
  },
}
</script>
