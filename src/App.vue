<template>
    <div class="dashboard">
        <div class="dashboard__grid">
            <div class="dashboard__sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="dashboard__main">
                <div class="dashboard__container">
                    <h1 v-if="title" class="dashboard__title">{{ title }}</h1>
                    <router-view :key="key" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        Sidebar
    },
    computed: {
        key() {
            return this.$route.meta.key !== undefined
                ? this.$route.meta.key
                : this.$route;
        },
        title() {
            return this.$route.meta.title;
        },
    }
};
</script>

<style lang="scss">
.dashboard {
    &__title {
        font-size: 38px;
        margin-bottom: 60px;
    }
    &__grid {
        display: flex;
        align-items: stretch;
    }

    &__sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        max-width: 100%;
        min-width: 290px;
        background: #ffffff;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
    }

    &__main {
        flex: 1;
        padding: 99px 104px 99px 380px;
    }

    &__container {
        max-width: 1410px;
        margin: 0 auto;
    }
}
</style>
