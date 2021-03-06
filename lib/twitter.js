/**
 * Set twitter card settings
 * @function twitter
 * @param {Object} values - Values to set
 */
'use strict'

const { get } = require('bwindow')

const PREFIX = 'twitter:'

/** @lends twitter */
function twitter (values) {
  if (arguments.length === 0) {
    return twitter.get()
  }
  twitter.set(values)
}

Object.assign(twitter, {
  get () {
    const document = get('document')
    if (!document) {
      return null
    }
    let values = {}
    let metaTags = document.querySelectorAll('meta[name]')
    for (let { name, content } of metaTags) {
      let hit = new RegExp('^' + PREFIX).test(name)
      if (!hit) {
        continue
      }
      if (!content) {
        continue
      }
      values[ name.replace(PREFIX, '') ] = content
    }
    return values
  },
  set (values) {
    const document = get('document')
    if (!document) {
      return null
    }
    for (let name of Object.keys(values)) {
      let content = values[ name ]
      let prefixedName = PREFIX + name
      let element = document.querySelector(`meta[name="${prefixedName}]"`)
      if (!element) {
        element = document.createElement('meta')
        element.name = prefixedName
        let headElement = document.querySelector('head')
        headElement.appendChild(element)
      }
      element.content = content
    }
  }
})

module.exports = twitter
