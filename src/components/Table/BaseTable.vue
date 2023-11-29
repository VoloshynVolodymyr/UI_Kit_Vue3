<template>
    <div class="table-wrapper">
        <div class="table">
            <div class="table-head" :style="{ 'grid-template-columns': columnTemplates }">
                <div
                        v-for="(element, i) of head"
                        :key="i"
                        @click="clickOnHead(element)"
                        class="table-head__column"
                >
          <span
                  :class="{
              'table-head__name': element !== 'Cover',
              'table-head__name-no-pointer': element === 'Cover',
            }"
          >
            {{ element }}
          </span>
                    <div v-if="sortField.toLowerCase === element.toLowerCase" :class="{'invisible': sortField!==element.toLowerCase()}">
                        <font-awesome-icon v-if="typeSort === 'asc'" :icon="faCircleUp" class="arrow-up" />
                        <font-awesome-icon v-if="typeSort === 'desc'" :icon="faCircleDown" class="arrow-down" />
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import {faCircleUp, faCircleDown} from '@fortawesome/free-regular-svg-icons';

    const props = defineProps({
        head: {
            type: Array,
            required: false
        },
        columnTemplates: {
            type: String,
            required: false
        },
        sortField: {
            type: String,
            required: false
        },
        typeSort: {
            type: String,
            required: false
        }
    })

    const emit = defineEmits(['sorting'])

    const clickOnHead = (name) => {
        emit('sorting', name.toLowerCase())
    }
</script>


<style lang="scss" scoped>
    .invisible {
        display: none;
    }
    .arrow-up {
        color: var(--success);
    }
    .arrow-down {
        color: var(--danger);
    }
    .table {
        background-color: #fff;
        width: 100%;
        margin-bottom: 40px;
        margin-top: 15px;

        &-wrapper {
            display: flex;
            justify-content: center;
        }

        &-head {
            padding: 5px 16px;
            display: grid;
            column-gap: 10px;
            align-items: center;
            border-bottom: 2px solid #EEEFF4;
            background: #fff;

            &__column {
                display: flex;
                gap: 10px;
            }

            &__name {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #999;
                cursor: pointer;
            }

            &__name-no-pointer {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #999;
            }

            @media screen and (max-width: 767px) {
                display: none;
            }
        }
    }
</style>