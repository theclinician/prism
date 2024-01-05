import { createSignal } from "solid-js";


export const createBooleanSignal = (initialValue: boolean = false) => {
  const [value, setValue] = createSignal(initialValue);
  return [value, () => setValue(true), () => setValue(false)];
}

