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
    <transition name="fade">
      <ModalWindow
        v-if="ModalWindoW"
        :ModalWindoW="ModalWindoW"
        :modalWindowSettings="modalWindowSettings"
      />
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapMutations } from "vuex";
import ModalWindowPlugin from "./plugins/ModalWindow";
import CrudPlugin from "./plugins/StoreEvent";
import ModalWindow from "./components/ModalWindow";

Vue.use(ModalWindowPlugin);
Vue.use(CrudPlugin);

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
    },

    onHide() {
      this.ModalWindoW = "";
      this.modalWindowSettings = {};
    },

    savePayment(obj) {
      console.log(obj)
    },

    updatePayment(id, obj) {
      console.log(obj, id)
    },

    deletePayment(id) {
      this.deletePaymentVuex(id) 
    },

    ...mapMutations({deletePaymentVuex:"deletePayment"})
  },

  created() {
    if (this.$route.name == undefined) {
      this.$route.push({ path: "/dashboard/1" });
    }
  },

  mounted() {
    this.fetchData();
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$crud.EventBus.$on("save", this.savePayment);
    this.$crud.EventBus.$on("update", this.updatePayment);
    this.$crud.EventBus.$on("delete", this.deletePayment);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
