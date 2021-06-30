<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <select v-model="category">
      <option v-for="option in getCategoryList" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <input placeholder="Price" v-model.number="price" />
    <button @click="onSaveClick">Save!</button>
  </div>
</template>
 
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  props: {
    itemId: {
      type: Number,
      require: false,
    },
  },

  data() {
    return {
      date: null,
      category: "",
      price: 0,
    };
  },

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },

    ...mapGetters({
      getCategoryList: "getCategoryList",
      getPaymentList: "getPaymentsList",
    }),
  },

  methods: {
    ...mapMutations({
      addDataToPaymentsList: "addDataToPaymentsList",
      setCategories: "setCategories",
      setPayment: "setPayment",
    }),

    onSaveClick() {
      const { itemId, date, category, price } = this;
      const item = {
        date: date || this.getCurrentDate,
        category,
        price,
      };
      if (this.itemId == null) {
        this.addDataToPaymentsList(item);
      } else {
        this.setPayment({itemId, ...item});
      }
    },
    ...mapActions(["loadCategories"]),
  },

  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories().then(() => {
        if (this.$route.name == "addPaymentDefault") {
          this.date = this.getCurrentDate;
          const category = this.$route.params.category;

          if (!this.getCategoryList.includes(category)) {
            this.setCategories(category);
          }
          this.category = category;

          if (this.$route.query.price) {
            this.price = +this.$route.query.price;
            this.onSaveClick();
          }
        }

        if (this.$route.name == "addPaymentWihtoutCategory") {
          this.date = this.getCurrentDate;
          if (this.$route.query.price) {
            this.price = +this.$route.query.price;
          }
        }

        if (this.itemId != null) {
          const paymentList = this.getPaymentList;
          const payment = paymentList[this.itemId];
          console.log(payment);
          this.date = payment.date;
          this.category = payment.category;
          this.price = payment.price;
        }
      });
    }
  },
};
</script>