const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  // For most calculations based on other data we should use Computed 
  // They basically behave as data properties to avoid getting call each time
  // Only use with data that depends on other data 
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
