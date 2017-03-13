const { assert: {equal, isNumber} } = require('chai')
const add = require ('../lib/add')

describe('add', () => {
    it('should return a number', () => {
        isNumber(add())
    })
})