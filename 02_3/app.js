const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  // Now we want dynamically get the course goals
  // Methods allows us to define functions to execute when something happens 
  // methods take an object full of functions/methods 
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});

app.mount('#user-goal');

