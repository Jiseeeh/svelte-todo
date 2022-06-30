<script>
  import { taskList } from "../store";
  import Task from "./Task.svelte";
</script>

{#each $taskList as task}
  <Task {task} />
{/each}
