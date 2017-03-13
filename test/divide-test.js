const { assert: {equal, isNumber} } = require('chai')
const divide = require('../lib/divide')

describe('divide', () => {
    it('should return a number', () => {
        isNumber(divide())
    })
})