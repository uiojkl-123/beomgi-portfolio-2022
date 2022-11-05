import { string } from 'prop-types';
import create from 'zustand';
import { devtools } from 'zustand/middleware'


interface StoreType {
    selectedProject: string;
}

const store = (set: any): StoreType => ({
    selectedProject: ''
})

/**
 * **프로젝트 선택 스토어**
 */
export const useProjectStore = create(devtools(store));