<template>
    <div class="search-item">
        <div class="search-item__title">
            {{ item.title }}
        </div>
        <div class="search-item__main">
            <div class="search-item__main-grid">
                <div
                    class="search-item__main-item search-item__main-item--space_between"
                >
                    <div class="search-item__date">
                        <div class="search-item__date-label">Дата поиска:</div>
                        <div class="search-item__date-value">
                            {{ item.date }}
                        </div>
                    </div>
                    <div class="search-item__actions">
                        <div class="search-item__actions-item">
                            <button class="search-item__actions-button">
                                <i
                                    class="search-item__actions-button-icon icon-refresh"
                                ></i>
                                <span class="search-item__actions-button-text"
                                    >Повторить поиск</span
                                >
                            </button>
                        </div>
                        <div class="search-item__actions-item">
                            <button class="search-item__actions-button">
                                <i
                                    class="search-item__actions-button-icon icon-close"
                                ></i>
                                <span class="search-item__actions-button-text"
                                    >Удалить из истории</span
                                >
                            </button>
                        </div>
                    </div>
                </div>
                <div class="search-item__main-item">
                    <div v-if="item.region" class="search-item__prop">
                        <div class="search-item__prop-name">Регион:</div>
                        <div class="search-item__prop-value">
                            {{ item.region }}
                        </div>
                    </div>
                    <div v-if="item.city" class="search-item__prop">
                        <div class="search-item__prop-name">Город:</div>
                        <div class="search-item__prop-value">
                            {{ item.city }}
                        </div>
                    </div>
                    <div v-if="item.category" class="search-item__prop">
                        <div class="search-item__prop-name">Категория:</div>
                        <div class="search-item__prop-value">
                            {{ item.category }}
                        </div>
                    </div>
                    <div
                        v-if="item.filters.length > 0"
                        class="search-item__prop"
                    >
                        <div class="search-item__prop-name">Фильтры:</div>
                        <div class="search-item__prop-value">
                            {{
                                item.filters
                                    .map(({ title }) => title)
                                    .join("; ")
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchItem",
    props: {
        item: {
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
.search-item {
    padding: 27px 30px 49px 30px;
    box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    height: 100%;

    &__main {
        height: 100%;

        &-grid {
            height: 100%;
            display: flex;
            align-items: stretch;
        }

        &-item {
            margin-right: 55px;

            &--space_between {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #193478;
        margin-bottom: 34px;
    }

    &__date {
        &-label {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: rgba(25, 52, 120, 0.5);
            margin-bottom: 5px;
        }

        &-value {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #193478;
        }
    }

    &__prop {
        display: flex;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }

        &-name {
            width: 140px;
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 22px;
            color: #07173e;
        }

        &-value {
            flex: 1;
            font-style: normal;
            font-weight: 300;
            font-size: 22px;
            line-height: 22px;
            color: #07173e;
        }
    }

    &__actions {
        margin-top: auto;

        &-item {
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &-button {
            $buttonRoot: &;

            &:hover {
                #{$buttonRoot}-text, #{$buttonRoot}-icon {
                    color: #07173e;
                }
            }

            display: inline-flex;
            align-items: center;

            &-icon {
                color: #3675b3;
                margin-right: 1em;
                font-size: 0.8em;
            }

            &-text {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 22px;
                color: #8C9ABC;
            }
        }
    }
}
</style>
