<script>
  import { taskList } from "../store";
  export let task;

  const handleOnRemove = () => {
    taskList.update((arr) => arr.filter((currTask) => currTask.id != task.id));
  };
</script>

<div class="container">
  <section>
    <input type="checkbox" id="" />
    <input type="text" value={task.content} />
    <span class="remove" on:click={handleOnRemove}>X</span>
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
