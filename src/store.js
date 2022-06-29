import { writable } from "svelte/store";

export const taskList = writable([
    {
        id: 0,
        task: "Study programming!"
    }
])