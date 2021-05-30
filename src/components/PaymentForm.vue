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

    ...mapGetters(["getCategoryList"]),
  },

  methods: {
    ...mapMutations({
      addDataToPaymentsList: "addDataToPaymentsList",
    }),

    onSaveClick() {
      const { date, category, price } = this;
      this.addDataToPaymentsList({
        date: date || this.getCurrentDate,
        category,
        price,
      });
    },
    ...mapActions(["loadCategories"]),
  },

  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>