function sumPositive(num1, num2) {
    if (num1 < 1 || num2 < 1) {
        throw new Error('Numbers have to be positive - greater than 0')
    }
    return num1 + num2
}

async function asyncSumPositive(num1, num2) {
   return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                res(sumPositive(num1, num2))
            } catch (e) {
                rej(e)
            }
        }, 5000)
    })
}

async function functionWithCallback(cb) {
    try {
        const result = await new Promise((res, rej) => {
            setTimeout(() => {
                res('Peanut Butter')
            }, 1000)  
        })
        cb(null, result)
    } catch (error) {
        cb(error)
    }
}

module.exports = {
    sumPositive,
    asyncSumPositive,
    functionWithCallback
}