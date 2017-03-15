const { assert: {equal, isNumber} } = require('chai')
const calc = require('../lib/calc')

describe('calc', () => {
    it('should return a number', () => {
        isNumber(calc())
    })
})