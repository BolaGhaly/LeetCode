/**
 * @param {string[]} tokens
 * @return {number}
 */
class reversePolishNotation {
    constructor() {
        this.tokensArr = [];
    }

    push(val) {
        this.tokensArr.push(val);
    }

    getArithmeticResult() {
        const operator = this.tokensArr.pop();
        const num2 =  parseInt(this.tokensArr.pop());
        const num1 =  parseInt(this.tokensArr.pop());

        if (operator === "+") this.tokensArr.push((num1 + num2).toString());
        else if (operator === "-") this.tokensArr.push((num1 - num2).toString());
        else if (operator === "*") this.tokensArr.push((num1 * num2).toString());
        else if (operator === "/") {
            if (Math.trunc((num1 / num2) === 0)) this.tokensArr.push("0");
            else this.tokensArr.push((Math.trunc(num1 / num2).toString()));
        }
    }

    getResult() {
        return this.tokensArr.pop();
    }
}

var evalRPN = function(tokens) {
    const tokensInstance = new reversePolishNotation();
    
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            tokensInstance.push(tokens[i]);
            tokensInstance.getArithmeticResult();
        } else {
            tokensInstance.push(tokens[i]);
        }
    }
    
    return tokensInstance.getResult();
};