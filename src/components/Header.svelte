<script>
  // ---------------------------------------------------------
  //  Imports
  // ---------------------------------------------------------

  import { taskList } from "../store";
  import { fade } from "svelte/transition";
  import { Modals, openModal, closeModal } from "svelte-modals";
  import addTaskIcon from "../assets/add-task.svg";
  import Modal from "./Modal.svelte";

  // ---------------------------------------------------------
  //  Varaible Declarations
  // ---------------------------------------------------------

  let value = "";
  let taskField = null;
  let regexSpaces = /[ \b]+$/;

  // ---------------------------------------------------------
  //  Methods Declarations
  // ---------------------------------------------------------

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

      // this sets the inputfield value to empty and focus it
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
  <h1>The bad news is time flies</h1>
  <section>
    <input
      type="text"
      id="task-field"
      placeholder="Add a task..."
      autocomplete="off"
      bind:value
      bind:this={taskField}
    />
    <img
      class="add-icon"
      src={addTaskIcon}
      alt="calender with a plus sign inside a circle."
      on:click={handleOnAddTask}
    />
  </section>
</header>

<style>
  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .add-icon {
    cursor: pointer;
    fill: red;
    height: clamp(3.5rem, 10vw, 5rem);
  }

  h1 {
    font-size: clamp(4rem, 10vw, 6.5rem);
    font-style: italic;
    line-height: 1.5;
    margin-top: 1rem;
    text-align: center;
    text-shadow: 3px 3px 2px hsl(213, 9%, 50%);
  }

  input {
    background-color: hsl(213, 9%, 23%);
    background: none;
    border-bottom: 1px solid hsl(213, 9%, 50%);
    border-radius: 2px;
    border: 0;
    color: hsl(218, 4%, 90%);
    font-size: clamp(1.7rem, 5vw, 3rem);
    margin-right: 1rem;
    outline: none;
    padding: 0.5rem;
    transition: all 0.15s linear;
  }

  input:focus,
  input:hover {
    border-bottom: 3px solid hsl(213, 9%, 50%);
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
