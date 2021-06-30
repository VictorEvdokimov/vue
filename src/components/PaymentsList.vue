<template>
  <div :class="[$style.wrapPaymentsList]">
    <table>
      <tr>
        <td>№</td>
        <td>Date</td>
        <td>Category</td>
        <td>Price</td>
      </tr>
      <tr v-for="(payment, i) in getPage" :key="i">
        <td :class="[$style.wrapPaymentsListCell]">{{ i + 1 }}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.date }}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.category }}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.price }}</td>
        <td
          :class="[$style.menuSettingButton]"
          @click="showPopup"
          :paymentListId="(page-1)*n+i"
        >
          ...
        </td>
      </tr>
    </table>
    <Pagination
      @changePage="changePage"
      :pageCount="Math.ceil(payments.length / n)"
      :currentPage="page"
    />
  </div>
</template>
 
<script>
import Vue from "vue";
import Pagination from "./Pagination";
import { mapGetters } from "vuex";
import ModalWindowPlugin from "../plugins/ModalWindow";

Vue.use(ModalWindowPlugin);

export default {
  components: {
    Pagination,
  },

  data() {
    return {
      page: 1,
      n: 10,
    };
  },

  methods: {
    changePage(p) {
      this.page = p;
    },

    showPopup($event) {
      const rect = $event.target.getBoundingClientRect();
      this.$modal.show("ContextMenu", {
        xPosition: `${rect.left - 98}px`,
        yPosition: `${rect.top + 10}px`,
        width: `${100}px`,
        paymentListId: $event.target.getAttribute('paymentlistid'),
      });
    },
  },

  computed: {
    ...mapGetters({
      payments: "getPaymentsList",
    }),

    getPage() {
      const { page, n } = this;
      return this.payments.slice(n * (page - 1), page * n);
    },
  },

  mounted() {
    this.page = +this.$route.params.page;
  },
};
</script>
<style lang="scss" module>
.wrapPaymentsList {
  color: blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wrapPaymentsListCell {
  width: 170px;
}

.menuSettingButton {
  width: 20px;
}

.menuSettingButton:hover {
  background-color: rgb(212, 235, 245);
  cursor: pointer;
}
</style>