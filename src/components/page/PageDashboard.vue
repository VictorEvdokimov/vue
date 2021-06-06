<template>
  <div>
    <NewCost @changeFormVisible="changeFormVisible" />
    <PaymentForm v-if="showForm" />
    <PaymentsList />
    <PaymentsDisplay />
  </div>
</template>

<script>
import NewCost from "../NewCost";
import PaymentForm from "../PaymentForm";
import PaymentsList from "../PaymentsList";
import PaymentsDisplay from "../PaymentsDisplay";

export default {
  components: {
    NewCost,
    PaymentForm,
    PaymentsList,
    PaymentsDisplay,
  },

  data: () => ({
    showForm: false,
  }),

  methods: {
    changeFormVisible(isVisible) {
      this.showForm = isVisible;
    },
  },

  mounted() {
    if (this.$route.name == 'addPaymentDefault' || this.$route.name == 'addPaymentWihtoutCategory') {
        this.showForm = true
    }
  },
};
</script>