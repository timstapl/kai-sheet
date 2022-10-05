import { defineStore } from "pinia";

export type Notification = {
  id: symbol
  type: "roll" | "save" | "load"
  message: string
}

export interface INotificationsStore {
  notifications: Notification[]
}

export const useNotificationsStore = defineStore({
  id: 'notifications',
  state: () : INotificationsStore => ({
    notifications: [],
  }),
  getters: {},
  actions: {
    addNotification(notification: Notification) {
      this.notifications.push(notification)
    },
    removeNotification(id: symbol) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    }
  },
})

