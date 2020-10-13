const app = Vue.createApp({
  data() {
    return {
      // Now, we have more goals
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    // We want to output the goals from data property 
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');

