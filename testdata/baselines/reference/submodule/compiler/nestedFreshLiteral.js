//// [tests/cases/compiler/nestedFreshLiteral.ts] ////

//// [nestedFreshLiteral.ts]
interface CSSProps  {
  color?: string
}
interface NestedCSSProps {
  nested?: NestedSelector
}
interface NestedSelector  {
  prop: CSSProps;
}

let stylen: NestedCSSProps = {
  nested: { prop: { colour: 'red' } }
}

//// [nestedFreshLiteral.js]
let stylen = {
    nested: { prop: { colour: 'red' } }
};
