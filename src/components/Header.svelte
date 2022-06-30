<script>
  import { taskList } from "../store";

  let value;

  const handleOnAddTask = () => {
    taskList.update((arr) => {
      const newArray = [
        ...arr,
        {
          id: arr.length,
          content: value,
        },
      ];
      value = "";
      return newArray;
    });
  };
</script>

<header>
  <h1>TODO LIST!</h1>
  <section>
    <input bind:value type="text" id="task-field" />
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
</style>
