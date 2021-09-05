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
            <div class="supply__tabs__inner">
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
            </div>
            <button class="supply__setting"></button>
        </div>

        <ul class="supply__list">
            <li class="supply__item" v-for="item in elemsOfPage" :key="item.id">
                <div class="supply__header">
                    <h2 class="supply__item-title">
                        {{ item.title }}
                    </h2>
                    <form class="supply__header-controls">
                        <label class="supply__label-submit supply__label">
                            <input
                                class="supply__checkbox supply__checkbox-submit"
                                type="checkbox"
                                name="check"
                                :checked="item.query == true"
                            />
                        </label>
                        <label class="supply__label-save supply__label">
                            <input
                                class="supply__checkbox supply__checkbox-save"
                                type="checkbox"
                                name="save"
                                :checked="item.save == false"
                            />
                        </label>
                    </form>
                </div>
                <div class="supply__item-inner">
                    <img class="supply__item-img" :src="item.img" alt="logo" />
                    <div class="supply__item-info">
                        <h3 class="supply__item-title">
                            {{ item.subtitle }}
                        </h3>
                        <ul class="supply__item-list">
                            <li class="supply__item-elem">
                                <a
                                    class="supply__item-link"
                                    :href="item.hrefReviews"
                                >
                                    Отзывы
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a
                                    class="supply__item-link"
                                    :href="item.hrefTurn"
                                >
                                    Обороты
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a
                                    class="supply__item-link"
                                    :href="item.hrefRisk"
                                >
                                    СПАРК риски
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a
                                    class="supply__item-link"
                                    :href="item.hrefContacts"
                                >
                                    Контактная информация
                                </a>
                            </li>
                            <li class="supply__item-elem">
                                <a
                                    class="supply__item-link"
                                    :href="item.hrefInfo"
                                >
                                    Информация о сотрудничестве по другим
                                    проектам
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="supply__answer">
                        <p
                            :class="{
                                active: item.answer == true,
                                'supply__answer-alert': true,
                            }"
                        >
                            Поступил ответ на приглашение
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <Pagination
            v-model="currentPage"
            :records="dataSearch.length"
            :per-page="totalPages.length"
        ></Pagination>
    </div>
</template>

<script>
import { qs, qsAll } from "@/helpers/index.js";
// import axios from "axios";
import Pagination from "v-pagination-3";
export default {
    components: {
        Pagination,
    },
    computed: {
        elemsOfPage() {
            let elems = this.dataSearch.slice(0);
            return elems.splice(
                (this.currentPage - 1) * this.elemsPerPage,
                this.elemsPerPage
            );
        },
        totalPages() {
            let elems = this.dataSearch.slice(0);
            return elems.splice(
                (this.page - 1) * this.elemsPerPage,
                this.elemsPerPage
            );
        },
    },
    mounted() {
        this.tabs(0);
    },
    data() {
        return {
            page: 1,
            currentPage: 1,
            elemsPerPage: 10,
            categoria: "",
            tabsBtn: ["Поставка ПГС", "Сварочные работы"],
            dataSearch: [
                {
                    id: 0,
                    title: 'aАкционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 1,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 2,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 3,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 4,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 5,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 6,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 7,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 8,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 9,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                {
                    id: 10,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 11,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: false,
                    query: false,
                    save: false,
                },
                {
                    id: 12,
                    title: 'Акционерное общество "Уральский электромеханический завод"',
                    subtitle: 'АО "УЭМЗ"',
                    img: require("@/assets/img/del/item_supply.png"),
                    hrefReviews: "#",
                    hrefTurn: "#",
                    hrefRisk: "#",
                    hrefContacts: "#",
                    hrefInfo: "#",
                    answer: true,
                    query: true,
                    save: false,
                },
                // {
                //   id: 0,
                //   title: '',
                //   subtitle: '',
                //   img: '@/assets/img/del/item_supply.png',
                //   hrefReviews: '',
                //   hrefTurn: '',
                //   hrefRisk: '',
                //   hrefContacts: '',
                //   hrefInfo: '',
                //   answer: false,
                // }
            ],
        };
    },
    methods: {
        // reloadFansList() {
        //     axios
        //         .post(
        //             `http://217.13.223.130:3389/Hakaton_09_2021_odata/odata/standard.odata/Catalog_ВнешниеЗадачи?$format=application/json`,
        //             {
        //                 Ref_Key: "6e1f577f-0d85-11ec-ab0f-000c29a52d77",
        //             }
        //         )
        //         .then(({ data }) => {
        //             console.log(data);
        //         })
        //         .catch((error) => {
        //             console.log(error.response.data.message);
        //         });
        // },
        inputCategories(e) {
            this.tabsBtn.unshift(e.target.value);
            console.log(this.tabsBtn)
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
        },
    },
};
</script>

<style lang="scss" scoped>
.supply {
    font-family: $ff-nova;

    &__main {
        padding: vw(99) vw(104);
    }

    &__tabs {
        margin-bottom: vw(29);
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__inner {
            overflow: auto;
        }

        &-list {
            scroll-padding: 0;
            width: 100%;
            height: vw(40);
            white-space: nowrap;
        }

        &-item {
            display: inline-block;
            margin-right: vw(40);
        }

        &-btn {
            font-size: vw(24);
            line-height: vw(29);
            font-weight: 600;
            color: rgba(25, 52, 120, 0.5);
            transition: color 0.3s;

            &.active {
                color: #07173e;
            }
        }

        &-add {
            width: vw(33);
            height: vw(33);
            border-radius: vw(5);
            border: 1px solid #3675b3;
            font-size: vw(29);
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
        margin-bottom: vw(28);
    }

    &__setting {
        width: vw(18);
        height: vw(18);
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18C12.1364 18 10.5705 16.7256 10.1262 15.0008L0 15V13L10.126 13.0002C10.5699 11.2749 12.1361 10 14 10ZM14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12ZM4 0C5.86393 0 7.43009 1.27489 7.87405 3.00024L18 3V5L7.87379 5.00076C7.42948 6.7256 5.86357 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2Z' fill='%23193478'/%3E%3C/svg%3E%0A");
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: vw(20);
    }

    &__item {
        box-shadow: 4px 4px 20px rgba(112, 103, 211, 0.15);
        background-color: #fff;
        border-radius: 10px;
        min-height: vw(238);
        padding: vw(18) vw(36) vw(24) vw(24);

        &:not(:last-child) {
            margin-bottom: vw(26);
        }

        &-title {
            color: $dark-blue;
            font-weight: 600;
        }

        &-img {
            width: vw(214);
            height: vw(98);
            object-fit: contain;
            margin-right: vw(37);
        }

        &-inner {
            display: flex;
        }

        &-list {
            margin-top: vw(17);
        }

        &-elem {
            color: $dark-blue;

            &:not(:last-child) {
                margin-bottom: vw(8);
            }
        }

        &-link {
            font-family: $ff-nova;
        }
    }

    &__answer {
        display: flex;
        align-items: flex-end;
        margin-left: auto;

        &-alert {
            display: flex;
            align-items: center;
            justify-content: center;
            width: vw(240);
            height: vw(37);
            margin-left: vw(30);
            background-color: #fff;
            border: 1px solid $dark-blue;
            font-size: vw(14);
            font-family: $ff-nova;
            border-radius: vw(10);
            color: $dark-blue;
            transition: color 0.3s, background-color 0.3s;

            &.active {
                color: #fff;
                background-color: $dark-blue;
            }
        }
    }

    &__label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        position: relative;

        &-submit {
            margin-right: vw(36);
        }
    }

    &__checkbox {
        position: absolute;
        width: 100%;
        height: 100%;

        &::before {
            content: "";
            display: inline-block;
            flex-shrink: 0;
            flex-grow: 0;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }

    &__checkbox-submit {
        top: vw(1);
        left: vw(-6);

        &::before {
            width: vw(16);
            height: vw(16);
            border: 2px solid #3675b3;
            border-radius: 0.25em;
            background-size: 70% 70%;
        }

        &:checked::before {
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.638 1.87372L4.63796 8.87372C4.37761 9.13407 3.9555 9.13407 3.69515 8.87372L0.361816 5.54038L1.30463 4.59757L4.16655 7.4595L10.6952 0.930908L11.638 1.87372Z' fill='%233675B3'/%3E%3C/svg%3E%0A");
        }
    }

    &__checkbox-save {
        top: vw(1);
        left: vw(-6);

        &::before {
            width: vw(16);
            height: vw(19);
            background-size: contain;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 19' fill='%23193478' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V18C16 18.4045 15.7564 18.7691 15.3827 18.9239C15.009 19.0787 14.5789 18.9931 14.2929 18.7071L8 13.4142L1.70711 18.7071C1.42111 18.9931 0.990991 19.0787 0.617317 18.9239C0.243642 18.7691 0 18.4045 0 18V1ZM2 2V15.5858L7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L14 15.5858V2H2Z' fill='%23193478'/%3E%3C/svg%3E%0A");
        }

        &:checked::before {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V18C16 18.4045 15.7564 18.7691 15.3827 18.9239C15.009 19.0787 14.5789 18.9931 14.2929 18.7071L8 13.4142L1.70711 18.7071C1.42111 18.9931 0.990991 19.0787 0.617317 18.9239C0.243642 18.7691 0 18.4045 0 18V1ZM2 2V15.5858L7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L14 15.5858V2H2Z' fill='%23193478'/%3E%3C/svg%3E%0A");
        }
    }
}
</style>
