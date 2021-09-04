<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img
                src="@/assets/rosatom_logo.png"
                alt="РосАтом"
                class="sidebar__image"
            />
        </div>
        <div class="sidebar__profile">
            <div class="sidebar__profile-main">
                <button class="sidebar__profile-button">
                    <i class="icon-gear"></i>
                </button>
                <div class="sidebar__profile-image">
                    <img src="@/assets/avatar.jpeg" alt="{{ user.name }}" />
                </div>
                <button class="sidebar__profile-button">
                    <i class="icon-bell"></i>
                </button>
            </div>
            <div class="sidebar__profile-name">{{ user.name }}</div>
        </div>
        <nav class="sidebar__nav">
            <ul class="sidebar__list">
                <li
                    v-for="item in menuItems"
                    :key="item.id"
                    class="sidebar__list-item"
                >
                    <router-link
                        class="sidebar__list-link"
                        :to="item.to"
                        active-class="sidebar__list-link--active"
                    >
                        <i
                            class="sidebar__list-icon"
                            :class="getMenuItemIconClass(item.icon)"
                        ></i>
                        <span class="sidebar__list-text">{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            user: {
                name: 'Пётр Иванов'
            },
            menuItems: [
                {
                    id: "mailing",
                    title: "Рассылка",
                    icon: "mailing",
                    to: "/dashboard/mailing"
                },
                {
                    id: "provider",
                    title: "Поставщик",
                    icon: "star-person",
                    to: "/dashboard/supply"
                },
                {
                    id: "tasks",
                    title: "Задания",
                    icon: "rocket",
                    to: "/dashboard/tasks"
                },
                {
                    id: "reports",
                    title: "Отчеты",
                    icon: "doc-edit",
                    to: "/dashboard/reports"
                },
                {
                    id: "search",
                    title: "История поиска",
                    icon: "doc-search",
                    to: "/dashboard/search"
                },
                {
                    id: "discussions",
                    title: "Обсуждения",
                    icon: "discussion",
                    to: "/dashboard/discussions"
                },
                {
                    id: "education",
                    title: "Обучение",
                    icon: "education",
                    to: "/dashboard/education"
                },
                {
                    id: "docs",
                    title: "Документы",
                    icon: "docs",
                    to: "/dashboard/docs"
                },
                {
                    id: "subscriptions",
                    title: "Мои подписки",
                    icon: "fav-star",
                    to: "/dashboard/subscriptions"
                }
            ]
        };
    },
    components: {},
    methods: {
        getMenuItemIconClass: function(icon) {
            return "icon-" + icon;
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #f8f7fd;

    &__logo {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 20px;
        background-color: #f9f9fd;
    }

    &__profile {
        background-color: #ffffff;
        padding: 23px 23px 58px 23px;
        margin-bottom: 17px;

        &-button {
            @include base-button();
            margin-top: 10px;
            color: #193478;
            font-size: 25px;
        }

        &-main {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 10px;
        }

        &-name {
            margin-top: 17px;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #000000;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &-image {
            margin: 0 28px;
            img {
                display: block;
                border-radius: 50%;
                width: 75px;
                height: 75px;
            }
        }
    }

    &__list {
        $listRoot: &;

        &-item {
            margin-bottom: 9px;
            background-color: #ffffff;
            border-radius: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 15px 25px 15px 13px;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            color: #000000;

            &:hover {
                background-color: #eeeeee;
            }

            &--active {
                color: #ffffff;
                background-color: #193478;
                #{$listRoot}-icon {
                    color: #ffffff;
                }
                &:hover {
                    color: #ffffff;
                    background-color: #193478;
                    #{$listRoot}-icon {
                        color: #ffffff;
                    }
                }
            }
        }

        &-icon {
            font-size: 1.35em;
            margin-right: 0.5em;
            color: #193478;
        }
    }
}
</style>
