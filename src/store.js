import { writable } from "svelte/store";

export const taskList = writable(
  JSON.parse(localStorage.getItem("store")) || []
);

taskList.subscribe((value) => {
  localStorage.setItem("store", JSON.stringify(value));
});
