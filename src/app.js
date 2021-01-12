import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
        tasks: [],
        newTask: ''
      },
      methods: {
        saveNewTask: function(){
          this.tasks.push({ name:this.newTask, isCompleted: false});
          this.newTask = "";
        },
        completeTask: function(index){
          this.tasks[index].isCompleted = true;
        }
      }
    });
  });