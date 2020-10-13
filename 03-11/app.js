const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  // For most calculations based on other values we should using Computed properties/methods
  // They basically behave as data properties to avoid getting call each time
  computed: {
    fullname() {
      console.log('Running agin ...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Cyrus`;
    },
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
