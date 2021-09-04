<template>
    <div class="tasks">
        <div class="tasks__search-form">
            <SearchForm></SearchForm>
        </div>
        <div class="tasks__actions">
            <div class="tasks__actions-item">
                <button class="tasks__action-button">
                    <span class="tasks__action-button-text">
                        Новая заявка
                    </span>
                    <i class="tasks__action-button-icon icon-plus"></i>
                </button>
            </div>
            <div class="tasks__actions-item">
                <button class="tasks__action-button">
                    <span class="tasks__action-button-text">
                        Загрузить заявки
                    </span>
                    <i class="tasks__action-button-icon icon-plus"></i>
                </button>
            </div>
            <div class="tasks__actions-item">
                <button class="tasks__action-button">
                    <span class="tasks__action-button-text">
                        Завершенные заявки
                    </span>
                </button>
            </div>
            <div class="tasks__actions-item">
                <button class="tasks__action-button">
                    <span class="tasks__action-button-text">
                        Заявки в процессе
                    </span>
                </button>
            </div>
            <div class="tasks__actions-item">
                <button class="tasks__action-button">
                    <span class="tasks__action-button-text">
                        Приостановленные
                    </span>
                </button>
            </div>
        </div>
        <div class="tasks__tasks">
            <div v-for="task in tasks" :key="task.id" class="tasks__tasks-item">
                <TaskPreview :task="task"></TaskPreview>
            </div>
        </div>
        <div class="tasks__stats">
            <div class="tasks__stats-head">
                <div class="tasks__stats-datepicker">
                    <label class="tasks__stats-datepicker-label"
                        >Дата или период</label
                    >
                    <div class="tasks__stats-datepicker-container">
                        <Datepicker
                            class="tasks__stats-datepicker-input"
                            v-model="datepickerDate"
                        />
                        <i
                            class="tasks__stats-datepicker-icon icon-calendar"
                        ></i>
                    </div>
                </div>
                <div
                    class="tasks__stats-select"
                    :class="{
                        'tasks__stats-select--active': isSelectActive
                    }"
                >
                    <button
                        v-on:click="isSelectActive = !isSelectActive"
                        class="tasks__stats-select-button"
                    >
                        <span class="tasks__stats-select-button-text">{{
                            selectedText
                        }}</span>
                        <i
                            class="tasks__stats-select-button-icon icon-angle-down"
                        ></i>
                    </button>
                    <ul class="tasks__stats-select-list">
                        <li class="tasks__stats-select-list-item">
                            <button
                                v-on:click="selectItem('За день')"
                                class="tasks__stats-select-list-button"
                            >
                                За день
                            </button>
                        </li>
                        <li class="tasks__stats-select-list-item">
                            <button
                                v-on:click="selectItem('За неделю')"
                                class="tasks__stats-select-list-button"
                            >
                                За неделю
                            </button>
                        </li>
                        <li class="tasks__stats-select-list-item">
                            <button
                                v-on:click="selectItem('За месяц')"
                                class="tasks__stats-select-list-button"
                            >
                                За месяц
                            </button>
                        </li>
                        <li class="tasks__stats-select-list-item">
                            <button
                                v-on:click="selectItem('За год')"
                                class="tasks__stats-select-list-button"
                            >
                                За год
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tasks__stats-grid">
                <!--                        <DoughnutChart :chartData="testData" />-->
                <div class="tasks__stats-chart"></div>
                <div class="tasks__stats-detail">
                    <div class="tasks__stats-chart-info">
                        <div class="tasks__stats-chart-row">
                            <div
                                class="tasks__stats-chart-row-color"
                                style="background-color: #3675B3"
                            ></div>
                            <div class="tasks__stats-chart-row-text">
                                Количество договоров, заключенных заказчиком по
                                результатам закупки
                            </div>
                            <div class="tasks__stats-chart-row-value">
                                2385
                            </div>
                        </div>
                        <div class="tasks__stats-chart-row">
                            <div
                                class="tasks__stats-chart-row-color"
                                style="background-color: #193478"
                            ></div>
                            <div class="tasks__stats-chart-row-text">
                                Количество договоров, заключенных закупки у
                                единственного поставщика
                            </div>
                            <div class="tasks__stats-chart-row-value">
                                505
                            </div>
                        </div>
                        <div class="tasks__stats-chart-row">
                            <div
                                class="tasks__stats-chart-row-color"
                                style="background-color: #193478"
                            ></div>
                            <div class="tasks__stats-chart-row-text">
                                Общая стоимость договоров, заключенных по
                                результатам закупки
                            </div>
                            <div class="tasks__stats-chart-row-value">
                                1 806 147 533,00
                            </div>
                        </div>
                        <div class="tasks__stats-chart-row">
                            <div
                                class="tasks__stats-chart-row-color"
                                style="background-color: #193478"
                            ></div>
                            <div class="tasks__stats-chart-row-text">
                                Количество договоров закупки, признанные
                                несостоявшимися
                            </div>
                            <div class="tasks__stats-chart-row-value">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
import TaskPreview from "../components/TaskPreview";

// import { DoughnutChart } from 'vue-chart-3';

import Datepicker from 'vue3-datepicker'

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
            datepickerDate: new Date(),
            isSelectActive: false,
            selectedText: 'За месяц',
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
    methods: {
        selectItem(text) {
            this.selectedText = text;
            this.isSelectActive = false;
        }
    },
    components: {
        SearchForm,
        TaskPreview,
        Datepicker
        // DoughnutChart
    }
}
</script>

<style lang="scss">
.tasks {
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

    &__stats-select {
        position: relative;
        $statsSelectRoot: &;

        &--active {
            #{$statsSelectRoot}-list {
                display: flex;
            }
            #{$statsSelectRoot}-button {
                box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
            }
        }
        &-button {
            @include base-button();
            padding: 10px 18px;
            border-radius: 25px;
            &-text {
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 29px;
                color: rgba(25, 52, 120, 0.5);
            }
            &-icon {
                color: #193478;
                font-size: .7em;
                margin-left: 15px;
            }
        }
        &-list {
            transform: translateY(100%);
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200px;
            display: none;
            list-style: none;
            flex-direction: column;
            background: #ffffff;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
            &-item {
                display: inline-block;
            }
            &-button {
                @include base-button();
                width: 100%;
                padding: 14px 16px;
                font-size: 16px;
                text-align: left;
                background: #ffffff;
                &:hover {
                    background-color: #e9e9e9;
                }
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
        &-head {
            display: flex;
            align-items: center;
        }
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

    &__stats-datepicker {
        margin-bottom: 30px;
        max-width: 256px;
        margin-right: 40px;

        &-label {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            display: flex;
            align-items: flex-end;
            color: #808185;
            margin-bottom: 5px;
        }

        &-container {
            position: relative;
        }

        &-input {
            width: 100%;
            background: #ffffff;
            box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
            border-radius: 10px;
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

        &-icon {
            color: #193478;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            position: absolute;
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