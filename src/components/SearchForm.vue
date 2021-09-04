<template>
    <form method="post" class="search-form">
        <div class="search-form__grid">
            <div class="search-form__category-select">
                <!--                <button class="search-form__category-select-button">-->
                <!--                    Категории-->
                <!--                    <i class="icon-angle-down"></i>-->
                <!--                </button>-->
                <div class="search-form__container">
                    <input :placeholder="placeholder" type="text" class="search-form__input" />
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
    name: "SearchForm",
    props: {
        placeholder: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
.search-form {
    &__input {
        background: #ffffff;
        box-shadow: 0 3px 12px 5px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        width: 100%;
        padding: 18px 50px 18px 25px;
        font-size: 24px;
        border: 2px solid #1c3b80;
        outline: none;
        transition: ease box-shadow 0.3s;
        &:focus {
            box-shadow: 0 5px 16px 5px rgba(0, 0, 0, 0.15);
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
