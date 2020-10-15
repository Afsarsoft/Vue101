const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  // We use methods for data and event binding 
  // methods needs to be run and evaluated every time.
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    }
  }
});

app.mount('#events');
