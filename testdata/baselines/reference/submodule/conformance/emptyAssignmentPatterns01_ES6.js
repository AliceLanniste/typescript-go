//// [tests/cases/conformance/es6/destructuring/emptyAssignmentPatterns01_ES6.ts] ////

//// [emptyAssignmentPatterns01_ES6.ts]
var a: any;

({} = a);
([] = a);

//// [emptyAssignmentPatterns01_ES6.js]
var a;
({} = a);
([] = a);
