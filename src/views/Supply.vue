<template>
  <section class="supply">
    <form class='supply__search'>
      <select class='supply__search-select'>
        <option value="Категории">Категории</option>
        <option value="Категории">Категории</option>
        <option value="Категории">Категории</option>
      </select>
      <input class="supply__search-input" type="text" placeholder="Поставка ПГС">
    </form>

    <div class="supply__tabs">
      <ul class="supply__tabs-list">
        <li class="supply__tabs-item">
          <button class="supply__tabs-btn">
            Поставка ПГС
          </button>
        </li>
      </ul>
    </div>

    <ul class="supply__list">
      <li class="supply__item">
        <div class="supply__header">
          <h2 class="supply__header-title">
            Акционерное общество "Уральский электромеханический завод"
          </h2>
          <div class="supply__header-controls">
            
          </div>
        </div>
        <div class="supply__item-inner">
          <img class="supply__item-img" src="@/assets/img/del/item_supply.png" alt="">
          <div class="supply__item-info">
            <h3 class="supply__item-title">
              АО "УЭМЗ"
            </h3>
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
                  Информация о сотрудничестве по другим проектам
                </a>
              </li>
            </ul>
          </div>
          <div class="supply__answer">
            <button class="supply__answer-btn">
              Поступил ответ на приглашение
            </button>
          </div>
        </div>
      </li>
    </ul>

  </section>
</template>