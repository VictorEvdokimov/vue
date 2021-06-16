<template>
  <div :class="[$style.wrapPopup]" :style="styles">
      <component :is = "userComponent"/>
    
  </div>
</template>
    
<script>
const paymentForm = () => import("../components/PaymentForm");
export default {
  name: "ModalWindow",

  props: {
    ModalWindoW: String,
    modalWindowSettings: Object,
  },

  computed: {
    userComponent() {
      if (this.ModalWindoW == "PaymentForm") return paymentForm;
      return null;
    },

    styles() {
      return {
        top: `${this.modalWindowSettings.yPosition + 10}px`,
        left: `${this.modalWindowSettings.xPosition - 40}px`,
      };
    },
  },
};
</script>

<style lang="scss" module>
.wrapPopup {
  border: 1px solid green;
  background: rgb(243, 245, 238);
  position: absolute;
}
</style>