import create from "zustand";
import { devtools } from "zustand/middleware"

const store = (set) => ({

  count: 1,
  addCount: () => {
    set(state => ({count: state.count + 1}))
  },

  people: ['Javohir', 'Ali', 'Jamoliddin'],
  addPerson: (person) => {
    set((state) => ({people:[ ...state.people, person]}))
  },

  dark: true,
  toggleDark: () => set((state => ({dark: !state.dark})))
})

const useStore = create(devtools(store));

export default useStore