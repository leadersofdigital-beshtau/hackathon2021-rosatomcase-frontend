<template>
  <section class="supply">
    <div class="supply__grid">
      <div class="supply__sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="supply__main">
        <div class="supply__container">
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
                  <button class="supply__tabs-btn" @click.prevent="tabs(index)">
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
            <li class="supply__item" v-for="item in dataSearch" :key="item.id">
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
                  <h3 class="supply__item-title">{{ item.subtitle }}</h3>
                  <ul class="supply__item-list">
                    <li class="supply__item-elem">
                      <a class="supply__item-link" :href="item.hrefReviews">
                        Отзывы
                      </a>
                    </li>
                    <li class="supply__item-elem">
                      <a class="supply__item-link" :href="item.hrefTurn">
                        Обороты
                      </a>
                    </li>
                    <li class="supply__item-elem">
                      <a class="supply__item-link" :href="item.hrefRisk">
                        СПАРК риски
                      </a>
                    </li>
                    <li class="supply__item-elem">
                      <a class="supply__item-link" :href="item.hrefContacts">
                        Контактная информация
                      </a>
                    </li>
                    <li class="supply__item-elem">
                      <a class="supply__item-link" :href="item.hrefInfo">
                        Информация о сотрудничестве по другим проектам
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from "../components/Sidebar";
import { qs, qsAll } from "@/helpers/index.js";
export default {
  data() {
    return {
      categoria: "",
      tabsBtn: ["Поставка ПГС", "Сварочные работы"],
      dataSearch: [
        {
          id: 0,
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
  components: {
    Sidebar,
  },
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
    },
  },
  mounted() {
    this.tabs(0);
  },
};
</script>

<style lang="scss" scoped>
.supply {
  &__grid {
    display: flex;
  }

  &__sidebar {
    max-width: 290px;
    width: 100%;
  }

  &__main {
    flex: 1;
    background-color: aliceblue;
  }

  &__container {
    max-width: 1375px;
    width: 100%;
    margin: 0 auto;
  }

  &__actions {
    display: flex;
  }
}
</style>
