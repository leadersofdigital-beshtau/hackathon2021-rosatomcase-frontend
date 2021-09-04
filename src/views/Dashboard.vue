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
                                <i class="dashboard__action-button-icon icon-plus"></i>
                            </button>
                        </div>
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Загрузить заявки
                                </span>
                                <i class="dashboard__action-button-icon icon-plus"></i>
                            </button>
                        </div>
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Завершенные заявки
                                </span>
                            </button>
                        </div>
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Заявки в процессе
                                </span>
                            </button>
                        </div>
                        <div class="dashboard__actions-item">
                            <button class="dashboard__action-button">
                                <span class="dashboard__action-button-text">
                                    Приостановленные
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="dashboard__tasks">
                        <div v-for="task in tasks" :key="task.id" class="dashboard__tasks-item">
                            <TaskPreview :task="task"></TaskPreview>
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
import TaskPreview from "../components/TaskPreview";

export default {
    name: 'Dashboard',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Оказание услуг по оценке оборудования',
                    date: '01.08.2021',
                    status: 'process',
                    from: 'Горячкина А. В.',
                    project: 'Обеспечение гидроэлектростанции',
                    lettersSent: 5,
                    responses: 2,
                },
                {
                    id: 2,
                    title: 'Оказание услуг по оценке оборудования',
                    date: '01.08.2021',
                    status: 'process',
                    from: 'Горячкина А. В.',
                    project: 'Обеспечение гидроэлектростанции',
                    lettersSent: 10,
                    responses: 2,
                },
                {
                    id: 3,
                    title: 'Оказание услуг по оценке оборудования',
                    date: '01.08.2021',
                    status: 'process',
                    from: 'Горячкина А. В.',
                    project: 'Обеспечение гидроэлектростанции',
                    lettersSent: 24,
                    responses: 0,
                },
                {
                    id: 4,
                    title: 'Оказание услуг по оценке оборудования',
                    date: '01.08.2021',
                    status: 'process',
                    from: 'Горячкина А. В.',
                    project: 'Обеспечение гидроэлектростанции',
                    lettersSent: 24,
                    responses: 0,
                },
            ],
        }
    },
    components: {
        Sidebar,
        SearchForm,
        TaskPreview
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
        background: #ffffff;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
    }

    &__main {
        flex: 1;
        padding: 99px 104px;
    }

    &__container {
        max-width: 1410px;
        margin: 0 auto;
    }

    &__actions {
        display: flex;
        margin-bottom: 40px;

        &-item {
            margin-right: 30px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    &__action-button {
        @include base-button();
        border: 1px solid #193478;
        padding: 24px 19px;
        width: 250px;
        text-align: left;
        border-radius: 10px;
        display: inline-flex;
        justify-content: space-between;
        color: #3675B3;

        &:hover {
            transition: ease background-color .2s;
            background-color: #3675B3;
            color: #ffffff;
            border-color: #3675B3;
        }

        &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
        }

        &-icon {
            display: inline-block;
            margin-left: auto;
            font-size: 1.2em;
        }
    }

    &__search-form {
        max-width: 1100px;
        margin-bottom: 52px;
    }

    &__tasks {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -20px;

        &-item {
            width: 475px;
            padding: 0 20px;
            margin-bottom: 40px;
            align-items: stretch;
        }
    }
}
</style>
