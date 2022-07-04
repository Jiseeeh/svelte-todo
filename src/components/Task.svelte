<script>
  import { taskList } from "../store";
  import garbage from "../assets/garbage.svg";
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

<div class="task-container">
  <section class="task">
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
    <img
      class="remove"
      src={garbage}
      alt="green trash bin."
      on:click={handleOnRemove}
    />
  </section>
</div>

<style>
  .task-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .remove {
    cursor: pointer;
    height: 3rem;
  }

  .checked {
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
  input[type="text"] {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    margin: 1rem;
    color: #fff;
  }
</style>
