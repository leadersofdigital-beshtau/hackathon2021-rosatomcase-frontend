<template>
  <div class="app">
    <div class="app__header">
      <Header></Header>
    </div>
    <main class="app__main">
      Content
    </main>
    <div class="app__footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
</script>
