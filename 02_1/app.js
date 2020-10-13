// Let's Creating a new Vue app and assign it to a variable
const app = Vue.createApp({
  // Storing our app data
  // Data function must return always an object
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!'
    };
  }
});

// mount to CSS element that we want to control
app.mount('#user-goal');

