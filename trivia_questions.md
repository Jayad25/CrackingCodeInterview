
var foo = 10 + "20"; // '1020'

console.log(0.1 + 0.2 == 0.3); /// false
 // 0.1 + 0.2 = 0.30000000000
"i'm a lasagna hog".split("").reverse().join("");
// split ' => \'

(window.foo || (window.foo = "bar"));

// Bar

---
title: Coding Questions
layout: layouts/page.njk
permalink: /questions/coding-questions/index.html
---

Question: What is the value of `foo`?
```javascript
var foo = 10 + '20';  
```
Answer: '1020'

Question: What will be the output of the code below?
```javascript
console.log(0.1 + 0.2 == 0.3);
```
Answer: false 0.1+0.2 = 0.3000
Question: How would you make this work?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Question: What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Answer: 'goh angasal a m\'i' ' will replace with \'

Question: What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```
Answer : 'bar'

Question: What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Answer: Hello world
second alert : Refernce Error :bar is not defined

Question: What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Answer: 2

Question: What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Answer : Undefined

Question: What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```
Answer: One
        Three
        Four
        undefined
        two

Question: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```
