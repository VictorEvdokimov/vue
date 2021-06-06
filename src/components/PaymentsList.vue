<template>
  <div :class="[$style.wrapPaymentsList]">
    <table>
      <tr>
        <td>Date</td>
        <td>Category</td>
        <td>Price</td>
      </tr>
      <tr v-for="(payment, i) in getPage" :key="i">
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.date }}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.category }}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{ payment.price }}</td>
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
import Pagination from "./Pagination";
import { mapGetters } from "vuex";
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
</style>