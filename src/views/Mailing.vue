<template>
    <div class="mail">
        <ul class="mail__list">
            <li class="mail__item">
                <div class="mail__status">
                    <p class="mail__status-title">
                        Статус:
                    </p>
                </div>
                <div class="mail__inner">
                    <div class="mail__col">
                        <p class="mail__title">Тема рассылки:</p>
                        <p class="mail__theme-title">Поставка ПГС</p>
                        <p class="mail__title">Поставщик</p>
                        <ul class="mail__item-list">
                            <li class="mail__item-elem">
                                <p class="mail__item-text mail__item-text_name">
                                    АО "УЭМЗ"
                                </p>
                            </li>
                            <li class="mail__item-elem">
                                <p class="mail__item-text">Проект:</p>
                            </li>
                            <li class="mail__item-elem">
                                <p class="mail__item-text">Комментарий:</p>
                            </li>
                        </ul>
                    </div>
                    <div class="mail__col">
                        <p class="mail__theme-title">Текст рассылки:</p>
                        <p class="mail__comment">
                            Приглашаем вас поучаствовать в тендере на закупку
                            корпорации Росатом: № 32110614318 "Монтаж (демонтаж)
                            системы видеонаблюдения на котельной (с
                            оборудованием)"
                        </p>
                    </div>
                    <div class="mail__col">
                        <p class="mail__theme-title">Ответ поставщика:</p>
                        <p class="mail__comment">
                            Спасибо, мы готовы к сотрудничеству. У нас есть
                            аппаратное обеспечение удовлетворяющее вашим
                            требованиям. Подробности в каталоге по ссылке.
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
// mail-status-active.svg
.mail {
    &__item {
        padding: vw(22) vw(21) vw(42) vw(30);
        border-top-left-radius: vw(10);
        border-top-right-radius: vw(10);
        box-shadow: 4px 4px 20px rgba(112, 103, 211, 0.15);
    }

    &__status {
        display: flex;
        &-title {
            font-size: vw(12);
            left: vw(15);
            margin-right: vw(27);
        }
    }
}
</style>