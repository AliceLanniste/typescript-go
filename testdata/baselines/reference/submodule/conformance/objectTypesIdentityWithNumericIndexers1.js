//// [tests/cases/conformance/types/typeRelationships/typeAndMemberIdentity/objectTypesIdentityWithNumericIndexers1.ts] ////

//// [objectTypesIdentityWithNumericIndexers1.ts]
// object types are identical structurally

class A {
    [x: number]: string;
}

class B {
    [x: number]: string;
}

class C<T> {
    [x: number]: T;
}

interface I {
    [x: number]: string;
}

class PA extends A {
}

class PB extends B {
}

var a: {
    [x: number]: string;
}
var b: { [x: number]: string; } = { 0: '' };

function foo1(x: A);
function foo1(x: A); // error
function foo1(x: any) { }

function foo1b(x: B);
function foo1b(x: B); // error
function foo1b(x: any) { }

function foo1c(x: C<string>);
function foo1c(x: C<string>); // error
function foo1c(x: any) { }

function foo2(x: I);
function foo2(x: I); // error
function foo2(x: any) { }

function foo3(x: typeof a);
function foo3(x: typeof a); // error
function foo3(x: any) { }

function foo4(x: typeof b);
function foo4(x: typeof b); // error
function foo4(x: any) { }

function foo5(x: A);
function foo5(x: B); // error
function foo5(x: any) { }

function foo5b(x: A);
function foo5b(x: C<string>); // error
function foo5b(x: any) { }

function foo5c(x: A);
function foo5c(x: PA); // error
function foo5c(x: any) { }

function foo5d(x: A);
function foo5d(x: PB); // error
function foo5d(x: any) { }

function foo6(x: A);
function foo6(x: I); // error
function foo6(x: any) { }

function foo7(x: A);
function foo7(x: typeof a); // error
function foo7(x: any) { }

function foo8(x: B);
function foo8(x: I); // error
function foo8(x: any) { }

function foo9(x: B);
function foo9(x: C<string>); // error
function foo9(x: any) { }

function foo10(x: B);
function foo10(x: typeof a); // error
function foo10(x: any) { }

function foo11(x: B);
function foo11(x: typeof b); // error
function foo11(x: any) { }

function foo11b(x: B);
function foo11b(x: PA); // error
function foo11b(x: any) { }

function foo11c(x: B);
function foo11c(x: PB); // error
function foo11c(x: any) { }

function foo12(x: I);
function foo12(x: C<string>); // error
function foo12(x: any) { }

function foo13(x: I);
function foo13(x: typeof a); // error
function foo13(x: any) { }

function foo14(x: I);
function foo14(x: typeof b); // error
function foo14(x: any) { }

function foo15(x: I);
function foo15(x: PA); // error
function foo15(x: any) { }

function foo16(x: I);
function foo16(x: PB); // error
function foo16(x: any) { }



//// [objectTypesIdentityWithNumericIndexers1.js]
// object types are identical structurally
class A {
}
class B {
}
class C {
}
class PA extends A {
}
class PB extends B {
}
var a;
var b = { 0: '' };
function foo1(x) { }
function foo1b(x) { }
function foo1c(x) { }
function foo2(x) { }
function foo3(x) { }
function foo4(x) { }
function foo5(x) { }
function foo5b(x) { }
function foo5c(x) { }
function foo5d(x) { }
function foo6(x) { }
function foo7(x) { }
function foo8(x) { }
function foo9(x) { }
function foo10(x) { }
function foo11(x) { }
function foo11b(x) { }
function foo11c(x) { }
function foo12(x) { }
function foo13(x) { }
function foo14(x) { }
function foo15(x) { }
function foo16(x) { }
