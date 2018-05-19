import Vue from 'vue';
import store from './store'
import VueParent from '../component/parent.vue';
new Vue({
    store,
    el: '#app',
    components: {
        VueParent
    }
});
