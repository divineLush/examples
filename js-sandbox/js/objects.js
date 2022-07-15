// OBJECTS

// BUILT-IN CONSTRUCTORS
const num = new Number(1)
const str = new String('abc')

console.log(num)
console.log(num === 1) // false
console.log(str)
console.log(str === 'abc')

Number.prototype.isPositive = function () {
    return this > 0
}

console.log(new Number(3).isPositive())
console.log(Number.__proto__)


// OBJECT CONSTRUCTOR
const obj = new Object()
obj['0_first'] = 'a'
obj['second'] = 'b'
console.log(obj)


// OBJECT LITERALS
const literal = { first: 'a', last: 'b' }
console.log(literal)


// FUNCTION CONSTRUCTORS
function Foo () {
    this.first = 'a'
}
console.log(new Foo())


function Empty () {}
console.log(new Empty()) // Empty {}
console.log(Empty()) // undefined


// BY VALUE BY REFERENCE
const objA = { a: 'a' }
const objB = objA
objB.a = 'b'
console.log(objA, objB)


// SPREAD
const originalObj = { a: 'a' }
const clone = {...originalObj, ...objB, cloneProp: 'b'}
clone.a = 'b'
console.log(originalObj, clone)


// ASSIGN
const targetObj = { target: 'a' }
const sourceObj = { source: 'b' }
const assignedClone = Object.assign(targetObj, sourceObj, clone, originalObj)
console.log(assignedClone)


// IMMUTABLE OBJECTS
const immutableObj = Object.freeze({ freeze: 'abc'})
immutableObj.freeze = '1'
console.log(immutableObj)


// FUNCTIONS ARE OBJECTS
function poorFunc () {}
poorFunc.a = 'b'
console.log(poorFunc.a)


// ES6 CLASSES
class Person {
    constructor(first, last) {
	this.first = first
	this.last = last
    }

    fullName() {
	return `${this.first} ${this.last}`
    }
}

class Student extends Person {
    constructor(first, last, uni) {
	super(first, last) // Person class constructor
	this.uni = uni
    }

    uniSay() {
	return `I hate studying at ${this.uni}`
    }
}

const alex = new Person('Al', 'ex')
console.log(alex.fullName())

const student = new Student('Al', 'ex', 'NSU')
console.log(student)
console.log(student.uniSay())
