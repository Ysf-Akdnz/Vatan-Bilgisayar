<template>
  <div>
  <PageMain/>
  <PageCategories/>
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
