<template>
    <button class="btn" :class="color" @click="$emit('action')">{{ text }}</button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: ""
        },
        text: {
            type: String
        }
    },
    emits: ['action']
}
</script>