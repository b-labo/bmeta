/**
 * Test case for canonical.
 * Runs with mocha.
 */
'use strict'

const canonical = require('../lib/canonical.js')
const assert = require('assert')
const co = require('co')

describe('canonical', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Canonical', () => co(function * () {
    assert.ok(canonical.get)
    assert.ok(canonical.set)
    canonical.get()
    canonical.set('/hoo')
  }))
})

/* global describe, before, after, it */
