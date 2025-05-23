//// [tests/cases/compiler/collisionSuperAndNameResolution.ts] ////

//// [collisionSuperAndNameResolution.ts]
var console: {
    log(message: any);
}
var _super = 10; // No error
class base {
}
class Foo extends base {
    x() {
        console.log(_super); // Error as this doesnt not resolve to user defined _super
    }
}

//// [collisionSuperAndNameResolution.js]
var console;
var _super = 10; // No error
class base {
}
class Foo extends base {
    x() {
        console.log(_super); // Error as this doesnt not resolve to user defined _super
    }
}
