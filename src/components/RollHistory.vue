<template>
  <div class="scroller-holder">
    <div class="scroller">
      <ul class="list-group scroller-content">
        <li class="list-group-item" v-for="dih in list">
          {{dih.toString()}}
          <span class="badge">{{ dih.result }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'roll-history',
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scroller-holder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    right: 15px;
    margin-bottom: 20px;
  }

  .scroller {
    height: 100%;
    overflow: auto;
    border-left: 1px #ddd solid;
    border-right: 1px #ddd solid;
    border-bottom: 1px #ddd solid;
  }

  .scroller-content {
    margin: 3px;
  }

  .list-group-item > .badge {
    margin-top: -2px;
    font-size: 22px;
  }
</style>
