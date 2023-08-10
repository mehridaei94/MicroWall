import { v4 as uuidv4 } from "uuid";

import create from "zustand";

const useBlockStore = create((set) => {
  let localStorageItems = [];
  if (typeof window != "undefined") {
    try {
      localStorageItems = JSON.parse(localStorage.getItem("items")) || [];
    } catch {}
  }
  return {
    items: localStorageItems,
    addItem: (block) => {
      set((state) => ({
        items: [
          {
            id: uuidv4(),
            ...block,
          },
          ...state.items,
        ],
      }));
      set((state) => state.updateLocalStorage(state));
    },
    removeItem: (id) => {
      set((state) => ({
        items: state.items.filter((block) => block.id !== id),
      }));
      set((state) => state.updateLocalStorage(state));
    },
    updateAllItems:(items) => {
      set((state) => ({
        items: items,
      }));
      set((state) => state.updateLocalStorage(state));
    },
    removeAllItems: (id) => {
      set((state) => ({
        items: [],
      }));
      set((state) => state.updateLocalStorage([]));
    },
    updateLocalStorage: (state) => {
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  };
});

export default useBlockStore;
