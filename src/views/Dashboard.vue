<template>
    <div class="dashboard">
        <div class="dashboard__grid">
            <div class="dashboard__sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="dashboard__main">
                <div class="dashboard__container">
                    <div class="dashboard__search-form">
                        <SearchForm></SearchForm>
                    </div>
                    <div class="dashboard__actions">
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Новая заявка
                                </span>
                                <i class="icon-plus"></i>
                            </button >
                        </div>
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Загрузить заявки
                                </span>
                                <i class="icon-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import SearchForm from "../components/SearchForm";

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        SearchForm
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &__grid {
        display: flex;
    }

    &__sidebar {
        max-width: 290px;
        width: 290px;
    }

    &__main {
        flex: 1;
        padding: 99px 104px;
        background-color: aliceblue;
    }

    &__container {
        max-width: 1375px;
        margin: 0 auto;
    }

    &__actions {
        display: flex;
    }
}
</style>
