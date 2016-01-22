{

	
var a = [];
	
for (let i = 0; i < 10; i++) {
	
  a[i] = function () {
	
    console.log(i);
	
  };
	
}
	
a[6](); // 6
}

/*********/
{
	
let foo = 'outer';

	
function bar(func = x => foo) {
	
  let foo = 'inner';
	
  console.log(func()); // outer
	
}

	
bar();
}

/*********/
{
	
function f() { console.log('I am outside!'); }
	
(function () {
	
  if(false) {
	
    // 重复声明一次函数f
	
    function f() { console.log('I am inside!'); }
	
  }

	
  f();
	
}());
}


/*********/
{
	
let [bax, [[bay], baz]] = [1, [[2], 3]];
	
let [,,third] = ["foo", "bar", "baz"];
	
let [head, ...tail] = [1, 2, 3, 4];
	
let [x, y] = [1, 2, 3];
	
[x, y='b'] = ['a'];

	
function* fibs() {
	
  var a = 0;
	
  var b = 1;
	
  while (true) {
	
    yield a;
	
    [a, b] = [b, a + b];
	
  }
	
}

	
var [first, second, third, fourth, fifth, sixth] = fibs();
	
console.log(sixth);
	
var { foo, bar } = { foo: "aaa", bar: "bbb" };
	
let obj = { first: 'hello', last: 'world' };
	
let { first: f, last: l } = obj;
}

{
	
function add([x, y]){
	
  return x + y;
	
}

	
add([1, 2]) // 3

	
function move({x = 0, y = 0} = {}) {
	
  return [x, y];
	
}

	
function move_wrong({x, y} = { x: 0, y: 0 }) {
	
  return [x, y];
	
}

	
var map = new Map();
	
map.set('first', 'hello');
	
map.set('second', 'world');

	
for (let [key, value] of map) {
	
  console.log(key + " is " + value);
	
}
}

{
	
(/^\S$/u).test('𠮷');
	
(/𠮷{2}/u).test('𠮷𠮷')
	
var s = "Hello world!";

	
s.startsWith("Hello") // true
	
s.endsWith("!") // true
	
s.includes("o") // true
	
"x".repeat(3);
	
RegExp.escape("The Quick Brown Fox");


	
`In JavaScript this is
	
 not legal.`

	
console.log(`string text line 1
	
string text line 2`);

	
var name = "Bob", time = "today";
	
`Hello ${name}, how are you ${time}?`;

	
var a = 5;
	
var b = 10;
	
tag`Hello ${ a + b } world ${ a * b }`;
}
