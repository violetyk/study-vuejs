import VuePaginate from 'vue-paginate'
import SugoiComp from './paginate.vue'

Vue.use(VuePaginate)
new Vue({
  el: '#app',
  template: '<sugoi-comp></sugoi-comp>',
  components: {
    'sugoi-comp': SugoiComp 
  }
})
