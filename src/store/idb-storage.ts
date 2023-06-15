// https://github.com/pmndrs/zustand/blob/a53433543cf36f6379242f3212363eb770340dd1/docs/integrations/persisting-store-data.md?plain=1#L600

import {create} from 'zustand';
import {persist, createJSONStorage, StateStorage} from 'zustand/middleware';
import {get, set, del} from 'idb-keyval';

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

export const useTestTore = create(
  persist<{
    bears2: number;
    bears: number;
    addABear: () => void;
    addABear2: () => void;
  }>(
    (setS, getS) => ({
      bears2: 0,
      bears: 0,
      addABear: () => setS({bears: getS().bears + 1}),
      addABear2: () => setS({bears2: getS().bears2 + 1}),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => storage),
    }
  )
);
