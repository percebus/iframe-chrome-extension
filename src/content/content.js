(() => {
  'use strict'
  console.info('content.js: loaded')

  // FIXME inject
  const URL = 'http://localhost:3000'

  const iframeHTMLElement = document.createElement('iframe')
  iframeHTMLElement.src = URL

  const divHTMLElement = document.createElement('div')
  divHTMLElement.id = 'chrome-extension-iframe'
  divHTMLElement.append(iframeHTMLElement)

  document.body.appendChild(divHTMLElement)
})()
