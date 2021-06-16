<template>
  <div>
    <div :class="[$style.menuItem]" @click="paymentListEdit">Edit</div>
    <div :class="[$style.menuItem]" @click="paymentListDelete">Delete</div>
  </div>
</template>
<script>
export default {
  methods: {
    paymentListEdit() {

    },

    paymentListDelete() {

    }
  },
};
</script>
<style lang="scss" module>
.menuItem:hover {
    background-color: #eee;
}
</style>