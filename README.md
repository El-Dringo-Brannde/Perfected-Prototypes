## Perfected-Prototypes
[![npm version](https://badge.fury.io/js/perfected-prototypes.svg)](https://badge.fury.io/js/perfected-prototypes) [![Build Status](https://travis-ci.org/El-Dringo-Brannde/Perfected-Prototypes.svg?branch=master)](https://travis-ci.org/El-Dringo-Brannde/Perfected-Prototypes)


An extension to the Javascript Object, Array, and String prototype chain. Extending the limited functionality to what it should have been the first time around. Such as being able to search for things logically within an array, getting the first and last elements of an array. Or even being able to safely dereference an object without crashing. 


### Features 
- Small package size (29.1kB)
- Well tested
- Easy to install 
- JSdoc documentated
- Works both in ES6 and Node.JS
- Uses `Object.defineProperty` to avoid pollution of chain methods
- Checks to make sure there isn't overwritten methods 

## Installation 

Using NPM: 

``` javascript 
$ npm install -s perfected-prototypes
```

Or Yarn: 
``` javascript 
$ yarn add perfected-prototypes
```

## Usage
Simply require the module into your NodeJS project, no need to assign it to a variable or anything: 

``` javascript 
require('perfected-prototypes')
```

Or, if you want to use it on the front end say in a React or Angular Project: 

``` javascript 
import "perfected-prototypes"
```


And that's it! You're ready to go. 


# API 

## Object Methods: 

### *Object.try()* 

Safely access any value on an object and have it return `false` upon not finding value, Example: 

``` javascript
require('perfected-prototypes')

const foo = {
   a: {
      b: 1
   }
}

foo.try('a.b')
// => 1

console.log(foo.try('a.b.c.d.e.f'))
// => undefined
```

### *Object.isEmpty()*
Test to see if there is any values within your object
 ```javascript
 const foo = {}

 console.log(foo.isEmpty())
 // => true
 ```

 OR: 

 ```javascript
const foo = {a:1}

console.log(foo.isEmpty())
// => false
 ```


### *Object.merge()*
Merge one or any amount of objects together, with key/value presedence dependent on order of objects passed in
``` javascript
const foo = {a:1}
const bar = {b:2}

console.log(foo.merge(bar))
// => {a:1, b:2}
```

OR: 

```javascript
const foo = {a:1}
const bar = {b:2}
const baz = {c:3}

console.log(foo.merge(bar,baz))
// => {a:1, b:2, c:3}
```

### *Object.toArray()* 
Really just `Object.values()`, but extracts all the values into an array
``` javascript
const foo = {a:1,b:2,c:3}

console.log(foo.toArray())
// => [1,2,3]
```

### *Object.deepCopy()*
Deep copy the object with `JSON.parse(JSON.stringify())`, erasing any object references

```javascript
const foo = {a:1, b:2}

const bar = foo.deepCopy()
bar.a = 2

console.log(bar)
// => {a:2,b:2}

console.log(foo)
// => {a:1, b:2}
```

### *Object.deepEqual()*
Checks the equality between two objects
``` javascript
const obj1 = {a: 1, b:'2'}
const obj2 = {a: 1, b:'2'}

console.log(obj1.deepEqual(obj2))
// => true
```


## Array Methods: 
### *Array.first*
A getter to easily get the *first* element of an array
``` javascript
const arr = [1,2,3,4,5]

console.log(arr.first)
// => 1
```

### *Array.last* 
A getter to easily get the *last* element of the array
``` javascript
const arr = [1,2,3,4,5]

console.log(arr.last)
// => 5
```

### *Array.access()*
Access values within the array in a python like style, such that negative indexing is allowed

``` javascript
const arr = [1,2,3]

console.log(arr.access(-1))
// => 3

```

### *Array.clear()* 
Clear the array being worked on, and return a new empty array
``` javascript 
const arr = [1,2,3,4,5]

console.log(arr.clear())
// => []
```

OR: 
```javascript

const arr = [1,2,3,4,5]
arr.clear()

console.log(arr)
// => []
```

### *Array.isEmpty()*
Checks to see if the array is empty 

```javascript
const arr = [1,2,3]
console.log(arr.isEmpty())
// => false

const arr  = []
console.log(arr.isEmpty())
// => true
```

### *Array.diff()*
Find the difference between two arrays, empty if no difference

``` javascript
const arr1 = [1,2,3]
const arr2 = [1]

console.log(arr1.diff(arr2))
// => [2,3]
```

### *Array.shuffle()*
Using the current array, shuffle the values and return new array (Doesn't mutate original). 

```javascript
   const arr = [1,2,3,4]
   console.log(arr.shuffle())
   // => [2,3,1,4]
```

### *Array.deepEqual()*
Check the equality between two arrays returning a boolean

``` javascript
   const arr1 = [1,2,false, 'boo']
   const arr2 = [1,2,false, 'boo']
   
   console.log(arr1.deepEqual(arr2))
   // => true
```

## String Methods

### *String.camelCase()*
Turn a string into camel case: I.E - 'Brandon Dring' -> 'brandonDring'

``` javascript 
const str =  'Brandon Dring'

console.log(str.camelCase())
// => 'brandonDring'
```

### *String.numberize()*
Add appropriate commas to a whole number (No decimals)
```javascript
const str = '1000000'
console.log(str.numberize())
// => '1,000,000'
```

### *String.startCase()*
Capitalize the first letter in every word of the string (good for names)
```javascript
const str = 'brandon dring'
console.log(str.startCase())
// => 'Brandon Dring'
```

### *String.contains()*
Check to see if a given value is within a string
```javascript 
const str = 'The quick brown fox jumps over the lazy dog'

console.log(str.contains('fox'))
// => true
```








## Contributing
Please feel free to add an issue, or create a pull request to add extra functionality to the prototype chain. However, I don't want to pollute the chain with the entire library of lodash persay, just the most useful functions.



#### Ackowledgements

CDK Global's annual hackathon for giving me the time to work on this.

[prototypes](https://www.npmjs.com/package/prototypes) for the general idea. 

[Lodash](https://github.com/lodash/lodash) for their library to solve common issues





