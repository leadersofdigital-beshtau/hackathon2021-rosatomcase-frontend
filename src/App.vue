<template>
  <Header></Header>
  <div>Content</div>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import baseApi from './http/baseApi'

export default {
  name: 'App',
  mounted() {
    baseApi.get('users/123');
  },
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
