<template>
  <div id="app">
    <header>
      <div>My personal costs</div>
    </header>
    <main>
      <NewCost @changeFormVisible="changeFormVisible"/>
      <PaymentForm v-if="showForm" @addPayment="addPayment"/>
      <PaymentsList :payments="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm';
import PaymentsList from './components/PaymentsList';
import NewCost from './components/NewCost';

  export default {
    name: 'app',
    components: {
    PaymentsList,
    PaymentForm,
    NewCost
  },

    data: () => ({
       paymentsList: [],
       showForm: false
    }),

    methods: {
      fetchData() {
        return [
          {
            date: '28.03.2020',
            category: 'Food',
            price: 169,
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            price: 360,
          },
          {
            date: '24.03.2020',
            category: 'Food',
            price: 532,
          }
        ]
      },

      changeFormVisible(isVisible) {
        this.showForm = isVisible
      },

      addPayment(data) {
        this.paymentsList = [...this.paymentsList, data]
      }
    },

    created () {
      this.paymentsList = this.fetchData()
    },

  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// for develop
a, table, td, th, tr, div, header, main {
  border: 1px solid red;
}
</style>
