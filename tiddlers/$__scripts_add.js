/*\
title: $:/scripts/add.js
type: application/javascript
module-type: macro

<<add x y z>>
\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
/*"use strict"; */

exports.name = "add";

exports.params = [
	{ name: "x" },
	{ name: "y" }, 
	{ name: "z" },
	{ name: "a" },
	{ name: "b" },
	{ name: "c" },
	{ name: "d" },
	{ name: "e" },
	{ name: "f" },
	{ name: "g" },
	{ name: "h" },
	{ name: "i" },
	{ name: "j" },
	{ name: "k" },
	{ name: "l" },
	{ name: "m" },
	{ name: "n" },
	{ name: "o" },
	{ name: "p" },
	{ name: "q" },
	{ name: "r" },
	{ name: "s" },
	{ name: "t" },
	{ name: "u" },
	{ name: "v" },
	{ name: "w" },
];

exports.run = function(x, y, z, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
	array = [ x, y, z, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w ];
	if (typeof x === 'undefined') {
		x = 0
	};
	if( !x) x = 0;
	x = parseInt(x);

	if (typeof y === 'undefined') {
		y = 0
	};
	if( !y) y = 0;
	y = parseInt(y);

	if (typeof z === 'undefined') {
		z = 0
	};
	if( !z) z = 0;
	z = parseInt(z);

	if (typeof a === 'undefined') {
		a = 0
	};
	if( !a) a = 0;
	a = parseInt(a);

	if (typeof b === 'undefined') {
		b = 0
	};
	if( !b) b = 0;
	b = parseInt(b);

	if (typeof c === 'undefined') {
		c = 0
	};
	if( !c) c = 0;
	c = parseInt(c);

	if (typeof d === 'undefined') {
		d = 0
	};
	if( !d) d = 0;
	d = parseInt(d);

	if (typeof e === 'undefined') {
		e = 0
	};
	if( !e) e = 0;
	e = parseInt(e);

	if (typeof f === 'undefined') {
		f = 0
	};
	if( !f) f = 0;
	f = parseInt(f);

	if (typeof g === 'undefined') {
		g = 0
	};
	if( !g) g = 0;
	g = parseInt(g);

	if (typeof h === 'undefined') {
		h = 0
	};
	if( !h) h = 0;
	h = parseInt(h);

	if (typeof i === 'undefined') {
		i = 0
	};
	if( !i) i = 0;
	i = parseInt(i);

	if (typeof j === 'undefined') {
		j = 0
	};
	if( !j) j = 0;
	j = parseInt(j);

	if (typeof k === 'undefined') {
		k = 0
	};
	if( !k) k = 0;
	k = parseInt(k);

	if (typeof l === 'undefined') {
		l = 0
	};
	if( !l) l = 0;
	l = parseInt(l);

	if (typeof m === 'undefined') {
		m = 0
	};
	if( !m) m = 0;
	m = parseInt(m);

	if (typeof n === 'undefined') {
		n = 0
	};
	if( !n) n = 0;
	n = parseInt(n);

	if (typeof o === 'undefined') {
		o = 0
	};
	if( !o) o = 0;
	o = parseInt(o);

	if (typeof p === 'undefined') {
		p = 0
	};
	if( !p) p = 0;
	p = parseInt(p);

	if (typeof q === 'undefined') {
		q = 0
	};
	if( !q) q = 0;
	q = parseInt(q);

	if (typeof r === 'undefined') {
		r = 0
	};
	if( !r) r = 0;
	r = parseInt(r);

	if (typeof s === 'undefined') {
		s = 0
	};
	if( !s) s = 0;
	s = parseInt(s);

	if (typeof t === 'undefined') {
		t = 0
	};
	if( !t) t = 0;
	t = parseInt(t);

	if (typeof u === 'undefined') {
		u = 0
	};
	if( !u) u = 0;
	u = parseInt(u);

	if (typeof v === 'undefined') {
		v = 0
	};
	if( !v) v = 0;
	v = parseInt(v);

	if (typeof w === 'undefined') {
		w = 0
	};
	if( !w) w = 0;
	w = parseInt(w);

	var output = x + y + z + a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w;
	return output;
};

})();