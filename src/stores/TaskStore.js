import { defineStore } from 'pinia';

// NOTE: "defineStore" returns a function
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
      { id: 3, title: 'اعمل حاجة مع زهايمر', isFav: false },
    ],
    // You can Add a different type of properties at once, But this not our case here
    TaskAppAuthorName: 'Ahmed Osama',
  }),

  getters: {
    favs() {
      // this here is refereing to the state
      return this.tasks.filter((task) => task.isFav);
    },

    totalCount() {
      return this.tasks.length;
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      setTimeout(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }, 400);
    },
    toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;
    },
  },
});
