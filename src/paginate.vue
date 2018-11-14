<template>
<div>
    <h1>paginate</h1>
    <paginate name="items" :list="items" class="paginate-list">
    <li v-for="item in paginated('items')">
      {{ item }}
    </li>
    </paginate>
    <paginate-links for="items" :show-step-links="true"></paginate-links>
    <paginate-links for="items" :limit="2" :show-step-links="true"></paginate-links>
    <paginate-links for="items" :simple="{
    next: 'Next »',
    prev: '« Back'
    }"></paginate-links>
  </div>
</template>
  <script>
  export default {
    data() {
      return {
        items: ['Item One',
          'Item Two',
          'Item Three',
          'Item Four',
          'Item Five',
          'Item Six',
          'Item Seven',
          'Item Eight',
          'Item Nine',
          'Item Ten',
          'Item Eleven',
          'Item Twelve',
          'Item Thirteen'
        ] ,
        paginate: ['items']
      }
    }
  }
  </script>

