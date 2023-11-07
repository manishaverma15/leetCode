// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, 
// and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class
// constructor should accept a number which serves as the initial value of result.

class Calculator {
    result = 0
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

const calculate = new Calculator(0)

const result = calculate.add(3).multiply(5).subtract(3).divide(2).power(2).getResult();

console.log('final-result', result)