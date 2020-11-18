import { simpleAdd } from "./add";

const f = "foo" + simpleAdd(1, 2).toFixed(0) + "moo";

console.log({f});