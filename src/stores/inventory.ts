import { defineStore } from "pinia";

export interface Item {
  name: string
  description: string
}

export interface SpecialItem extends Item {
  knownEffects: string
}

export interface IInventoryStore {
  backpack: Item[]
  weapons: Item[]
  specialItems: SpecialItem[]
  meals: number
  gold: number
  maxGold: number
}

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: (): IInventoryStore => ({
    backpack: [],
    weapons: [],
    specialItems: [],
    meals: 0,
    gold: 0,
    maxGold: 50,
  }),
})

