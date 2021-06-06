<template>
  <div id="main">
    <header>
      <router-link :to="{name: 'dashboard', params: {page: 1}}">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/unknown">Unknown</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",

  data: () => ({
  }),

  methods: {
    ...mapActions({
      fetchData: 'fetchData'
    }),
    
  },

  created() {
    if (this.$route.name == undefined) {
      this.$route.push({path: '/dashboard/1'});
    }
  },

  mounted() {
    this.fetchData();    
  }
};
</script>

<style lang="scss">
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  text-align: center;
}

a,
table,
td,
th,
tr,
div,
header,
main {
  border: 1px solid red;
}
</style>
