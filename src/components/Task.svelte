<script>
  import { taskList } from "../store";
  export let task;
  let isInputDisabled = false;

  $: isInputDisabled = task.isChecked ? true : false;

  const reloadTaskList = () => {
    taskList.update((arr) => arr);
  };

  const handleOnRemove = () => {
    taskList.update((arr) => arr.filter((currTask) => currTask.id != task.id));
  };
</script>

<div class="container">
  <section>
    <input
      bind:checked={task.isChecked}
      type="checkbox"
      on:change={reloadTaskList}
    />
    <input
      class:checked={task.isChecked}
      type="text"
      bind:value={task.content}
      disabled={isInputDisabled}
      on:change={reloadTaskList}
    />
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

  .checked {
    text-decoration: line-through;
  }

  input[type="text"] {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    margin: 1rem;
  }
</style>
