/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _templateObject = _taggedTemplateLiteral(['Hello ', ' world ', ''], ['Hello ', ' world ', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	{

		var a = [];

		var _loop = function _loop(i) {

			a[i] = function () {

				console.log(i);
			};
		};

		for (var i = 0; i < 10; i++) {
			_loop(i);
		}

		a[6](); // 6
	}

	/*********/
	{
		var _bar = function _bar() {
			var func = arguments.length <= 0 || arguments[0] === undefined ? function (x) {
				return foo;
			} : arguments[0];

			var foo = 'inner';

			console.log(func()); // outer
		};

		var _foo = 'outer';

		_bar();
	}

	/*********/
	{
		(function () {
			var f = function f() {
				console.log('I am outside!');
			};

			(function () {

				if (false) {

					// 重复声明一次函数f

					var _f = function _f() {
						console.log('I am inside!');
					};
				}

				f();
			})();
		})();
	}

	/*********/
	{
		var fibs = regeneratorRuntime.mark(function fibs() {
			var a, b, _ref4;

			return regeneratorRuntime.wrap(function fibs$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							a = 0;
							b = 1;

						case 2:
							if (false) {
								_context.next = 10;
								break;
							}

							_context.next = 5;
							return a;

						case 5:
							_ref4 = [b, a + b];
							a = _ref4[0];
							b = _ref4[1];
							_context.next = 2;
							break;

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, fibs, this);
		});
		var bax = 1;
		var bay = 2;
		var baz = 3;
		var _ref = ["foo", "bar", "baz"];
		var _third = _ref[2];
		var head = 1;
		var tail = [2, 3, 4];
		var _ref2 = [1, 2, 3];
		var x = _ref2[0];
		var y = _ref2[1];
		var _ref3 = ['a'];
		x = _ref3[0];
		var _ref3$ = _ref3[1];
		y = _ref3$ === undefined ? 'b' : _ref3$;

		var _fibs = fibs();

		var _fibs2 = _slicedToArray(_fibs, 6);

		var first = _fibs2[0];
		var second = _fibs2[1];
		var third = _fibs2[2];
		var fourth = _fibs2[3];
		var fifth = _fibs2[4];
		var sixth = _fibs2[5];

		console.log(sixth);

		var _foo$bar = { foo: "aaa", bar: "bbb" };
		var foo = _foo$bar.foo;
		var bar = _foo$bar.bar;

		var obj = { first: 'hello', last: 'world' };

		var f = obj.first;
		var l = obj.last;
	}

	{
		var add = function add(_ref5) {
			var _ref6 = _slicedToArray(_ref5, 2);

			var x = _ref6[0];
			var y = _ref6[1];

			return x + y;
		};

		// 3

		var move = function move() {
			var _ref7 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			var _ref7$x = _ref7.x;
			var x = _ref7$x === undefined ? 0 : _ref7$x;
			var _ref7$y = _ref7.y;
			var y = _ref7$y === undefined ? 0 : _ref7$y;

			return [x, y];
		};

		var move_wrong = function move_wrong() {
			var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

			var x = _ref8.x;
			var y = _ref8.y;

			return [x, y];
		};

		add([1, 2]);

		var map = new Map();

		map.set('first', 'hello');

		map.set('second', 'world');

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _step$value = _slicedToArray(_step.value, 2);

				var key = _step$value[0];
				var value = _step$value[1];

				console.log(key + " is " + value);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	{

		/^(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u180D\u180F-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test('𠮷');

		/(?:\uD842\uDFB7){2}/.test('𠮷𠮷');

		var s = "Hello world!";

		s.startsWith("Hello"); // true

		s.endsWith("!"); // true

		s.includes("o"); // true

		"x".repeat(3);

		RegExp.escape("The Quick Brown Fox");

		'In JavaScript this is\n\t\n not legal.';

		console.log('string text line 1\n\t\nstring text line 2');

		var name = "Bob",
		    time = "today";

		'Hello ' + name + ', how are you ' + time + '?';

		var a = 5;

		var b = 10;

		tag(_templateObject, a + b, a * b);
	}

/***/ }
/******/ ]);