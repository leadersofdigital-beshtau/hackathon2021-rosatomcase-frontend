<template>
    <div class="dashboard">
        <div class="dashboard__grid">
            <div class="dashboard__sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="dashboard__main">
                <div class="dashboard__container">
                    <div class="dashboard__additional">
                        <div class="dashboard__additional-item">
                            <i class="icon-map"></i>
                        </div>
                        <div class="dashboard__additional-item">
                            <button class="dashboard__additional-button">
                                RU
                            </button>
                        </div>
                        <div class="dashboard__additional-item">
                            <button class="dashboard__additional-button">
                                EN
                            </button>
                        </div>
                    </div>
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
        }
    }
};
</script>

<style lang="scss">
.dashboard {
    &__title {
        font-size: 45px;
        margin-bottom: 60px;
    }

    &__additional {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;

        &-item {
            margin-left: 30px;
            color: #3675B3;
            font-size: 20px;
        }

        &-button {
            @include base-button();
            color: #3675B3;
            font-size: 20px;
        }
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
        background: #f9f9fd;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
    }

    &__main {
        flex: 1;
        padding: 99px 104px 99px 380px;
    }

    &__container {
        position: relative;
        max-width: 1410px;
        margin: 0 auto;
    }
}
</style>
