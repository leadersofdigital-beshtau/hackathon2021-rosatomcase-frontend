<template>
  <div class="app">

    <div class="app__header">
      <Header :page="key"></Header>
    </div>

    <main class="app__main">
      <router-view :key="key"/>
    </main>

    <div class="app__footer">
      <Footer :page="key"></Footer>
    </div>

  </div>
</template>

<script>
export default {

  name: "Home",
  components: {
    Footer,
    Header,
  },
  computed: {
    key() {
      return this.$route.meta.key !== undefined
        ? this.$route.meta.key
        : this.$route;
    },
  },
};

</script>

<style lang="scss">
</style>
