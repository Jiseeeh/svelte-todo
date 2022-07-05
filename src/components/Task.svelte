<script>
  // ---------------------------------------------------------
  //  Imports
  // ---------------------------------------------------------

  import { taskList } from "../store";
  import { fade, fly } from "svelte/transition";
  import garbage from "../assets/garbage.svg";

  // ---------------------------------------------------------
  //  Props
  // ---------------------------------------------------------

  export let task;

  // ---------------------------------------------------------
  //  Varaible Declarations
  // ---------------------------------------------------------

  let isInputDisabled = false;
  $: isInputDisabled = task.isChecked ? true : false;

  // ---------------------------------------------------------
  //  Method Declarations
  // ---------------------------------------------------------

  const reloadTaskList = () => {
    // updates the task-list in the local storage.
    taskList.update((arr) => arr);
  };

  const handleOnRemove = () => {
    // sets the task-list in the local storage to the filtered list without the removed task.
    taskList.update((arr) => arr.filter((currTask) => currTask.id != task.id));
  };
</script>

<div class="task-container" in:fly={{ y: 100, duration: 1500 }} out:fade>
  <section class="task">
    <input
      type="checkbox"
      bind:checked={task.isChecked}
      on:change={reloadTaskList}
    />
    <input
      class:checked={task.isChecked}
      type="text"
      autocomplete="off"
      disabled={isInputDisabled}
      bind:value={task.content}
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
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .task {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .remove {
    cursor: pointer;
    height: clamp(4rem, 10vw, 5rem);
  }

  .checked {
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    cursor: pointer;
    transform: scale(1.5);
  }
  input[type="text"] {
    background: none;
    border: none;
    color: #fff;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin: 1rem;
    outline: none;
    padding: 0.5rem;
  }
</style>
