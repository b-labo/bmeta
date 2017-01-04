/**
 * Set title
 * @function title
 * @param {string} titleText - Title to set
 */
/**
 * Get title
 * @function title
 * @returns {?string} - Current title
 */
'use strict'

const { get } = require('bwindow')

const TITLE_SELECTOR = 'title'

/** @lends title */
function title (titleText) {
  if (arguments.length === 0) {
    return title.get()
  }
  title.set(titleText)
}

Object.assign(title, {
  get () {
    const document = get('document')
    if (!document) {
      return null
    }
    return document.title
  },
  set (title) {
    const document = get('document')
    if (!document) {
      return null
    }
    document.title = title
  }
})

module.exports = title
