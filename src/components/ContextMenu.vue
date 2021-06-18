<template>
  <div>
    <div :class="[$style.menuItem]" @click="paymentListEdit">Edit</div>
    <div :class="[$style.menuItem]" @click="paymentListDelete">Delete</div>
  </div>
</template>
<script>
import Vue from "vue";
import CrudPlugin from "../plugins/StoreEvent";
import ModalWindowPlugin from "../plugins/ModalWindow";

Vue.use(ModalWindowPlugin);
Vue.use(CrudPlugin);

export default {
  props: {
    itemId: Number,
  },

  methods: {
    paymentListEdit() {
      const rect = document
        .getElementsByTagName("body")[0]
        .getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;
      let width = 50;
      this.$modal.show("PaymentForm", {
        width: `${width}vw`,
        xPosition: `${x / 2}px`,
        yPosition: y,
        paymentListId: this.itemId,
      });
    },

    paymentListDelete() {
        this.$crud.delete(this.itemId);
        this.$modal.hide();
    },
  },
};
</script>
<style lang="scss" module>
.menuItem:hover {
  background-color: rgb(212, 235, 245);
  cursor: pointer;
}
</style>