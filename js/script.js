/** @format */

const app = new Vue({
  el: "#app",
  data: {
    isTrue: true,
    hello: "Hello World",
  },
  methods: {
    toggleIsTrue: function () {
      this.isTrue = !this.isTrue;
    },
  },
});
const app2 = new Vue({
  el: "#app2",
  data: {
    hi: "",
    isTrue: true,
    hello: "Hello World",
  },
});
