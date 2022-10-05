function addNotification() : void {

}

function removeNotification() : void {

}

function clearNotifications() : void {

}

function getNotifications() : void {

}

function getNotificationCount() : void {

}

export interface NotificationsConfigs {
  side: 'left' | 'right'
  duration: number
}

export interface IUseNotifications {
  addNotification : () => void
  removeNotification : () => void
  clearNotifications : () => void
  getNotifications : () => void
  getNotificationCount : () => void
}


export function useNotification(_config : NotificationsConfigs) : IUseNotifications {
  return {
    addNotification,
    removeNotification,
    clearNotifications,
    getNotifications,
    getNotificationCount,
  }
}

