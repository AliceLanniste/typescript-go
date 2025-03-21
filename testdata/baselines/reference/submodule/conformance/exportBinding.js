//// [tests/cases/conformance/es6/modules/exportBinding.ts] ////

//// [exportConsts.ts]
export { x }
export { x as xx }
export default x;

const x = 'x'

export { Y as Z }
class Y {}

//// [exportVars.ts]
export { y }
export { y as yy }
export default y;
var y = 'y'


//// [exportConsts.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Z = exports.xx = exports.x = void 0;
exports.default = x;
const x = 'x';
exports.x = x;
exports.xx = x;
class Y {
}
exports.Z = Y;
//// [exportVars.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy = exports.y = void 0;
exports.default = y;
var y = 'y';
exports.y = y;
exports.yy = y;
