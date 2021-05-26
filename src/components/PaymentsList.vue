<template>
  <div :class="[$style.wrapPaymentsList]">
    <table>
      <tr>
        <td>Date</td>
        <td>Category</td>
        <td>Price</td>
      </tr>
      <tr v-for="(payment, i) in payments" :key="i">
        <td :class="[$style.wrapPaymentsListCell]">{{payment.date}}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{payment.category}}</td>
        <td :class="[$style.wrapPaymentsListCell]">{{payment.price}}</td>
      </tr>
    </table>
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";
export default {
  // props: {
  //   payments: Array
  // }
  computed: {
    ...mapGetters({
      payments: "getPaymentsList",
    }),
  },

}
</script>
<style lang="scss" module>
.wrapPaymentsList {
  color: blue;
  display: flex;
  justify-content: center;
}

.wrapPaymentsListCell {
  width: 170px;
}
</style>