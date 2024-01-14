<
<script lang="ts" setup>
import { useStore } from "../store/index";
import { ref } from "vue";

const store = useStore();
const name = ref("");
</script>

<template>
  <div>
    <h2>Pinia Test</h2>
    <p style="font-size: 50px">
      Hello from <a style="color: red">{{ store.name }}</a>
    </p>
    <input placeholder="Write to change name" v-model="name" />
    <button style="margin: 10px" @click="store.changeName(name)">
      Change name
    </button>
    <button @click="store.$reset">Reset to start</button>
  </div>
</template>
