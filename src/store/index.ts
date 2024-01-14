import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    number: 1,
    name: "pinia",
  }),
  actions: {
    changeName(value: string) {
      this.name = value;
    },
  },
});
