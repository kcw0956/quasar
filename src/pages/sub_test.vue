<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>


<script>
import { mapState, mapActions } from "pinia";
import subTodoStore from "/stores/subtodo";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  created() {
    this.list();
  },
  methods: {
    ...mapActions(["list"]),
  },
};
</script>
