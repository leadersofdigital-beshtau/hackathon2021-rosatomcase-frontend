<template>
    <div class="mail">
        <SearchForm></SearchForm>
        <ul class="mail__list">
            <li class="mail__item" v-for="item in dataMail" :key='item.id'>
                <div class="mail__status">
                    <p class="mail__status-title">Статус:</p>
                    <span :class='[{active: item.status == true}, "mail__status-icon"]'></span>
                </div>
                <div class="mail__inner">
                    <div class="mail__col">
                        <p class="mail__title">Тема рассылки:</p>
                        <p class="mail__theme-title">{{ item.theme }}</p>
                        <ul class="mail__item-list">
                            <li class="mail__item-elem">
                                <p class="mail__title">Поставщик</p>
                            </li>
                            <li class="mail__item-elem">
                                <p class="mail__item-text mail__item-text_name">
                                   {{ item.provider }}
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
                            {{ item.commentMail }}
                        </p>
                    </div>
                    <div class="mail__col">
                        <p class="mail__theme-title">Ответ поставщика:</p>
                        <p class="mail__comment">
                            {{ item.commentAnswer }}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
export default({
    data() {
        return {
            dataMail: [
                {
                    id: 0,
                    theme: 'Поставка ПГС',
                    provider: 'АО "УЭМЗ"',
                    commentMail: 'Приглашаем вас поучаствовать в тендере на закупку корпорации Росатом: № 32110614318 "Монтаж (демонтаж) системы видеонаблюдения на котельной (с оборудованием)"',
                    commentAnswer: 'Спасибо, мы готовы к сотрудничеству. У нас есть аппаратное обеспечение удовлетворяющее вашим требованиям. Подробности в каталоге по ссылке.',
                    status: true
                },
                {
                    id: 1,
                    theme: 'Поставка ПГС',
                    provider: 'АО "УЭМЗ"',
                    commentMail: 'Приглашаем вас поучаствовать в тендере на закупку корпорации Росатом: № 32110614318 "Монтаж (демонтаж) системы видеонаблюдения на котельной (с оборудованием)"',
                    commentAnswer: 'Спасибо, мы готовы к сотрудничеству. У нас есть аппаратное обеспечение удовлетворяющее вашим требованиям. Подробности в каталоге по ссылке.',
                    status: false
                },
                {
                    id: 2,
                    theme: 'Поставка ПГС',
                    provider: 'АО "УЭМЗ"',
                    commentMail: 'Приглашаем вас поучаствовать в тендере на закупку корпорации Росатом: № 32110614318 "Монтаж (демонтаж) системы видеонаблюдения на котельной (с оборудованием)"',
                    commentAnswer: 'Спасибо, мы готовы к сотрудничеству. У нас есть аппаратное обеспечение удовлетворяющее вашим требованиям. Подробности в каталоге по ссылке.',
                    status: true
                },
            ]
        }
    },
    components: {
        SearchForm
    }
})
</script>


<style lang="scss" scoped>
// mail-status-active.svg
.mail {
    &__item {
        padding: vw(22) vw(21) vw(42) vw(30);
        border-radius: vw(10);
        box-shadow: 4px 4px 20px rgba(112, 103, 211, 0.15);

        &:not(:last-child) {
            margin-bottom: vw(26);
        }
    }

    &__list {
        margin-top: vw(51);
    }

    &__status {
        display: flex;
        justify-content: flex-end;

        &-title {
            margin-right: vw(27);
        }

        &-icon {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1C16 0.447715 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1V19C0 19.5523 0.447715 20 1 20H8V18H2V2H14V8H16V1Z' fill='%23193478'/%3E%3Cpath d='M19.7071 14.2929L15.2071 9.79289L13.7929 11.2071L16.5858 14H8V16H16.5858L13.7929 18.7929L15.2071 20.2071L19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929Z' fill='%23193478'/%3E%3C/svg%3E%0A");
            background-size: contain;
            background-repeat: no-repeat;
            width: vw(20);
            height: vw(21);

            &.active {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1C16 0.447715 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1V19C0 19.5523 0.447715 20 1 20H8V18H2V2H14V8H16V1Z' fill='%231940FF'/%3E%3Cpath d='M8.29289 14.2929L12.7929 9.79289L14.2071 11.2071L11.4142 14H20V16H11.4142L14.2071 18.7929L12.7929 20.2071L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929Z' fill='%231940FF'/%3E%3C/svg%3E%0A");
            }
        }
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        padding-right: 160px;
    }

    &__title {
        font-size: vw(12);
        left: vw(15);
        color: rgba(25, 52, 120, 0.5);
    }

    &__theme-title {
        font-family: $ff-nova;
        font-weight: 700;
        font-size: vw(18);
        line-height: vw(22);
        color: $dark-blue;
    }

    &__col {
        &:first-child {
            width: vw(245);
            margin-top: vw(6);
        }

        &:not(:first-child) {
            width: vw(275);
            margin-top: vw(26);
        }
    }

    &__item {
        &-list {
            margin-top: vw(38);
        }

        &-elem:not(:last-child) {
            margin-bottom: vw(16);
        }

        &-text {
            font-family: $ff-nova;
            color: #193478;

            &_name {
                font-weight: 700;
            }
        }
    }

    &__comment {
        margin-top: vw(76);
        font-size: vw(14);
        line-height: vw(17);
        font-family: $ff-nova;
        color: $dark-blue;
    }
}
</style>