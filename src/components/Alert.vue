<script setup>
    import { defineProps, computed, ref } from 'vue';
    import { faHandPointUp, faCircleCheck, faCircleStop, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

    const beforeEnter = ref(null);
    const afterLeave = ref(null);
    const props = defineProps({
        intent: {
            type: String,
            validator(value) {
                return ['info', 'success', 'danger', 'warning'].includes(value);
            },
            default: 'info',
        },
        title: String,
        show: {
            type: Boolean,
            default: true,
        },
        onDismiss: Function,
        dismissLabel: {
            type: String,
            default: 'Dismiss',
        },
    });

    const isVisible = ref(props.show);

    const containerClass = computed(() => {
        const intentClass = props.intent;

        return `container-alert ${intentClass}`;
    });

    const iconClass = computed(() => {
        const intentClass = props.intent;

        return `icon-alert ${intentClass}`;
    });

    const titleClass = computed(() => {
        const intentClass = props.intent;

        return `font-medium ${intentClass}`;
    });

    const contentClass = computed(() => {
        const intentClass = props.intent;

        return `text-sm ${intentClass}`;
    });

    const closeButtonClass = computed(() => {
        const intentClass = props.intent;

        return `btn-alert ${intentClass}`;
    });

    const iconComponent = computed(() => {
        const icons = {
            success: faHandPointUp,
            warning: faCircleStop,
            danger: faCircleXmark,
            info: faCircleCheck,
        };

        return icons[props.intent];
    });

    function dismiss() {
        isVisible.value = false;

        setTimeout(() => {
            if (props.onDismiss) {
                props.onDismiss();
            }
        }, 1500);
    }
</script>

<template>
    <Transition name="fade" @before-enter="beforeEnter" @after-leave="afterLeave">
        <div v-if="isVisible" :class="containerClass">
            <div class="shrink-0">
                <font-awesome-icon :icon="iconComponent" :class="iconClass" />
            </div>
            <div class="flex-1 space-y-2 min-w-0">
                <h2 v-if="props.title" :class="['titleClass', 'title']">
                    {{ props.title }}
                </h2>
                <div :class="['contentClass','slot-content']">
                    <slot />
                </div>
            </div>
            <div v-if="props.onDismiss" class="shrink-0">
                <button :title="dismissLabel" :aria-label="dismissLabel" :class="closeButtonClass" @click="dismiss">
                    <font-awesome-icon :icon="faCircleXmark" :class="closeButtonClass" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .container-alert {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border-radius: 4px;
        --tw-space-x-reverse: 0;
        margin-right: calc(0.75rem * var(--tw-space-x-reverse));
        margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
    }

    .icon-alert {
        width: 24px;
        height: 24px;
        color: var(--info);
    }

    .btn-alert {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem;
        border-radius: 0.375rem;
        margin: -0.25rem;
        border: none;
        width: 24px;
        height: 24px;
        &:hover {
            scale: 1.04;
            cursor: pointer;
        }
    }

    .info {
        background-color: var(--info-hover);
        color: var(--info);
    }
    .success {
        background-color: var(--success-hover);
        color: var(--success);
    }
    .warning {
        background-color: var(--warning-hover);
        color: var(--warning);
    }
    .danger {
        background-color: var(--danger-hover);
        color: var(--danger);
    }
    .title {
        text-align: center;
        font-size: 24px;
    }
    .slot-content {
        text-align: center;
    }
</style>
