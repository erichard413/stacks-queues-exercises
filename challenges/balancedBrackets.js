// Balanced Brackets?
// Write a function that is passed a string which can contain any text, including different kinds of brackets: {} [] ().

// It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

// Examples of balanced strings:

// hello (no brackets)
// (hi) [there] ()[]
// (hi [there])  ([])
// (((hi)))     ((()))

// (([]))[]
// Imbalanced:

// (hello (bracket left open at end)     (
// (nope] (wrong type closed)           (]
// ((ok) [nope)] (closed out of order)  (()[)]

const Stack = require('../stack')

const balancedBracket = (str)=> {
    let BracketStack = new Stack;
    let opening = "([{";
    let closing = ")]}";
    if (!str.includes(closing[0], closing[1], closing[2]) && !str.includes(opening[0], opening[1], opening[2])) return '(no brackets)';

    for (let i = 0; i <= str.length-1; i++) {
        if (opening.includes(str[i])) {
           BracketStack.push(str[i]);
        }
        // if the current character is closing bracket like ), } or ], then pop from stack, and check whether the popped bracket is corresponding starting bracket of the current character, then it is fine, otherwise that is not balanced.
        if (closing.includes(str[i])) {
            let removed = BracketStack.pop();
            let idx = closing.indexOf(str[i])
            if (removed != opening[idx]) return false;
        }
    }
    return true;
}

module.exports = balancedBracket;
