addEventListener('install', () => {
  console.log('Hello from the service worker')
})

addEventListener('fetch', event => {
  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(fetch(event.request))
  }
})
