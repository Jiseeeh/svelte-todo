<script>
  import { taskList } from "../store";
  export let task;

  let value = task.content;

  const handleOnRemove = (taskId) => {
    taskList.update((currentTask) => {
      return currentTask.filter((task) => {
        task !== taskId;
      });
    });
  };
</script>

<div class="container">
  <section>
    <input type="checkbox" id="" />
    <input bind:value type="text" />
    <span
      class="remove"
      on:click={() => {
        handleOnRemove(task.id);
      }}>X</span
    >
  </section>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .remove {
    cursor: pointer;
  }

  input[type="text"] {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    margin: 1rem;
  }
</style>
