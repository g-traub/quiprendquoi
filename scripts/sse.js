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

  source.addEventListener('addedItem', addItem)
  source.addEventListener('removedItem', removeItem)
} else {
  console.warn('Votre navigateur ne supporte pas "SSE"')
}

const $itemsSection = document.getElementById('items')

function addItem({ data }) {
  const item = JSON.parse(data)
  const $itemEl = document.createElement('article')
  $itemEl.innerHTML = `<h4>${item.name}</h4><p>${item.user}</p>`
  $itemsSection.append($itemEl)
}

function removeItem({ data }) {
  const $itemEl = document.getElementById(JSON.parse(data))
  $itemsSection.removeChild($itemEl)
}
