/**
 * Set canonical path
 * @function canonical
 * @param {string} href - Canonical path to set
 */
/**
 * Get canonical path
 * @function canonical
 * @returns {?string} - Current canonical path
 */
'use strict'

const { get } = require('bwindow')

const CANONICAL_SELECTOR = 'link[rel="canonical"]'

/** @lends canonical */
function canonical (href) {
  if (arguments.length === 0) {
    return canonical.get()
  }
  canonical.set(href)
}

Object.assign(canonical, {
  get () {
    const document = get('document')
    if (!document) {
      return null
    }
    let element = document.querySelector(CANONICAL_SELECTOR)
    if (!element) {
      return null
    }
    return element.href
  },
  set (href) {
    const document = get('document')
    if (!document) {
      return null
    }
    let element = document.querySelector(CANONICAL_SELECTOR)
    if (!element) {
      element = document.createElement('link')
      element.rel = 'canonical'
      let headElement = document.querySelector('head')
      headElement.appendChild(element)
    }
    element.href = href
    return element.href
  }
})

module.exports = canonical
