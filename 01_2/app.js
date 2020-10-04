// Using Vue by adding CDN in html page
// https://v3.vuejs.org/guide/installation.html#cdn

// Creating a new Vue app to take over our HTML code
// createApp takes a JavaScript object where we configure this Vue app
Vue.createApp({
  // Storing our app data
  // Data function must return an object
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  // here we define methods that are callable inside HTML page
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
  // Need to tell Vue where to control the App
}).mount('#app');

