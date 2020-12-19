import { NotificationBackgroundFetchResult, Notifications as RNNotifications } from 'react-native-notifications';

class NotificationsService implements IService {
  init = async () => {
    // this.registerReactNativeNotifications();
  }

  private registerReactNativeNotifications() {
    this.registerDevice()
    this.registerNotificationEvents()
  }

  private registerDevice() {
    RNNotifications.events().registerRemoteNotificationsRegistered(event => {
      // TODO: Send the token to my server so it could send back push notifications...
      console.log('[RNNotification] Device Token Received', event.deviceToken)
    })
    RNNotifications.events().registerRemoteNotificationsRegistrationFailed(event => {
      console.error(event)
    })

    RNNotifications.registerRemoteNotifications()
  }

  private registerNotificationEvents() {
    RNNotifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.log('[RNNotification] Notification Received - Foreground', notification)

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({ alert: false, sound: false, badge: false })
    })

    RNNotifications.events().registerNotificationOpened((notification, completion) => {
      console.log('[RNNotification] Notification opened by device user', notification)
      console.log(`[RNNotification] Notification opened with an action identifier: ${notification.identifier}`)
      completion()
    })

    // doesn't work for some reason
    RNNotifications.events().registerNotificationReceivedBackground((notification, completion) => {
      console.log('[RNNotification] Notification Received - Background', notification)

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion(NotificationBackgroundFetchResult.NEW_DATA);
    })

    RNNotifications.getInitialNotification()
        .then(notification => {
          console.log('[RNNotification] Initial notification was:', notification || 'N/A')
        })
        .catch(err => console.error('[RNNotification] getInitialNotifiation() failed', err))
  }
}

export default new NotificationsService();