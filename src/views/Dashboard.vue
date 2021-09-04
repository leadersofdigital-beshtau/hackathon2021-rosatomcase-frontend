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
                    <div class="dashboard__stats">
                        <div class="dashboard__stats-datepicker">
                            <input type="text" class="dashboard__stats-datepicker-input">
                        </div>
                        <div class="dashboard__stats-grid">
                            <!--                        <DoughnutChart :chartData="testData" />-->
                            <div class="dashboard__stats-chart"></div>
                            <div class="dashboard__stats-detail">
                                <div class="dashboard__stats-chart-info">
                                    <div class="dashboard__stats-chart-row">
                                        <div class="dashboard__stats-chart-row-color" style="background-color: #3675B3"></div>
                                        <div class="dashboard__stats-chart-row-text">
                                            Количество договоров, заключенных заказчиком по результатам закупки
                                        </div>
                                        <div class="dashboard__stats-chart-row-value">
                                            2385
                                        </div>
                                    </div>
                                    <div class="dashboard__stats-chart-row">
                                        <div class="dashboard__stats-chart-row-color" style="background-color: #193478"></div>
                                        <div class="dashboard__stats-chart-row-text">
                                            Количество договоров, заключенных закупки у единственного поставщика
                                        </div>
                                        <div class="dashboard__stats-chart-row-value">
                                            505
                                        </div>
                                    </div>
                                    <div class="dashboard__stats-chart-row">
                                        <div class="dashboard__stats-chart-row-color" style="background-color: #193478"></div>
                                        <div class="dashboard__stats-chart-row-text">
                                            Общая стоимость договоров, заключенных по результатам закупки
                                        </div>
                                        <div class="dashboard__stats-chart-row-value">
                                            1 806 147 533,00
                                        </div>
                                    </div>
                                    <div class="dashboard__stats-chart-row">
                                        <div class="dashboard__stats-chart-row-color" style="background-color: #193478"></div>
                                        <div class="dashboard__stats-chart-row-text">
                                            Количество договоров закупки, признанные несостоявшимися
                                        </div>
                                        <div class="dashboard__stats-chart-row-value">
                                            0
                                        </div>
                                    </div>
                                </div>
                            </div>
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

// import { DoughnutChart } from 'vue-chart-3';

export default {
    name: 'Dashboard',
    // setup() {
    //     const testData = {
    //         labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
    //         datasets: [
    //             {
    //                 data: [30, 40, 60, 70, 5],
    //                 backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    //             },
    //         ],
    //     };
    //
    //     return { testData };
    // },
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
        TaskPreview,
        // DoughnutChart
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
        border: 1px solid #3675B3;
        padding: 24px 19px;
        width: 250px;
        text-align: left;
        border-radius: 10px;
        display: inline-flex;
        justify-content: space-between;
        background-color: #3675B3;
        color: #ffffff;

        &:hover {
            transition: ease background-color .2s;
            background-color: #ffffff;
            color: #3675B3;
            border-color: #193478;
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
        margin: 0 -20px 40px -20px;

        &-item {
            width: 475px;
            padding: 0 20px;
            margin-bottom: 40px;
            align-items: stretch;
        }
    }

    &__stats {
        &-grid {
            display: flex;
            align-items: flex-start;
        }
        &-chart {
            width: 350px;
            height: 350px;
            border-radius: 50%;
            background-color: #07173E;
            margin-right: 60px;
        }
    }

    &__stats-datepicker  {
        margin-bottom: 30px;
        &-input {
            background: #ffffff;
            box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
            border-radius: 10px;
            width: 250px;
            max-width: 100%;
            padding: 12px;
            font-size: 14px;
            border: 2px solid #1C3B80;
            outline: none;
            transition: ease box-shadow .3s;
            &:focus {
                box-shadow: 0 5px 16px 5px rgba(0, 0, 0, .15);
            }
        }
    }

    &__stats-chart-row {
        display: flex;
        align-items: flex-start;
        margin-bottom: 25px;
        &:last-child {
            margin-bottom: 0;
        }

        &-color {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: 24px;
            margin-top: 3px;
        }

        &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #07173E;
            width: 345px;
            margin-right: 17px;
        }

        &-value {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #07173E;
        }
    }
}
</style>
