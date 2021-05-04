<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" placeholder="введите число"/>
      <input v-model.number="operand2" placeholder="введите число"/>
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="res($event)">+</button>
      <button @click="res($event)">-</button>
      <button @click="res($event)">*</button>
      <button @click="res($event)">/</button>
      <button @click="res($event)">**</button>
      <button @click="res($event)">деление без остатка</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calculator',
    data: () => ({
        operand1: '',
        operand2: '', 
        result: 0
    }),

    methods: {
      res(event) {
        if (event.target.innerText == "деление без остатка") {
          return this.result = Math.floor(this.operand1 / this.operand2);
        } else
        return this.result = eval(`${this.operand1 + event.target.innerText + this.operand2}`);
      },
    }
  }
</script>

// <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
