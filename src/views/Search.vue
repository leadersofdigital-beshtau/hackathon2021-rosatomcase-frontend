<template>
    <div class="search-page">
        <div class="search-page__search-form">
            <SearchForm placeholder="Введите запрос"></SearchForm>
        </div>
        <div class="search-page__filter">
            <button class="search-page__filter-toggle">
                <i class="icon-filters"></i>
            </button>
        </div>
        <div class="search-page__list">
            <div v-for="item in items" :key="item.id" class="search-page__list-item">
                <SearchItem :item="item"></SearchItem>
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import SearchItem from "@/components/SearchItem";

export default {
    name: "Search",
    components: {
        SearchForm,
        SearchItem
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "Уборка территории",
                    date: "01.04.2021",
                    region: "Ставропольский край",
                    city: "Железноводск",
                    category: "Уборка и хозяйство",
                    filters: [
                        {
                            title: "Гарантия"
                        },
                        {
                            title: "Срочное исполнение"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Грузчики",
                    date: "01.04.2021",
                    region: "Ставропольский край",
                    city: "Железноводск",
                    category: "Уборка и хозяйство",
                    project: null,
                    filters: [
                        {
                            title: "Гарантия"
                        },
                        {
                            title: "Срочное исполнение"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Уборка территории",
                    date: "01.04.2021",
                    region: "Ставропольский край",
                    city: "Железноводск",
                    category: "Уборка и хозяйство",
                    project: {
                        title: "Обеспечение гидроэлектро станции"
                    },
                    filters: [
                        {
                            title: "Срочное исполнение"
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Уборка территории",
                    date: "01.04.2021",
                    region: "Ставропольский край",
                    city: "Железноводск",
                    category: "Уборка и хозяйство",
                    filters: [
                        {
                            title: "Гарантия"
                        },
                        {
                            title: "Срочное исполнение"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Грузчики",
                    date: "01.04.2021",
                    region: "Ставропольский край",
                    city: "Железноводск",
                    category: "Уборка и хозяйство",
                    project: null,
                    filters: [
                        {
                            title: "Гарантия"
                        },
                        {
                            title: "Срочное исполнение"
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.search-page {
    &__search-form {
        margin-bottom: 58px;
    }

    &__filter {
        margin-bottom: 24px;
        display: flex;
        justify-content: flex-end;

        &-toggle {
            color: #193478;
            font-size: 24px;
        }
    }

    &__list {
        &-item {
            margin-bottom: 24px;
            min-height: 300px;
        }
    }
}
</style>
