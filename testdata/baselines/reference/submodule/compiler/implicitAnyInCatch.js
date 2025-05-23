//// [tests/cases/compiler/implicitAnyInCatch.ts] ////

//// [implicitAnyInCatch.ts]
// this should not be an error
try { } catch (error) {
    if (error.number === -2147024809) { }
}
for (var key in this) { }

class C {
    public temp() {
        for (var x in this) {
        }
    }
}



//// [implicitAnyInCatch.js]
// this should not be an error
try { }
catch (error) {
    if (error.number === -2147024809) { }
}
for (var key in this) { }
class C {
    temp() {
        for (var x in this) {
        }
    }
}
