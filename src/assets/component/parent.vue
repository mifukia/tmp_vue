<template>
    <div class="parent">
        <div class="count">
            {{count}}
        </div>
        <button @click="increment">
            +
        </button>
        <button @click="decrement">
            +
        </button>
        <vue-child></vue-child>
    </div>
</template>

<script>
import VueChild from './child.vue'
export default {
    components: {
        VueChild
    },
    computed: {
        count(){
            return this.$store.getters.countTxt
        }
    },
    methods: {
        increment(){
            this.$store.dispatch('increment')
        },
        decrement(){
            this.$store.dispatch('decrement')
        }
    }
}
</script>

<style scoped lang="scss">
    @mixin sp {
        @media print, screen and (max-width: 640px) {
            @content;
        }
    }
    .parent{
        padding: 10/640*100%;
        background: #eee;
        margin-top: 10px;
        @include sp{
            background: red;
        }
    }
</style>
