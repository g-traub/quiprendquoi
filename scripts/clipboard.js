if (navigator.clipboard) {
  document.querySelectorAll('[data-clipboard]').forEach($clipboardEl => {
    const $button = document.createElement('button')
    $button.innerHTML = 'Copier'
    $clipboardEl.parentNode.append($button)
    $button.addEventListener('click', () =>
      copyToClipboard($clipboardEl, $button)
    )
  })
} else {
  console.warn('Votre navigateur ne supporte pas "clipboard API"')
}

function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
    .writeText($clipboardEl.getAttribute('data-clipboard'))
    .then(() => {
      $button.innerHTML = 'Copié !'
      setTimeout(() => ($button.innerHTML = 'Copier'), 2000)
    })
    .catch(err => console.error(err))
}
