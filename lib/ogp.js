/**
 * Set OGP settings
 * @function ogp
 * @param {Object} values - Values to set
 */
'use strict'

const { get } = require('bwindow')

const PREFIX = 'og:'

/** @lends ogp */
function ogp (values) {
  if (arguments.length === 0) {
    return ogp.get()
  }
  ogp.set(values)
}

Object.assign(ogp, {
  get () {
    const document = get('document')
    if (!document) {
      return null
    }
    let values = {}
    let metaTags = document.querySelectorAll('meta[property]')
    for (let { property, content } of metaTags) {
      let hit = new RegExp('^' + PREFIX).test(property)
      if (!hit) {
        continue
      }
      if (!content) {
        continue
      }
      values[ property.replace(PREFIX, '') ] = content
    }
    return values
  },
  set (values) {
    const document = get('document')
    if (!document) {
      return null
    }
    for (let property of Object.keys(values)) {
      let content = values[ property ]
      let prefixedName = PREFIX + property
      let element = document.querySelector(`meta[property="${prefixedName}]"`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', prefixedName)
        let headElement = document.querySelector('head')
        headElement.appendChild(element)
      }
      element.setAttribute('content', content)
    }
  }
})

module.exports = ogp
