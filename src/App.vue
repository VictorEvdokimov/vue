<template>
  <div id="main">
    <header>
      <router-link :to="{ name: 'dashboard', params: { page: 1 } }"
        >Dashboard</router-link
      >
      <router-link to="/about">About</router-link>
      <router-link to="/unknown">Unknown</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <ModalWindow
      v-if="ModalWindoW"
      :ModalWindoW="ModalWindoW"
      :modalWindowSettings="modalWindowSettings"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import ModalWindowPlugin from "./plugins/ModalWindow"; 
import ModalWindow from "./components/ModalWindow";

Vue.use(ModalWindowPlugin);

export default {
  name: "app",

  components: {
    ModalWindow,
  },

  data: () => ({
    ModalWindoW: "",
    modalWindowSettings: {},
  }),

  methods: {
    ...mapActions({
      fetchData: "fetchData",
    }),

    onShown(settings) {
      this.ModalWindoW = settings.name;
      this.modalWindowSettings = settings;
      console.log(settings)
    },
    onHide() {
      this.ModalWindoW = "";
      this.modalWindowSettings = {};
    },
  },

  created() {
    if (this.$route.name == undefined) {
      this.$route.push({ path: "/dashboard/1" });
    }
  },

  mounted() {
    this.fetchData();
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
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
