const {sumPositive, asyncSumPositive, functionWithCallback} = require('../src/code')

describe('Testing sync functions', () => {
    it('Sum of positive numbers', () => {
        expect(sumPositive(5, 10)).toEqual(15)
    })
    
    it('sum of non positive numbers', () => {
        expect(() => sumPositive(-10, 0)).toThrow(Error)
    })
    
    it('sum of non positive and positive number', () => {
        expect(() => sumPositive(-10, 10)).toThrow(/^Numbers have to be positive - greater than 0$/)
    })
})


describe('Testing async function', () => {
    it('async sum of positive numbers - then', () => {
        return asyncSumPositive(5, 10).then(result => {
            expect(result).toBe(15)
        })
    }, 6000)
    
    it('async sum of non positive numbers - catch', () => {
        expect.assertions(2)
        return asyncSumPositive(-10, 0).catch(error => {
            expect(error.message).toMatch('Numbers have to be positive')
            expect(error.message).toMatch(/^Numbers have to be positive - greater than 0$/)
        })
    }, 6000)
    
    it('async sum of positive numbers - async-await', async () => {
        const result = await asyncSumPositive(5, 10)
        expect(result).toBe(15)
    }, 6000)
    
    it('async sum of non positive numbers - async-await', async () => {
        expect.assertions(2)
        try {
            await asyncSumPositive(-10, 0)
        } catch (e) {
            expect(e.message).toMatch('Numbers have to be positive')
            expect(e.message).toMatch(/^Numbers have to be positive - greater than 0$/)
        }
    }, 6000)
    
    it('async sum of positive numbers - resolves', () => {
        return expect(asyncSumPositive(5, 10)).resolves.toBe(15)
    }, 6000)
    
    it('async sum of non positive numbers - rejects', () => {
        return expect(asyncSumPositive(-10, 0)).rejects.toThrow(/^Numbers have to be positive - greater than 0$/)
    }, 6000)
    
    it('async function with callback', (done) => {
        function cb(error, data) {
            if (error) {
                done(error)
                return
            }
    
            try {
                expect(data).toBe('Peanut Butter')
                done()
            } catch (e) {
                done(e)
            }
        }
    
        functionWithCallback(cb)
    })
})
