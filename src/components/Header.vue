<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <router-link class="header__list-item" to="/">Home</router-link> |
        <router-link class="header__list-item" to="/about">About</router-link> |
        <router-link class="header__list-item" to="/provaider">Supply</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    },
  },
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  &__title {

  }
}
</style>
