<template>
  <div :class="[$style.wrapPopup]" :style="styles">
      <div :class="[$style.wrapBtnClose]"><button :class="[$style.BtnClose]" @click="wrapPopapClose">&#10005;</button></div>
    <component :is="userComponent" :itemId="+modalWindowSettings.paymentListId" />
  </div>
</template>
    
<script>
import Vue from "vue";
import ModalWindowPlugin from "../plugins/ModalWindow";

Vue.use(ModalWindowPlugin);

const paymentForm = () => import("../components/PaymentForm");
const contextMenu = () => import("../components/ContextMenu");

export default {
  name: "ModalWindow",

  props: {
    ModalWindoW: String,
    modalWindowSettings: Object,
  },

  computed: {
    userComponent() {
      if (this.ModalWindoW == "ContextMenu") return contextMenu;
      else if (this.ModalWindoW == "PaymentForm") return paymentForm;
      return null;
    },

    styles() {
      return {
        top: this.modalWindowSettings.yPosition,
        left: this.modalWindowSettings.xPosition,
        width: this.modalWindowSettings.width
      };
    },
  },

  methods: {
      wrapPopapClose() {
          this.$modal.hide();
      }
  }
};
</script>

<style lang="scss" module>
.wrapPopup {
  border: 1px solid green;
  background: rgb(243, 245, 238);
  position: absolute;
}

.wrapBtnClose {
    display: flex;
    justify-content: flex-end;
}

.BtnClose {
    font-size: 22px;
    line-height: 23px;
}

.BtnClose:hover {
    cursor: pointer;
}
</style>