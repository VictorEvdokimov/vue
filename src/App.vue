<template>
  <div id="main">
    <header>
      <div >My personal costs</div>
    </header>
    <main>
      <NewCost @changeFormVisible="changeFormVisible" />
      <PaymentForm v-if="showForm" />
      <PaymentsList />
      <PaymentsDisplay />
    </main>
  </div>
</template>

<script>
import PaymentForm from "./components/PaymentForm";
import PaymentsList from "./components/PaymentsList";
import NewCost from "./components/NewCost";
import PaymentsDisplay from "./components/PaymentsDisplay";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    PaymentsList,
    PaymentForm,
    NewCost,
    PaymentsDisplay,
  },

  data: () => ({
    showForm: false,
  }),

  methods: {
    changeFormVisible(isVisible) {
      this.showForm = isVisible;
    },
    ...mapActions(["fetchData"]),
  },

  mounted() {
    this.fetchData();
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
