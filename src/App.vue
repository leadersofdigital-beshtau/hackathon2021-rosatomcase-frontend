<template>
    <div class="app">
        <div class="dashboard">
            <div class="dashboard__grid">
                <header class="dashboard__header">
                    <div class="dashboard__header-grid">
                        <div class="dashboard__header-breadcrumbs">
                            <Breadcrumbs
                                :items="[
                                    {
                                        id: key,
                                        title: this.$route.meta.title,
                                        to: this.$route.path
                                    }
                                ]"
                            ></Breadcrumbs>
                        </div>
                        <div class="dashboard__header-additional">
                            <div class="dashboard__additional">
                                <div class="dashboard__additional-item">
                                    <i class="icon-map"></i>
                                </div>
                                <div class="dashboard__additional-item">
                                    <button
                                        class="dashboard__additional-button"
                                    >
                                        RU
                                    </button>
                                </div>
                                <div class="dashboard__additional-item">
                                    <button
                                        class="dashboard__additional-button"
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <aside class="dashboard__sidebar">
                    <Sidebar></Sidebar>
                </aside>
                <main class="dashboard__main">
                    <div class="dashboard__container">
                        <h1 v-if="title" class="dashboard__title">
                            {{ title }}
                        </h1>
                        <router-view :key="key" />
                    </div>
                </main>
                <footer class="dashboard__footer">
                    © 2008–2021. Все права защищены
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        Sidebar,
        Breadcrumbs
    },
    computed: {
        key() {
            return this.$route.meta.key;
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

    &__header {
        height: 80px;
        font-size: 13px;
        padding: 0 20px 0 380px;
        background-color: #f9f9fd;

        &-grid {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        &-breadcrumbs {
        }

        &-additional {
        }
    }

    &__footer {
        font-size: 13px;
        padding: 20px 20px 20px 380px;
        text-align: right;
        background-color: #d7e7f7;
    }

    &__additional {
        display: flex;

        &-item {
            margin-left: 30px;
            color: #3675b3;
            font-size: 20px;
        }

        &-button {
            @include base-button();
            color: #3675b3;
            font-size: 20px;
        }
    }

    &__grid {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    &__sidebar {
        overflow-y: auto;
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
        width: 1410px;
        max-width: 100%;
        margin: 0 auto;
    }
}
</style>
