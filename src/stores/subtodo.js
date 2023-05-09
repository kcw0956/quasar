import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar' 
export default defineStore("subTodo", {

  state:()=>({
      tasks:[],
  }),

  getters : {

  },

  actions: {
    insert (title) {
        if(this.tasks){
      this.tasks.unshift({
        id: uid(),
        title,
        done:'N'
      });
    }else{
      this.tasks=[];
      this.tasks.push({
        id: uid(),
        title,
        done:'N'
      })
    }

      LocalStorage.set("subtodo", this.tasks)
    },
    list () {
      
        this.tasks = LocalStorage.getItem("subtodo");
      
    },
    remove (id) {
      this.tasks = this.tasks.findIndex(task=>task.id == id);
    },
    edit (task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks.splice(index, 1, task);
      }
    },
    reset () {
        this.tasks = [];
      LocalStorage.remove("subtodo");
    },
  }
})