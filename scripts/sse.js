if (Boolean(window.EventSource)) {
  const source = new EventSource('/stream')

  source.addEventListener('open', () => {
    console.log('stream connection open')
  })

  source.addEventListener('close', () => {
    console.log('stream connection closed')
  })

  source.addEventListener('error', e => {
    if (e.readyState === EventSource.CLOSED) {
      console.log('Connection was closed')
    } else {
      console.error(e)
    }
  })

  source.addEventListener('addedItem', e => {
    console.log(`item added : ${e.data}`)
  })
} else {
  console.warn('Votre navigateur ne supporte pas "SSE"')
}
