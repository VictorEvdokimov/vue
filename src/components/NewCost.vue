<template>
  <div>
    <button @click="showForm" ref="btnAddNewCost">ADD NEW COST +</button>
  </div>
</template>

<script>
import Vue from "vue";
import ModalWindowPlugin from "../plugins/ModalWindow"; 

Vue.use(ModalWindowPlugin);

export default {
  data: () => ({
    isVisible: false,
  }),

  methods: {
    showForm() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.$refs.btnAddNewCost.textContent = "CLOSE";
      } else {
        this.$refs.btnAddNewCost.textContent = "ADD NEW COST +";
      }

      this.$emit("changeFormVisible", this.isVisible);
      this.$modal.show("PaymentForm", {})
    },
  },
};
</script>