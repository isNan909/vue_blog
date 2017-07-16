<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="#">MyCompany</a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu">
          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="Faq" class="nav-item r-item">Faq</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

  <style lang="sass">
    @import '../node_modules/bulma/bulma.sass'
    @import 'style'

    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      color: #2c3e50

      </style>
