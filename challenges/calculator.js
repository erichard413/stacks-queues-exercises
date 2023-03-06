// In this exercise, you’ll build a “polish notation calculator”.

// Polish notation is a different way to write an artithmetic expression. For example, instead of writing 1 + 2 * 3, as we would in normal (“infix”) style, we could write it with the operators to the left of their arguments. This expression would become + 1 * 2 3. You can read a polish notation expression backwards to see exactly what it does — in this case, multiply 2 times 3, and add that result to 1.

// Let’s try this out:

// calc("+ 1 2")  # 1 + 2 == 3

// calc("* 2 + 1 2")  # 2 * (1 + 2) == 6

// calc("+ 9 * 2 3")   # 9 + (2 * 3) == 15
// Let’s make sure we have non-commutative operators (subtraction and division) working:

// calc("- 1 2")  # 1 - 2 == -1

// calc("- 9 * 2 3")  # 9 - (2 * 3) == 3

// calc("/ 6 - 4 2")  # 6 / (4 - 2) == 3

const Stack = require('../stack');

const calculator = (str) => {
    let total = 0;
    let CalcStack = new Stack;
    let operators = "*/+-"
    let strArr = str.split("");
    for(i=0; i <= strArr.length-1; i++){
        if (strArr[i] != " ") {
            CalcStack.push(strArr[i]);
        }
    }
    let nums = []
    while (CalcStack.size > 0){
        let currentChar = CalcStack.pop();
        if (operators.includes(currentChar)) {
            if (nums.length == 2) {
                total = eval(`${nums[1]}${currentChar}${nums[0]}`);
                nums=[]
            } else {
                total = eval(`${nums[0]}${currentChar}${total}`)
                return total;
            }
        } else {
            nums.push(currentChar);
        }
    }
    return total;
}

module.exports = calculator;