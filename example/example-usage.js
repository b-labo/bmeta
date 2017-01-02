'use strict'

const { canonical } = require('bmeta')

// Get canonical path
console.log(canonical())

// Set canonical path
canonical.set('/cars/1/wheels')
