<template>
  <v-app dark>
    <div class="ysfysf" v-if="error.statusCode === 404">
      <i class="fas fa-radiation fa-5x"></i>
      <h1>
        {{ pageNotFound }}
      </h1>
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink class="link" to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 FOUND ERROR',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.ysfysf {
  margin: auto;
  width: 50%;
  border: 1px solid black;
  padding: 10px;
}
.ysfysf h1{
  display: inline;
}
.ysfysf i{
  margin: auto;
  display: inline;
  color: rgb(255, 0, 0);
}
.link{
  margin: auto;
  width: 50%;
  border: 1px solid black;
}
</style>
