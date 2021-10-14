<template>
  <div >
    <page-header></page-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  head : {
    script : [
      {
      src : "https://kit.fontawesome.com/ce94c72459.js",
      crossorigin : "anonymous",
    }
    ]
  }
}
</script>
