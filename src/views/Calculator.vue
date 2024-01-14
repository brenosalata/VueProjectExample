<script lang="ts" setup>
import "../css/calculator.css";
import { ref } from "vue";

const output = ref("");

let currentOperation = "";

function showInput(value: string) {
  this.output += value;
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "Error";
  }
}
</script>

<template>
  <div>
    <h2>Calculator</h2>
  </div>
  <div class="calculator">
    <input type="text" id="display" readonly :value="output" />

    <div class="button-grid">
      <button @click="showInput('7')">7</button>
      <button @click="showInput('8')">8</button>
      <button @click="showInput('9')">9</button>
      <button @click="showInput('/')">/</button>

      <button @click="showInput('4')">4</button>
      <button @click="showInput('5')">5</button>
      <button @click="showInput('6')">6</button>
      <button @click="showInput('*')">*</button>

      <button @click="showInput('1')">1</button>
      <button @click="showInput('2')">2</button>
      <button @click="showInput('3')">3</button>
      <button @click="showInput('-')">-</button>

      <button @click="showInput('0')">0</button>
      <button @click="showInput('.')">.</button>
      <button @click="showInput('+')">+</button>
      <button @click="calculate()">=</button>
    </div>
  </div>
</template>
