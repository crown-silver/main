(function() {
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.ka = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.ka
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        t = function(a, b) {
            a.raw = b;
            return a
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ma = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = ma;
                ja = na.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ia,
        pa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    r("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = pa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var qa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return qa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return qa(this, function(b) {
                return b
            })
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.wa = (new Date).getTime();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var u = this || self,
        ra = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        sa = function(a) {
            var b = ra(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ta = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        va = 0,
        wa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        xa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ya = function(a, b, c) {
            ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
            return ya.apply(null, arguments)
        },
        za = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.va = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.B = function(d, e, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        Aa = function(a) {
            return a
        },
        Ba = function(a) {
            var b = null,
                c = u.trustedTypes;
            if (!c || !c.createPolicy) return b;
            try {
                b = c.createPolicy(a, {
                    createHTML: Aa,
                    createScript: Aa,
                    createScriptURL: Aa
                })
            } catch (d) {
                u.console && u.console.error(d.message)
            }
            return b
        };

    function Ca(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    za(Ca, Error);
    Ca.prototype.name = "CustomError";
    var Da;

    function Ea(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    }
    za(Ea, Ca);
    Ea.prototype.name = "AssertionError";
    var Fa = function(a, b, c) {
            if (!a) {
                var d = "Assertion failed";
                if (b) {
                    d += ": " + b;
                    var e = Array.prototype.slice.call(arguments, 2)
                }
                throw new Ea("" + d, e || []);
            }
        },
        Ga = function(a, b) {
            throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        };
    var Ha = Array.prototype.forEach ? function(a, b) {
        Fa(null != a.length);
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ka(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    var La;
    var v = function(a, b) {
        if (b !== Ma) throw Error("SafeUrl is not meant to be built directly");
        this.S = a
    };
    v.prototype.toString = function() {
        return this.S.toString()
    };
    v.prototype.G = !0;
    v.prototype.F = function() {
        return this.S.toString()
    };
    var Ma = {};
    new v("about:invalid#zClosurez", Ma);
    new v("about:blank", Ma);
    var Na = {},
        Oa = function() {
            if (Na !== Na) throw Error("SafeStyle is not meant to be built directly");
            this.fa = "";
            this.G = !0
        };
    Oa.prototype.F = function() {
        return this.fa
    };
    Oa.prototype.toString = function() {
        return this.fa.toString()
    };
    new Oa;
    var Pa = {},
        Qa = function() {
            if (Pa !== Pa) throw Error("SafeStyleSheet is not meant to be built directly");
            this.ea = "";
            this.G = !0
        };
    Qa.prototype.toString = function() {
        return this.ea.toString()
    };
    Qa.prototype.F = function() {
        return this.ea
    };
    new Qa;
    var Ra = {},
        x = function(a, b) {
            if (b !== Ra) throw Error("SafeHtml is not meant to be built directly");
            this.R = a;
            this.G = !0
        };
    x.prototype.F = function() {
        return this.R.toString()
    };
    x.prototype.toString = function() {
        return this.R.toString()
    };
    new x(u.trustedTypes && u.trustedTypes.emptyHTML || "", Ra);
    var Sa = function(a, b) {
        this.name = a;
        this.value = b
    };
    Sa.prototype.toString = function() {
        return this.name
    };
    var Ta = new Sa("OFF", Infinity),
        Ua = new Sa("WARNING", 900),
        Va = new Sa("CONFIG", 700),
        Wa = function() {
            this.C = 0;
            this.clear()
        },
        Xa;
    Wa.prototype.clear = function() {
        this.W = Array(this.C);
        this.Y = -1;
        this.aa = !1
    };
    var Ya = function(a, b, c) {
        this.reset(a || Ta, b, c, void 0, void 0)
    };
    Ya.prototype.reset = function() {};
    var Za = function(a, b) {
            this.level = null;
            this.pa = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.qa = {
                N: function() {
                    return a
                }
            }
        },
        $a = function(a) {
            if (a.level) return a.level;
            if (a.parent) return $a(a.parent);
            Ga("Root logger has no level set.");
            return Ta
        },
        ab = function(a, b) {
            for (; a;) a.pa.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        bb = function() {
            this.entries = {};
            var a = new Za("");
            a.level = Va;
            this.entries[""] = a
        },
        cb, db = function(a, b) {
            var c = a.entries[b];
            if (c) return c;
            c = db(a, b.slice(0, Math.max(b.lastIndexOf("."),
                0)));
            var d = new Za(b, c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        },
        eb = function() {
            cb || (cb = new bb);
            return cb
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var fb = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
    var gb = {};
    var y = function(a, b) {
            if (b !== gb) throw Error("Bad secret");
            this.ga = a
        },
        z = function() {};
    y.prototype = ha(z.prototype);
    y.prototype.constructor = y;
    if (oa) oa(y, z);
    else
        for (var hb in z)
            if ("prototype" != hb)
                if (Object.defineProperties) {
                    var ib = Object.getOwnPropertyDescriptor(z, hb);
                    ib && Object.defineProperty(y, hb, ib)
                } else y[hb] = z[hb];
    y.va = z.prototype;
    y.prototype.toString = function() {
        return this.ga
    };
    var jb = fa([""]),
        kb = t(["\x00"], ["\\0"]),
        lb = t(["\n"], ["\\n"]),
        mb = t(["\x00"], ["\\u0000"]),
        nb = fa([""]),
        ob = t(["\x00"], ["\\0"]),
        pb = t(["\n"], ["\\n"]),
        qb = t(["\x00"], ["\\u0000"]);

    function rb(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function sb(a) {
        return -1 === a.toString().indexOf("`")
    }
    var ub = sb(function(a) {
            return a(jb)
        }) || sb(function(a) {
            return a(kb)
        }) || sb(function(a) {
            return a(lb)
        }) || sb(function(a) {
            return a(mb)
        }),
        vb = rb(nb) && rb(ob) && rb(pb) && rb(qb);

    function wb() {
        var a = xb;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !ub && a === a.raw || !(ub && !vb || rb(a)) || 1 !== a.length) throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
        var b = a[0].toLowerCase();
        if (0 === b.indexOf("on") || 0 === "on".indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
        fb.forEach(function(c) {
            if (0 === c.indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" + (c + "'. Please use native or safe DOM APIs to set the attribute."));
        });
        return new y(b, gb)
    };
    var yb;
    try {
        new URL("s://g"), yb = !0
    } catch (a) {
        yb = !1
    }
    var zb = yb;

    function Ab(a) {
        if (a instanceof v) a instanceof v && a.constructor === v ? a = a.S : (Ga("expected object of type SafeUrl, got '" + a + "' of type " + ra(a)), a = "type_error:SafeUrl");
        else {
            b: if (zb) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            "javascript:" === b && (Bb(a), a = void 0)
        }
        return a
    }
    var Cb = [],
        Bb = function() {};
    Db(function(a) {
        var b;
        if (b = db(eb(), "safevalues").qa) {
            var c = "A URL with content '" + a + "' was sanitized away.",
                d = Ua;
            if (a = b)
                if (a = b && d) {
                    a = d.value;
                    var e = b ? $a(db(eb(), b.N())) : Ta;
                    a = a >= e.value
                }
            if (a) {
                d = d || Ta;
                a = db(eb(), b.N());
                "function" === typeof c && (c = c());
                Xa || (Xa = new Wa);
                e = Xa;
                b = b.N();
                if (0 < e.C) {
                    var f = (e.Y + 1) % e.C;
                    e.Y = f;
                    e.aa ? (e = e.W[f], e.reset(d, c, b), b = e) : (e.aa = f == e.C - 1, b = e.W[f] = new Ya(d, c, b))
                } else b = new Ya(d, c, b);
                ab(a, b)
            }
        }
    });

    function Db(a) {
        -1 === Cb.indexOf(a) && Cb.push(a);
        Bb = function(b) {
            Cb.forEach(function(c) {
                c(b)
            })
        }
    };
    var Fb = function(a, b) {
            Ka(b, function(c, d) {
                c && "object" == typeof c && c.G && (c = c.F());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Eb.hasOwnProperty(d) ? a.setAttribute(Eb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Eb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Gb = function(a, b, c, d) {
            function e(k) {
                k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!sa(f) || ta(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (ta(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Ha(g ? Ia(f) : f, e)
                }
            }
        },
        Hb = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Ib =
        function(a) {
            Fa(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Jb = function(a) {
            this.D = a || u.document || document
        };
    m = Jb.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.D).getElementsByTagName(String(a))
    };
    m.na = function(a, b, c) {
        var d = this.D,
            e = arguments,
            f = e[1],
            g = Hb(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Fb(g, f));
        2 < e.length && Gb(d, g, e, 2);
        return g
    };
    m.createElement = function(a) {
        return Hb(this.D, a)
    };
    m.createTextNode = function(a) {
        return this.D.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        Fa(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        Gb(Ib(a), a, arguments, 1)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var B = window,
        C = document,
        Kb = B.location,
        Lb = function() {},
        Mb = /\[native code\]/,
        D = function(a, b, c) {
            return a[b] = a[b] || c
        },
        Nb = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        Ob = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        Pb = /&/g,
        Qb = /</g,
        Rb = />/g,
        Sb = /"/g,
        Tb = /'/g,
        Ub = function(a) {
            return String(a).replace(Pb, "&amp;").replace(Qb, "&lt;").replace(Rb, "&gt;").replace(Sb, "&quot;").replace(Tb, "&#39;")
        },
        E = function() {
            var a;
            if ((a = Object.create) &&
                Mb.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        F = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        Vb = function(a) {
            if (Mb.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) F(a, c) && b.push(c);
            return b
        },
        H = function(a, b) {
            a = a || {};
            for (var c in a) F(a, c) && (b[c] = a[c])
        },
        Wb = function(a) {
            return function() {
                B.setTimeout(a, 0)
            }
        },
        I = function(a, b) {
            if (!a) throw Error(b || "");
        },
        J = D(B, "gapi", {});

    function Xb(a) {
        var b = [wb()];
        if (0 === b.length) throw Error("No prefixes are provided");
        if (b.map(function(c) {
                if (c instanceof y) c = c.ga;
                else throw Error("Unexpected type when unwrapping SafeAttributePrefix");
                return c
            }).every(function(c) {
                return 0 !== "data-gapiscan".indexOf(c)
            })) throw Error('Attribute "data-gapiscan" does not match any of the allowed prefixes.');
        a.setAttribute("data-gapiscan", "true")
    };
    var N = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        Yb = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        Zb = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        $b = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        ac = /%([a-f]|[0-9a-fA-F][a-f])/g,
        bc = /^(https?|ftp|file|chrome-extension):$/i,
        cc = function(a) {
            a = String(a);
            a = a.replace(Zb, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace($b, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(ac, function(e) {
                return e.toUpperCase()
            });
            a = a.match(Yb) || [];
            var b = E(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(bc);
            b.B = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.j = a[7] ? [d(a[7])] : [];
            return b
        },
        dc = function(a) {
            return a.B + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.j.length ? "#" + a.j.join("&") : "")
        },
        ec = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (F(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        },
        fc = function(a, b, c, d) {
            a = cc(a);
            a.query.push.apply(a.query, ec(b, d));
            a.j.push.apply(a.j, ec(c, d));
            return dc(a)
        },
        gc = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        hc = function(a, b) {
            var c = cc(b);
            b = c.B;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            var d = "";
            2E3 < b.length && (d = b, b = b.substr(0, 2E3), b = b.replace(gc, ""), d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = cc(b);
            b = c.B;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            b = null === b ? "null" : void 0 === b ? "undefined" : b;
            if ("string" !== typeof b) throw Error("Expected a string");
            b = new v(b, Ma);
            b = Ab(b);
            void 0 !== b && (a.href = b);
            e.appendChild(a);
            a = e.innerHTML;
            void 0 === La && (La = Ba("gapi#html"));
            a = (b = La) ? b.createHTML(a) : a;
            a = new x(a, Ra);
            if (1 === e.nodeType && (b = e.tagName, "SCRIPT" === b || "STYLE" === b)) throw Error("SCRIPT" === b ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
            a instanceof x && a.constructor === x ? a = a.R : (Ga("expected object of type SafeHtml, got '" + a + "' of type " + ra(a)), a = "type_error:SafeHtml");
            e.innerHTML = a;
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = cc(b + d);
            d = c.B;
            c.query.length && (d += "?" + c.query.join(""));
            c.j.length && (d += "#" + c.j.join(""));
            return d
        },
        ic = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var jc;
    var kc = function(a, b, c, d) {
            if (B[c + "EventListener"]) B[c + "EventListener"](a, b, !1);
            else if (B[d + "tachEvent"]) B[d + "tachEvent"]("on" + a, b)
        },
        lc = function() {
            var a = C.readyState;
            return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
        },
        oc = function(a) {
            var b = mc;
            if (!lc()) try {
                b()
            } catch (c) {}
            nc(a)
        },
        nc = function(a) {
            if (lc()) a();
            else {
                var b = !1,
                    c = function() {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                B.addEventListener ? (B.addEventListener("load", c, !1), B.addEventListener("DOMContentLoaded", c, !1)) : B.attachEvent &&
                    (B.attachEvent("onreadystatechange", function() {
                        lc() && c.apply(this, arguments)
                    }), B.attachEvent("onload", c))
            }
        },
        pc = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        qc = {
            button: !0,
            div: !0,
            span: !0
        };
    var O = {};
    O = D(B, "___jsl", E());
    D(O, "I", 0);
    D(O, "hel", 10);
    var rc = function(a) {
            return O.dpo ? O.h : N(a, "jsh", O.h)
        },
        sc = function(a) {
            var b = D(O, "sws", []);
            b.push.apply(b, a)
        },
        tc = function(a) {
            return D(O, "watt", E())[a]
        },
        uc = function(a) {
            var b = D(O, "PQ", []);
            O.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        vc = function(a) {
            return D(D(O, "H", E()), a, E())
        };
    var wc = D(O, "perf", E()),
        xc = D(wc, "g", E()),
        yc = D(wc, "i", E());
    D(wc, "r", []);
    E();
    E();
    var zc = function(a, b, c) {
            var d = wc.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        P = function(a, b, c) {
            xc[a] = !b && xc[a] || c || (new Date).getTime();
            zc(a)
        },
        Bc = function(a, b, c) {
            b && 0 < b.length && (b = Ac(b), c && 0 < c.length && (b += "___" + Ac(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = D(yc, "_p", E()), D(b, c, E())[a] = (new Date).getTime(), zc(a, "_p", c))
        },
        Ac = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var Cc = E(),
        Q = [],
        S = function(a) {
            throw Error("Bad hint: " + a);
        };
    Q.push(["jsl", function(a) {
        for (var b in a)
            if (F(a, b)) {
                var c = a[b];
                "object" == typeof c ? O[b] = D(O, b, []).concat(c) : D(O, b, c)
            }
        if (b = a.u) a = D(O, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Dc = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Ec = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Fc = /^[a-zA-Z0-9\-_\.,!]+$/,
        Gc = /^gapi\.loaded_[0-9]+$/,
        Hc = /^[a-zA-Z0-9,._-]+$/,
        Lc = function(a, b, c, d, e) {
            var f = a.split(";"),
                g = f.shift(),
                k = Cc[g],
                h = null;
            k ? h = k(f, b, c, d) : S("no hint processor for: " + g);
            h || S("failed to generate load url");
            b = h;
            c = b.match(Ic);
            (d = b.match(Jc)) && 1 === d.length && Kc.test(b) && c && 1 === c.length || S("failed sanity: " + a);
            try {
                a = "?";
                if (e && 0 < e.length) {
                    c = b = 0;
                    for (d = {}; c < e.length;) {
                        var l = e[c++],
                            p = ta(l) ? "o" + (Object.prototype.hasOwnProperty.call(l,
                                ua) && l[ua] || (l[ua] = ++va)) : (typeof l).charAt(0) + l;
                        Object.prototype.hasOwnProperty.call(d, p) || (d[p] = !0, e[b++] = l)
                    }
                    e.length = b;
                    h = h + "?le=" + e.join(",");
                    a = "&"
                }
                if (O.rol) {
                    var q = O.ol;
                    q && q.length && (h = "" + h + a + "ol=" + q.length)
                }
            } catch (n) {}
            return h
        },
        Oc = function(a, b, c, d) {
            a = Mc(a);
            Gc.test(c) || S("invalid_callback");
            b = Nc(b);
            d = d && d.length ? Nc(d) : null;
            var e = function(f) {
                return encodeURIComponent(f).replace(/%2C/g, ",")
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=",
                e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.V ? "/am=" + e(a.V) : "", a.ha ? "/rs=" + e(a.ha) : "", a.ja ? "/t=" + e(a.ja) : "", "/cb=", e(c)
            ].join("")
        },
        Mc = function(a) {
            "/" !== a.charAt(0) && S("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) S("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] =
                    a[g] || k)
            }
            b = "/" + c.join("/");
            Dc.test(b) || S("invalid_prefix");
            c = 0;
            for (d = Ec.length; c < d; ++c) Ec[c].test(b) && S("invalid_prefix");
            c = Pc(a, "k", !0);
            d = Pc(a, "am");
            e = Pc(a, "rs");
            a = Pc(a, "t");
            return {
                pathPrefix: b,
                version: c,
                V: d,
                ha: e,
                ja: a
            }
        },
        Nc = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                Hc.test(e) && b.push(e)
            }
            return b.join(",")
        },
        Pc = function(a, b, c) {
            a = a[b];
            !a && c && S("missing: " + b);
            if (a) {
                if (Fc.test(a)) return a;
                S("invalid: " + b)
            }
            return null
        },
        Kc = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Jc = /\/cb=/g,
        Ic = /\/\//g;
    Cc.m = function(a, b, c, d) {
        (a = a[0]) || S("missing_hint");
        return "https://apis.google.com" + Oc(a, b, c, d)
    };
    var Qc = decodeURI("%73cript"),
        Rc = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Sc = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > Nb.call(b, e) && c.push(e)
            }
            return c
        },
        Tc = function() {
            var a = O.nonce;
            return void 0 !== a ? a && a === String(a) && a.match(Rc) ? a : O.nonce = null : C.querySelector ? (a = C.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(Rc) ? O.nonce = a : O.nonce = null) : null : null
        },
        Wc = function(a) {
            if ("loading" != C.readyState) Uc(a);
            else {
                var b = Tc(),
                    c = "";
                null !== b && (c = ' nonce="' +
                    b + '"');
                a = "<" + Qc + ' src="' + encodeURI(a) + '"' + c + "></" + Qc + ">";
                C.write(Vc ? Vc.createHTML(a) : a)
            }
        },
        Uc = function(a) {
            var b = C.createElement(Qc);
            b.setAttribute("src", Vc ? Vc.createScriptURL(a) : a);
            a = Tc();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = C.getElementsByTagName(Qc)[0]) ? a.parentNode.insertBefore(b, a): (C.head || C.body || C.documentElement).appendChild(b)
        },
        Yc = function(a, b, c) {
            Xc(function() {
                var d = b === rc(Kb.href) ? D(J, "_", E()) : E();
                d = D(vc(b), "_", d);
                a(d)
            }, c)
        },
        $c = function(a, b) {
            var c = b || {};
            "function" == typeof b &&
                (c = {}, c.callback = b);
            var d = (b = c) && b._c;
            if (d)
                for (var e = 0; e < Q.length; e++) {
                    var f = Q[e][0],
                        g = Q[e][1];
                    g && F(d, f) && g(d[f], a, b)
                }
            b = [];
            a ? b = a.split(":") : c.features && (b = c.features);
            if (!(a = c.h) && (a = rc(Kb.href), !a)) throw Error("Bad hint: !hint");
            Zc(b || [], c, a)
        },
        Zc = function(a, b, c) {
            var d = !!O.glrp;
            a = Ob(a) || [];
            var e = b.callback,
                f = b.config,
                g = b.timeout,
                k = b.ontimeout,
                h = b.onerror,
                l = void 0;
            "function" == typeof h && (l = h);
            var p = null,
                q = !1;
            if (g && !k || !g && k) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            h = D(vc(c), "r", []).sort();
            var n = D(vc(c), "L", []).sort(),
                K = O.le || [],
                A = [].concat(h),
                w = function(R, ka) {
                    if (q) return 0;
                    B.clearTimeout(p);
                    n.push.apply(n, G);
                    var la = ((J || {}).config || {}).update;
                    la ? la(f) : f && D(O, "cu", []).push(f);
                    if (ka) {
                        Bc("me0", R, A);
                        try {
                            Yc(ka, c, l)
                        } finally {
                            Bc("me1", R, A)
                        }
                    }
                    return 1
                };
            0 < g && (p = B.setTimeout(function() {
                q = !0;
                k()
            }, g));
            var G = Sc(a, n);
            if (G.length) {
                G = Sc(a, h);
                var L = D(O, "CP", []),
                    M = L.length;
                L[M] = function(R) {
                    if (!R) return 0;
                    Bc("ml1", G, A);
                    var ka = function(Ja) {
                            d || (L[M] = null);
                            w(G, R) && (d && (L[M] = null),
                                uc(function() {
                                    e && e();
                                    Ja()
                                }))
                        },
                        la = function() {
                            var Ja = L[M + 1];
                            Ja && Ja()
                        };
                    0 < M && L[M - 1] ? L[M] = function() {
                        ka(la)
                    } : ka(la)
                };
                if (G.length) {
                    var tb = "loaded_" + O.I++;
                    J[tb] = function(R) {
                        L[M](R);
                        J[tb] = null
                    };
                    a = Lc(c, G, "gapi." + tb, h, K);
                    h.push.apply(h, G);
                    Bc("ml0", G, A);
                    b.sync || B.___gapisync ? Wc(a) : Uc(a)
                } else L[M](Lb)
            } else w(G) && e && e()
        },
        Vc = Ba("gapi#gapi");
    var Xc = function(a, b) {
        if (O.hee && 0 < O.hel) try {
            return a()
        } catch (c) {
            b && b(c), O.hel--, $c("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    var ad = J.load;
    ad && D(O, "ol", []).push(ad);
    J.load = function(a, b) {
        return Xc(function() {
            return $c(a, b)
        })
    };
    var bd = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        cd = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        dd = function(a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        },
        T = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !dd(a[d]) && !dd(b[d]) ? T(a[d], b[d]) : b[d] && "object" ===
                    typeof b[d] ? (a[d] = dd(b[d]) ? [] : {}, T(a[d], b[d])) : a[d] = b[d])
        },
        ed = function(a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        },
        fd = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length -
                1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            T(c, b);
            a.push(c)
        },
        gd = function(a) {
            cd(!0);
            var b = window.___gcfg,
                c = bd("cu"),
                d = window.___gu;
            b && b !== d && (fd(c, b), window.___gu = b);
            b = bd("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, bd("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") ||
                (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || "") : f = void 0, (f = ed(f)) && b.push(f));
            a && fd(c, a);
            d = bd("cd");
            a = 0;
            for (b = d.length; a < b; ++a) T(cd(), d[a], !0);
            d = bd("ci");
            a = 0;
            for (b = d.length; a < b; ++a) T(cd(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) T(cd(), c[a], !0)
        },
        U = function(a) {
            var b = cd();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        },
        hd = function(a, b) {
            var c;
            if ("string" === typeof a) {
                var d =
                    c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else c = a;
            gd(c)
        };
    var id = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), D(O, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var jd = {
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        kd = !1,
        ld = E(),
        md = function() {
            if (!kd) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        c = c.substring(14);
                        var d = a[b].content;
                        jd[c] && d && (ld[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in jd) 0 < jd[e] && (b = N(a, e, "")) && (ld[e] = b)
                }
                kd = !0
            }
            e = E();
            H(ld, e);
            return e
        },
        nd = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var od = function() {
        this.i = window.console
    };
    od.prototype.log = function(a) {
        this.i && this.i.log && this.i.log(a)
    };
    od.prototype.error = function(a) {
        this.i && (this.i.error ? this.i.error(a) : this.i.log && this.i.log(a))
    };
    od.prototype.warn = function(a) {
        this.i && (this.i.warn ? this.i.warn(a) : this.i.log && this.i.log(a))
    };
    od.prototype.debug = function() {};
    var pd = new od;
    var qd = function() {
            return !!O.oa
        },
        rd = function() {};
    var V = D(O, "rw", E()),
        sd = function(a) {
            for (var b in V) a(V[b])
        },
        td = function(a, b) {
            (a = V[a]) && a.state < b && (a.state = b)
        };
    var W = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = b.cfg || {};
        b = b.cfg;
        if (!a) return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    };
    var ud = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        vd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        wd = function() {
            var a = W("googleapis.config/sessionIndex");
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (a = window.__X_GOOG_AUTHUSER);
            "string" === typeof a && 254 < a.length && (a = null);
            if (null == a) {
                var b = window.google;
                b && (a = b.authuser)
            }
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (b = window.location.href, a = N(b, "authuser") ||
                null, null == a && (a = (a = b.match(ud)) ? a[1] : null));
            if (null == a) return null;
            a = String(a);
            254 < a.length && (a = null);
            return a
        },
        xd = function() {
            var a = W("googleapis.config/sessionDelegate");
            "string" === typeof a && 21 < a.length && (a = null);
            null == a && (a = (a = window.location.href.match(vd)) ? a[1] : null);
            if (null == a) return null;
            a = String(a);
            21 < a.length && (a = null);
            return a
        };
    var yd, zd, Ad = void 0,
        X = function(a) {
            try {
                return u.JSON.parse.call(u.JSON, a)
            } catch (b) {
                return !1
            }
        },
        Y = function(a) {
            return Object.prototype.toString.call(a)
        },
        Bd = Y(0),
        Cd = Y(new Date(0)),
        Dd = Y(!0),
        Ed = Y(""),
        Fd = Y({}),
        Gd = Y([]),
        Hd = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = Y(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== Gd || a.constructor !== Array && a.constructor !== Object) && (e !== Fd || a.constructor !== Array && a.constructor !== Object) && e !== Ed && e !== Bd && e !== Dd && e !== Cd)) return Hd(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === Bd) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
                else if (e === Dd) b[b.length] = String(!!Number(a));
                else {
                    if (e === Cd) return Hd(a.toISOString.call(a), c);
                    if (e === Gd && Y(a.length) === Bd) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = Hd(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == Ed && Y(a.length) === Bd) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = Hd(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = Hd(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        Id = /[\0-\x07\x0b\x0e-\x1f]/,
        Jd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        Kd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        Ld = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        Md = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        Nd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        Od = /[ \t\n\r]+/g,
        Pd = /[^"]:/,
        Qd = /""/g,
        Rd = /true|false|null/g,
        Sd = /00/,
        Td = /[\{]([^0\}]|0[^:])/,
        Ud = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        Vd = /[^\[,:][\[\{]/,
        Wd = /^(\{|\}|\[|\]|,|:|0)+/,
        Xd = /\u2028/g,
        Yd = /\u2029/g,
        Zd = function(a) {
            a = String(a);
            if (Id.test(a) || Jd.test(a) || Kd.test(a) || Ld.test(a)) return !1;
            var b = a.replace(Md, '""');
            b = b.replace(Nd, "0");
            b = b.replace(Od, "");
            if (Pd.test(b)) return !1;
            b = b.replace(Qd, "0");
            b = b.replace(Rd, "0");
            if (Sd.test(b) || Td.test(b) || Ud.test(b) || Vd.test(b) || !b || (b = b.replace(Wd, ""))) return !1;
            a = a.replace(Xd, "\\u2028").replace(Yd,
                "\\u2029");
            b = void 0;
            try {
                b = Ad ? [X(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && 1 === b.length ? b[0] : !1
        },
        $d = function() {
            var a = ((u.document || {}).scripts || []).length;
            if ((void 0 === yd || void 0 === Ad || zd !== a) && -1 !== zd) {
                yd = Ad = !1;
                zd = -1;
                try {
                    try {
                        Ad = !!u.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === u.JSON.stringify.call(u.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) && !0 === X("true") && 3 === X('[{"a":3}]')[0].a
                    } catch (b) {}
                    yd = Ad && !X("[00]") &&
                        !X('"\u0007"') && !X('"\\0"') && !X('"\\v"')
                } finally {
                    zd = a
                }
            }
        },
        ae = function(a) {
            if (-1 === zd) return !1;
            $d();
            return (yd ? X : Zd)(a)
        },
        be = function(a) {
            if (-1 !== zd) return $d(), Ad ? u.JSON.stringify.call(u.JSON, a) : Hd(a)
        },
        ce = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
        de = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = ce ? de : Date.prototype.toISOString;
    var ee = function() {
        this.blockSize = -1
    };
    var fe = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.M = [];
        this.la = [];
        this.J = [];
        this.J[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.J[a] = 0;
        this.K = this.v = 0;
        this.reset()
    };
    za(fe, ee);
    fe.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.K = this.v = 0
    };
    var ge = function(a, b, c) {
        c || (c = 0);
        var d = a.la;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            k = a.g[3],
            h = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (g ^ k);
                    var l = 1518500249
                } else f = c ^ g ^ k, l = 1859775393;
            else 60 > e ? (f = c & g | k & (c | g), l = 2400959708) :
                (f = c ^ g ^ k, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295;
            h = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + k & 4294967295;
        a.g[4] = a.g[4] + h & 4294967295
    };
    fe.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.M, f = this.v; d < b;) {
                if (0 == f)
                    for (; d <= c;) ge(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            ge(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                ge(this, e);
                                f = 0;
                                break
                            }
            }
            this.v = f;
            this.K += b
        }
    };
    fe.prototype.digest = function() {
        var a = [],
            b = 8 * this.K;
        56 > this.v ? this.update(this.J, 56 - this.v) : this.update(this.J, this.blockSize - (this.v - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.M[c] = b & 255, b /= 256;
        ge(this, this.M);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };
    var he = function() {
        this.T = new fe
    };
    he.prototype.reset = function() {
        this.T.reset()
    };
    var ie = B.crypto,
        je = !1,
        ke = 0,
        le = 0,
        me = 1,
        ne = 0,
        oe = "",
        pe = function(a) {
            a = a || B.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            me = me * b % ne;
            0 < ke && ++le == ke && kc("mousemove", pe, "remove", "de")
        },
        qe = function(a) {
            var b = new he;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.T.update(c);
            b = b.T.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        };
    je = !!ie && "function" == typeof ie.getRandomValues;
    je || (ne = 1E6 * (screen.width * screen.width + screen.height), oe = qe(C.cookie + "|" + C.location + "|" + (new Date).getTime() + "|" + Math.random()), ke = W("random/maxObserveMousemove") || 0, 0 != ke && kc("mousemove", pe, "add", "at"));
    var re = function() {
            var a = O.onl;
            if (!a) {
                a = E();
                O.onl = a;
                var b = E();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        se = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (re().a(a, b), b) : null
        },
        te = function(a) {
            I(/^\w+$/.test(a), "Unsupported id - " + a);
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        ue = function(a) {
            re().r(a)
        };
    var ve = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        we = {
            allowtransparency: !0,
            onload: !0
        },
        xe = 0,
        ye = function(a) {
            I(!a || ic.test(a), "Illegal url for new iframe - " + a)
        },
        ze = function(a, b, c, d, e) {
            ye(c.src);
            var f, g = se(d, c),
                k = g ? te(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + Ub(String(c.frameborder)) + '" scrolling="' + Ub(String(c.scrolling)) + '" ' + k + ' name="' + Ub(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = (a ? new Jb(Ib(a)) : Da || (Da = new Jb)).na("IFRAME"), g && (f.onload = function() {
                        f.onload = null;
                        g.call(this)
                    }, ue(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var h in c) a = c[h], "style" === h && "object" === typeof a ? H(a, f.style) : we[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || pc(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var Ae = /^:[\w]+$/,
        Be = /:([a-zA-Z_]+):/g,
        Ce = function() {
            var a = wd() || "0",
                b = xd();
            var c = wd() || a;
            var d = xd(),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === W("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = W("iframes/:socialhost:"),
                g = W("iframes/:im_socialhost:");
            return jc = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        De = function(a, b) {
            return Ce()[b] || ""
        },
        Ee = function(a) {
            return function(b,
                c) {
                return a ? Ce()[c] || a[c] || "" : Ce()[c] || ""
            }
        };
    var Fe = function(a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            a = b ? b : a;
            return hc(document, a)
        },
        Ge = function(a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = Fe(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
            }
            return window.location.href
        };
    var He = {
            se: "0"
        },
        Ie = {
            post: !0
        },
        Je = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        Ke = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        Le = D(O, "WI", E()),
        Me = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            "plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = U("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in He) e[g] = g + "/" + (b[g] || He[g]) + "/";
            e = hc(C, d.replace(Be,
                Ee(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            H(b, f);
            (d = U("lang") || U("gwidget/lang")) && (f.hl = d);
            Ie[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = U(g + "exp");
            if (g = U(g + "location"))
                for (d = 0; d < g.length; d++) {
                    var k = g[d];
                    f[k] = B.location[k]
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? Fe(g) : Ge(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? Fe(g) : Ge();
                    f.url = g;
                    g = b.db;
                    d = U();
                    null == g && d && (g = d.db,
                        null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = U();
                    null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = Ge()
            }
            O.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in He) f[h] && delete f[h];
            f.gsrc = U("iframes/:source:");
            h = U("inline/css");
            "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) F(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = "q" == U("iframes/" + a + "/params/si") ? f :
                c;
            h = md();
            for (var p in h) !F(h, p) || F(f, p) || F(c, p) || (l[p] = h[p]);
            p = [].concat(Ke);
            (l = U("iframes/" + a + "/methods")) && "object" === typeof l && Mb.test(l.push) && (p = p.concat(l));
            for (var q in b) F(b, q) && /^on/.test(q) && ("plus" != a || "onconnect" != q) && (p.push(q), delete f[q]);
            delete f.callback;
            c._methods = p.join(",");
            return fc(e, f, c)
        },
        Ne = ["style", "data-gapiscan"],
        Pe = function(a) {
            for (var b = E(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = a.attributes.length, e = 0; e < d; e++) {
                var f = a.attributes[e],
                    g = f.name,
                    k = f.value;
                0 <= Nb.call(Ne,
                    g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = Oe(a && a.height)) && (b.height = String(c));
            (a = Oe(a && a.width)) && (b.width = String(a));
            return b
        },
        Oe = function(a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
            return b
        },
        Se = function() {
            var a = O.drw;
            sd(function(b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = C.getElementById(c);
                    if (f) {
                        var g = Me(d, b, 0);
                        g ? (f = f.parentNode,
                            Qe(e) !== Qe(g) && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, Re(f, b), (d = V[f.lastChild.id]) && (d.oid = c), td(c, 4))) : delete V[c]
                    } else delete V[c]
                }
            })
        },
        Qe = function(a) {
            var b = RegExp("(\\?|&)ic=1");
            return a.replace(/#.*/, "").replace(b, "")
        };
    var xb = fa(["data-"]),
        Te, Ue, Ve, We, Xe, Ye = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Ze = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    Te = D(O, "SW", E());
    Ue = D(O, "SA", E());
    Ve = D(O, "SM", E());
    We = D(O, "FW", []);
    Xe = null;
    var $e = function(a, b) {
            return ("string" === typeof a ? document.getElementById(a) : a) || b
        },
        bf = function(a, b) {
            af(void 0, !1, a, b)
        },
        af = function(a, b, c, d) {
            P("ps0", !0);
            c = $e(c, C);
            var e = C.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : Vb(Te).concat(Vb(Ue)).concat(Vb(Ve));
                for (var f = [], g = 0; g < e.length; g++) {
                    var k = e[g];
                    f.push(".g-" + k, "g\\:" + k)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = E();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                k = d;
                var h = g.nodeName.toLowerCase(),
                    l = void 0;
                if (g.hasAttribute("data-gapiscan")) k =
                    null;
                else {
                    var p = h.indexOf("g:");
                    0 == p ? l = h.substr(2) : (p = (p = String(g.className || g.getAttribute("class"))) && Ye.exec(p)) && (l = p[1]);
                    k = !l || !(Te[l] || Ue[l] || Ve[l]) || k && l !== k ? null : l
                }
                k && (Ze[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != Vb(Pe(g)).length) && (Xb(g), D(c, k, []).push(g))
            }
            if (b)
                for (var q in c)
                    for (b = c[q], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var n in c) We.push(n);
            P("ps1", !0);
            if ((q = We.join(":")) || a) try {
                J.load(q, a)
            } catch (A) {
                pd.log(A);
                return
            }
            if (cf(Xe || {}))
                for (var K in c) {
                    a = c[K];
                    n =
                        0;
                    for (b = a.length; n < b; n++) a[n].removeAttribute("data-gapiscan");
                    df(K)
                } else {
                    d = [];
                    for (K in c)
                        for (a = c[K], n = 0, b = a.length; n < b; n++) e = a[n], ef(K, e, Pe(e), d, b);
                    ff(q, d)
                }
        },
        gf = function(a) {
            var b = D(J, a, {});
            b.go || (b.go = function(c) {
                return bf(c, a)
            }, b.render = function(c, d) {
                d = d || {};
                d.type = a;
                return Re(c, d)
            })
        },
        hf = function(a) {
            Te[a] = !0
        },
        jf = function(a) {
            Ue[a] = !0
        },
        kf = function(a) {
            Ve[a] = !0
        };
    var df = function(a, b) {
            var c = tc(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : J.load(a, function() {
                var d = tc(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = J[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        cf = function() {
            return !1
        },
        ff = function() {},
        ef = function(a, b, c, d, e, f) {
            switch (lf(b, a, f)) {
                case 0:
                    a = Ve[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    df(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var g in c) {
                            if (f = F(c, g)) f = c[g],
                                f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[g] = be(c[g])
                            } catch (G) {
                                delete c[g]
                            }
                        }
                        var k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        rd();
                        f = Me(a, c, e);
                        g = {
                            allowPost: 1,
                            attributes: Je
                        };
                        g.dontclear = !k;
                        e = {};
                        e.userParams = c;
                        e.url = f;
                        e.type = a;
                        if (c.rd) var h = b;
                        else h = document.createElement("div"), b.dataset.gapistub = !0, h.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(h, b);
                        e.siteElement = h;
                        h.id ||
                            (b = h, D(Le, a, 0), k = "___" + a + "_" + Le[a]++, b.id = k);
                        b = E();
                        b[">type"] = a;
                        H(c, b);
                        k = f;
                        c = h;
                        f = g || {};
                        b = f.attributes || {};
                        I(!(f.allowPost || f.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        g = b = k;
                        Ae.test(b) && (g = W("iframes/" + g.substring(1) + "/url"), I(!!g, "Unknown iframe url config for - " + b));
                        k = hc(C, g.replace(Be, De));
                        b = c.ownerDocument || C;
                        h = 0;
                        do g = f.id || ["I", xe++, "_", (new Date).getTime()].join(""); while (b.getElementById(g) && 5 > ++h);
                        I(5 > h, "Error creating iframe id");
                        h = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (h.hostiemode = b.documentMode);
                        H(f.queryParams || {}, h);
                        H(f.fragmentParams || {}, l);
                        var p = f.pfname;
                        var q = E();
                        W("iframes/dropLegacyIdParam") || (q.id = g);
                        q._gfid = g;
                        q.parent = b.location.protocol + "//" + b.location.host;
                        var n = N(b.location.href, "parent");
                        p = p || "";
                        !p && n && (n = N(b.location.href, "_gfid", "") || N(b.location.href, "id", ""), p = N(b.location.href, "pfname", ""), p = n ? p + "/" + n : "");
                        p || (n = ae(N(b.location.href, "jcp", ""))) && "object" == typeof n && (p = (p = n.id) ? n.pfname + "/" + p : "");
                        q.pfname =
                            p;
                        f.connectWithJsonParam && (n = {}, n.jcp = be(q), q = n);
                        n = N(k, "rpctoken") || h.rpctoken || l.rpctoken;
                        if (!n) {
                            if (!(n = f.rpctoken)) {
                                n = String;
                                p = Math;
                                var K = p.round;
                                if (je) {
                                    var A = new B.Uint32Array(1);
                                    ie.getRandomValues(A);
                                    A = Number("0." + A[0])
                                } else A = me, A += parseInt(oe.substr(0, 20), 16), oe = qe(oe), A /= ne + Math.pow(16, 20);
                                n = n(K.call(p, 1E8 * A))
                            }
                            q.rpctoken = n
                        }
                        f.rpctoken = n;
                        H(q, f.connectWithQueryParams ? h : l);
                        n = b.location.href;
                        q = E();
                        (p = N(n, "_bsh", O.bsh)) && (q._bsh = p);
                        (n = rc(n)) && (q.jsh = n);
                        f.hintInFragment ? H(q, l) : H(q, h);
                        k = fc(k, h, l, f.paramsSerializer);
                        l = E();
                        H(ve, l);
                        H(f.attributes, l);
                        l.name = l.id = g;
                        l.src = k;
                        f.eurl = k;
                        h = f || {};
                        q = !!h.allowPost;
                        if (h.forcePost || q && 2E3 < k.length) {
                            h = cc(k);
                            l.src = "";
                            f.dropDataPostorigin || (l["data-postorigin"] = k);
                            k = ze(b, c, l, g);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                                var w = k.contentWindow.document;
                                w.open();
                                l = w.createElement("div");
                                q = {};
                                n = g + "_inner";
                                q.name = n;
                                q.src = "";
                                q.style = "display:none";
                                ze(b, l, q, n, f)
                            }
                            l = (f = h.query[0]) ? f.split("&") : [];
                            f = [];
                            for (q = 0; q < l.length; q++) n = l[q].split("=", 2), f.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                            h.query = [];
                            l = dc(h);
                            I(ic.test(l), "Invalid URL: " + l);
                            h = b.createElement("form");
                            h.method = "POST";
                            h.target = g;
                            h.style.display = "none";
                            g = Ab(l);
                            void 0 !== g && (h.action = g);
                            for (g = 0; g < f.length; g++) l = b.createElement("input"), l.type = "hidden", l.name = f[g][0], l.value = f[g][1], h.appendChild(l);
                            c.appendChild(h);
                            h.submit();
                            h.parentNode.removeChild(h);
                            w && w.close();
                            w = k
                        } else w = ze(b, c, l, g, f);
                        e.iframeNode = w;
                        e.id = w.getAttribute("id");
                        w = e.id;
                        c = E();
                        c.id = w;
                        c.userParams = e.userParams;
                        c.url = e.url;
                        c.type = e.type;
                        c.state = 1;
                        V[w] = c;
                        w = e
                    } else w =
                        null;
                    w && ((e = w.id) && d.push(e), df(a, w))
            }
        },
        lf = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (Ve[b]) {
                    if (qc[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (Ue[b]) return 0;
                    if (Te[b]) return 1
                }
            }
            return null
        },
        Re = function(a, b) {
            var c = b.type;
            delete b.type;
            var d = $e(a);
            if (d) {
                a = {};
                for (var e in b) F(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                ef(c, d, a, e, 0, b);
                ff(c, e)
            } else pd.log("string" === "gapi." + c + ".render: missing element " + typeof a ?
                a : "")
        };
    D(J, "platform", {}).go = bf;
    cf = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = rc(Kb.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    };
    ff = function(a, b) {
        mf(a, b)
    };
    var mc = function(a) {
            af(a, !0)
        },
        nf = function(a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) gf(b[a])
        };
    Q.push(["platform", function(a, b, c) {
        Xe = c;
        (b || c.features) && We.push(b || c.features.join(":"));
        nf(hf, a);
        nf(jf, c._c.annotation);
        nf(kf, c._c.bimodal);
        id();
        gd();
        if ("explicit" != U("parsetags")) {
            sc(a);
            nd(md()) && !U("disableRealtimeCallback") && rd();
            if (c && (a = c.callback)) {
                var d = Wb(a);
                delete c.callback
            }
            oc(function() {
                mc(d)
            })
        }
    }]);
    J._pl = !0;
    var of = function(a) {
        a = (a = V[a]) ? a.oid : void 0;
        if (a) {
            var b = C.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete V[a]; of (a)
        }
    };
    var pf = /^\{h:'/,
        qf = /^!_/,
        rf = "",
        mf = function(a, b) {
            function c() {
                kc("message", d, "remove", "de")
            }

            function d(f) {
                var g = f.data,
                    k = f.origin;
                if (sf(g, b)) {
                    var h = e;
                    e = !1;
                    h && P("rqe");
                    tf(a, function() {
                        h && P("rqd");
                        c();
                        for (var l = D(O, "RPMQ", []), p = 0; p < l.length; p++) l[p]({
                            data: g,
                            origin: k
                        })
                    })
                }
            }
            if (0 !== b.length) {
                rf = N(Kb.href, "pfname", "");
                var e = !0;
                kc("message", d, "add", "at");
                $c(a, c)
            }
        },
        sf = function(a, b) {
            a = String(a);
            if (pf.test(a)) return !0;
            var c = !1;
            qf.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = ae(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != Nb.call(b, a)) {
                if ("_renderstart" === d.s || d.s === rf + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = C.getElementById(a), td(a, 2), d && b && d.width && d.height) {
                        a: {
                            c = b.parentNode;a = d || {};
                            if (qd()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = V[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a; of (e)
                                }
                            }(d = c.nextSibling) && d.dataset && d.dataset.gapistub && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle = "none";
                            g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && td(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        tf = function(a, b) {
            $c(a, b)
        };
    var uf = function(a, b) {
        this.P = a;
        a = b || {};
        this.ra = Number(a.maxAge) || 0;
        this.Z = a.domain;
        this.ca = a.path;
        this.sa = !!a.secure
    };
    uf.prototype.read = function() {
        for (var a = this.P + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length)
        }
    };
    uf.prototype.write = function(a, b) {
        if (!vf.test(this.P)) throw "Invalid cookie name";
        if (!wf.test(a)) throw "Invalid cookie value";
        a = this.P + "=" + a;
        this.Z && (a += ";domain=" + this.Z);
        this.ca && (a += ";path=" + this.ca);
        b = "number" === typeof b ? b : this.ra;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.sa && (a += ";secure");
        document.cookie = a;
        return !0
    };
    uf.prototype.clear = function() {
        this.write("", 0)
    };
    var wf = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        vf = /^[A-Z_][A-Z0-9_]{0,63}$/;
    uf.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var xf = function(a) {
        this.H = a
    };
    xf.prototype.read = function() {
        if (Z.hasOwnProperty(this.H)) return Z[this.H]
    };
    xf.prototype.write = function(a) {
        Z[this.H] = a;
        return !0
    };
    xf.prototype.clear = function() {
        delete Z[this.H]
    };
    var Z = {};
    xf.iterate = function(a) {
        for (var b in Z) Z.hasOwnProperty(b) && a(b, Z[b])
    };
    var yf = "https:" === window.location.protocol,
        zf = yf || "http:" === window.location.protocol ? uf : xf,
        Af = function(a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                l: "S" == a.charAt(0),
                domain: d,
                o: c
            }
        },
        Bf = function() {
            var a, b = null;
            zf.iterate(function(c, d) {
                0 === c.indexOf("G_AUTHUSER_") && (c = Af(c.substring(11)), !a || c.l && !a.l || c.l == a.l && c.o > a.o) && (a = c, b = d)
            });
            return {
                ma: a,
                L: b
            }
        };

    function Cf(a) {
        if (0 !== a.indexOf("GCSC")) return null;
        var b = {
            ba: !1
        };
        a = a.substr(4);
        if (!a) return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d) return b;
        var e = Af(a.substr(d + 1));
        if (null == e) return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0)) return b;
        d = "E" === c && e.l;
        return !d && ("U" !== c || e.l) || d && !yf ? b : {
            ba: !0,
            l: d,
            xa: a.substr(1),
            domain: e.domain,
            o: e.o
        }
    }
    var Df = function(a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : []
        },
        Ef = function(a) {
            a = a.split(":");
            return {
                clientId: a[0].split("=")[1],
                ua: Df(a[1]),
                za: Df(a[2]),
                ya: Df(a[3])
            }
        },
        Ff = function() {
            var a = Bf(),
                b = a.ma;
            a = a.L;
            if (null !== a) {
                var c;
                zf.iterate(function(f, g) {
                    (f = Cf(f)) && f.ba && f.l == b.l && f.o == b.o && (c = g)
                });
                if (c) {
                    var d = Ef(c),
                        e = d && d.ua[Number(a)];
                    d = d && d.clientId;
                    if (e) return {
                        L: a,
                        ta: e,
                        clientId: d
                    }
                }
            }
            return null
        };
    var Hf = function() {
        this.X = Gf
    };
    m = Hf.prototype;
    m.ia = function() {
        this.O || (this.A = 0, this.O = !0, this.da())
    };
    m.da = function() {
        this.O && (this.X() ? this.A = this.U : this.A = Math.min(2 * (this.A || this.U), 120), window.setTimeout(ya(this.da, this), 1E3 * this.A))
    };
    m.A = 0;
    m.U = 2;
    m.X = null;
    m.O = !1;
    var If = null;
    qd = function() {
        return O.oa = !0
    };
    rd = function() {
        O.oa = !0;
        var a = Ff();
        (a = a && a.L) && hd("googleapis.config/sessionIndex", a);
        If || (If = D(O, "ss", new Hf));
        a = If;
        a.ia && a.ia()
    };
    var Gf = function() {
        var a = Ff(),
            b = a && a.ta || null,
            c = a && a.clientId;
        $c("auth", {
            callback: function() {
                var d = B.gapi.auth,
                    e = {
                        client_id: c,
                        session_state: b
                    };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        k = !!U("isLoggedIn");
                    f = U("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (k = k !== f) hd("isLoggedIn", f), rd(), Se(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = md();
                    var h = U("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    h = h != g && "undefined" != typeof h;
                    hd("savedUserState", g);
                    (k || h) && nd(f) && !U("disableRealtimeCallback") && d._pimf(f, !0)
                })
            }
        });
        return !0
    };
    Q.unshift(["url", function(a, b, c) {
        !a || b && "" !== b || !a.endsWith(".js") || (a = a.substring(0, a.length - 3), b = a.lastIndexOf("/") + 1, b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }), c.features = a))
    }]);
    P("bs0", !0, window.gapi._bs);
    P("bs1", !0);
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["gapi_onload"],
        _c: {
            url: "https://apis.google.com/js/platform.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "en",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.en.L92w_vMR5kE.O/d=1/rs=AHpOoo-GjmyR8TQVDKPrbqj5UQg7cU3cCA/m=__features__",
                u: "https://apis.google.com/js/platform.js",
                hee: !0,
                dpo: !1,
                le: ["scs"],
                glrp: false
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}).call(this);