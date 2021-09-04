<template>
    <div class="tasks">
        <div class="tasks__search-form">
            <SearchForm placeholder="Введите запрос"></SearchForm>
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
        <section class="tasks__tasks">
            <h2 class="tasks__title">
                Текущие задания
            </h2>
            <div class="tasks__tasks-list">
                <div
                    v-for="task in tasks"
                    :key="task.id"
                    class="tasks__tasks-item"
                >
                    <TaskPreview :task="task"></TaskPreview>
                </div>
            </div>
        </section>
        <section class="tasks__stats">
            <h2 class="tasks__title">
                Статистика
            </h2>
            <div class="tasks__stats-head">
                <div class="tasks__stats-datepicker">
                    <label class="tasks__stats-datepicker-label"
                        >Дата или период</label
                    >
                    <div class="tasks__stats-datepicker-container">
                        <Datepicker
                            class="tasks__stats-datepicker-input"
                            :inputFormat="datepickerFormat"
                            :locale="datepickerLocale"
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
                <div class="tasks__stats-chart">
                    <vue3-chart-js
                        :id="doughnutChart.id"
                        ref="chartRef"
                        :type="doughnutChart.type"
                        :data="doughnutChart.data"
                        :options="doughnutChart.options"
                    ></vue3-chart-js>
                </div>
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
                                {{ chartData[0] }}
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
                                {{ chartData[1] }}
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
                                {{ chartData[2] }}
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
                                {{ chartData[3] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
import TaskPreview from "../components/TaskPreview";

import { ref } from "vue";

import { ru } from "date-fns/locale";
import Datepicker from "vue3-datepicker";

import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
    name: "Dashboard",
    components: {
        SearchForm,
        TaskPreview,
        Datepicker,
        Vue3ChartJs
    },
    setup() {
        const chartRef = ref(null);

        const chartData = [
            Math.floor(Math.random() * 500),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 500),
            Math.floor(Math.random() * 800)
        ];

        const doughnutChart = {
            id: "doughnut",
            type: "doughnut",
            data: {
                datasets: [
                    {
                        backgroundColor: ["#3675B3", "#193478", "#131F3D"],
                        data: chartData,
                        borderWidth: 0
                    }
                ]
            }
        };

        const updateDoughnutChart = () => {
            doughnutChart.data.datasets = [
                {
                    backgroundColor: ["#3675B3", "#193478", "#131F3D"],
                    data: chartData
                }
            ];
            chartRef.value.update(250);
        };

        return {
            doughnutChart,
            updateDoughnutChart,
            chartRef,
            chartData
        };
    },
    data() {
        return {
            datepickerDate: new Date(),
            datepickerLocale: ru,
            datepickerFormat: "dd.mm.yyyy",
            isSelectActive: false,
            selectedText: "За месяц",
            tasks: [
                {
                    id: 1,
                    title: "Оказание услуг по оценке оборудования",
                    date: "01.08.2021",
                    status: "В процессе",
                    from: "Горячкина А. В.",
                    project: "Обеспечение гидроэлектростанции",
                    lettersSent: 5,
                    responses: 2
                },
                {
                    id: 2,
                    title: "Оказание услуг по оценке оборудования",
                    date: "01.08.2021",
                    status: "В процессе",
                    from: "Горячкина А. В.",
                    project: "Обеспечение гидроэлектростанции",
                    lettersSent: 10,
                    responses: 2
                },
                {
                    id: 3,
                    title: "Оказание услуг по оценке оборудования",
                    date: "01.08.2021",
                    status: "В процессе",
                    from: "Горячкина А. В.",
                    project: "Обеспечение гидроэлектростанции",
                    lettersSent: 24,
                    responses: 0
                },
                {
                    id: 4,
                    title: "Оказание услуг по оценке оборудования",
                    date: "01.08.2021",
                    status: "В процессе",
                    from: "Горячкина А. В.",
                    project: "Обеспечение гидроэлектростанции",
                    lettersSent: 24,
                    responses: 0
                }
            ]
        };
    },
    methods: {
        selectItem(text) {
            this.selectedText = text;
            this.isSelectActive = false;

            this.chartData = [
                Math.floor(Math.random() * 500),
                Math.floor(Math.random() * 1000),
                Math.floor(Math.random() * 500),
                Math.floor(Math.random() * 800)
            ];
            this.updateDoughnutChart();
        }
    }
};
</script>

<style lang="scss">
.tasks {
    --vdp-selected-bg-color: #1c3b80;
    --vdp-hover-bg-color: #678ddf;

    &__title {
        font-size: 34px;
        margin-bottom: 30px;
    }

    &__actions {
        display: flex;
        margin-bottom: 68px;

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
                box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
            }

            #{$statsSelectRoot}-button-icon {
                transform: rotate(180deg);
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
                display: inline-block;
                color: #193478;
                font-size: 0.7em;
                margin-left: 15px;
                transition: ease 0.3s transform;
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
            box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
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
        border: 1px solid #3675b3;
        padding: 24px 19px;
        width: 250px;
        text-align: left;
        border-radius: 10px;
        display: inline-flex;
        justify-content: space-between;
        background-color: #3675b3;
        color: #ffffff;

        &:hover {
            transition: ease background-color 0.2s;
            background-color: #ffffff;
            color: #3675b3;
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
        &-list {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -20px 40px -20px;
        }

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
            box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            max-width: 100%;
            padding: 12px;
            font-size: 14px;
            border: 2px solid #1c3b80;
            outline: none;
            transition: ease box-shadow 0.3s;

            &:focus {
                box-shadow: 0 5px 16px 5px rgba(0, 0, 0, 0.15);
            }
        }

        &-icon {
            pointer-events: none;
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
            color: #07173e;
            width: 345px;
            margin-right: 17px;
        }

        &-value {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #07173e;
        }
    }
}
</style>
