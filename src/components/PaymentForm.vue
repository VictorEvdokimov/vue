<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model="price" />
    <button @click="onSaveClick">Save!</button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      date: null,
      category: '',
      price: 0,
    }
  },

  computed: {
     getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },

  methods: {
      onSaveClick() {
        const {date, category, price} = this;
           
        this.$emit('addPayment', {date: date || this.getCurrentDate, category, price})

      }
  }
}
</script>