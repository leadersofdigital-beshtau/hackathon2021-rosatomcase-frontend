<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <router-link class="header__list-item" to="/">Home</router-link> |
        <router-link class="header__list-item" to="/about">About</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style lang="scss" scoped>
.header {
  &__title {

  }
}
</style>
