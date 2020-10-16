// If we do not directly use any Vue data and methods inside our HTML,
//  we can simply use typical JavaScript code.
// function getRandomValue(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  methods: {
    attackMonster() {
      // we want minimum 5 and maximum 12 points of damage.
      // Formula for random number between 5 and 12
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;

      // When we attack the monster, monster attack back at us
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue
    }
  }
});

app.mount('#game');