import { defineStore } from "pinia";

export interface ICharacterStore {
  name: string
  combatSkill: number
  endurancePoints: number
}

export const useCharacterStore = defineStore({
  id: 'character',
  state: (): ICharacterStore => ({
    name: 'Lone Wolf',
    combatSkill: 0,
    endurancePoints: 0,
  }),
})
