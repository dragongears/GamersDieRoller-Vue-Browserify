<template>
  <div id="app" class="flex-holder">

    <!-- HEADER
    ================================================== -->
    <header class="site-header" role="banner">

      <!-- NAVBAR
      ================================================== -->
      <div class="navbar-wrapper">

        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/"><img src="./assets/img/logo-small.png" alt=""></a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="index.html"><i class="glyphicon glyphicon-home"></i>Home</a></li>
                <li><a href="help.html"><i class="glyphicon glyphicon-question-sign"></i>Help</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header>

    <section class="container flex-holder flex">

      <div class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-default" >
          <div class="panel-body" >
            <die-panel :dice-in-hand="diceInHand" v-on:roll="newRoll"></die-panel>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <ul class="nav nav-tabs nav-justified">
          <router-link role="presentation" tag="li" active-class="active" to="/favorites">
            <a>Favorites</a>
          </router-link>
          <router-link role="presentation" tag="li" active-class="active" to="/history">
            <a>History</a>
          </router-link>
        </ul>
      </div>

      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 flex">
        <router-view :list="rollHistory"></router-view>
        <!--<favorites></favorites>-->
        <!--<roll-history :list="rollHistory"></roll-history>-->
      </div>

    </section>

    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import store from './store'
  import DiePanel from './components/DiePanel.vue'
  import RollHistory from './components/RollHistory.vue'
  import Favorites from './components/Favorites.vue'

  export default Vue.extend({
    name: 'app',
    data () {
      return {
        diceInHand: new store.Dice(),
        rollHistory: [],
        prefs: {
          initialState: 'history'
        }
      }
    },
    components: {
      'die-panel': DiePanel,
      'roll-history': RollHistory,
      'favorites': Favorites
    },
    methods: {
      newRoll: function (result) {
        this.rollHistory.unshift(result)
      }
    }
  })
</script>

<style>
  #app {
    font-family: 'Raleway', Helvetica, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 50px;
    height: 100vh;
  }

  .nav i.glyphicon {
    margin-right: 0.5em;
  }

  .mainbox {
    margin-top: 50px;
  }

  .flex-holder {
    display: flex;
    flex-direction: column;
  }

  .flex-holder > * {
    flex: 0 0 auto;
  }

  .flex-holder > .flex {
    flex: 1 1 auto;
    position: relative;
  }
</style>
