const { assert: {equal, isNumber} } = require('chai')
const multiply = require('../lib/multiply')

describe('multiply', () => {
    it('should return a number', () => {
        isNumber(multiply())
    })
})