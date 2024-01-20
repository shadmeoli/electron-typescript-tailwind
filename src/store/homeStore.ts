import { create } from 'zustand'
import type { State } from "../interfaces/home"

const countReducer = create((set) => {
  return {
    counter: 0,
    incrCounter: () => set((state: State) => ({ counter: state.counter + 1 })),
    resetCounter: () => set(() => ({ counter: 0 })),
  };
});

export { countReducer }