<template>
    <h1 class="heading-1">Alert</h1>
    <div class="line">
        <div v-if="showAlert" class="alert-wrapper">
            <Alert
                    :show="showAlert"
                    :on-dismiss="() => (showAlert = false)"
                    title='This is my awesome alert!'>
                <p>Some important message</p>
            </Alert>
            <Alert
                    :show="showAlert"
                    :width="500"
                    intent="success"
                    :on-dismiss="() => (showAlert = false)"
                    title='This is my awesome alert!'>
                <p>Some important message</p>
            </Alert>
            <Alert
                    :show="showAlert"
                    intent="warning"
                    :on-dismiss="() => (showAlert = false)"
                    title='This is my awesome alert!'>
                <p>Some important message</p>
            </Alert>
            <Alert
                    :show="showAlert"
                    intent="danger"
                    :on-dismiss="() => (showAlert = false)"
                    title='This is my awesome alert!'>
                <p>Some important message</p>
            </Alert>
        </div>
    </div>

</template>

<script setup>
    import Alert from '@/components/Alert.vue'
    import {ref} from "vue";

    let showAlert = ref(true)

</script>

<style lang="scss" scoped>
    .alert-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1.25rem;
        padding: 1.25rem;
    }
</style>

