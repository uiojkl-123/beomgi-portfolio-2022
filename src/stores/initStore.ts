import { string } from 'prop-types';
import create from 'zustand';
import { devtools } from 'zustand/middleware'


interface StoreType {
   isIntro: boolean;
   setIsIntro: (isIntro: boolean) => void;
}

const store = (set: any): StoreType => ({
    isIntro: true,
    setIsIntro: (isIntro: boolean) => set({ isIntro }),
})

/**
 * **전체 스토어**
 */
export const useStore = create(devtools(store));