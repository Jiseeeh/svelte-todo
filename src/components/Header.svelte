<script>
  import { taskList } from "../store";
  import { fade } from "svelte/transition";
  import { Modals, openModal, closeModal } from "svelte-modals";
  import Modal from "./Modal.svelte";

  let value = "";
  let taskField = null;
  let regexSpaces = /[ \b]+$/;

  const handleOnAddTask = () => {
    if (value.match(regexSpaces) || !value) {
      openModal(Modal, {
        title: "Invalid input.",
        message: "Please input properly.",
      });
      value = "";
      return;
    }

    taskList.update((arr) => {
      const newArray = [
        ...arr,
        {
          id: arr.length,
          content: value,
          isChecked: false,
        },
      ];
      value = "";
      taskField.focus();
      return newArray;
    });
  };
</script>

<header>
  <Modals>
    <div
      slot="backdrop"
      class="backdrop"
      transition:fade
      on:click={closeModal}
    />
  </Modals>
  <h1>TODO LIST!</h1>
  <section>
    <input bind:value bind:this={taskField} type="text" id="task-field" placeholder="Add a task..."/>
    <button on:click={handleOnAddTask}>Add task</button>
    <!-- TODO: Make this a component with onclick -->
  </section>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    outline: none;
    background: none;
    border: 0;
    transition: all .15s linear;
    background-color: hsl(213, 9%, 23%);
    border-radius: 2px;
    border-bottom: 1px solid hsl(213, 9%, 50%);
    color: hsl(218, 4%, 90%);
  }
  /* feat: element transitions  */
  input:focus , input:hover {
    border-bottom: 3px solid hsl(213, 9%, 50%) ;
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
