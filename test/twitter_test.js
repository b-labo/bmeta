/**
 * Test case for twitter.
 * Runs with mocha.
 */
'use strict'

const twitter = require('../lib/twitter.js')
const assert = require('assert')
const co = require('co')

describe('twitter', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Twitter', () => co(function * () {
    assert.ok(twitter.get)
    assert.ok(twitter.set)
  }))
})

/* global describe, before, after, it */
