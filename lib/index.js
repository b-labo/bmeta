/**
 * HTML meta tag access
 * @module bmeta
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get canonical () { return d(require('./canonical')) }
}
