<template>
  <div>
    <div class="display">
      <input v-model="operand1" placeholder="введите число" ref="op1"/>
      <input v-model="operand2" placeholder="введите число" ref="op2"/>
      = {{ result }}
    </div>
    <div class="keyboard">
      <button v-for='(operand, index) in operands' :key="index" @click="res($event)" :disabled="disabledAllButton">{{ operand }}</button>
    </div>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" @click="changeChecked">
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>
    <div v-show="checked">
      <button v-for="(simbol, index) in keyboard" :key="index" @click="inputNumber(simbol)">{{ simbol }}</button>
      <button @click="backspace">&lt;--</button>
    </div>
    <div v-show="checked">
      <input name="input" type="radio" id="one" value="Один" v-model="radio" @change="enableRadio()">
      <label for="one">Число 1</label>
      <input name="input" type="radio" id="two" value="Два" v-model="radio" @change="enableRadio()">
      <label for="two">Число 2</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calculator',
    data: () => ({
        operand1: "",
        operand2: "", 
        result: 0,
        operands: ['+', '-', '*', '/', '**', 'деление без остатка'],
        keyboard: [...Array(10).keys()],
        checked: false,
        radio: "Один"
    }),

    methods: {
      res(event) {
        if (event.target.innerText == "деление без остатка") {
          return this.result = Math.floor(this.operand1 / this.operand2);
        } else
        return this.result = eval(`${this.operand1 + event.target.innerText + this.operand2}`);
      },

      backspace() {
        if (this.radio === 'Один') {
          this.operand1 = this.operand1.substring(0, this.operand1.length-1)
        } else {
          this.operand2 = this.operand2.substring(0, this.operand2.length-1)
        }
      },
       
      changeChecked() {
        this.checked=!this.checked;
      },

      enableRadio() {
        if(this.radio === 'Один') {
          this.$refs.op1.focus();
        } else {
          this.$refs.op2.focus();
        }
      },
      inputNumber(simbol) {
       
        if(this.radio === 'Один') {
          this.operand1 = this.operand1 + simbol;
         
        
        } else {
          this.operand2 = this.operand2 + simbol;
          console.log(typeof this.operand2)
        
        }
      }
    },

    computed: {
      disabledAllButton: function () {
        if (this.operand1.length != 0 && this.operand2.length != 0) {
          return false;
        }
        return true;
      }
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
