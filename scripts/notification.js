let $notificationButton

if ('Notification' in window) {
  if ('permission' in Notification && Notification.permission !== 'granted') {
    // add button to enable notifications
    const $headerEl = document.getElementById('header')
    $notificationButton = document.createElement('button')
    $notificationButton.innerHTML = 'Activer les notifications'
    $notificationButton.onclick = askNotificationPermission
    $headerEl.append($notificationButton)
  }
} else {
  console.warn('Votre navigateur ne supporte pas les notifications')
}

function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // Whatever the user answers, we make sure Chrome stores the information
    if (!('permission' in Notification)) {
      Notification.permission = permission
    }

    // set the button to shown or hidden, depending on what the user answers
    if (
      Notification.permission === 'denied' ||
      Notification.permission === 'default'
    ) {
      $notificationButton.style.display = 'block'
    } else {
      $notificationButton.style.display = 'none'
    }
  }

  if (checkNotificationPromise()) {
    Notification.requestPermission().then(permission => {
      handlePermission(permission)
    })
  } else {
    Notification.requestPermission(function(permission) {
      handlePermission(permission)
    })
  }
}

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then()
  } catch (e) {
    return false
  }

  return true
}
