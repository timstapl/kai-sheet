import { defineStore } from "pinia";

export enum Progress {
  ToBeRead,
  InProgress,
  Completed,
}

export type Book = {
  title: string
  series: string
  entry: number
  progress: Progress
}

export interface IProgressStore {
  adventures: Book[]
}

export const useProgressStore = defineStore({
  id: 'progress',
  state: (): IProgressStore => ({
    adventures: [
      {
        title: "Flight from the Dark",
        series: "Kai",
        entry: 1,
        progress: Progress.ToBeRead
      },
      {
        title: "Fire on the Water",
        series: "Kai",
        entry: 2,
        progress: Progress.ToBeRead
      },
      {
        title: "The Caverns of Kalte",
        series: "Kai",
        entry: 3,
        progress: Progress.ToBeRead
      },
      {
        title: "The Chasm of Doom",
        series: "Kai",
        entry: 4,
        progress: Progress.ToBeRead
      },
      {
        title: "Shadow on the Sand",
        series: "Kai",
        entry: 5,
        progress: Progress.ToBeRead
      },
    ],
  }),
  getters: {
    booksCompleted(): number {
      return this.adventures.filter(adventure => adventure.progress === Progress.Completed).length
    },
    // TODO: this should really be in the disciplines store
    disciplinesAvailable(): number {
      return Math.min(this.booksCompleted + 5, 9)
    },
  },
  actions: {},
})
