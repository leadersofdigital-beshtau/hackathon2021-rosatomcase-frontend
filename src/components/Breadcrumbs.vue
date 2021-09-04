<template>
    <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <router-link to="/dashboard">
                <i class="icon-home"></i>
            </router-link>
        </li>
        <li v-for="item in items" :key="item.id" class="breadcrumbs__item">
            <router-link class="breadcrumbs__link" :to="item.to">
                {{ item.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Breadcrumbs",
    props: {
        items: []
    }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    align-items: center;

    &__item {
        margin-right: 16px;
        font-size: 18px;
        position: relative;

        &:last-child {
            margin-right: 0;
            &:after {
                display: none;
            }
        }

        &:after {
            content: "\e911";
            display: inline-block;
            margin-left: 25px;
            font-family: "icomoon" !important;
            font-size: .8em;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
        }
    }

    &__link {
        font-style: normal;
        font-weight: normal;
        line-height: 26px;
        color: #808185;
    }

    &__text {
    }
}
</style>
