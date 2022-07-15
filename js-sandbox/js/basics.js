// PRIMITIVE TYPES

// null
// undefined
// number
// string
// boolean
// symbol (ES6)

var a = 1;
var b = 2;
var c = 'str';
var bool = true;
var bool1 = false;
var d;
d = 10;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// CONDITION OPERATOR
console.log('1' == 1);
console.log('1' === 1);
if ('1' === 1) console.log(123);

if ('1' === 1) {
    console.log(123);
}

if ('1' === 1) {
    console.log(123);
} else {
    console.log(321);
}

if ('1' === 1) {
    console.log(123);
}
else {
    console.log(321);
}

if (1) {
    console.log('here is 1')
}

if (0) {
    console.log('here is 0')
}

if (null) {
    console.log('here is 0')
}

// TERNARY OPERATOR
var tern = 1 > 2 ? 10 : 20;
console.log(tern);


// LOGICAL OPERATORS
console.log(true && false)
console.log(true || false)
console.log(true > false)
console.log(true < false)


// VARIABLE DEFINITIONS
var var0 = 0; // ES5, function scope
let var1 = 1; // ES6, block scope
const var2 = 2; // ES6, block scope

// FUNCTION DEFINITIONS
// ES5
function foo () {
    var funcVar = 10;
    console.log('from func', funcVar);
}

function foo1 (func) {
    func()
}

// ES6
const func1 = () => { return 1 }
const func2 = _ => { return 1 }
const func3 = x => { return x + 1 }
const func4 = (x) => { return x + 1 }
const func5 = (x, y) => { return x + y }
const func6 = x => x + 1;
const func7 = x => ({ name: 'Name: ' + x })


// IIFE
(() => { console.log('iife') })();
(function (a, b) {
    console.log(a * b);
})(1, 2);

foo()
foo1(foo)
// console.log(funcVar)

if (true) {
   var ifVar = 10;
}
console.log('ifVar', ifVar);


// FUNCTIONS ARE FIRST CLASS
const sum = (a, b) => a + b;
const sum2 = a => sum(a, 2)

console.log(sum2(2))


// HIGH ORDER FUNCTIONS
console.log([1, 2, 3, 4].map(el => el + 2));
console.log([1, 2, 3, 4].filter(el => el > 2));
[1, 2, 3, 4].forEach(el => {
    console.log(el);
});
