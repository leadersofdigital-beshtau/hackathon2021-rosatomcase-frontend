<template>
    <div class="supply">
        <div class="search">
            <div class="search__top">
                <button class="search__btn" @click.prevent="toggleCtegories">
                    Категории
                </button>
                <input
                    class="search__input"
                    type="text"
                    @keyup.enter="inputCategories"
                    v-model="categoria"
                />
            </div>
            <div class="search__categories">
                <ul class="search__categories-list">
                    <li class="search__categories-item">
                        <button class="search__categories-btn">
                            Ремонт и строительство
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">
                            Репетиторы и обучение
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">Юристы</button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn active">
                            Ремонт и установка техники
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">
                            Перевозки и курьеры
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">
                            Компьютеры и IT
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn active">
                            Хозяйство и уборка
                        </button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">Красота</button>
                    </li>
                    <li class="search__categories-item">
                        <button class="search__categories-btn">Аренда</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="supply__tabs">
            <ul class="supply__tabs-list">
                <li
                    class="supply__tabs-item"
                    v-for="(item, index) in tabsBtn"
                    :key="index"
                >
                    <button
                        class="supply__tabs-btn"
                        @click.prevent="tabs(index)"
                    >
                        {{ item }}
                    </button>
                </li>
                <li class="supply__tabs-item">
                    <button class="supply__tabs-add" @click.prevent="focus">
                        +
                    </button>
                </li>
            </ul>
            <button class="supply__btn">
                <i class="icon-plus"></i>
            </button>
        </div>

        <ul class="supply__list">
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <form class="supply__header-controls">
                        <input
                            class="supply__checkbox"
                            id="check"
                            type="checkbox"
                            name="check"
                            value="yes"
                        />
                        <label class="supply__label" for="check"></label>
                    </form>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert active">
                            Поступил ответ на приглашение
                        </p>
                    </div>
                </div>
            </li>
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <form class="supply__header-controls">
                        <input
                            class="supply__checkbox"
                            id="check"
                            type="checkbox"
                            name="check"
                            value="yes"
                        />
                        <label class="supply__label" for="check"></label>
                    </form>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <form class="supply__header-controls">
                        <input
                            class="supply__checkbox"
                            id="check"
                            type="checkbox"
                            name="check"
                            value="yes"
                        />
                        <label class="supply__label" for="check"></label>
                    </form>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <form class="supply__header-controls">
                        <input
                            class="supply__checkbox"
                            id="check"
                            type="checkbox"
                            name="check"
                            value="yes"
                        />
                        <label class="supply__label" for="check"></label>
                    </form>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
        </ul>

        <ul class="supply__list">
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <div class="supply__header-controls"></div>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <div class="supply__header-controls"></div>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
            <li class="supply__item">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        Акционерное общество "Уральский электромеханический
                        завод"
                    </h2>
                    <div class="supply__header-controls"></div>
                </div>
                <div class="supply__item-inner">
                    <img
                        class="supply__item-img"
                        src="@/assets/img/del/item_supply.png"
                        alt=""
                    />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">АО "УЭМЗ"</h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a class="supply__item-link" href="">
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p class="supply__answer-alert">Ожидание ответа</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { qs, qsAll } from "@/helpers/index.js";
export default {
    data() {
        return {
            categoria: "",
            tabsBtn: ["Поставка ПГС", "Сварочные работы"]
        };
    },
    components: {},
    methods: {
        inputCategories(e) {
            this.tabsBtn.unshift(e.target.value);
        },

        focus() {
            let input = qs(".search__input");
            input.focus();
            this.categoria = "";
        },

        tabs(i) {
            qsAll(".supply__tabs-btn").forEach((el, index) => {
                el.classList.remove("active");
                if (i === index) {
                    el.classList.add("active");
                    this.categoria = this.tabsBtn[i];
                }
            });

            qsAll(".supply__list").forEach((el, index) => {
                el.classList.add("hide");
                el.classList.remove("show", "fade");
                if (i === index) {
                    el.classList.remove("hide");
                    el.classList.add("show", "fade");
                }
            });
        },
        toggleCtegories() {
            let list = qs(".search__categories");
            let btn = qs(".search__btn");
            if (list.classList.contains("open")) {
                list.classList.remove("open");
                btn.classList.remove("active");
            } else {
                list.classList.add("open");
                btn.classList.add("active");
            }
        }
    },
    mounted() {
        this.tabs(0);
    }
};
</script>

<style lang="scss" scoped>
.supply {
    font-family: $ff-nova;
    // max-width: 1100px;

    &__tabs {
        margin-bottom: 29px;
        overflow: auto;

        &-list {
            scroll-padding: 0;
            width: 100%;
            height: 40px;
            white-space: nowrap;
        }

        &-item {
            display: inline-block;
            margin-right: 40px;
        }

        &-btn {
            font-size: 24px;
            line-height: 29px;
            font-weight: 600;
            color: rgba(25, 52, 120, 0.5);
            transition: color 0.3s;

            &.active {
                color: #07173e;
            }
        }

        &-add {
            width: 33px;
            height: 33px;
            border-radius: 5px;
            border: 1px solid #3675b3;
            font-size: 29px;
            font-weight: 600;
            color: #3675b3;
            transition: color 0.3s, background-color 0.3s;

            &:hover {
                color: #fff;
                background-color: #3675b3;
            }
        }
    }

    &__list {
        &.show {
            display: block;
        }

        &.hide {
            display: none;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }

    &__item {
        box-shadow: 4px 4px 20px rgba(112, 103, 211, 0.15);
        background-color: #fff;
        border-radius: 10px;
        min-height: 238px;
        padding: 18px 36px 24px 24px;

        &:not(:last-child) {
            margin-bottom: 26px;
        }

        &-title {
            color: $dark-blue;
            font-weight: 600;
        }

        &-img {
            width: 214px;
            height: 98px;
            object-fit: contain;
            margin-right: 37px;
        }

        &-inner {
            display: flex;
        }

        &-list {
            margin-top: 17px;
        }

        &-elem {
            color: $dark-blue;

            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }

        &-link {
            font-family: $ff-nova;
        }
    }

    &__answer {
        display: flex;
        align-items: flex-end;

        &-alert {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 37px;
            margin-left: 30px;
            background-color: #fff;
            border: 1px solid $dark-blue;
            font-size: 14px;
            font-family: $ff-nova;
            border-radius: 10px;
            color: $dark-blue;
            transition: color 0.3s, background-color 0.3s;

            &.active {
                color: #fff;
                background-color: $dark-blue;
            }
        }
    }

    &__checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;

        & + label {
            display: inline-flex;
            align-items: center;
            user-select: none;
        }

        & + label::before {
            content: "";
            display: inline-block;
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 2px solid $dark-blue;
            border-radius: 0.25em;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 70% 70%;
        }

        &:checked + label::before {
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.638 1.87372L4.63796 8.87372C4.37761 9.13407 3.9555 9.13407 3.69515 8.87372L0.361816 5.54038L1.30463 4.59757L4.16655 7.4595L10.6952 0.930908L11.638 1.87372Z' fill='%233675B3'/%3E%3C/svg%3E%0A");
        }
    }
}
</style>
