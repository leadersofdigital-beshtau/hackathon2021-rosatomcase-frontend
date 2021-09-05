<template>
    <div v-on:click="pushRoute(task)" class="task-preview">
        <div class="task-preview__title">{{ task.title }}</div>
        <div class="task-preview__info">
            <div v-if="task.date" class="task-preview__prop">
                <div class="task-preview__prop-name">Дата:</div>
                <div class="task-preview__prop-value">{{ task.date }}</div>
            </div>
            <div v-if="task.status" class="task-preview__prop">
                <div class="task-preview__prop-name">Статус:</div>
                <div class="task-preview__prop-value">{{ task.status }}</div>
            </div>
            <div v-if="task.from" class="task-preview__prop">
                <div class="task-preview__prop-name">От кого:</div>
                <div class="task-preview__prop-value">{{ task.from }}</div>
            </div>
            <div v-if="task.project" class="task-preview__prop">
                <div class="task-preview__prop-name">Проект:</div>
                <div class="task-preview__prop-value">{{ task.project }}</div>
            </div>
        </div>
        <div class="task-preview__results">
            <div v-if="task.lettersSent" class="task-preview__result" to="/">
                <div class="task-preview__result-name">Отправлено писем:</div>
                <div class="task-preview__result-value">{{ task.lettersSent }}</div>
            </div>
            <div v-if="task.responses" class="task-preview__result" to="/">
                <div class="task-preview__result-name">Поступило откликов:</div>
                <div class="task-preview__result-value">{{ task.responses }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        pushRoute(task) {
            this.$router.push({ path: '/dashboard/supply', query: { taskId: task.id } })
        }
    },
    props: {
        task: {
            type: Object,
        }
    }
}
</script>

<style lang="scss" scoped>
.task-preview {
    cursor: pointer;
    text-decoration: none;
    display: block;
    height: 100%;
    padding: 16px;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 3px 12px 5px rgba(0, 0, 0, .05);

    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #07173E;
        margin-bottom: 24px;
    }

    &__info {

    }

    &__prop {
        display: flex;
        margin-bottom: 2px;
        &:last-child {
            margin-bottom: 0;
        }

        &-name {
            min-width: 85px;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #07173E;
        }

        &-value {
            flex: 1;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            color: #07173E;
        }
    }

    &__results {
        margin-top: 28px;
        display: flex;
        flex-wrap: wrap;
    }

    &__result {
        width: 50%;
        text-decoration: none;
        display: inline-flex;
        margin-bottom: 2px;
        &:last-child {
            margin-bottom: 0;
        }

        &-name {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #3675B3;
            margin-right: 5px;
        }

        &-value {
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            color: #07173E;
        }
    }
}
</style>
