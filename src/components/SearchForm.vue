<template>
    <form method="post" class="search-form">
        <div class="search-form__grid">
            <div class="search-form__category-select">
                <!--                <button class="search-form__category-select-button">-->
                <!--                    Категории-->
                <!--                    <i class="icon-angle-down"></i>-->
                <!--                </button>-->
                <div class="search-form__container">
                    <input type="text" class="search-form__input">
                    <button class="search-form__submit-button">
                        <i class="icon-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchForm',
    props: {}
}
</script>

<style lang="scss" scoped>
.search-form {
    &__title {

    }

    &__input {
        background: #ffffff;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);
        border-radius: 10px;
        width: 100%;
        padding: 18px 50px 18px 25px;
        font-size: 24px;
        border: 2px solid transparent;
        outline: none;
        &:focus {
            border-color: #1C3B80;
        }
    }

    &__container {
        position: relative;
    }

    &__submit {
        &-button {
            @include base-button();
            color: #193478;
            font-size: 20px;
            padding: 15px;
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>
