<template>
    <div class="app">
        <router-link to="/dashboard">Dashboard</router-link>
        <main class="app__main">
            <router-view/>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
}
</script>

<style lang="scss">

</style>
