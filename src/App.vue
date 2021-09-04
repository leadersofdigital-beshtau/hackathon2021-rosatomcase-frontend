<template>
    <div class="dashboard">
        <div class="dashboard__grid">
            <div class="dashboard__sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="dashboard__main">
                <div class="dashboard__container">
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
    }
};
</script>

<style lang="scss">
.dashboard {
    &__grid {
        display: flex;
        align-items: stretch;;
    }

    &__sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        max-width: 100%;
        min-width: 290px;
        background: #ffffff;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
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
