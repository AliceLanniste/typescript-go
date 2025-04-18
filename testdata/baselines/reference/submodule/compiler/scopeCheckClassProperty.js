//// [tests/cases/compiler/scopeCheckClassProperty.ts] ////

//// [scopeCheckClassProperty.ts]
class C {
  constructor() {
    new A().p; // ok
  }
  public x = new A().p; // should also be ok
}
class A {
  public p = '';
}


//// [scopeCheckClassProperty.js]
class C {
    constructor() {
        new A().p; // ok
    }
    x = new A().p; // should also be ok
}
class A {
    p = '';
}
