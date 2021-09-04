<template>
  <section class="supply">
    <div class="search">
      <div class="search__top">
        <button class="search__btn" @click.prevent="toggleCtegories">
          Категории
        </button>
        <input class="search__input" type="text" @keyup.enter="inputCategories" v-model='categoria'/>
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
            <button class="search__categories-btn">
              Юристы
            </button>
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
            <button class="search__categories-btn">
              Красота
            </button>
          </li>
          <li class="search__categories-item">
            <button class="search__categories-btn">
              Аренда
            </button>
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
          <button class="supply__tabs-btn" @click.prevent="tabs(index)">
            {{ item }}
          </button>
        </li>
        <li class="supply__tabs-item">
          <button class='supply__tabs-add' @click.prevent='focus'>+</button>
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
            Акционерное общество "Уральский электромеханический завод"
          </h2>
          <form class="supply__header-controls">
            <label class='supply__label'>
              <input class="supply__checkbox" type="checkbox" name="happy" value="yes">Happy
            </label>
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
                <a class="supply__item-link" href=""> Отзывы </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> Обороты </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> СПАРК риски </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> Контактная информация </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href="">
                  Информация о сотрудничестве по другим проектам
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
            Акционерное общество "Уральский электромеханический завод"
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
                <a class="supply__item-link" href=""> Отзывы </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> Обороты </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> СПАРК риски </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href=""> Контактная информация </a>
              </li>
              <li class="supply__item-elem">
                <a class="supply__item-link" href="">
                  Информация о сотрудничестве по другим проектам
                </a>
              </li>
            </ul>
          </div>
          <div class="supply__answer">
            <button class="supply__answer-btn">Ожидание ответа</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { qs, qsAll } from "@/helpers/index.js";
export default {
  data() {
    return {
      categoria: '',
      tabsBtn: ["Поставка ПГС", "Сварочные работы"],
    };
  },
  methods: {
    inputCategories(e) {
      this.tabsBtn.unshift(e.target.value);
    },

    focus() {
      let input = qs('.search__input');
      input.focus();
      this.categoria = '';
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
