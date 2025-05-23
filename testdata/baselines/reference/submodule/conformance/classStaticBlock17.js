//// [tests/cases/conformance/classes/classStaticBlock/classStaticBlock17.ts] ////

//// [classStaticBlock17.ts]
let friendA: { getX(o: A): number, setX(o: A, v: number): void };

class A {
  #x: number;

  constructor (v: number) {
    this.#x = v;
  }

  getX () {
    return this.#x;
  }

  static {
    friendA = {
      getX(obj) { return obj.#x },
      setX(obj, value) { obj.#x = value }
    };
  }
};

class B {
  constructor(a: A) {
    const x = friendA.getX(a); // ok
    friendA.setX(a, x + 1); // ok
  }
};

const a = new A(41);
const b = new B(a);
a.getX();

//// [classStaticBlock17.js]
let friendA;
class A {
    #x;
    constructor(v) {
        this.#x = v;
    }
    getX() {
        return this.#x;
    }
    static {
        friendA = {
            getX(obj) { return obj.#x; },
            setX(obj, value) { obj.#x = value; }
        };
    }
}
;
class B {
    constructor(a) {
        const x = friendA.getX(a); // ok
        friendA.setX(a, x + 1); // ok
    }
}
;
const a = new A(41);
const b = new B(a);
a.getX();
