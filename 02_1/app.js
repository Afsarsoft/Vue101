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

// Connect Vue to HTML 
app.mount('#user-goal');

