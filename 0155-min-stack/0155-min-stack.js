class MinStack {
    constructor() {
        this.stack = [];
        this.minValues = [];
    }
   
    push(val) {
        if (this.stack.length === 0 && this.minValues.length === 0) {
           this.minValues.push(val); 
        } else if (this.minValues[this.minValues.length - 1] < val) {
            this.minValues.push(this.minValues[this.minValues.length - 1]);
        } else {
            this.minValues.push(val); 
        }
        
        this.stack.push(val);
    }
   
    pop() {
        this.minValues.pop();
        this.stack.pop();
    }
   
    top() {
        return this.stack[this.stack.length - 1];
    }
   
    getMin() {
       return this.minValues[this.minValues.length - 1];
    }
};
