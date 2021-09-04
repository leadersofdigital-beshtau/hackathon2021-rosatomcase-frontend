<template>
    <aside class="sidebar">
        <div class="sidebar__logo">
            <img src="@/assets/rosatom_logo.png" alt="РосАтом" class="sidebar__image">
        </div>
        <div class="sidebar__profile">
            <div class="sidebar__profile-main">
                <button class="sidebar__profile-button"><i class="icon-gear"></i></button>
                <div class="sidebar__profile-image">
                    <img src="@/assets/avatar.jpeg" alt="Фамилия Имя">
                </div>
                <button class="sidebar__profile-button"><i class="icon-bell"></i></button>
            </div>
            <div class="sidebar__profile-name">Фамилия Имя</div>
        </div>
        <nav class="sidebar__nav">
            <ul class="sidebar__list">
                <li v-for="item in menuItems" :key="item.id" class="sidebar__list-item">
                    <router-link class="sidebar__list-link" :to="item.to">
                        <i class="sidebar__list-icon" :class="getMenuItemIconClass(item.icon)"></i>
                        <span class="sidebar__list-text">{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            menuItems: [
                {
                    id: 'mailing',
                    title: 'Рассылка',
                    icon: 'mailing',
                    to: '/mailing',
                },
                {
                    id: 'provaider',
                    title: 'Поставщик',
                    icon: 'star-person',
                    to: '/provaider',
                },
                {
                    id: 'tasks',
                    title: 'Задания',
                    icon: 'rocket',
                    to: '/search',
                },
                {
                    id: 'reports',
                    title: 'Отчеты',
                    icon: 'doc-edit',
                    to: '/reports',
                },
                {
                    id: 'search',
                    title: 'История поиска',
                    icon: 'doc-search',
                    to: '/search',
                },
                {
                    id: 'discussions',
                    title: 'Обсуждения',
                    icon: 'discussion',
                    to: '/discussions',
                },
                {
                    id: 'education',
                    title: 'Обучение',
                    icon: 'education',
                    to: '/education',
                },
                {
                    id: 'docs',
                    title: 'Документы',
                    icon: 'docs',
                    to: '/docs',
                },
                {
                    id: 'subscriptions',
                    title: 'Мои подписки',
                    icon: 'fav-star',
                    to: '/subscriptions',
                },
            ],
        }
    },
    components: {},
    methods: {
        getMenuItemIconClass: function (icon) {
            return 'icon-' + icon
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #F8F7FD;

    &__logo {
        padding: 24px 14px;
        background-color: #F9F9FD;

        img {

        }
    }

    &__profile {
        background-color: #FFFFFF;
        padding: 23px 23px 58px 23px;
        margin-bottom: 17px;

        &-button {
            @include base-button();
            margin-top: 55px;
            color: #193478;
            font-size: 25px;
        }

        &-main {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto;
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
                width: 125px;
                height: 125px;
            }
        }
    }

    &__list {
        &-item {
            margin-bottom: 9px;
            background-color: #FFFFFF;
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
        }

        &-icon {
            font-size: 1.35em;
            margin-right: .5em;
            color: #193478;
        }
    }
}
</style>
