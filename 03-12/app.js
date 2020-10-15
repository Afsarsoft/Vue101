const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  // When we want to monitor and watch for a property, we use watchers
  // Use for no update cases 
  watch: {
    // we want to reset the counter when reach 50
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname() {
      console.log('Running agin ...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Cyrus`;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
