! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 8)
}([function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "__extends", function () {
        return i
    }), n.d(t, "__assign", function () {
        return o
    }), n.d(t, "__rest", function () {
        return s
    }), n.d(t, "__decorate", function () {
        return a
    }), n.d(t, "__param", function () {
        return u
    }), n.d(t, "__metadata", function () {
        return h
    }), n.d(t, "__awaiter", function () {
        return l
    }), n.d(t, "__generator", function () {
        return c
    }), n.d(t, "__exportStar", function () {
        return p
    }), n.d(t, "__values", function () {
        return d
    }), n.d(t, "__read", function () {
        return f
    }), n.d(t, "__spread", function () {
        return _
    }), n.d(t, "__spreadArrays", function () {
        return y
    }), n.d(t, "__await", function () {
        return v
    }), n.d(t, "__asyncGenerator", function () {
        return g
    }), n.d(t, "__asyncDelegator", function () {
        return m
    }), n.d(t, "__asyncValues", function () {
        return C
    }), n.d(t, "__makeTemplateObject", function () {
        return E
    }), n.d(t, "__importStar", function () {
        return w
    }), n.d(t, "__importDefault", function () {
        return b
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var r = function (e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function i(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var o = function () {
        return (o = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function s(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
    }

    function a(e, t, n, r) {
        var i, o = arguments.length,
            s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s
    }

    function u(e, t) {
        return function (n, r) {
            t(n, r, e)
        }
    }

    function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function l(e, t, n, r) {
        return new(n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }

    function c(e, t) {
        var n, r, i, o, s = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1], i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }

    function p(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }

    function d(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : {
            next: function () {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }

    function f(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    }

    function _() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
        return e
    }

    function y() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
            i = 0;
        for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
        return r
    }

    function v(e) {
        return this instanceof v ? (this.v = e, this) : new v(e)
    }

    function g(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []),
            o = [];
        return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function () {
            return this
        }, r;

        function s(e) {
            i[e] && (r[e] = function (t) {
                return new Promise(function (n, r) {
                    o.push([e, t, n, r]) > 1 || a(e, t)
                })
            })
        }

        function a(e, t) {
            try {
                (n = i[e](t)).value instanceof v ? Promise.resolve(n.value.v).then(u, h) : l(o[0][2], n)
            } catch (e) {
                l(o[0][3], e)
            }
            var n
        }

        function u(e) {
            a("next", e)
        }

        function h(e) {
            a("throw", e)
        }

        function l(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
        }
    }

    function m(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function (e) {
            throw e
        }), r("return"), t[Symbol.iterator] = function () {
            return this
        }, t;

        function r(r, i) {
            t[r] = e[r] ? function (t) {
                return (n = !n) ? {
                    value: v(e[r](t)),
                    done: "return" === r
                } : i ? i(t) : t
            } : i
        }
    }

    function C(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = d(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
            return this
        }, t);

        function r(n) {
            t[n] = e[n] && function (t) {
                return new Promise(function (r, i) {
                    (function (e, t, n, r) {
                        Promise.resolve(r).then(function (t) {
                            e({
                                value: t,
                                done: n
                            })
                        }, t)
                    })(r, i, (t = e[n](t)).done, t.value)
                })
            }
        }
    }

    function E(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }

    function w(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function b(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(2),
        s = n(3),
        a = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", r["bad-app-name"] = "Illegal App name: '{$appName}", r["duplicate-app"] = "Firebase App named '{$appName}' already exists", r["app-deleted"] = "Firebase App named '{$appName}' already deleted", r["duplicate-service"] = "Firebase service named '{$appName}' already registered", r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", r),
        u = new o.ErrorFactory("app", "Firebase", a),
        h = "[DEFAULT]",
        l = [],
        c = function () {
            function e(e, t, n) {
                this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {}, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = o.deepCopy(e), this.INTERNAL = {
                    getUid: function () {
                        return null
                    },
                    getToken: function () {
                        return Promise.resolve(null)
                    },
                    addAuthTokenListener: function (e) {
                        l.push(e), setTimeout(function () {
                            return e(null)
                        }, 0)
                    },
                    removeAuthTokenListener: function (e) {
                        l = l.filter(function (t) {
                            return t !== e
                        })
                    }
                }
            }
            return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
                get: function () {
                    return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                },
                set: function (e) {
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name", {
                get: function () {
                    return this.checkDestroyed_(), this.name_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "options", {
                get: function () {
                    return this.checkDestroyed_(), this.options_
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.delete = function () {
                var e = this;
                return new Promise(function (t) {
                    e.checkDestroyed_(), t()
                }).then(function () {
                    e.firebase_.INTERNAL.removeApp(e.name_);
                    for (var t = [], n = 0, r = Object.keys(e.services_); n < r.length; n++)
                        for (var i = r[n], o = 0, s = Object.keys(e.services_[i]); o < s.length; o++) {
                            var a = s[o];
                            t.push(e.services_[i][a])
                        }
                    return Promise.all(t.filter(function (e) {
                        return "INTERNAL" in e
                    }).map(function (e) {
                        return e.INTERNAL.delete()
                    }))
                }).then(function () {
                    e.isDeleted_ = !0, e.services_ = {}
                })
            }, e.prototype._getService = function (e, t) {
                if (void 0 === t && (t = h), this.checkDestroyed_(), this.services_[e] || (this.services_[e] = {}), !this.services_[e][t]) {
                    var n = t !== h ? t : void 0,
                        r = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), n);
                    this.services_[e][t] = r
                }
                return this.services_[e][t]
            }, e.prototype._removeServiceInstance = function (e, t) {
                void 0 === t && (t = h), this.services_[e] && this.services_[e][t] && delete this.services_[e][t]
            }, e.prototype.extendApp = function (e) {
                var t = this;
                o.deepExtend(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (l.forEach(function (e) {
                    t.INTERNAL.addAuthTokenListener(e)
                }), l = [])
            }, e.prototype.checkDestroyed_ = function () {
                if (this.isDeleted_) throw u.create("app-deleted", {
                    appName: this.name_
                })
            }, e
        }();
    c.prototype.name && c.prototype.options || c.prototype.delete || console.log("dc");
    var p = "6.3.5";
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var d = new s.Logger("@firebase/app");
    if (o.isBrowser() && void 0 !== self.firebase) {
        d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        var f = self.firebase.SDK_VERSION;
        f && f.indexOf("LITE") >= 0 && d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    }
    var _ =
        /**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function e() {
            var t = function (e) {
                var t = {},
                    n = {},
                    r = {},
                    i = {
                        __esModule: !0,
                        initializeApp: function (n, r) {
                            void 0 === r && (r = {}), "object" == typeof r && null !== r || (r = {
                                name: r
                            });
                            var s = r;
                            void 0 === s.name && (s.name = h);
                            var a = s.name;
                            if ("string" != typeof a || !a) throw u.create("bad-app-name", {
                                appName: String(a)
                            });
                            if (o.contains(t, a)) throw u.create("duplicate-app", {
                                appName: a
                            });
                            var c = new e(n, s, i);
                            return t[a] = c, l(c, "create"), c
                        },
                        app: s,
                        apps: null,
                        SDK_VERSION: p,
                        INTERNAL: {
                            registerService: function (t, h, l, c, p) {
                                if (void 0 === p && (p = !1), n[t]) throw u.create("duplicate-service", {
                                    appName: t
                                });

                                function d(e) {
                                    if (void 0 === e && (e = s()), "function" != typeof e[t]) throw u.create("invalid-app-argument", {
                                        appName: t
                                    });
                                    return e[t]()
                                }
                                return n[t] = h, c && (r[t] = c, a().forEach(function (e) {
                                    c("create", e)
                                })), void 0 !== l && o.deepExtend(d, l), i[t] = d, e.prototype[t] = function () {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = this._getService.bind(this, t);
                                    return r.apply(this, p ? e : [])
                                }, d
                            },
                            removeApp: function (e) {
                                l(t[e], "delete"), delete t[e]
                            },
                            factories: n,
                            useAsService: c
                        }
                    };

                function s(e) {
                    if (e = e || h, !o.contains(t, e)) throw u.create("no-app", {
                        appName: e
                    });
                    return t[e]
                }

                function a() {
                    return Object.keys(t).map(function (e) {
                        return t[e]
                    })
                }

                function l(e, t) {
                    for (var i = 0, o = Object.keys(n); i < o.length; i++) {
                        var s = c(0, o[i]);
                        if (null === s) return;
                        r[s] && r[s](t, e)
                    }
                }

                function c(e, t) {
                    return "serverAuth" === t ? null : t
                }
                return i.default = i, Object.defineProperty(i, "apps", {
                    get: a
                }), s.App = e, i
            }(c);
            return t.INTERNAL = i.__assign({}, t.INTERNAL, {
                createFirebaseNamespace: e,
                extendNamespace: function (e) {
                    o.deepExtend(t, e)
                },
                createSubscribe: o.createSubscribe,
                ErrorFactory: o.ErrorFactory,
                deepExtend: o.deepExtend
            }), t
        }(),
        y = _.initializeApp;
    _.initializeApp = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return o.isNode() && d.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), y.apply(void 0, e)
    };
    var v = _;
    t.default = v, t.firebase = v
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = {
                NODE_CLIENT: !1,
                NODE_ADMIN: !1,
                SDK_VERSION: "${JSCORE_VERSION}"
            },
            o = function (e, t) {
                if (!e) throw s(t)
            },
            s = function (e) {
                return new Error("Firebase Database (" + i.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
            },
            a = function (e) {
                for (var t = [], n = 0, r = 0; r < e.length; r++) {
                    var i = e.charCodeAt(r);
                    i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                }
                return t
            },
            u = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray: function (e, t) {
                    if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                        var o = e[i],
                            s = i + 1 < e.length,
                            a = s ? e[i + 1] : 0,
                            u = i + 2 < e.length,
                            h = u ? e[i + 2] : 0,
                            l = o >> 2,
                            c = (3 & o) << 4 | a >> 4,
                            p = (15 & a) << 2 | h >> 6,
                            d = 63 & h;
                        u || (d = 64, s || (p = 64)), r.push(n[l], n[c], n[p], n[d])
                    }
                    return r.join("")
                },
                encodeString: function (e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(a(e), t)
                },
                decodeString: function (e, t) {
                    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) {
                        for (var t = [], n = 0, r = 0; n < e.length;) {
                            var i = e[n++];
                            if (i < 128) t[r++] = String.fromCharCode(i);
                            else if (i > 191 && i < 224) {
                                var o = e[n++];
                                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                            } else if (i > 239 && i < 365) {
                                var s = ((7 & i) << 18 | (63 & (o = e[n++])) << 12 | (63 & (a = e[n++])) << 6 | 63 & e[n++]) - 65536;
                                t[r++] = String.fromCharCode(55296 + (s >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & s))
                            } else {
                                o = e[n++];
                                var a = e[n++];
                                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                            }
                        }
                        return t.join("")
                    }(this.decodeStringToByteArray(e, t))
                },
                decodeStringToByteArray: function (e, t) {
                    this.init_();
                    for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
                        var o = n[e.charAt(i++)],
                            s = i < e.length ? n[e.charAt(i)] : 0,
                            a = ++i < e.length ? n[e.charAt(i)] : 64,
                            u = ++i < e.length ? n[e.charAt(i)] : 64;
                        if (++i, null == o || null == s || null == a || null == u) throw Error();
                        var h = o << 2 | s >> 4;
                        if (r.push(h), 64 !== a) {
                            var l = s << 4 & 240 | a >> 2;
                            if (r.push(l), 64 !== u) {
                                var c = a << 6 & 192 | u;
                                r.push(c)
                            }
                        }
                    }
                    return r
                },
                init_: function () {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                        for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                    }
                }
            },
            h = function (e) {
                try {
                    return u.decodeString(e, !0)
                } catch (e) {
                    console.error("base64Decode failed: ", e)
                }
                return null
            };
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function l(e, t) {
            if (!(t instanceof Object)) return t;
            switch (t.constructor) {
                case Date:
                    return new Date(t.getTime());
                case Object:
                    void 0 === e && (e = {});
                    break;
                case Array:
                    e = [];
                    break;
                default:
                    return t
            }
            for (var n in t) t.hasOwnProperty(n) && (e[n] = l(e[n], t[n]));
            return e
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var c = function () {
            function e() {
                var e = this;
                this.reject = function () {}, this.resolve = function () {}, this.promise = new Promise(function (t, n) {
                    e.resolve = t, e.reject = n
                })
            }
            return e.prototype.wrapCallback = function (e) {
                var t = this;
                return function (n, r) {
                    n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch(function () {}), 1 === e.length ? e(n) : e(n, r))
                }
            }, e
        }();
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function p() {
            return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var d = "FirebaseError",
            f = function (e) {
                function t(n, r) {
                    var i = e.call(this, r) || this;
                    return i.code = n, i.name = d, Object.setPrototypeOf(i, t.prototype), Error.captureStackTrace && Error.captureStackTrace(i, _.prototype.create), i
                }
                return r.__extends(t, e), t
            }(Error),
            _ = function () {
                function e(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n
                }
                return e.prototype.create = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    for (var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], s = o ? y(o, r) : "Error", a = this.serviceName + ": " + s + " (" + i + ").", u = new f(i, a), h = 0, l = Object.keys(r); h < l.length; h++) {
                        var c = l[h];
                        "_" !== c.slice(-1) && (c in u && console.warn('Overwriting FirebaseError base field "' + c + '" can cause unexpected behavior.'), u[c] = r[c])
                    }
                    return u
                }, e
            }();

        function y(e, t) {
            return e.replace(v, function (e, n) {
                var r = t[n];
                return null != r ? r.toString() : "<" + n + "?>"
            })
        }
        var v = /\{\$([^}]+)}/g;
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function g(e) {
            return JSON.parse(e)
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var m = function (e) {
            var t = {},
                n = {},
                r = {},
                i = "";
            try {
                var o = e.split(".");
                t = g(h(o[0]) || ""), n = g(h(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d
            } catch (e) {}
            return {
                header: t,
                claims: n,
                data: r,
                signature: i
            }
        };
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var C = function () {
            function e() {
                this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                this.reset()
            }
            return e.prototype.reset = function () {
                this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
            }, e.prototype.compress_ = function (e, t) {
                t || (t = 0);
                var n = this.W_;
                if ("string" == typeof e)
                    for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                else
                    for (r = 0; r < 16; r++) n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                for (r = 16; r < 80; r++) {
                    var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                    n[r] = 4294967295 & (i << 1 | i >>> 31)
                }
                var o, s, a = this.chain_[0],
                    u = this.chain_[1],
                    h = this.chain_[2],
                    l = this.chain_[3],
                    c = this.chain_[4];
                for (r = 0; r < 80; r++) {
                    r < 40 ? r < 20 ? (o = l ^ u & (h ^ l), s = 1518500249) : (o = u ^ h ^ l, s = 1859775393) : r < 60 ? (o = u & h | l & (u | h), s = 2400959708) : (o = u ^ h ^ l, s = 3395469782);
                    i = (a << 5 | a >>> 27) + o + c + s + n[r] & 4294967295;
                    c = l, l = h, h = 4294967295 & (u << 30 | u >>> 2), u = a, a = i
                }
                this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + h & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + c & 4294967295
            }, e.prototype.update = function (e, t) {
                if (null != e) {
                    void 0 === t && (t = e.length);
                    for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                        if (0 === o)
                            for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                        if ("string" == typeof e) {
                            for (; r < t;)
                                if (i[o] = e.charCodeAt(r), ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                        } else
                            for (; r < t;)
                                if (i[o] = e[r], ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                    }
                    this.inbuf_ = o, this.total_ += t
                }
            }, e.prototype.digest = function () {
                var e = [],
                    t = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & t, t /= 256;
                this.compress_(this.buf_);
                var r = 0;
                for (n = 0; n < 5; n++)
                    for (var i = 24; i >= 0; i -= 8) e[r] = this.chain_[n] >> i & 255, ++r;
                return e
            }, e
        }();
        var E = function () {
            function e(e, t) {
                var n = this;
                this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function () {
                    e(n)
                }).catch(function (e) {
                    n.error(e)
                })
            }
            return e.prototype.next = function (e) {
                this.forEachObserver(function (t) {
                    t.next(e)
                })
            }, e.prototype.error = function (e) {
                this.forEachObserver(function (t) {
                    t.error(e)
                }), this.close(e)
            }, e.prototype.complete = function () {
                this.forEachObserver(function (e) {
                    e.complete()
                }), this.close()
            }, e.prototype.subscribe = function (e, t, n) {
                var r, i = this;
                if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                void 0 === (r = function (e, t) {
                    if ("object" != typeof e || null === e) return !1;
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        if (i in e && "function" == typeof e[i]) return !0
                    }
                    return !1
                }(e, ["next", "error", "complete"]) ? e : {
                    next: e,
                    error: t,
                    complete: n
                }).next && (r.next = w), void 0 === r.error && (r.error = w), void 0 === r.complete && (r.complete = w);
                var o = this.unsubscribeOne.bind(this, this.observers.length);
                return this.finalized && this.task.then(function () {
                    try {
                        i.finalError ? r.error(i.finalError) : r.complete()
                    } catch (e) {}
                }), this.observers.push(r), o
            }, e.prototype.unsubscribeOne = function (e) {
                void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
            }, e.prototype.forEachObserver = function (e) {
                if (!this.finalized)
                    for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
            }, e.prototype.sendOne = function (e, t) {
                var n = this;
                this.task.then(function () {
                    if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                        t(n.observers[e])
                    } catch (e) {
                        "undefined" != typeof console && console.error && console.error(e)
                    }
                })
            }, e.prototype.close = function (e) {
                var t = this;
                this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function () {
                    t.observers = void 0, t.onNoObservers = void 0
                }))
            }, e
        }();

        function w() {}
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function b(e, t, n) {
            var r = "";
            switch (t) {
                case 1:
                    r = n ? "first" : "First";
                    break;
                case 2:
                    r = n ? "second" : "Second";
                    break;
                case 3:
                    r = n ? "third" : "Third";
                    break;
                case 4:
                    r = n ? "fourth" : "Fourth";
                    break;
                default:
                    throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
            }
            var i = e + " failed: ";
            return i += r + " argument "
        }
        t.CONSTANTS = i, t.Deferred = c, t.ErrorFactory = _, t.FirebaseError = f, t.Sha1 = C, t.assert = o, t.assertionError = s, t.async = function (e, t) {
                return function () {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    Promise.resolve(!0).then(function () {
                        e.apply(void 0, n)
                    }).catch(function (e) {
                        t && t(e)
                    })
                }
            }, t.base64 = u, t.base64Decode = h, t.base64Encode = function (e) {
                var t = a(e);
                return u.encodeByteArray(t, !0)
            }, t.contains =
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.createSubscribe = function (e, t) {
                var n = new E(e, t);
                return n.subscribe.bind(n)
            }, t.decode = m, t.deepCopy =
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function (e) {
                return l(void 0, e)
            }, t.deepExtend = l, t.errorPrefix = b, t.getUA = p, t.isAdmin = function (e) {
                var t = m(e).claims;
                return "object" == typeof t && !0 === t.admin
            }, t.isBrowser = function () {
                return "object" == typeof self && self.self === self
            }, t.isEmpty = function (e) {
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }, t.isMobileCordova = function () {
                return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())
            }, t.isNode = function () {
                try {
                    return "[object process]" === Object.prototype.toString.call(e.process)
                } catch (e) {
                    return !1
                }
            }, t.isNodeSdk = function () {
                return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
            }, t.isReactNative = function () {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }, t.isValidFormat = function (e) {
                var t = m(e).claims;
                return !!t && "object" == typeof t && t.hasOwnProperty("iat")
            }, t.isValidTimestamp = function (e) {
                var t = m(e).claims,
                    n = Math.floor((new Date).getTime() / 1e3),
                    r = 0,
                    i = 0;
                return "object" == typeof t && (t.hasOwnProperty("nbf") ? r = t.nbf : t.hasOwnProperty("iat") && (r = t.iat), i = t.hasOwnProperty("exp") ? t.exp : r + 86400), !!n && !!r && !!i && n >= r && n <= i
            }, t.issuedAtTime = function (e) {
                var t = m(e).claims;
                return "object" == typeof t && t.hasOwnProperty("iat") ? t.iat : null
            }, t.jsonEval = g, t.map = function (e, t, n) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = t.call(n, e[i], i, e));
                return r
            }
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            , t.querystring = function (e) {
                for (var t = [], n = function (e, n) {
                        Array.isArray(n) ? n.forEach(function (n) {
                            t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                        }) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                    }, r = 0, i = Object.entries(e); r < i.length; r++) {
                    var o = i[r];
                    n(o[0], o[1])
                }
                return t.length ? "&" + t.join("&") : ""
            }, t.querystringDecode = function (e) {
                var t = {};
                return e.replace(/^\?/, "").split("&").forEach(function (e) {
                    if (e) {
                        var n = e.split("=");
                        t[n[0]] = n[1]
                    }
                }), t
            }, t.safeGet = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
            }, t.stringLength = function (e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
                }
                return t
            }, t.stringToByteArray = function (e) {
                for (var t = [], n = 0, r = 0; r < e.length; r++) {
                    var i = e.charCodeAt(r);
                    if (i >= 55296 && i <= 56319) {
                        var s = i - 55296;
                        o(++r < e.length, "Surrogate pair missing trail surrogate."), i = 65536 + (s << 10) + (e.charCodeAt(r) - 56320)
                    }
                    i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                }
                return t
            }, t.stringify = function (e) {
                return JSON.stringify(e)
            }, t.validateArgCount = function (e, t, n, r) {
                var i;
                if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
            }, t.validateCallback = function (e, t, n, r) {
                if ((!r || n) && "function" != typeof n) throw new Error(b(e, t, r) + "must be a valid function.")
            }, t.validateContextObject = function (e, t, n, r) {
                if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(b(e, t, r) + "must be a valid context object.")
            }
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            , t.validateNamespace = function (e, t, n, r) {
                if ((!r || n) && "string" != typeof n) throw new Error(b(e, t, r) + "must be a valid firebase namespace.")
            }
    }).call(this, n(5))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "LogLevel", function () {
        return r
    }), n.d(t, "Logger", function () {
        return a
    }), n.d(t, "setLogLevel", function () {
        return u
    });
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var r, i = [];
    ! function (e) {
        e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
    }(r || (r = {}));
    var o = r.INFO,
        s = function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            if (!(t < e.logLevel)) {
                var o = (new Date).toISOString();
                switch (t) {
                    case r.DEBUG:
                    case r.VERBOSE:
                        console.log.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));
                        break;
                    case r.INFO:
                        console.info.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));
                        break;
                    case r.WARN:
                        console.warn.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));
                        break;
                    case r.ERROR:
                        console.error.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));
                        break;
                    default:
                        throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                }
            }
        },
        a = function () {
            function e(e) {
                this.name = e, this._logLevel = o, this._logHandler = s, i.push(this)
            }
            return Object.defineProperty(e.prototype, "logLevel", {
                get: function () {
                    return this._logLevel
                },
                set: function (e) {
                    if (!(e in r)) throw new TypeError("Invalid value assigned to `logLevel`");
                    this._logLevel = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "logHandler", {
                get: function () {
                    return this._logHandler
                },
                set: function (e) {
                    if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.debug = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, r.DEBUG].concat(e))
            }, e.prototype.log = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, r.VERBOSE].concat(e))
            }, e.prototype.info = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, r.INFO].concat(e))
            }, e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, r.WARN].concat(e))
            }, e.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._logHandler.apply(this, [this, r.ERROR].concat(e))
            }, e
        }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function u(e) {
        i.forEach(function (t) {
            t.logLevel = e
        })
    }
}, function (e, t, n) {
    "use strict";
    var r, i = (r = n(1)) && "object" == typeof r && "default" in r ? r.default : r;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    e.exports = i
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    (function (r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o, s = (i = n(1)) && "object" == typeof i && "default" in i ? i.default : i,
            a = n(0),
            u = n(2),
            h = n(3),
            l = function () {
                function e(e) {
                    this.domStorage_ = e, this.prefix_ = "firebase:"
                }
                return e.prototype.set = function (e, t) {
                    null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), u.stringify(t))
                }, e.prototype.get = function (e) {
                    var t = this.domStorage_.getItem(this.prefixedName_(e));
                    return null == t ? null : u.jsonEval(t)
                }, e.prototype.remove = function (e) {
                    this.domStorage_.removeItem(this.prefixedName_(e))
                }, e.prototype.prefixedName_ = function (e) {
                    return this.prefix_ + e
                }, e.prototype.toString = function () {
                    return this.domStorage_.toString()
                }, e
            }(),
            c = function () {
                function e() {
                    this.cache_ = {}, this.isInMemoryStorage = !0
                }
                return e.prototype.set = function (e, t) {
                    null == t ? delete this.cache_[e] : this.cache_[e] = t
                }, e.prototype.get = function (e) {
                    return u.contains(this.cache_, e) ? this.cache_[e] : null
                }, e.prototype.remove = function (e) {
                    delete this.cache_[e]
                }, e
            }(),
            p = function (e) {
                try {
                    if ("undefined" != typeof window && void 0 !== window[e]) {
                        var t = window[e];
                        return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new l(t)
                    }
                } catch (e) {}
                return new c
            },
            d = p("localStorage"),
            f = p("sessionStorage"),
            _ = new h.Logger("@firebase/database"),
            y = "FIREBASE_DATABASE_EMULATOR_HOST",
            v = (o = 1, function () {
                return o++
            }),
            g = function (e) {
                var t = u.stringToByteArray(e),
                    n = new u.Sha1;
                n.update(t);
                var r = n.digest();
                return u.base64.encodeByteArray(r)
            },
            m = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = "", r = 0; r < e.length; r++) Array.isArray(e[r]) || e[r] && "object" == typeof e[r] && "number" == typeof e[r].length ? n += m.apply(null, e[r]) : "object" == typeof e[r] ? n += u.stringify(e[r]) : n += e[r], n += " ";
                return n
            },
            C = null,
            E = !0,
            w = function (e, t) {
                u.assert(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (_.logLevel = h.LogLevel.VERBOSE, C = _.log.bind(_), t && f.set("logging_enabled", !0)) : "function" == typeof e ? C = e : (C = null, f.remove("logging_enabled"))
            },
            b = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!0 === E && (E = !1, null === C && !0 === f.get("logging_enabled") && w(!0)), C) {
                    var n = m.apply(null, e);
                    C(n)
                }
            },
            S = function (e) {
                return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    b.apply(void 0, a.__spread([e], t))
                }
            },
            T = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = "FIREBASE INTERNAL ERROR: " + m.apply(void 0, a.__spread(e));
                _.error(n)
            },
            N = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = "FIREBASE FATAL ERROR: " + m.apply(void 0, a.__spread(e));
                throw _.error(n), new Error(n)
            },
            I = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = "FIREBASE WARNING: " + m.apply(void 0, a.__spread(e));
                _.warn(n)
            },
            R = function (e) {
                return "number" == typeof e && (e != e || e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY)
            },
            P = "[MIN_NAME]",
            D = "[MAX_NAME]",
            O = function (e, t) {
                if (e === t) return 0;
                if (e === P || t === D) return -1;
                if (t === P || e === D) return 1;
                var n = q(e),
                    r = q(t);
                return null !== n ? null !== r ? n - r == 0 ? e.length - t.length : n - r : -1 : null !== r ? 1 : e < t ? -1 : 1
            },
            A = function (e, t) {
                return e === t ? 0 : e < t ? -1 : 1
            },
            x = function (e, t) {
                if (t && e in t) return t[e];
                throw new Error("Missing required key (" + e + ") in object: " + u.stringify(t))
            },
            k = function (e) {
                if ("object" != typeof e || null === e) return u.stringify(e);
                var t = [];
                for (var n in e) t.push(n);
                t.sort();
                for (var r = "{", i = 0; i < t.length; i++) 0 !== i && (r += ","), r += u.stringify(t[i]), r += ":", r += k(e[t[i]]);
                return r += "}"
            },
            F = function (e, t) {
                var n = e.length;
                if (n <= t) return [e];
                for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
                return r
            };

        function L(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
        }
        var M = function (e) {
                u.assert(!R(e), "Invalid JSON number");
                var t, n, r, i, o, s, a;
                for (0 === e ? (n = 0, r = 0, t = 1 / e == -1 / 0 ? 1 : 0) : (t = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, r = Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -1074)))), s = [], o = 52; o; o -= 1) s.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                for (o = 11; o; o -= 1) s.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                s.push(t ? 1 : 0), s.reverse(), a = s.join("");
                var h = "";
                for (o = 0; o < 64; o += 8) {
                    var l = parseInt(a.substr(o, 8), 2).toString(16);
                    1 === l.length && (l = "0" + l), h += l
                }
                return h.toLowerCase()
            },
            W = new RegExp("^-?\\d{1,10}$"),
            q = function (e) {
                if (W.test(e)) {
                    var t = Number(e);
                    if (t >= -2147483648 && t <= 2147483647) return t
                }
                return null
            },
            Q = function (e) {
                try {
                    e()
                } catch (e) {
                    setTimeout(function () {
                        var t = e.stack || "";
                        throw I("Exception was thrown by user callback.", t), e
                    }, Math.floor(0))
                }
            },
            U = function () {
                return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
            },
            V = function (e, t) {
                var n = setTimeout(e, t);
                return "object" == typeof n && n.unref && n.unref(), n
            },
            j = function () {
                function e(e, t) {
                    if (void 0 === t) {
                        this.pieces_ = e.split("/");
                        for (var n = 0, r = 0; r < this.pieces_.length; r++) this.pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[r], n++);
                        this.pieces_.length = n, this.pieceNum_ = 0
                    } else this.pieces_ = e, this.pieceNum_ = t
                }
                return Object.defineProperty(e, "Empty", {
                    get: function () {
                        return new e("")
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getFront = function () {
                    return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_]
                }, e.prototype.getLength = function () {
                    return this.pieces_.length - this.pieceNum_
                }, e.prototype.popFront = function () {
                    var t = this.pieceNum_;
                    return t < this.pieces_.length && t++, new e(this.pieces_, t)
                }, e.prototype.getBack = function () {
                    return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null
                }, e.prototype.toString = function () {
                    for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
                    return e || "/"
                }, e.prototype.toUrlEncodedString = function () {
                    for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + encodeURIComponent(String(this.pieces_[t])));
                    return e || "/"
                }, e.prototype.slice = function (e) {
                    return void 0 === e && (e = 0), this.pieces_.slice(this.pieceNum_ + e)
                }, e.prototype.parent = function () {
                    if (this.pieceNum_ >= this.pieces_.length) return null;
                    for (var t = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++) t.push(this.pieces_[n]);
                    return new e(t, 0)
                }, e.prototype.child = function (t) {
                    for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++) n.push(this.pieces_[r]);
                    if (t instanceof e)
                        for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
                    else {
                        var i = t.split("/");
                        for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r])
                    }
                    return new e(n, 0)
                }, e.prototype.isEmpty = function () {
                    return this.pieceNum_ >= this.pieces_.length
                }, e.relativePath = function (t, n) {
                    var r = t.getFront(),
                        i = n.getFront();
                    if (null === r) return n;
                    if (r === i) return e.relativePath(t.popFront(), n.popFront());
                    throw new Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + t + ")")
                }, e.comparePaths = function (e, t) {
                    for (var n = e.slice(), r = t.slice(), i = 0; i < n.length && i < r.length; i++) {
                        var o = O(n[i], r[i]);
                        if (0 !== o) return o
                    }
                    return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
                }, e.prototype.equals = function (e) {
                    if (this.getLength() !== e.getLength()) return !1;
                    for (var t = this.pieceNum_, n = e.pieceNum_; t <= this.pieces_.length; t++, n++)
                        if (this.pieces_[t] !== e.pieces_[n]) return !1;
                    return !0
                }, e.prototype.contains = function (e) {
                    var t = this.pieceNum_,
                        n = e.pieceNum_;
                    if (this.getLength() > e.getLength()) return !1;
                    for (; t < this.pieces_.length;) {
                        if (this.pieces_[t] !== e.pieces_[n]) return !1;
                        ++t, ++n
                    }
                    return !0
                }, e
            }(),
            H = function () {
                function e(e, t) {
                    this.errorPrefix_ = t, this.parts_ = e.slice(), this.byteLength_ = Math.max(1, this.parts_.length);
                    for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += u.stringLength(this.parts_[n]);
                    this.checkValid_()
                }
                return Object.defineProperty(e, "MAX_PATH_DEPTH", {
                    get: function () {
                        return 32
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", {
                    get: function () {
                        return 768
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.push = function (e) {
                    this.parts_.length > 0 && (this.byteLength_ += 1), this.parts_.push(e), this.byteLength_ += u.stringLength(e), this.checkValid_()
                }, e.prototype.pop = function () {
                    var e = this.parts_.pop();
                    this.byteLength_ -= u.stringLength(e), this.parts_.length > 0 && (this.byteLength_ -= 1)
                }, e.prototype.checkValid_ = function () {
                    if (this.byteLength_ > e.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + e.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
                    if (this.parts_.length > e.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + e.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
                }, e.prototype.toErrorString = function () {
                    return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'"
                }, e
            }(),
            B = "long_polling",
            z = function () {
                function e(e, t, n, r, i, o) {
                    void 0 === i && (i = ""), void 0 === o && (o = !1), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.includeNamespaceInQueryParams = o, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = d.get("host:" + e) || this.host
                }
                return e.prototype.needsQueryParam = function () {
                    return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams
                }, e.prototype.isCacheableHost = function () {
                    return "s-" === this.internalHost.substr(0, 2)
                }, e.prototype.isDemoHost = function () {
                    return "firebaseio-demo.com" === this.domain
                }, e.prototype.isCustomHost = function () {
                    return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
                }, e.prototype.updateHost = function (e) {
                    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && d.set("host:" + this.host, this.internalHost))
                }, e.prototype.connectionURL = function (e, t) {
                    var n;
                    if (u.assert("string" == typeof e, "typeof type must == string"), u.assert("object" == typeof t, "typeof params must == object"), "websocket" === e) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                    else {
                        if (e !== B) throw new Error("Unknown connection type: " + e);
                        n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                    }
                    this.needsQueryParam() && (t.ns = this.namespace);
                    var r = [];
                    return L(t, function (e, t) {
                        r.push(e + "=" + t)
                    }), n + r.join("&")
                }, e.prototype.toString = function () {
                    var e = this.toURLString();
                    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                }, e.prototype.toURLString = function () {
                    return (this.secure ? "https://" : "http://") + this.host
                }, e
            }();
        var K, Y, G, X, $, J = function (e) {
                var t = Z(e),
                    n = t.namespace;
                "firebase" === t.domain && N(t.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n && "undefined" != n || "localhost" === t.domain || N("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), t.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                var r = "ws" === t.scheme || "wss" === t.scheme;
                return {
                    repoInfo: new z(t.host, t.secure, n, r, "", n != t.subdomain),
                    path: new j(t.pathString)
                }
            },
            Z = function (e) {
                var t = "",
                    n = "",
                    r = "",
                    i = "",
                    o = "",
                    s = !0,
                    u = "https",
                    h = 443;
                if ("string" == typeof e) {
                    var l = e.indexOf("//");
                    l >= 0 && (u = e.substring(0, l - 1), e = e.substring(l + 2));
                    var c = e.indexOf("/"); - 1 === c && (c = e.length);
                    var p = e.indexOf("?"); - 1 === p && (p = e.length), t = e.substring(0, Math.min(c, p)), c < p && (i =
                        /**
                         * @license
                         * Copyright 2017 Google Inc.
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        function (e) {
                            for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                                if (n[r].length > 0) {
                                    var i = n[r];
                                    try {
                                        i = decodeURIComponent(i.replace(/\+/g, " "))
                                    } catch (e) {}
                                    t += "/" + i
                                } return t
                        }(e.substring(c, p)));
                    var d = function (e) {
                        var t, n, r = {};
                        "?" === e.charAt(0) && (e = e.substring(1));
                        try {
                            for (var i = a.__values(e.split("&")), o = i.next(); !o.done; o = i.next()) {
                                var s = o.value;
                                if (0 !== s.length) {
                                    var u = s.split("=");
                                    2 === u.length ? r[decodeURIComponent(u[0])] = decodeURIComponent(u[1]) : I("Invalid query segment '" + s + "' in query '" + e + "'")
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r
                    }(e.substring(Math.min(e.length, p)));
                    (l = t.indexOf(":")) >= 0 ? (s = "https" === u || "wss" === u, h = parseInt(t.substring(l + 1), 10)) : l = e.length;
                    var f = t.split(".");
                    3 === f.length ? (n = f[1], o = r = f[0].toLowerCase()) : 2 === f.length ? n = f[0] : "localhost" === f[0].slice(0, l).toLowerCase() && (n = "localhost"), "ns" in d && (o = d.ns)
                }
                return {
                    host: t,
                    port: h,
                    domain: n,
                    subdomain: r,
                    secure: s,
                    scheme: u,
                    pathString: i,
                    namespace: o
                }
            },
            ee = /[\[\].#$\/\u0000-\u001F\u007F]/,
            te = /[\[\].#$\u0000-\u001F\u007F]/,
            ne = function (e) {
                return "string" == typeof e && 0 !== e.length && !ee.test(e)
            },
            re = function (e) {
                return "string" == typeof e && 0 !== e.length && !te.test(e)
            },
            ie = function (e) {
                return null === e || "string" == typeof e || "number" == typeof e && !R(e) || e && "object" == typeof e && u.contains(e, ".sv")
            },
            oe = function (e, t, n, r, i) {
                i && void 0 === n || se(u.errorPrefix(e, t, i), n, r)
            },
            se = function (e, t, n) {
                var r = n instanceof j ? new H(n, e) : n;
                if (void 0 === t) throw new Error(e + "contains undefined " + r.toErrorString());
                if ("function" == typeof t) throw new Error(e + "contains a function " + r.toErrorString() + " with contents = " + t.toString());
                if (R(t)) throw new Error(e + "contains " + t.toString() + " " + r.toErrorString());
                if ("string" == typeof t && t.length > 10485760 / 3 && u.stringLength(t) > 10485760) throw new Error(e + "contains a string greater than 10485760 utf8 bytes " + r.toErrorString() + " ('" + t.substring(0, 50) + "...')");
                if (t && "object" == typeof t) {
                    var i = !1,
                        o = !1;
                    if (L(t, function (t, n) {
                            if (".value" === t) i = !0;
                            else if (".priority" !== t && ".sv" !== t && (o = !0, !ne(t))) throw new Error(e + " contains an invalid key (" + t + ") " + r.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                            r.push(t), se(e, n, r), r.pop()
                        }), i && o) throw new Error(e + ' contains ".value" child ' + r.toErrorString() + " in addition to actual children.")
                }
            },
            ae = function (e, t, n, r, i) {
                if (!i || void 0 !== n) {
                    var o = u.errorPrefix(e, t, i);
                    if (!n || "object" != typeof n || Array.isArray(n)) throw new Error(o + " must be an object containing the children to replace.");
                    var s = [];
                    L(n, function (e, t) {
                            var n = new j(e);
                            if (se(o, t, r.child(n)), ".priority" === n.getBack() && !ie(t)) throw new Error(o + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                            s.push(n)
                        }),
                        function (e, t) {
                            var n, r;
                            for (n = 0; n < t.length; n++)
                                for (var i = (r = t[n]).slice(), o = 0; o < i.length; o++)
                                    if (".priority" === i[o] && o === i.length - 1);
                                    else if (!ne(i[o])) throw new Error(e + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                            t.sort(j.comparePaths);
                            var s = null;
                            for (n = 0; n < t.length; n++) {
                                if (r = t[n], null !== s && s.contains(r)) throw new Error(e + "contains a path " + s.toString() + " that is ancestor of another path " + r.toString());
                                s = r
                            }
                        }(o, s)
                }
            },
            ue = function (e, t, n, r) {
                if (!r || void 0 !== n) {
                    if (R(n)) throw new Error(u.errorPrefix(e, t, r) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                    if (!ie(n)) throw new Error(u.errorPrefix(e, t, r) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
                }
            },
            he = function (e, t, n, r) {
                if (!r || void 0 !== n) switch (n) {
                    case "value":
                    case "child_added":
                    case "child_removed":
                    case "child_changed":
                    case "child_moved":
                        break;
                    default:
                        throw new Error(u.errorPrefix(e, t, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                }
            },
            le = function (e, t, n, r) {
                if (!(r && void 0 === n || ne(n))) throw new Error(u.errorPrefix(e, t, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
            },
            ce = function (e, t, n, r) {
                if (!(r && void 0 === n || re(n))) throw new Error(u.errorPrefix(e, t, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
            },
            pe = function (e, t, n, r) {
                n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), ce(e, t, n, r)
            },
            de = function (e, t) {
                if (".info" === t.getFront()) throw new Error(e + " failed = Can't modify data under /.info/")
            },
            fe = function (e, t, n) {
                var r = n.path.toString();
                if ("string" != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !ne(n.repoInfo.namespace) && "localhost" !== n.repoInfo.host.split(":")[0] || 0 !== r.length && ! function (e) {
                        return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), re(e)
                    }(r)) throw new Error(u.errorPrefix(e, t, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
            },
            _e = function (e, t, n, r) {
                if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(u.errorPrefix(e, t, r) + "must be a boolean.")
            },
            ye = function () {
                function e(e, t) {
                    this.repo_ = e, this.path_ = t
                }
                return e.prototype.cancel = function (e) {
                    u.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length), u.validateCallback("OnDisconnect.cancel", 1, e, !0);
                    var t = new u.Deferred;
                    return this.repo_.onDisconnectCancel(this.path_, t.wrapCallback(e)), t.promise
                }, e.prototype.remove = function (e) {
                    u.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length), de("OnDisconnect.remove", this.path_), u.validateCallback("OnDisconnect.remove", 1, e, !0);
                    var t = new u.Deferred;
                    return this.repo_.onDisconnectSet(this.path_, null, t.wrapCallback(e)), t.promise
                }, e.prototype.set = function (e, t) {
                    u.validateArgCount("OnDisconnect.set", 1, 2, arguments.length), de("OnDisconnect.set", this.path_), oe("OnDisconnect.set", 1, e, this.path_, !1), u.validateCallback("OnDisconnect.set", 2, t, !0);
                    var n = new u.Deferred;
                    return this.repo_.onDisconnectSet(this.path_, e, n.wrapCallback(t)), n.promise
                }, e.prototype.setWithPriority = function (e, t, n) {
                    u.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length), de("OnDisconnect.setWithPriority", this.path_), oe("OnDisconnect.setWithPriority", 1, e, this.path_, !1), ue("OnDisconnect.setWithPriority", 2, t, !1), u.validateCallback("OnDisconnect.setWithPriority", 3, n, !0);
                    var r = new u.Deferred;
                    return this.repo_.onDisconnectSetWithPriority(this.path_, e, t, r.wrapCallback(n)), r.promise
                }, e.prototype.update = function (e, t) {
                    if (u.validateArgCount("OnDisconnect.update", 1, 2, arguments.length), de("OnDisconnect.update", this.path_), Array.isArray(e)) {
                        for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                        e = n, I("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    ae("OnDisconnect.update", 1, e, this.path_, !1), u.validateCallback("OnDisconnect.update", 2, t, !0);
                    var i = new u.Deferred;
                    return this.repo_.onDisconnectUpdate(this.path_, e, i.wrapCallback(t)), i.promise
                }, e
            }(),
            ve = function () {
                function e(e, t) {
                    this.committed = e, this.snapshot = t
                }
                return e.prototype.toJSON = function () {
                    return u.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length), {
                        committed: this.committed,
                        snapshot: this.snapshot.toJSON()
                    }
                }, e
            }(),
            ge = (K = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", Y = 0, G = [], function (e) {
                var t, n = e === Y;
                Y = e;
                var r = new Array(8);
                for (t = 7; t >= 0; t--) r[t] = K.charAt(e % 64), e = Math.floor(e / 64);
                u.assert(0 === e, "Cannot push at time == 0");
                var i = r.join("");
                if (n) {
                    for (t = 11; t >= 0 && 63 === G[t]; t--) G[t] = 0;
                    G[t]++
                } else
                    for (t = 0; t < 12; t++) G[t] = Math.floor(64 * Math.random());
                for (t = 0; t < 12; t++) i += K.charAt(G[t]);
                return u.assert(20 === i.length, "nextPushId: Length should be 20."), i
            }),
            me = function () {
                function e(e, t) {
                    this.name = e, this.node = t
                }
                return e.Wrap = function (t, n) {
                    return new e(t, n)
                }, e
            }(),
            Ce = function () {
                function e() {}
                return e.prototype.getCompare = function () {
                    return this.compare.bind(this)
                }, e.prototype.indexedValueChanged = function (e, t) {
                    var n = new me(P, e),
                        r = new me(P, t);
                    return 0 !== this.compare(n, r)
                }, e.prototype.minPost = function () {
                    return me.MIN
                }, e
            }(),
            Ee = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), Object.defineProperty(t, "__EMPTY_NODE", {
                    get: function () {
                        return X
                    },
                    set: function (e) {
                        X = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.compare = function (e, t) {
                    return O(e.name, t.name)
                }, t.prototype.isDefinedOn = function (e) {
                    throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")
                }, t.prototype.indexedValueChanged = function (e, t) {
                    return !1
                }, t.prototype.minPost = function () {
                    return me.MIN
                }, t.prototype.maxPost = function () {
                    return new me(D, X)
                }, t.prototype.makePost = function (e, t) {
                    return u.assert("string" == typeof e, "KeyIndex indexValue must always be a string."), new me(e, X)
                }, t.prototype.toString = function () {
                    return ".key"
                }, t
            }(Ce),
            we = new Ee;
        var be, Se, Te, Ne = function (e) {
                return "number" == typeof e ? "number:" + M(e) : "string:" + e
            },
            Ie = function (e) {
                if (e.isLeafNode()) {
                    var t = e.val();
                    u.assert("string" == typeof t || "number" == typeof t || "object" == typeof t && u.contains(t, ".sv"), "Priority must be a string or number.")
                } else u.assert(e === $ || e.isEmpty(), "priority of unexpected type.");
                u.assert(e === $ || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
            },
            Re = function () {
                function e(t, n) {
                    void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = n, this.lazyHash_ = null, u.assert(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Ie(this.priorityNode_)
                }
                return Object.defineProperty(e, "__childrenNodeConstructor", {
                    get: function () {
                        return be
                    },
                    set: function (e) {
                        be = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isLeafNode = function () {
                    return !0
                }, e.prototype.getPriority = function () {
                    return this.priorityNode_
                }, e.prototype.updatePriority = function (t) {
                    return new e(this.value_, t)
                }, e.prototype.getImmediateChild = function (t) {
                    return ".priority" === t ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
                }, e.prototype.getChild = function (t) {
                    return t.isEmpty() ? this : ".priority" === t.getFront() ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
                }, e.prototype.hasChild = function () {
                    return !1
                }, e.prototype.getPredecessorChildName = function (e, t) {
                    return null
                }, e.prototype.updateImmediateChild = function (t, n) {
                    return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.priorityNode_)
                }, e.prototype.updateChild = function (t, n) {
                    var r = t.getFront();
                    return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (u.assert(".priority" !== r || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n)))
                }, e.prototype.isEmpty = function () {
                    return !1
                }, e.prototype.numChildren = function () {
                    return 0
                }, e.prototype.forEachChild = function (e, t) {
                    return !1
                }, e.prototype.val = function (e) {
                    return e && !this.getPriority().isEmpty() ? {
                        ".value": this.getValue(),
                        ".priority": this.getPriority().val()
                    } : this.getValue()
                }, e.prototype.hash = function () {
                    if (null === this.lazyHash_) {
                        var e = "";
                        this.priorityNode_.isEmpty() || (e += "priority:" + Ne(this.priorityNode_.val()) + ":");
                        var t = typeof this.value_;
                        e += t + ":", e += "number" === t ? M(this.value_) : this.value_, this.lazyHash_ = g(e)
                    }
                    return this.lazyHash_
                }, e.prototype.getValue = function () {
                    return this.value_
                }, e.prototype.compareTo = function (t) {
                    return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (u.assert(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t))
                }, e.prototype.compareToLeafNode_ = function (t) {
                    var n = typeof t.value_,
                        r = typeof this.value_,
                        i = e.VALUE_TYPE_ORDER.indexOf(n),
                        o = e.VALUE_TYPE_ORDER.indexOf(r);
                    return u.assert(i >= 0, "Unknown leaf type: " + n), u.assert(o >= 0, "Unknown leaf type: " + r), i === o ? "object" === r ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : o - i
                }, e.prototype.withIndex = function () {
                    return this
                }, e.prototype.isIndexed = function () {
                    return !0
                }, e.prototype.equals = function (e) {
                    if (e === this) return !0;
                    if (e.isLeafNode()) {
                        var t = e;
                        return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                    }
                    return !1
                }, e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], e
            }();
        var Pe, De, Oe = new(function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.compare = function (e, t) {
                    var n = e.node.getPriority(),
                        r = t.node.getPriority(),
                        i = n.compareTo(r);
                    return 0 === i ? O(e.name, t.name) : i
                }, t.prototype.isDefinedOn = function (e) {
                    return !e.getPriority().isEmpty()
                }, t.prototype.indexedValueChanged = function (e, t) {
                    return !e.getPriority().equals(t.getPriority())
                }, t.prototype.minPost = function () {
                    return me.MIN
                }, t.prototype.maxPost = function () {
                    return new me(D, new Re("[PRIORITY-POST]", Te))
                }, t.prototype.makePost = function (e, t) {
                    var n = Se(e);
                    return new me(t, new Re("[PRIORITY-POST]", n))
                }, t.prototype.toString = function () {
                    return ".priority"
                }, t
            }(Ce)),
            Ae = function () {
                function e(e, t, n, r, i) {
                    void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
                    for (var o = 1; !e.isEmpty();)
                        if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.isReverse_ ? e.left : e.right;
                        else {
                            if (0 === o) {
                                this.nodeStack_.push(e);
                                break
                            }
                            this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                        }
                }
                return e.prototype.getNext = function () {
                    if (0 === this.nodeStack_.length) return null;
                    var e, t = this.nodeStack_.pop();
                    if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                            key: t.key,
                            value: t.value
                        }, this.isReverse_)
                        for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
                    else
                        for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
                    return e
                }, e.prototype.hasNext = function () {
                    return this.nodeStack_.length > 0
                }, e.prototype.peek = function () {
                    if (0 === this.nodeStack_.length) return null;
                    var e = this.nodeStack_[this.nodeStack_.length - 1];
                    return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                        key: e.key,
                        value: e.value
                    }
                }, e
            }(),
            xe = function () {
                function e(t, n, r, i, o) {
                    this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : Fe.EMPTY_NODE, this.right = null != o ? o : Fe.EMPTY_NODE
                }
                return e.prototype.copy = function (t, n, r, i, o) {
                    return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
                }, e.prototype.count = function () {
                    return this.left.count() + 1 + this.right.count()
                }, e.prototype.isEmpty = function () {
                    return !1
                }, e.prototype.inorderTraversal = function (e) {
                    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
                }, e.prototype.reverseTraversal = function (e) {
                    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                }, e.prototype.min_ = function () {
                    return this.left.isEmpty() ? this : this.left.min_()
                }, e.prototype.minKey = function () {
                    return this.min_().key
                }, e.prototype.maxKey = function () {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }, e.prototype.insert = function (e, t, n) {
                    var r, i;
                    return (i = (r = n(e, (i = this).key)) < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === r ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n))).fixUp_()
                }, e.prototype.removeMin_ = function () {
                    if (this.left.isEmpty()) return Fe.EMPTY_NODE;
                    var e = this;
                    return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), (e = e.copy(null, null, null, e.left.removeMin_(), null)).fixUp_()
                }, e.prototype.remove = function (e, t) {
                    var n, r;
                    if (t(e, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                    else {
                        if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                            if (n.right.isEmpty()) return Fe.EMPTY_NODE;
                            r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                        }
                        n = n.copy(null, null, null, null, n.right.remove(e, t))
                    }
                    return n.fixUp_()
                }, e.prototype.isRed_ = function () {
                    return this.color
                }, e.prototype.fixUp_ = function () {
                    var e = this;
                    return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
                }, e.prototype.moveRedLeft_ = function () {
                    var e = this.colorFlip_();
                    return e.right.left.isRed_() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_()), e
                }, e.prototype.moveRedRight_ = function () {
                    var e = this.colorFlip_();
                    return e.left.left.isRed_() && (e = (e = e.rotateRight_()).colorFlip_()), e
                }, e.prototype.rotateLeft_ = function () {
                    var t = this.copy(null, null, e.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, t, null)
                }, e.prototype.rotateRight_ = function () {
                    var t = this.copy(null, null, e.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, t)
                }, e.prototype.colorFlip_ = function () {
                    var e = this.left.copy(null, null, !this.left.color, null, null),
                        t = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, e, t)
                }, e.prototype.checkMaxDepth_ = function () {
                    var e = this.check_();
                    return Math.pow(2, e) <= this.count() + 1
                }, e.prototype.check_ = function () {
                    var e;
                    if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                    if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                    if ((e = this.left.check_()) !== this.right.check_()) throw new Error("Black depths differ");
                    return e + (this.isRed_() ? 0 : 1)
                }, e.RED = !0, e.BLACK = !1, e
            }(),
            ke = function () {
                function e() {}
                return e.prototype.copy = function (e, t, n, r, i) {
                    return this
                }, e.prototype.insert = function (e, t, n) {
                    return new xe(e, t, null)
                }, e.prototype.remove = function (e, t) {
                    return this
                }, e.prototype.count = function () {
                    return 0
                }, e.prototype.isEmpty = function () {
                    return !0
                }, e.prototype.inorderTraversal = function (e) {
                    return !1
                }, e.prototype.reverseTraversal = function (e) {
                    return !1
                }, e.prototype.minKey = function () {
                    return null
                }, e.prototype.maxKey = function () {
                    return null
                }, e.prototype.check_ = function () {
                    return 0
                }, e.prototype.isRed_ = function () {
                    return !1
                }, e
            }(),
            Fe = function () {
                function e(t, n) {
                    void 0 === n && (n = e.EMPTY_NODE), this.comparator_ = t, this.root_ = n
                }
                return e.prototype.insert = function (t, n) {
                    return new e(this.comparator_, this.root_.insert(t, n, this.comparator_).copy(null, null, xe.BLACK, null, null))
                }, e.prototype.remove = function (t) {
                    return new e(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, xe.BLACK, null, null))
                }, e.prototype.get = function (e) {
                    for (var t, n = this.root_; !n.isEmpty();) {
                        if (0 === (t = this.comparator_(e, n.key))) return n.value;
                        t < 0 ? n = n.left : t > 0 && (n = n.right)
                    }
                    return null
                }, e.prototype.getPredecessorKey = function (e) {
                    for (var t, n = this.root_, r = null; !n.isEmpty();) {
                        if (0 === (t = this.comparator_(e, n.key))) {
                            if (n.left.isEmpty()) return r ? r.key : null;
                            for (n = n.left; !n.right.isEmpty();) n = n.right;
                            return n.key
                        }
                        t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
                    }
                    throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                }, e.prototype.isEmpty = function () {
                    return this.root_.isEmpty()
                }, e.prototype.count = function () {
                    return this.root_.count()
                }, e.prototype.minKey = function () {
                    return this.root_.minKey()
                }, e.prototype.maxKey = function () {
                    return this.root_.maxKey()
                }, e.prototype.inorderTraversal = function (e) {
                    return this.root_.inorderTraversal(e)
                }, e.prototype.reverseTraversal = function (e) {
                    return this.root_.reverseTraversal(e)
                }, e.prototype.getIterator = function (e) {
                    return new Ae(this.root_, null, this.comparator_, !1, e)
                }, e.prototype.getIteratorFrom = function (e, t) {
                    return new Ae(this.root_, e, this.comparator_, !1, t)
                }, e.prototype.getReverseIteratorFrom = function (e, t) {
                    return new Ae(this.root_, e, this.comparator_, !0, t)
                }, e.prototype.getReverseIterator = function (e) {
                    return new Ae(this.root_, null, this.comparator_, !0, e)
                }, e.EMPTY_NODE = new ke, e
            }(),
            Le = Math.log(2),
            Me = function () {
                function e(e) {
                    var t;
                    this.count = (t = e + 1, parseInt(Math.log(t) / Le, 10)), this.current_ = this.count - 1;
                    var n, r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                    this.bits_ = e + 1 & r
                }
                return e.prototype.nextBitIsOne = function () {
                    var e = !(this.bits_ & 1 << this.current_);
                    return this.current_--, e
                }, e
            }(),
            We = function (e, t, n, r) {
                e.sort(t);
                var i = function (t, r) {
                        var o, s, a = r - t;
                        if (0 == a) return null;
                        if (1 == a) return o = e[t], s = n ? n(o) : o, new xe(s, o.node, xe.BLACK, null, null);
                        var u = parseInt(a / 2, 10) + t,
                            h = i(t, u),
                            l = i(u + 1, r);
                        return o = e[u], s = n ? n(o) : o, new xe(s, o.node, xe.BLACK, h, l)
                    },
                    o = function (t) {
                        for (var r = null, o = null, s = e.length, a = function (t, r) {
                                var o = s - t,
                                    a = s;
                                s -= t;
                                var h = i(o + 1, a),
                                    l = e[o],
                                    c = n ? n(l) : l;
                                u(new xe(c, l.node, r, null, h))
                            }, u = function (e) {
                                r ? (r.left = e, r = e) : (o = e, r = e)
                            }, h = 0; h < t.count; ++h) {
                            var l = t.nextBitIsOne(),
                                c = Math.pow(2, t.count - (h + 1));
                            l ? a(c, xe.BLACK) : (a(c, xe.BLACK), a(c, xe.RED))
                        }
                        return o
                    }(new Me(e.length));
                return new Fe(r || t, o)
            },
            qe = {},
            Qe = function () {
                function e(e, t) {
                    this.indexes_ = e, this.indexSet_ = t
                }
                return Object.defineProperty(e, "Default", {
                    get: function () {
                        return u.assert(qe && Oe, "ChildrenNode.ts has not been loaded"), Pe = Pe || new e({
                            ".priority": qe
                        }, {
                            ".priority": Oe
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function (e) {
                    var t = u.safeGet(this.indexes_, e);
                    if (!t) throw new Error("No index defined for " + e);
                    return t instanceof Fe ? t : null
                }, e.prototype.hasIndex = function (e) {
                    return u.contains(this.indexSet_, e.toString())
                }, e.prototype.addIndex = function (t, n) {
                    u.assert(t !== we, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                    for (var r, i = [], o = !1, s = n.getIterator(me.Wrap), h = s.getNext(); h;) o = o || t.isDefinedOn(h.node), i.push(h), h = s.getNext();
                    r = o ? We(i, t.getCompare()) : qe;
                    var l = t.toString(),
                        c = a.__assign({}, this.indexSet_);
                    c[l] = t;
                    var p = a.__assign({}, this.indexes_);
                    return p[l] = r, new e(p, c)
                }, e.prototype.addToIndexes = function (t, n) {
                    var r = this;
                    return new e(u.map(this.indexes_, function (e, i) {
                        var o = u.safeGet(r.indexSet_, i);
                        if (u.assert(o, "Missing index implementation for " + i), e === qe) {
                            if (o.isDefinedOn(t.node)) {
                                for (var s = [], a = n.getIterator(me.Wrap), h = a.getNext(); h;) h.name != t.name && s.push(h), h = a.getNext();
                                return s.push(t), We(s, o.getCompare())
                            }
                            return qe
                        }
                        var l = n.get(t.name),
                            c = e;
                        return l && (c = c.remove(new me(t.name, l))), c.insert(t, t.node)
                    }), this.indexSet_)
                }, e.prototype.removeFromIndexes = function (t, n) {
                    return new e(u.map(this.indexes_, function (e) {
                        if (e === qe) return e;
                        var r = n.get(t.name);
                        return r ? e.remove(new me(t.name, r)) : e
                    }), this.indexSet_)
                }, e
            }();
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function Ue(e, t) {
            return O(e.name, t.name)
        }

        function Ve(e, t) {
            return O(e, t)
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var je = function () {
                function e(e, t, n) {
                    this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Ie(this.priorityNode_), this.children_.isEmpty() && u.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                }
                return Object.defineProperty(e, "EMPTY_NODE", {
                    get: function () {
                        return De || (De = new e(new Fe(Ve), null, Qe.Default))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isLeafNode = function () {
                    return !1
                }, e.prototype.getPriority = function () {
                    return this.priorityNode_ || De
                }, e.prototype.updatePriority = function (t) {
                    return this.children_.isEmpty() ? this : new e(this.children_, t, this.indexMap_)
                }, e.prototype.getImmediateChild = function (e) {
                    if (".priority" === e) return this.getPriority();
                    var t = this.children_.get(e);
                    return null === t ? De : t
                }, e.prototype.getChild = function (e) {
                    var t = e.getFront();
                    return null === t ? this : this.getImmediateChild(t).getChild(e.popFront())
                }, e.prototype.hasChild = function (e) {
                    return null !== this.children_.get(e)
                }, e.prototype.updateImmediateChild = function (t, n) {
                    if (u.assert(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n);
                    var r, i = new me(t, n),
                        o = void 0,
                        s = void 0;
                    return n.isEmpty() ? (o = this.children_.remove(t), s = this.indexMap_.removeFromIndexes(i, this.children_)) : (o = this.children_.insert(t, n), s = this.indexMap_.addToIndexes(i, this.children_)), r = o.isEmpty() ? De : this.priorityNode_, new e(o, r, s)
                }, e.prototype.updateChild = function (e, t) {
                    var n = e.getFront();
                    if (null === n) return t;
                    u.assert(".priority" !== e.getFront() || 1 === e.getLength(), ".priority must be the last token in a path");
                    var r = this.getImmediateChild(n).updateChild(e.popFront(), t);
                    return this.updateImmediateChild(n, r)
                }, e.prototype.isEmpty = function () {
                    return this.children_.isEmpty()
                }, e.prototype.numChildren = function () {
                    return this.children_.count()
                }, e.prototype.val = function (t) {
                    if (this.isEmpty()) return null;
                    var n = {},
                        r = 0,
                        i = 0,
                        o = !0;
                    if (this.forEachChild(Oe, function (s, a) {
                            n[s] = a.val(t), r++, o && e.INTEGER_REGEXP_.test(s) ? i = Math.max(i, Number(s)) : o = !1
                        }), !t && o && i < 2 * r) {
                        var s = [];
                        for (var a in n) s[a] = n[a];
                        return s
                    }
                    return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n
                }, e.prototype.hash = function () {
                    if (null === this.lazyHash_) {
                        var e = "";
                        this.getPriority().isEmpty() || (e += "priority:" + Ne(this.getPriority().val()) + ":"), this.forEachChild(Oe, function (t, n) {
                            var r = n.hash();
                            "" !== r && (e += ":" + t + ":" + r)
                        }), this.lazyHash_ = "" === e ? "" : g(e)
                    }
                    return this.lazyHash_
                }, e.prototype.getPredecessorChildName = function (e, t, n) {
                    var r = this.resolveIndex_(n);
                    if (r) {
                        var i = r.getPredecessorKey(new me(e, t));
                        return i ? i.name : null
                    }
                    return this.children_.getPredecessorKey(e)
                }, e.prototype.getFirstChildName = function (e) {
                    var t = this.resolveIndex_(e);
                    if (t) {
                        var n = t.minKey();
                        return n && n.name
                    }
                    return this.children_.minKey()
                }, e.prototype.getFirstChild = function (e) {
                    var t = this.getFirstChildName(e);
                    return t ? new me(t, this.children_.get(t)) : null
                }, e.prototype.getLastChildName = function (e) {
                    var t = this.resolveIndex_(e);
                    if (t) {
                        var n = t.maxKey();
                        return n && n.name
                    }
                    return this.children_.maxKey()
                }, e.prototype.getLastChild = function (e) {
                    var t = this.getLastChildName(e);
                    return t ? new me(t, this.children_.get(t)) : null
                }, e.prototype.forEachChild = function (e, t) {
                    var n = this.resolveIndex_(e);
                    return n ? n.inorderTraversal(function (e) {
                        return t(e.name, e.node)
                    }) : this.children_.inorderTraversal(t)
                }, e.prototype.getIterator = function (e) {
                    return this.getIteratorFrom(e.minPost(), e)
                }, e.prototype.getIteratorFrom = function (e, t) {
                    var n = this.resolveIndex_(t);
                    if (n) return n.getIteratorFrom(e, function (e) {
                        return e
                    });
                    for (var r = this.children_.getIteratorFrom(e.name, me.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek();
                    return r
                }, e.prototype.getReverseIterator = function (e) {
                    return this.getReverseIteratorFrom(e.maxPost(), e)
                }, e.prototype.getReverseIteratorFrom = function (e, t) {
                    var n = this.resolveIndex_(t);
                    if (n) return n.getReverseIteratorFrom(e, function (e) {
                        return e
                    });
                    for (var r = this.children_.getReverseIteratorFrom(e.name, me.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) r.getNext(), i = r.peek();
                    return r
                }, e.prototype.compareTo = function (e) {
                    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === He ? -1 : 0
                }, e.prototype.withIndex = function (t) {
                    if (t === we || this.indexMap_.hasIndex(t)) return this;
                    var n = this.indexMap_.addIndex(t, this.children_);
                    return new e(this.children_, this.priorityNode_, n)
                }, e.prototype.isIndexed = function (e) {
                    return e === we || this.indexMap_.hasIndex(e)
                }, e.prototype.equals = function (e) {
                    if (e === this) return !0;
                    if (e.isLeafNode()) return !1;
                    var t = e;
                    if (this.getPriority().equals(t.getPriority())) {
                        if (this.children_.count() === t.children_.count()) {
                            for (var n = this.getIterator(Oe), r = t.getIterator(Oe), i = n.getNext(), o = r.getNext(); i && o;) {
                                if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                                i = n.getNext(), o = r.getNext()
                            }
                            return null === i && null === o
                        }
                        return !1
                    }
                    return !1
                }, e.prototype.resolveIndex_ = function (e) {
                    return e === we ? null : this.indexMap_.get(e.toString())
                }, e.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, e
            }(),
            He = new(function (e) {
                function t() {
                    return e.call(this, new Fe(Ve), je.EMPTY_NODE, Qe.Default) || this
                }
                return a.__extends(t, e), t.prototype.compareTo = function (e) {
                    return e === this ? 0 : 1
                }, t.prototype.equals = function (e) {
                    return e === this
                }, t.prototype.getPriority = function () {
                    return this
                }, t.prototype.getImmediateChild = function (e) {
                    return je.EMPTY_NODE
                }, t.prototype.isEmpty = function () {
                    return !1
                }, t
            }(je));
        Object.defineProperties(me, {
                MIN: {
                    value: new me(P, je.EMPTY_NODE)
                },
                MAX: {
                    value: new me(D, He)
                }
            }), Ee.__EMPTY_NODE = je.EMPTY_NODE, Re.__childrenNodeConstructor = je, $ = He,
            function (e) {
                Te = e
            }(He);
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var Be = !0;

        function ze(e, t) {
            if (void 0 === t && (t = null), null === e) return je.EMPTY_NODE;
            if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), u.assert(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) return new Re(e, ze(t));
            if (e instanceof Array || !Be) {
                var n = je.EMPTY_NODE;
                return L(e, function (t, r) {
                    if (u.contains(e, t) && "." !== t.substring(0, 1)) {
                        var i = ze(r);
                        !i.isLeafNode() && i.isEmpty() || (n = n.updateImmediateChild(t, i))
                    }
                }), n.updatePriority(ze(t))
            }
            var r = [],
                i = !1;
            if (L(e, function (e, t) {
                    if ("." !== e.substring(0, 1)) {
                        var n = ze(t);
                        n.isEmpty() || (i = i || !n.getPriority().isEmpty(), r.push(new me(e, n)))
                    }
                }), 0 == r.length) return je.EMPTY_NODE;
            var o = We(r, Ue, function (e) {
                return e.name
            }, Ve);
            if (i) {
                var s = We(r, Oe.getCompare());
                return new je(o, ze(t), new Qe({
                    ".priority": s
                }, {
                    ".priority": Oe
                }))
            }
            return new je(o, ze(t), Qe.Default)
        }! function (e) {
            Se = e
        }(ze);
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var Ke, Ye, Ge = new(function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.compare = function (e, t) {
                    var n = e.node.compareTo(t.node);
                    return 0 === n ? O(e.name, t.name) : n
                }, t.prototype.isDefinedOn = function (e) {
                    return !0
                }, t.prototype.indexedValueChanged = function (e, t) {
                    return !e.equals(t)
                }, t.prototype.minPost = function () {
                    return me.MIN
                }, t.prototype.maxPost = function () {
                    return me.MAX
                }, t.prototype.makePost = function (e, t) {
                    var n = ze(e);
                    return new me(t, n)
                }, t.prototype.toString = function () {
                    return ".value"
                }, t
            }(Ce)),
            Xe = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.indexPath_ = t, u.assert(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), n
                }
                return a.__extends(t, e), t.prototype.extractChild = function (e) {
                    return e.getChild(this.indexPath_)
                }, t.prototype.isDefinedOn = function (e) {
                    return !e.getChild(this.indexPath_).isEmpty()
                }, t.prototype.compare = function (e, t) {
                    var n = this.extractChild(e.node),
                        r = this.extractChild(t.node),
                        i = n.compareTo(r);
                    return 0 === i ? O(e.name, t.name) : i
                }, t.prototype.makePost = function (e, t) {
                    var n = ze(e),
                        r = je.EMPTY_NODE.updateChild(this.indexPath_, n);
                    return new me(t, r)
                }, t.prototype.maxPost = function () {
                    var e = je.EMPTY_NODE.updateChild(this.indexPath_, He);
                    return new me(D, e)
                }, t.prototype.toString = function () {
                    return this.indexPath_.slice().join("/")
                }, t
            }(Ce),
            $e = function () {
                function e(e, t, n) {
                    this.node_ = e, this.ref_ = t, this.index_ = n
                }
                return e.prototype.val = function () {
                    return u.validateArgCount("DataSnapshot.val", 0, 0, arguments.length), this.node_.val()
                }, e.prototype.exportVal = function () {
                    return u.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0)
                }, e.prototype.toJSON = function () {
                    return u.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal()
                }, e.prototype.exists = function () {
                    return u.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty()
                }, e.prototype.child = function (t) {
                    u.validateArgCount("DataSnapshot.child", 0, 1, arguments.length), t = String(t), ce("DataSnapshot.child", 1, t, !1);
                    var n = new j(t),
                        r = this.ref_.child(n);
                    return new e(this.node_.getChild(n), r, Oe)
                }, e.prototype.hasChild = function (e) {
                    u.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length), ce("DataSnapshot.hasChild", 1, e, !1);
                    var t = new j(e);
                    return !this.node_.getChild(t).isEmpty()
                }, e.prototype.getPriority = function () {
                    return u.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val()
                }, e.prototype.forEach = function (t) {
                    var n = this;
                    if (u.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length), u.validateCallback("DataSnapshot.forEach", 1, t, !1), this.node_.isLeafNode()) return !1;
                    var r = this.node_;
                    return !!r.forEachChild(this.index_, function (r, i) {
                        return t(new e(i, n.ref_.child(r), Oe))
                    })
                }, e.prototype.hasChildren = function () {
                    return u.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty()
                }, Object.defineProperty(e.prototype, "key", {
                    get: function () {
                        return this.ref_.getKey()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.numChildren = function () {
                    return u.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren()
                }, e.prototype.getRef = function () {
                    return u.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length), this.ref_
                }, Object.defineProperty(e.prototype, "ref", {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            Je = function () {
                function e(e, t, n, r) {
                    this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
                }
                return e.prototype.getPath = function () {
                    var e = this.snapshot.getRef();
                    return "value" === this.eventType ? e.path : e.getParent().path
                }, e.prototype.getEventType = function () {
                    return this.eventType
                }, e.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }, e.prototype.toString = function () {
                    return this.getPath().toString() + ":" + this.eventType + ":" + u.stringify(this.snapshot.exportVal())
                }, e
            }(),
            Ze = function () {
                function e(e, t, n) {
                    this.eventRegistration = e, this.error = t, this.path = n
                }
                return e.prototype.getPath = function () {
                    return this.path
                }, e.prototype.getEventType = function () {
                    return "cancel"
                }, e.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }, e.prototype.toString = function () {
                    return this.path.toString() + ":cancel"
                }, e
            }(),
            et = function () {
                function e(e, t, n) {
                    this.callback_ = e, this.cancelCallback_ = t, this.context_ = n
                }
                return e.prototype.respondsTo = function (e) {
                    return "value" === e
                }, e.prototype.createEvent = function (e, t) {
                    var n = t.getQueryParams().getIndex();
                    return new Je("value", this, new $e(e.snapshotNode, t.getRef(), n))
                }, e.prototype.getEventRunner = function (e) {
                    var t = this.context_;
                    if ("cancel" === e.getEventType()) {
                        u.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                        var n = this.cancelCallback_;
                        return function () {
                            n.call(t, e.error)
                        }
                    }
                    var r = this.callback_;
                    return function () {
                        r.call(t, e.snapshot)
                    }
                }, e.prototype.createCancelEvent = function (e, t) {
                    return this.cancelCallback_ ? new Ze(this, e, t) : null
                }, e.prototype.matches = function (t) {
                    return t instanceof e && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_)
                }, e.prototype.hasAnyCallback = function () {
                    return null !== this.callback_
                }, e
            }(),
            tt = function () {
                function e(e, t, n) {
                    this.callbacks_ = e, this.cancelCallback_ = t, this.context_ = n
                }
                return e.prototype.respondsTo = function (e) {
                    var t = "children_added" === e ? "child_added" : e;
                    return t = "children_removed" === t ? "child_removed" : t, u.contains(this.callbacks_, t)
                }, e.prototype.createCancelEvent = function (e, t) {
                    return this.cancelCallback_ ? new Ze(this, e, t) : null
                }, e.prototype.createEvent = function (e, t) {
                    u.assert(null != e.childName, "Child events should have a childName.");
                    var n = t.getRef().child(e.childName),
                        r = t.getQueryParams().getIndex();
                    return new Je(e.type, this, new $e(e.snapshotNode, n, r), e.prevName)
                }, e.prototype.getEventRunner = function (e) {
                    var t = this.context_;
                    if ("cancel" === e.getEventType()) {
                        u.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                        var n = this.cancelCallback_;
                        return function () {
                            n.call(t, e.error)
                        }
                    }
                    var r = this.callbacks_[e.eventType];
                    return function () {
                        r.call(t, e.snapshot, e.prevName)
                    }
                }, e.prototype.matches = function (t) {
                    var n = this;
                    if (t instanceof e) {
                        if (!this.callbacks_ || !t.callbacks_) return !0;
                        if (this.context_ === t.context_) {
                            var r = Object.keys(t.callbacks_),
                                i = Object.keys(this.callbacks_),
                                o = r.length;
                            if (o === i.length) {
                                if (1 === o) {
                                    var s = r[0],
                                        a = i[0];
                                    return !(a !== s || t.callbacks_[s] && this.callbacks_[a] && t.callbacks_[s] !== this.callbacks_[a])
                                }
                                return i.every(function (e) {
                                    return t.callbacks_[e] === n.callbacks_[e]
                                })
                            }
                        }
                    }
                    return !1
                }, e.prototype.hasAnyCallback = function () {
                    return null !== this.callbacks_
                }, e
            }(),
            nt = function () {
                function e(e, t, n, r) {
                    this.repo = e, this.path = t, this.queryParams_ = n, this.orderByCalled_ = r
                }
                return Object.defineProperty(e, "__referenceConstructor", {
                    get: function () {
                        return u.assert(Ke, "Reference.ts has not been loaded"), Ke
                    },
                    set: function (e) {
                        Ke = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.validateQueryEndpoints_ = function (e) {
                    var t = null,
                        n = null;
                    if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === we) {
                        var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                            i = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                        if (e.hasStart()) {
                            if (e.getIndexStartName() != P) throw new Error(r);
                            if ("string" != typeof t) throw new Error(i)
                        }
                        if (e.hasEnd()) {
                            if (e.getIndexEndName() != D) throw new Error(r);
                            if ("string" != typeof n) throw new Error(i)
                        }
                    } else if (e.getIndex() === Oe) {
                        if (null != t && !ie(t) || null != n && !ie(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                    } else if (u.assert(e.getIndex() instanceof Xe || e.getIndex() === Ge, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
                }, e.validateLimit_ = function (e) {
                    if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
                }, e.prototype.validateNoPreviousOrderByCall_ = function (e) {
                    if (!0 === this.orderByCalled_) throw new Error(e + ": You can't combine multiple orderBy calls.")
                }, e.prototype.getQueryParams = function () {
                    return this.queryParams_
                }, e.prototype.getRef = function () {
                    return u.validateArgCount("Query.ref", 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path)
                }, e.prototype.on = function (t, n, r, i) {
                    u.validateArgCount("Query.on", 2, 4, arguments.length), he("Query.on", 1, t, !1), u.validateCallback("Query.on", 2, n, !1);
                    var o = e.getCancelAndContextArgs_("Query.on", r, i);
                    if ("value" === t) this.onValueEvent(n, o.cancel, o.context);
                    else {
                        var s = {};
                        s[t] = n, this.onChildEvent(s, o.cancel, o.context)
                    }
                    return n
                }, e.prototype.onValueEvent = function (e, t, n) {
                    var r = new et(e, t || null, n || null);
                    this.repo.addEventCallbackForQuery(this, r)
                }, e.prototype.onChildEvent = function (e, t, n) {
                    var r = new tt(e, t, n);
                    this.repo.addEventCallbackForQuery(this, r)
                }, e.prototype.off = function (e, t, n) {
                    u.validateArgCount("Query.off", 0, 3, arguments.length), he("Query.off", 1, e, !0), u.validateCallback("Query.off", 2, t, !0), u.validateContextObject("Query.off", 3, n, !0);
                    var r = null,
                        i = null;
                    if ("value" === e) {
                        var o = t || null;
                        r = new et(o, null, n || null)
                    } else e && (t && ((i = {})[e] = t), r = new tt(i, null, n || null));
                    this.repo.removeEventCallbackForQuery(this, r)
                }, e.prototype.once = function (t, n, r, i) {
                    var o = this;
                    u.validateArgCount("Query.once", 1, 4, arguments.length), he("Query.once", 1, t, !1), u.validateCallback("Query.once", 2, n, !0);
                    var s = e.getCancelAndContextArgs_("Query.once", r, i),
                        a = !0,
                        h = new u.Deferred;
                    h.promise.catch(function () {});
                    var l = function (e) {
                        a && (a = !1, o.off(t, l), n && n.bind(s.context)(e), h.resolve(e))
                    };
                    return this.on(t, l, function (e) {
                        o.off(t, l), s.cancel && s.cancel.bind(s.context)(e), h.reject(e)
                    }), h.promise
                }, e.prototype.limitToFirst = function (t) {
                    if (u.validateArgCount("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
                    if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                    return new e(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_)
                }, e.prototype.limitToLast = function (t) {
                    if (u.validateArgCount("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
                    if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                    return new e(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_)
                }, e.prototype.orderByChild = function (t) {
                    if (u.validateArgCount("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                    if ("$priority" === t) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                    if ("$value" === t) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                    ce("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild");
                    var n = new j(t);
                    if (n.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                    var r = new Xe(n),
                        i = this.queryParams_.orderBy(r);
                    return e.validateQueryEndpoints_(i), new e(this.repo, this.path, i, !0)
                }, e.prototype.orderByKey = function () {
                    u.validateArgCount("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey");
                    var t = this.queryParams_.orderBy(we);
                    return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
                }, e.prototype.orderByPriority = function () {
                    u.validateArgCount("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                    var t = this.queryParams_.orderBy(Oe);
                    return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
                }, e.prototype.orderByValue = function () {
                    u.validateArgCount("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue");
                    var t = this.queryParams_.orderBy(Ge);
                    return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0)
                }, e.prototype.startAt = function (t, n) {
                    void 0 === t && (t = null), u.validateArgCount("Query.startAt", 0, 2, arguments.length), oe("Query.startAt", 1, t, this.path, !0), le("Query.startAt", 2, n, !0);
                    var r = this.queryParams_.startAt(t, n);
                    if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                    return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.orderByCalled_)
                }, e.prototype.endAt = function (t, n) {
                    void 0 === t && (t = null), u.validateArgCount("Query.endAt", 0, 2, arguments.length), oe("Query.endAt", 1, t, this.path, !0), le("Query.endAt", 2, n, !0);
                    var r = this.queryParams_.endAt(t, n);
                    if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                    return new e(this.repo, this.path, r, this.orderByCalled_)
                }, e.prototype.equalTo = function (e, t) {
                    if (u.validateArgCount("Query.equalTo", 1, 2, arguments.length), oe("Query.equalTo", 1, e, this.path, !1), le("Query.equalTo", 2, t, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
                    if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                    return this.startAt(e, t).endAt(e, t)
                }, e.prototype.toString = function () {
                    return u.validateArgCount("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString()
                }, e.prototype.toJSON = function () {
                    return u.validateArgCount("Query.toJSON", 0, 1, arguments.length), this.toString()
                }, e.prototype.queryObject = function () {
                    return this.queryParams_.getQueryObject()
                }, e.prototype.queryIdentifier = function () {
                    var e = this.queryObject(),
                        t = k(e);
                    return "{}" === t ? "default" : t
                }, e.prototype.isEqual = function (t) {
                    if (u.validateArgCount("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) {
                        var n = "Query.isEqual failed: First argument must be an instance of firebase.database.Query.";
                        throw new Error(n)
                    }
                    var r = this.repo === t.repo,
                        i = this.path.equals(t.path),
                        o = this.queryIdentifier() === t.queryIdentifier();
                    return r && i && o
                }, e.getCancelAndContextArgs_ = function (e, t, n) {
                    var r = {
                        cancel: null,
                        context: null
                    };
                    if (t && n) r.cancel = t, u.validateCallback(e, 3, r.cancel, !0), r.context = n, u.validateContextObject(e, 4, r.context, !0);
                    else if (t)
                        if ("object" == typeof t && null !== t) r.context = t;
                        else {
                            if ("function" != typeof t) throw new Error(u.errorPrefix(e, 3, !0) + " must either be a cancel callback or a context object.");
                            r.cancel = t
                        } return r
                }, Object.defineProperty(e.prototype, "ref", {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            rt = function () {
                function e() {
                    this.value = null, this.children = new Map
                }
                return e.prototype.find = function (e) {
                    if (null != this.value) return this.value.getChild(e);
                    if (!e.isEmpty() && this.children.size > 0) {
                        var t = e.getFront();
                        return e = e.popFront(), this.children.has(t) ? this.children.get(t).find(e) : null
                    }
                    return null
                }, e.prototype.remember = function (t, n) {
                    if (t.isEmpty()) this.value = n, this.children.clear();
                    else if (null !== this.value) this.value = this.value.updateChild(t, n);
                    else {
                        var r = t.getFront();
                        this.children.has(r) || this.children.set(r, new e);
                        var i = this.children.get(r);
                        t = t.popFront(), i.remember(t, n)
                    }
                }, e.prototype.forget = function (e) {
                    if (e.isEmpty()) return this.value = null, this.children.clear(), !0;
                    if (null !== this.value) {
                        if (this.value.isLeafNode()) return !1;
                        var t = this.value;
                        this.value = null;
                        var n = this;
                        return t.forEachChild(Oe, function (e, t) {
                            n.remember(new j(e), t)
                        }), this.forget(e)
                    }
                    if (this.children.size > 0) {
                        var r = e.getFront();
                        if (e = e.popFront(), this.children.has(r)) this.children.get(r).forget(e) && this.children.delete(r);
                        return 0 === this.children.size
                    }
                    return !0
                }, e.prototype.forEachTree = function (e, t) {
                    null !== this.value ? t(e, this.value) : this.forEachChild(function (n, r) {
                        var i = new j(e.toString() + "/" + n);
                        r.forEachTree(i, t)
                    })
                }, e.prototype.forEachChild = function (e) {
                    this.children.forEach(function (t, n) {
                        e(n, t)
                    })
                }, e
            }(),
            it = function (e, t) {
                return e && "object" == typeof e ? (u.assert(".sv" in e, "Unexpected leaf node or priority contents"), t[e[".sv"]]) : e
            },
            ot = function (e, t) {
                var n, r = e.getPriority().val(),
                    i = it(r, t);
                if (e.isLeafNode()) {
                    var o = e,
                        s = it(o.getValue(), t);
                    return s !== o.getValue() || i !== o.getPriority().val() ? new Re(s, ze(i)) : e
                }
                var a = e;
                return n = a, i !== a.getPriority().val() && (n = n.updatePriority(new Re(i))), a.forEachChild(Oe, function (e, r) {
                    var i = ot(r, t);
                    i !== r && (n = n.updateImmediateChild(e, i))
                }), n
            };
        ! function (e) {
            e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
        }(Ye || (Ye = {}));
        var st, at, ut = function () {
                function e(e, t, n, r) {
                    this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = r, u.assert(!r || t, "Tagged queries must be from server.")
                }
                return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function (t) {
                    return new e(!1, !0, t, !0)
                }, e
            }(),
            ht = function () {
                function e(e, t, n) {
                    this.path = e, this.affectedTree = t, this.revert = n, this.type = Ye.ACK_USER_WRITE, this.source = ut.User
                }
                return e.prototype.operationForChild = function (t) {
                    if (this.path.isEmpty()) {
                        if (null != this.affectedTree.value) return u.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                        var n = this.affectedTree.subtree(new j(t));
                        return new e(j.Empty, n, this.revert)
                    }
                    return u.assert(this.path.getFront() === t, "operationForChild called for unrelated child."), new e(this.path.popFront(), this.affectedTree, this.revert)
                }, e
            }(),
            lt = function () {
                return st || (st = new Fe(A)), st
            },
            ct = function () {
                function e(e, t) {
                    void 0 === t && (t = lt()), this.value = e, this.children = t
                }
                return e.fromObject = function (t) {
                    var n = e.Empty;
                    return L(t, function (e, t) {
                        n = n.set(new j(e), t)
                    }), n
                }, e.prototype.isEmpty = function () {
                    return null === this.value && this.children.isEmpty()
                }, e.prototype.findRootMostMatchingPathAndValue = function (e, t) {
                    if (null != this.value && t(this.value)) return {
                        path: j.Empty,
                        value: this.value
                    };
                    if (e.isEmpty()) return null;
                    var n = e.getFront(),
                        r = this.children.get(n);
                    if (null !== r) {
                        var i = r.findRootMostMatchingPathAndValue(e.popFront(), t);
                        return null != i ? {
                            path: new j(n).child(i.path),
                            value: i.value
                        } : null
                    }
                    return null
                }, e.prototype.findRootMostValueAndPath = function (e) {
                    return this.findRootMostMatchingPathAndValue(e, function () {
                        return !0
                    })
                }, e.prototype.subtree = function (t) {
                    if (t.isEmpty()) return this;
                    var n = t.getFront(),
                        r = this.children.get(n);
                    return null !== r ? r.subtree(t.popFront()) : e.Empty
                }, e.prototype.set = function (t, n) {
                    if (t.isEmpty()) return new e(n, this.children);
                    var r = t.getFront(),
                        i = (this.children.get(r) || e.Empty).set(t.popFront(), n),
                        o = this.children.insert(r, i);
                    return new e(this.value, o)
                }, e.prototype.remove = function (t) {
                    if (t.isEmpty()) return this.children.isEmpty() ? e.Empty : new e(null, this.children);
                    var n = t.getFront(),
                        r = this.children.get(n);
                    if (r) {
                        var i = r.remove(t.popFront()),
                            o = void 0;
                        return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? e.Empty : new e(this.value, o)
                    }
                    return this
                }, e.prototype.get = function (e) {
                    if (e.isEmpty()) return this.value;
                    var t = e.getFront(),
                        n = this.children.get(t);
                    return n ? n.get(e.popFront()) : null
                }, e.prototype.setTree = function (t, n) {
                    if (t.isEmpty()) return n;
                    var r = t.getFront(),
                        i = (this.children.get(r) || e.Empty).setTree(t.popFront(), n),
                        o = void 0;
                    return o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i), new e(this.value, o)
                }, e.prototype.fold = function (e) {
                    return this.fold_(j.Empty, e)
                }, e.prototype.fold_ = function (e, t) {
                    var n = {};
                    return this.children.inorderTraversal(function (r, i) {
                        n[r] = i.fold_(e.child(r), t)
                    }), t(e, this.value, n)
                }, e.prototype.findOnPath = function (e, t) {
                    return this.findOnPath_(e, j.Empty, t)
                }, e.prototype.findOnPath_ = function (e, t, n) {
                    var r = !!this.value && n(t, this.value);
                    if (r) return r;
                    if (e.isEmpty()) return null;
                    var i = e.getFront(),
                        o = this.children.get(i);
                    return o ? o.findOnPath_(e.popFront(), t.child(i), n) : null
                }, e.prototype.foreachOnPath = function (e, t) {
                    return this.foreachOnPath_(e, j.Empty, t)
                }, e.prototype.foreachOnPath_ = function (t, n, r) {
                    if (t.isEmpty()) return this;
                    this.value && r(n, this.value);
                    var i = t.getFront(),
                        o = this.children.get(i);
                    return o ? o.foreachOnPath_(t.popFront(), n.child(i), r) : e.Empty
                }, e.prototype.foreach = function (e) {
                    this.foreach_(j.Empty, e)
                }, e.prototype.foreach_ = function (e, t) {
                    this.children.inorderTraversal(function (n, r) {
                        r.foreach_(e.child(n), t)
                    }), this.value && t(e, this.value)
                }, e.prototype.foreachChild = function (e) {
                    this.children.inorderTraversal(function (t, n) {
                        n.value && e(t, n.value)
                    })
                }, e.Empty = new e(null), e
            }(),
            pt = function () {
                function e(e, t) {
                    this.source = e, this.path = t, this.type = Ye.LISTEN_COMPLETE
                }
                return e.prototype.operationForChild = function (t) {
                    return this.path.isEmpty() ? new e(this.source, j.Empty) : new e(this.source, this.path.popFront())
                }, e
            }(),
            dt = function () {
                function e(e, t, n) {
                    this.source = e, this.path = t, this.snap = n, this.type = Ye.OVERWRITE
                }
                return e.prototype.operationForChild = function (t) {
                    return this.path.isEmpty() ? new e(this.source, j.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap)
                }, e
            }(),
            ft = function () {
                function e(e, t, n) {
                    this.source = e, this.path = t, this.children = n, this.type = Ye.MERGE
                }
                return e.prototype.operationForChild = function (t) {
                    if (this.path.isEmpty()) {
                        var n = this.children.subtree(new j(t));
                        return n.isEmpty() ? null : n.value ? new dt(this.source, j.Empty, n.value) : new e(this.source, j.Empty, n)
                    }
                    return u.assert(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, this.path.popFront(), this.children)
                }, e.prototype.toString = function () {
                    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                }, e
            }(),
            _t = function () {
                function e(e, t, n) {
                    this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
                }
                return e.prototype.isFullyInitialized = function () {
                    return this.fullyInitialized_
                }, e.prototype.isFiltered = function () {
                    return this.filtered_
                }, e.prototype.isCompleteForPath = function (e) {
                    if (e.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
                    var t = e.getFront();
                    return this.isCompleteForChild(t)
                }, e.prototype.isCompleteForChild = function (e) {
                    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
                }, e.prototype.getNode = function () {
                    return this.node_
                }, e
            }(),
            yt = function () {
                function e(e, t) {
                    this.eventCache_ = e, this.serverCache_ = t
                }
                return e.prototype.updateEventSnap = function (t, n, r) {
                    return new e(new _t(t, n, r), this.serverCache_)
                }, e.prototype.updateServerSnap = function (t, n, r) {
                    return new e(this.eventCache_, new _t(t, n, r))
                }, e.prototype.getEventCache = function () {
                    return this.eventCache_
                }, e.prototype.getCompleteEventSnap = function () {
                    return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null
                }, e.prototype.getServerCache = function () {
                    return this.serverCache_
                }, e.prototype.getCompleteServerSnap = function () {
                    return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null
                }, e.Empty = new e(new _t(je.EMPTY_NODE, !1, !1), new _t(je.EMPTY_NODE, !1, !1)), e
            }(),
            vt = function () {
                function e(e, t, n, r, i) {
                    this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i
                }
                return e.valueChange = function (t) {
                    return new e(e.VALUE, t)
                }, e.childAddedChange = function (t, n) {
                    return new e(e.CHILD_ADDED, n, t)
                }, e.childRemovedChange = function (t, n) {
                    return new e(e.CHILD_REMOVED, n, t)
                }, e.childChangedChange = function (t, n, r) {
                    return new e(e.CHILD_CHANGED, n, t, r)
                }, e.childMovedChange = function (t, n) {
                    return new e(e.CHILD_MOVED, n, t)
                }, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED = "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED = "child_moved", e.VALUE = "value", e
            }(),
            gt = function () {
                function e(e) {
                    this.index_ = e
                }
                return e.prototype.updateChild = function (e, t, n, r, i, o) {
                    u.assert(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                    var s = e.getImmediateChild(t);
                    return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() == n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(vt.childRemovedChange(t, s)) : u.assert(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : s.isEmpty() ? o.trackChildChange(vt.childAddedChange(t, n)) : o.trackChildChange(vt.childChangedChange(t, n, s))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
                }, e.prototype.updateFullNode = function (e, t, n) {
                    return null != n && (e.isLeafNode() || e.forEachChild(Oe, function (e, r) {
                        t.hasChild(e) || n.trackChildChange(vt.childRemovedChange(e, r))
                    }), t.isLeafNode() || t.forEachChild(Oe, function (t, r) {
                        if (e.hasChild(t)) {
                            var i = e.getImmediateChild(t);
                            i.equals(r) || n.trackChildChange(vt.childChangedChange(t, r, i))
                        } else n.trackChildChange(vt.childAddedChange(t, r))
                    })), t.withIndex(this.index_)
                }, e.prototype.updatePriority = function (e, t) {
                    return e.isEmpty() ? je.EMPTY_NODE : e.updatePriority(t)
                }, e.prototype.filtersNodes = function () {
                    return !1
                }, e.prototype.getIndexedFilter = function () {
                    return this
                }, e.prototype.getIndex = function () {
                    return this.index_
                }, e
            }(),
            mt = function () {
                function e() {
                    this.changeMap = new Map
                }
                return e.prototype.trackChildChange = function (e) {
                    var t = e.type,
                        n = e.childName;
                    u.assert(t == vt.CHILD_ADDED || t == vt.CHILD_CHANGED || t == vt.CHILD_REMOVED, "Only child changes supported for tracking"), u.assert(".priority" !== n, "Only non-priority child changes can be tracked.");
                    var r = this.changeMap.get(n);
                    if (r) {
                        var i = r.type;
                        if (t == vt.CHILD_ADDED && i == vt.CHILD_REMOVED) this.changeMap.set(n, vt.childChangedChange(n, e.snapshotNode, r.snapshotNode));
                        else if (t == vt.CHILD_REMOVED && i == vt.CHILD_ADDED) this.changeMap.delete(n);
                        else if (t == vt.CHILD_REMOVED && i == vt.CHILD_CHANGED) this.changeMap.set(n, vt.childRemovedChange(n, r.oldSnap));
                        else if (t == vt.CHILD_CHANGED && i == vt.CHILD_ADDED) this.changeMap.set(n, vt.childAddedChange(n, e.snapshotNode));
                        else {
                            if (t != vt.CHILD_CHANGED || i != vt.CHILD_CHANGED) throw u.assertionError("Illegal combination of changes: " + e + " occurred after " + r);
                            this.changeMap.set(n, vt.childChangedChange(n, e.snapshotNode, r.oldSnap))
                        }
                    } else this.changeMap.set(n, e)
                }, e.prototype.getChanges = function () {
                    return Array.from(this.changeMap.values())
                }, e
            }(),
            Ct = new(function () {
                function e() {}
                return e.prototype.getCompleteChild = function (e) {
                    return null
                }, e.prototype.getChildAfterChild = function (e, t, n) {
                    return null
                }, e
            }()),
            Et = function () {
                function e(e, t, n) {
                    void 0 === n && (n = null), this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
                }
                return e.prototype.getCompleteChild = function (e) {
                    var t = this.viewCache_.getEventCache();
                    if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
                    var n = null != this.optCompleteServerCache_ ? new _t(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
                    return this.writes_.calcCompleteChild(e, n)
                }, e.prototype.getChildAfterChild = function (e, t, n) {
                    var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
                        i = this.writes_.calcIndexedSlice(r, t, 1, n, e);
                    return 0 === i.length ? null : i[0]
                }, e
            }(),
            wt = function (e, t) {
                this.viewCache = e, this.changes = t
            },
            bt = function () {
                function e(e) {
                    this.filter_ = e
                }
                return e.prototype.assertIndexed = function (e) {
                    u.assert(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), u.assert(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed")
                }, e.prototype.applyOperation = function (t, n, r, i) {
                    var o, s, a = new mt;
                    if (n.type === Ye.OVERWRITE) {
                        var h = n;
                        h.source.fromUser ? o = this.applyUserOverwrite_(t, h.path, h.snap, r, i, a) : (u.assert(h.source.fromServer, "Unknown source."), s = h.source.tagged || t.getServerCache().isFiltered() && !h.path.isEmpty(), o = this.applyServerOverwrite_(t, h.path, h.snap, r, i, s, a))
                    } else if (n.type === Ye.MERGE) {
                        var l = n;
                        l.source.fromUser ? o = this.applyUserMerge_(t, l.path, l.children, r, i, a) : (u.assert(l.source.fromServer, "Unknown source."), s = l.source.tagged || t.getServerCache().isFiltered(), o = this.applyServerMerge_(t, l.path, l.children, r, i, s, a))
                    } else if (n.type === Ye.ACK_USER_WRITE) {
                        var c = n;
                        o = c.revert ? this.revertUserWrite_(t, c.path, r, i, a) : this.ackUserWrite_(t, c.path, c.affectedTree, r, i, a)
                    } else {
                        if (n.type !== Ye.LISTEN_COMPLETE) throw u.assertionError("Unknown operation type: " + n.type);
                        o = this.listenComplete_(t, n.path, r, a)
                    }
                    var p = a.getChanges();
                    return e.maybeAddValueEvent_(t, o, p), new wt(o, p)
                }, e.maybeAddValueEvent_ = function (e, t, n) {
                    var r = t.getEventCache();
                    if (r.isFullyInitialized()) {
                        var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                            o = e.getCompleteEventSnap();
                        (n.length > 0 || !e.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(vt.valueChange(t.getCompleteEventSnap()))
                    }
                }, e.prototype.generateEventCacheAfterServerEvent_ = function (e, t, n, r, i) {
                    var o = e.getEventCache();
                    if (null != n.shadowingWrite(t)) return e;
                    var s = void 0,
                        a = void 0;
                    if (t.isEmpty())
                        if (u.assert(e.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), e.getServerCache().isFiltered()) {
                            var h = e.getCompleteServerSnap(),
                                l = h instanceof je ? h : je.EMPTY_NODE,
                                c = n.calcCompleteEventChildren(l);
                            s = this.filter_.updateFullNode(e.getEventCache().getNode(), c, i)
                        } else {
                            var p = n.calcCompleteEventCache(e.getCompleteServerSnap());
                            s = this.filter_.updateFullNode(e.getEventCache().getNode(), p, i)
                        }
                    else {
                        var d = t.getFront();
                        if (".priority" == d) {
                            u.assert(1 == t.getLength(), "Can't have a priority with additional path components");
                            var f = o.getNode();
                            a = e.getServerCache().getNode();
                            var _ = n.calcEventCacheAfterServerOverwrite(t, f, a);
                            s = null != _ ? this.filter_.updatePriority(f, _) : o.getNode()
                        } else {
                            var y = t.popFront(),
                                v = void 0;
                            if (o.isCompleteForChild(d)) {
                                a = e.getServerCache().getNode();
                                var g = n.calcEventCacheAfterServerOverwrite(t, o.getNode(), a);
                                v = null != g ? o.getNode().getImmediateChild(d).updateChild(y, g) : o.getNode().getImmediateChild(d)
                            } else v = n.calcCompleteChild(d, e.getServerCache());
                            s = null != v ? this.filter_.updateChild(o.getNode(), d, v, y, r, i) : o.getNode()
                        }
                    }
                    return e.updateEventSnap(s, o.isFullyInitialized() || t.isEmpty(), this.filter_.filtersNodes())
                }, e.prototype.applyServerOverwrite_ = function (e, t, n, r, i, o, s) {
                    var a, u = e.getServerCache(),
                        h = o ? this.filter_ : this.filter_.getIndexedFilter();
                    if (t.isEmpty()) a = h.updateFullNode(u.getNode(), n, null);
                    else if (h.filtersNodes() && !u.isFiltered()) {
                        var l = u.getNode().updateChild(t, n);
                        a = h.updateFullNode(u.getNode(), l, null)
                    } else {
                        var c = t.getFront();
                        if (!u.isCompleteForPath(t) && t.getLength() > 1) return e;
                        var p = t.popFront(),
                            d = u.getNode().getImmediateChild(c).updateChild(p, n);
                        a = ".priority" == c ? h.updatePriority(u.getNode(), d) : h.updateChild(u.getNode(), c, d, p, Ct, null)
                    }
                    var f = e.updateServerSnap(a, u.isFullyInitialized() || t.isEmpty(), h.filtersNodes()),
                        _ = new Et(r, f, i);
                    return this.generateEventCacheAfterServerEvent_(f, t, r, _, s)
                }, e.prototype.applyUserOverwrite_ = function (e, t, n, r, i, o) {
                    var s, a, u = e.getEventCache(),
                        h = new Et(r, e, i);
                    if (t.isEmpty()) a = this.filter_.updateFullNode(e.getEventCache().getNode(), n, o), s = e.updateEventSnap(a, !0, this.filter_.filtersNodes());
                    else {
                        var l = t.getFront();
                        if (".priority" === l) a = this.filter_.updatePriority(e.getEventCache().getNode(), n), s = e.updateEventSnap(a, u.isFullyInitialized(), u.isFiltered());
                        else {
                            var c = t.popFront(),
                                p = u.getNode().getImmediateChild(l),
                                d = void 0;
                            if (c.isEmpty()) d = n;
                            else {
                                var f = h.getCompleteChild(l);
                                d = null != f ? ".priority" === c.getBack() && f.getChild(c.parent()).isEmpty() ? f : f.updateChild(c, n) : je.EMPTY_NODE
                            }
                            if (p.equals(d)) s = e;
                            else {
                                var _ = this.filter_.updateChild(u.getNode(), l, d, c, h, o);
                                s = e.updateEventSnap(_, u.isFullyInitialized(), this.filter_.filtersNodes())
                            }
                        }
                    }
                    return s
                }, e.cacheHasChild_ = function (e, t) {
                    return e.getEventCache().isCompleteForChild(t)
                }, e.prototype.applyUserMerge_ = function (t, n, r, i, o, s) {
                    var a = this,
                        u = t;
                    return r.foreach(function (r, h) {
                        var l = n.child(r);
                        e.cacheHasChild_(t, l.getFront()) && (u = a.applyUserOverwrite_(u, l, h, i, o, s))
                    }), r.foreach(function (r, h) {
                        var l = n.child(r);
                        e.cacheHasChild_(t, l.getFront()) || (u = a.applyUserOverwrite_(u, l, h, i, o, s))
                    }), u
                }, e.prototype.applyMerge_ = function (e, t) {
                    return t.foreach(function (t, n) {
                        e = e.updateChild(t, n)
                    }), e
                }, e.prototype.applyServerMerge_ = function (e, t, n, r, i, o, s) {
                    var a = this;
                    if (e.getServerCache().getNode().isEmpty() && !e.getServerCache().isFullyInitialized()) return e;
                    var u, h = e;
                    u = t.isEmpty() ? n : ct.Empty.setTree(t, n);
                    var l = e.getServerCache().getNode();
                    return u.children.inorderTraversal(function (t, n) {
                        if (l.hasChild(t)) {
                            var u = e.getServerCache().getNode().getImmediateChild(t),
                                c = a.applyMerge_(u, n);
                            h = a.applyServerOverwrite_(h, new j(t), c, r, i, o, s)
                        }
                    }), u.children.inorderTraversal(function (t, n) {
                        var u = !e.getServerCache().isCompleteForChild(t) && null == n.value;
                        if (!l.hasChild(t) && !u) {
                            var c = e.getServerCache().getNode().getImmediateChild(t),
                                p = a.applyMerge_(c, n);
                            h = a.applyServerOverwrite_(h, new j(t), p, r, i, o, s)
                        }
                    }), h
                }, e.prototype.ackUserWrite_ = function (e, t, n, r, i, o) {
                    if (null != r.shadowingWrite(t)) return e;
                    var s = e.getServerCache().isFiltered(),
                        a = e.getServerCache();
                    if (null != n.value) {
                        if (t.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(t)) return this.applyServerOverwrite_(e, t, a.getNode().getChild(t), r, i, s, o);
                        if (t.isEmpty()) {
                            var u = ct.Empty;
                            return a.getNode().forEachChild(we, function (e, t) {
                                u = u.set(new j(e), t)
                            }), this.applyServerMerge_(e, t, u, r, i, s, o)
                        }
                        return e
                    }
                    var h = ct.Empty;
                    return n.foreach(function (e, n) {
                        var r = t.child(e);
                        a.isCompleteForPath(r) && (h = h.set(e, a.getNode().getChild(r)))
                    }), this.applyServerMerge_(e, t, h, r, i, s, o)
                }, e.prototype.listenComplete_ = function (e, t, n, r) {
                    var i = e.getServerCache(),
                        o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() || t.isEmpty(), i.isFiltered());
                    return this.generateEventCacheAfterServerEvent_(o, t, n, Ct, r)
                }, e.prototype.revertUserWrite_ = function (e, t, n, r, i) {
                    var o;
                    if (null != n.shadowingWrite(t)) return e;
                    var s = new Et(n, e, r),
                        a = e.getEventCache().getNode(),
                        h = void 0;
                    if (t.isEmpty() || ".priority" === t.getFront()) {
                        var l = void 0;
                        if (e.getServerCache().isFullyInitialized()) l = n.calcCompleteEventCache(e.getCompleteServerSnap());
                        else {
                            var c = e.getServerCache().getNode();
                            u.assert(c instanceof je, "serverChildren would be complete if leaf node"), l = n.calcCompleteEventChildren(c)
                        }
                        l = l, h = this.filter_.updateFullNode(a, l, i)
                    } else {
                        var p = t.getFront(),
                            d = n.calcCompleteChild(p, e.getServerCache());
                        null == d && e.getServerCache().isCompleteForChild(p) && (d = a.getImmediateChild(p)), (h = null != d ? this.filter_.updateChild(a, p, d, t.popFront(), s, i) : e.getEventCache().getNode().hasChild(p) ? this.filter_.updateChild(a, p, je.EMPTY_NODE, t.popFront(), s, i) : a).isEmpty() && e.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(e.getCompleteServerSnap())).isLeafNode() && (h = this.filter_.updateFullNode(h, o, i))
                    }
                    return o = e.getServerCache().isFullyInitialized() || null != n.shadowingWrite(j.Empty), e.updateEventSnap(h, o, this.filter_.filtersNodes())
                }, e
            }(),
            St = function () {
                function e(e) {
                    this.query_ = e, this.index_ = this.query_.getQueryParams().getIndex()
                }
                return e.prototype.generateEventsForChanges = function (e, t, n) {
                    var r = this,
                        i = [],
                        o = [];
                    return e.forEach(function (e) {
                        e.type === vt.CHILD_CHANGED && r.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) && o.push(vt.childMovedChange(e.childName, e.snapshotNode))
                    }), this.generateEventsForType_(i, vt.CHILD_REMOVED, e, n, t), this.generateEventsForType_(i, vt.CHILD_ADDED, e, n, t), this.generateEventsForType_(i, vt.CHILD_MOVED, o, n, t), this.generateEventsForType_(i, vt.CHILD_CHANGED, e, n, t), this.generateEventsForType_(i, vt.VALUE, e, n, t), i
                }, e.prototype.generateEventsForType_ = function (e, t, n, r, i) {
                    var o = this,
                        s = n.filter(function (e) {
                            return e.type === t
                        });
                    s.sort(this.compareChanges_.bind(this)), s.forEach(function (t) {
                        var n = o.materializeSingleChange_(t, i);
                        r.forEach(function (r) {
                            r.respondsTo(t.type) && e.push(r.createEvent(n, o.query_))
                        })
                    })
                }, e.prototype.materializeSingleChange_ = function (e, t) {
                    return "value" === e.type || "child_removed" === e.type ? e : (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.index_), e)
                }, e.prototype.compareChanges_ = function (e, t) {
                    if (null == e.childName || null == t.childName) throw u.assertionError("Should only compare child_ events.");
                    var n = new me(e.childName, e.snapshotNode),
                        r = new me(t.childName, t.snapshotNode);
                    return this.index_.compare(n, r)
                }, e
            }(),
            Tt = function () {
                function e(e, t) {
                    this.query_ = e, this.eventRegistrations_ = [];
                    var n = this.query_.getQueryParams(),
                        r = new gt(n.getIndex()),
                        i = n.getNodeFilter();
                    this.processor_ = new bt(i);
                    var o = t.getServerCache(),
                        s = t.getEventCache(),
                        a = r.updateFullNode(je.EMPTY_NODE, o.getNode(), null),
                        u = i.updateFullNode(je.EMPTY_NODE, s.getNode(), null),
                        h = new _t(a, o.isFullyInitialized(), r.filtersNodes()),
                        l = new _t(u, s.isFullyInitialized(), i.filtersNodes());
                    this.viewCache_ = new yt(l, h), this.eventGenerator_ = new St(this.query_)
                }
                return e.prototype.getQuery = function () {
                    return this.query_
                }, e.prototype.getServerCache = function () {
                    return this.viewCache_.getServerCache().getNode()
                }, e.prototype.getCompleteServerCache = function (e) {
                    var t = this.viewCache_.getCompleteServerSnap();
                    return t && (this.query_.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null
                }, e.prototype.isEmpty = function () {
                    return 0 === this.eventRegistrations_.length
                }, e.prototype.addEventRegistration = function (e) {
                    this.eventRegistrations_.push(e)
                }, e.prototype.removeEventRegistration = function (e, t) {
                    var n = [];
                    if (t) {
                        u.assert(null == e, "A cancel should cancel all event registrations.");
                        var r = this.query_.path;
                        this.eventRegistrations_.forEach(function (e) {
                            t = t;
                            var i = e.createCancelEvent(t, r);
                            i && n.push(i)
                        })
                    }
                    if (e) {
                        for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                            var s = this.eventRegistrations_[o];
                            if (s.matches(e)) {
                                if (e.hasAnyCallback()) {
                                    i = i.concat(this.eventRegistrations_.slice(o + 1));
                                    break
                                }
                            } else i.push(s)
                        }
                        this.eventRegistrations_ = i
                    } else this.eventRegistrations_ = [];
                    return n
                }, e.prototype.applyOperation = function (e, t, n) {
                    e.type === Ye.MERGE && null !== e.source.queryId && (u.assert(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), u.assert(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                    var r = this.viewCache_,
                        i = this.processor_.applyOperation(r, e, t, n);
                    return this.processor_.assertIndexed(i.viewCache), u.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null)
                }, e.prototype.getInitialEvents = function (e) {
                    var t = this.viewCache_.getEventCache(),
                        n = [];
                    t.getNode().isLeafNode() || t.getNode().forEachChild(Oe, function (e, t) {
                        n.push(vt.childAddedChange(e, t))
                    });
                    return t.isFullyInitialized() && n.push(vt.valueChange(t.getNode())), this.generateEventsForChanges_(n, t.getNode(), e)
                }, e.prototype.generateEventsForChanges_ = function (e, t, n) {
                    var r = n ? [n] : this.eventRegistrations_;
                    return this.eventGenerator_.generateEventsForChanges(e, t, r)
                }, e
            }(),
            Nt = function () {
                function e() {
                    this.views = new Map
                }
                return Object.defineProperty(e, "__referenceConstructor", {
                    get: function () {
                        return u.assert(at, "Reference.ts has not been loaded"), at
                    },
                    set: function (e) {
                        u.assert(!at, "__referenceConstructor has already been defined"), at = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isEmpty = function () {
                    return 0 === this.views.size
                }, e.prototype.applyOperation = function (e, t, n) {
                    var r, i, o = e.source.queryId;
                    if (null !== o) {
                        var s = this.views.get(o);
                        return u.assert(null != s, "SyncTree gave us an op for an invalid query."), s.applyOperation(e, t, n)
                    }
                    var h = [];
                    try {
                        for (var l = a.__values(this.views.values()), c = l.next(); !c.done; c = l.next()) {
                            s = c.value;
                            h = h.concat(s.applyOperation(e, t, n))
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (i = l.return) && i.call(l)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return h
                }, e.prototype.addEventRegistration = function (e, t, n, r, i) {
                    var o = e.queryIdentifier(),
                        s = this.views.get(o);
                    if (!s) {
                        var a = n.calcCompleteEventCache(i ? r : null),
                            u = !1;
                        a ? u = !0 : r instanceof je ? (a = n.calcCompleteEventChildren(r), u = !1) : (a = je.EMPTY_NODE, u = !1);
                        var h = new yt(new _t(a, u, !1), new _t(r, i, !1));
                        s = new Tt(e, h), this.views.set(o, s)
                    }
                    return s.addEventRegistration(t), s.getInitialEvents(t)
                }, e.prototype.removeEventRegistration = function (t, n, r) {
                    var i, o, s = t.queryIdentifier(),
                        u = [],
                        h = [],
                        l = this.hasCompleteView();
                    if ("default" === s) try {
                        for (var c = a.__values(this.views.entries()), p = c.next(); !p.done; p = c.next()) {
                            var d = a.__read(p.value, 2),
                                f = d[0],
                                _ = d[1];
                            h = h.concat(_.removeEventRegistration(n, r)), _.isEmpty() && (this.views.delete(f), _.getQuery().getQueryParams().loadsAllData() || u.push(_.getQuery()))
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (o = c.return) && o.call(c)
                        } finally {
                            if (i) throw i.error
                        }
                    } else(_ = this.views.get(s)) && (h = h.concat(_.removeEventRegistration(n, r)), _.isEmpty() && (this.views.delete(s), _.getQuery().getQueryParams().loadsAllData() || u.push(_.getQuery())));
                    return l && !this.hasCompleteView() && u.push(new e.__referenceConstructor(t.repo, t.path)), {
                        removed: u,
                        events: h
                    }
                }, e.prototype.getQueryViews = function () {
                    var e, t, n = [];
                    try {
                        for (var r = a.__values(this.views.values()), i = r.next(); !i.done; i = r.next()) {
                            var o = i.value;
                            o.getQuery().getQueryParams().loadsAllData() || n.push(o)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }, e.prototype.getCompleteServerCache = function (e) {
                    var t, n, r = null;
                    try {
                        for (var i = a.__values(this.views.values()), o = i.next(); !o.done; o = i.next()) {
                            var s = o.value;
                            r = r || s.getCompleteServerCache(e)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return r
                }, e.prototype.viewForQuery = function (e) {
                    if (e.getQueryParams().loadsAllData()) return this.getCompleteView();
                    var t = e.queryIdentifier();
                    return this.views.get(t)
                }, e.prototype.viewExistsForQuery = function (e) {
                    return null != this.viewForQuery(e)
                }, e.prototype.hasCompleteView = function () {
                    return null != this.getCompleteView()
                }, e.prototype.getCompleteView = function () {
                    var e, t;
                    try {
                        for (var n = a.__values(this.views.values()), r = n.next(); !r.done; r = n.next()) {
                            var i = r.value;
                            if (i.getQuery().getQueryParams().loadsAllData()) return i
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = n.return) && t.call(n)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return null
                }, e
            }(),
            It = function () {
                function e(e) {
                    this.writeTree_ = e
                }
                return e.prototype.addWrite = function (t, n) {
                    if (t.isEmpty()) return new e(new ct(n));
                    var r = this.writeTree_.findRootMostValueAndPath(t);
                    if (null != r) {
                        var i = r.path,
                            o = r.value,
                            s = j.relativePath(i, t);
                        return o = o.updateChild(s, n), new e(this.writeTree_.set(i, o))
                    }
                    var a = new ct(n);
                    return new e(this.writeTree_.setTree(t, a))
                }, e.prototype.addWrites = function (e, t) {
                    var n = this;
                    return L(t, function (t, r) {
                        n = n.addWrite(e.child(t), r)
                    }), n
                }, e.prototype.removeWrite = function (t) {
                    return t.isEmpty() ? e.Empty : new e(this.writeTree_.setTree(t, ct.Empty))
                }, e.prototype.hasCompleteWrite = function (e) {
                    return null != this.getCompleteNode(e)
                }, e.prototype.getCompleteNode = function (e) {
                    var t = this.writeTree_.findRootMostValueAndPath(e);
                    return null != t ? this.writeTree_.get(t.path).getChild(j.relativePath(t.path, e)) : null
                }, e.prototype.getCompleteChildren = function () {
                    var e = [],
                        t = this.writeTree_.value;
                    return null != t ? t.isLeafNode() || t.forEachChild(Oe, function (t, n) {
                        e.push(new me(t, n))
                    }) : this.writeTree_.children.inorderTraversal(function (t, n) {
                        null != n.value && e.push(new me(t, n.value))
                    }), e
                }, e.prototype.childCompoundWrite = function (t) {
                    if (t.isEmpty()) return this;
                    var n = this.getCompleteNode(t);
                    return new e(null != n ? new ct(n) : this.writeTree_.subtree(t))
                }, e.prototype.isEmpty = function () {
                    return this.writeTree_.isEmpty()
                }, e.prototype.apply = function (e) {
                    return function e(t, n, r) {
                        if (null != n.value) return r.updateChild(t, n.value);
                        var i = null;
                        return n.children.inorderTraversal(function (n, o) {
                            ".priority" === n ? (u.assert(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = e(t.child(n), o, r)
                        }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child(".priority"), i)), r
                    }
                    /**
                     * @license
                     * Copyright 2017 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    (j.Empty, this.writeTree_, e)
                }, e.Empty = new e(new ct(null)), e
            }();
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var Rt = function () {
                function e() {
                    this.visibleWrites_ = It.Empty, this.allWrites_ = [], this.lastWriteId_ = -1
                }
                return e.prototype.childWrites = function (e) {
                    return new Pt(e, this)
                }, e.prototype.addOverwrite = function (e, t, n, r) {
                    u.assert(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({
                        path: e,
                        snap: t,
                        writeId: n,
                        visible: r
                    }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(e, t)), this.lastWriteId_ = n
                }, e.prototype.addMerge = function (e, t, n) {
                    u.assert(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({
                        path: e,
                        children: t,
                        writeId: n,
                        visible: !0
                    }), this.visibleWrites_ = this.visibleWrites_.addWrites(e, t), this.lastWriteId_ = n
                }, e.prototype.getWrite = function (e) {
                    for (var t = 0; t < this.allWrites_.length; t++) {
                        var n = this.allWrites_[t];
                        if (n.writeId === e) return n
                    }
                    return null
                }, e.prototype.removeWrite = function (e) {
                    var t = this,
                        n = this.allWrites_.findIndex(function (t) {
                            return t.writeId === e
                        });
                    u.assert(n >= 0, "removeWrite called with nonexistent writeId.");
                    var r = this.allWrites_[n];
                    this.allWrites_.splice(n, 1);
                    for (var i = r.visible, o = !1, s = this.allWrites_.length - 1; i && s >= 0;) {
                        var a = this.allWrites_[s];
                        a.visible && (s >= n && this.recordContainsPath_(a, r.path) ? i = !1 : r.path.contains(a.path) && (o = !0)), s--
                    }
                    if (i) {
                        if (o) return this.resetTree_(), !0;
                        r.snap ? this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path) : L(r.children, function (e) {
                            t.visibleWrites_ = t.visibleWrites_.removeWrite(r.path.child(e))
                        });
                        return !0
                    }
                    return !1
                }, e.prototype.getCompleteWriteData = function (e) {
                    return this.visibleWrites_.getCompleteNode(e)
                }, e.prototype.calcCompleteEventCache = function (t, n, r, i) {
                    if (r || i) {
                        var o = this.visibleWrites_.childCompoundWrite(t);
                        if (!i && o.isEmpty()) return n;
                        if (i || null != n || o.hasCompleteWrite(j.Empty)) {
                            var s = e.layerTree_(this.allWrites_, function (e) {
                                return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path))
                            }, t);
                            h = n || je.EMPTY_NODE;
                            return s.apply(h)
                        }
                        return null
                    }
                    var a = this.visibleWrites_.getCompleteNode(t);
                    if (null != a) return a;
                    var u = this.visibleWrites_.childCompoundWrite(t);
                    if (u.isEmpty()) return n;
                    if (null != n || u.hasCompleteWrite(j.Empty)) {
                        var h = n || je.EMPTY_NODE;
                        return u.apply(h)
                    }
                    return null
                }, e.prototype.calcCompleteEventChildren = function (e, t) {
                    var n = je.EMPTY_NODE,
                        r = this.visibleWrites_.getCompleteNode(e);
                    if (r) return r.isLeafNode() || r.forEachChild(Oe, function (e, t) {
                        n = n.updateImmediateChild(e, t)
                    }), n;
                    if (t) {
                        var i = this.visibleWrites_.childCompoundWrite(e);
                        return t.forEachChild(Oe, function (e, t) {
                            var r = i.childCompoundWrite(new j(e)).apply(t);
                            n = n.updateImmediateChild(e, r)
                        }), i.getCompleteChildren().forEach(function (e) {
                            n = n.updateImmediateChild(e.name, e.node)
                        }), n
                    }
                    return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren().forEach(function (e) {
                        n = n.updateImmediateChild(e.name, e.node)
                    }), n
                }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n, r) {
                    u.assert(n || r, "Either existingEventSnap or existingServerSnap must exist");
                    var i = e.child(t);
                    if (this.visibleWrites_.hasCompleteWrite(i)) return null;
                    var o = this.visibleWrites_.childCompoundWrite(i);
                    return o.isEmpty() ? r.getChild(t) : o.apply(r.getChild(t))
                }, e.prototype.calcCompleteChild = function (e, t, n) {
                    var r = e.child(t),
                        i = this.visibleWrites_.getCompleteNode(r);
                    return null != i ? i : n.isCompleteForChild(t) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)) : null
                }, e.prototype.shadowingWrite = function (e) {
                    return this.visibleWrites_.getCompleteNode(e)
                }, e.prototype.calcIndexedSlice = function (e, t, n, r, i, o) {
                    var s, a = this.visibleWrites_.childCompoundWrite(e),
                        u = a.getCompleteNode(j.Empty);
                    if (null != u) s = u;
                    else {
                        if (null == t) return [];
                        s = a.apply(t)
                    }
                    if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];
                    for (var h = [], l = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && h.length < r;) 0 !== l(p, n) && h.push(p), p = c.getNext();
                    return h
                }, e.prototype.recordContainsPath_ = function (e, t) {
                    if (e.snap) return e.path.contains(t);
                    for (var n in e.children)
                        if (e.children.hasOwnProperty(n) && e.path.child(n).contains(t)) return !0;
                    return !1
                }, e.prototype.resetTree_ = function () {
                    this.visibleWrites_ = e.layerTree_(this.allWrites_, e.DefaultFilter_, j.Empty), this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1
                }, e.DefaultFilter_ = function (e) {
                    return e.visible
                }, e.layerTree_ = function (e, t, n) {
                    for (var r = It.Empty, i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (t(o)) {
                            var s = o.path,
                                a = void 0;
                            if (o.snap) n.contains(s) ? (a = j.relativePath(n, s), r = r.addWrite(a, o.snap)) : s.contains(n) && (a = j.relativePath(s, n), r = r.addWrite(j.Empty, o.snap.getChild(a)));
                            else {
                                if (!o.children) throw u.assertionError("WriteRecord should have .snap or .children");
                                if (n.contains(s)) a = j.relativePath(n, s), r = r.addWrites(a, o.children);
                                else if (s.contains(n))
                                    if ((a = j.relativePath(s, n)).isEmpty()) r = r.addWrites(j.Empty, o.children);
                                    else {
                                        var h = u.safeGet(o.children, a.getFront());
                                        if (h) {
                                            var l = h.getChild(a.popFront());
                                            r = r.addWrite(j.Empty, l)
                                        }
                                    }
                            }
                        }
                    }
                    return r
                }, e
            }(),
            Pt = function () {
                function e(e, t) {
                    this.treePath_ = e, this.writeTree_ = t
                }
                return e.prototype.calcCompleteEventCache = function (e, t, n) {
                    return this.writeTree_.calcCompleteEventCache(this.treePath_, e, t, n)
                }, e.prototype.calcCompleteEventChildren = function (e) {
                    return this.writeTree_.calcCompleteEventChildren(this.treePath_, e)
                }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n) {
                    return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, e, t, n)
                }, e.prototype.shadowingWrite = function (e) {
                    return this.writeTree_.shadowingWrite(this.treePath_.child(e))
                }, e.prototype.calcIndexedSlice = function (e, t, n, r, i) {
                    return this.writeTree_.calcIndexedSlice(this.treePath_, e, t, n, r, i)
                }, e.prototype.calcCompleteChild = function (e, t) {
                    return this.writeTree_.calcCompleteChild(this.treePath_, e, t)
                }, e.prototype.child = function (t) {
                    return new e(this.treePath_.child(t), this.writeTree_)
                }, e
            }(),
            Dt = function () {
                function e(e) {
                    this.listenProvider_ = e, this.syncPointTree_ = ct.Empty, this.pendingWriteTree_ = new Rt, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                }
                return e.prototype.applyUserOverwrite = function (e, t, n, r) {
                    return this.pendingWriteTree_.addOverwrite(e, t, n, r), r ? this.applyOperationToSyncPoints_(new dt(ut.User, e, t)) : []
                }, e.prototype.applyUserMerge = function (e, t, n) {
                    this.pendingWriteTree_.addMerge(e, t, n);
                    var r = ct.fromObject(t);
                    return this.applyOperationToSyncPoints_(new ft(ut.User, e, r))
                }, e.prototype.ackUserWrite = function (e, t) {
                    void 0 === t && (t = !1);
                    var n = this.pendingWriteTree_.getWrite(e);
                    if (this.pendingWriteTree_.removeWrite(e)) {
                        var r = ct.Empty;
                        return null != n.snap ? r = r.set(j.Empty, !0) : L(n.children, function (e, t) {
                            r = r.set(new j(e), t)
                        }), this.applyOperationToSyncPoints_(new ht(n.path, r, t))
                    }
                    return []
                }, e.prototype.applyServerOverwrite = function (e, t) {
                    return this.applyOperationToSyncPoints_(new dt(ut.Server, e, t))
                }, e.prototype.applyServerMerge = function (e, t) {
                    var n = ct.fromObject(t);
                    return this.applyOperationToSyncPoints_(new ft(ut.Server, e, n))
                }, e.prototype.applyListenComplete = function (e) {
                    return this.applyOperationToSyncPoints_(new pt(ut.Server, e))
                }, e.prototype.applyTaggedQueryOverwrite = function (t, n, r) {
                    var i = this.queryKeyForTag_(r);
                    if (null != i) {
                        var o = e.parseQueryKey_(i),
                            s = o.path,
                            a = o.queryId,
                            u = j.relativePath(s, t),
                            h = new dt(ut.forServerTaggedQuery(a), u, n);
                        return this.applyTaggedOperation_(s, h)
                    }
                    return []
                }, e.prototype.applyTaggedQueryMerge = function (t, n, r) {
                    var i = this.queryKeyForTag_(r);
                    if (i) {
                        var o = e.parseQueryKey_(i),
                            s = o.path,
                            a = o.queryId,
                            u = j.relativePath(s, t),
                            h = ct.fromObject(n),
                            l = new ft(ut.forServerTaggedQuery(a), u, h);
                        return this.applyTaggedOperation_(s, l)
                    }
                    return []
                }, e.prototype.applyTaggedListenComplete = function (t, n) {
                    var r = this.queryKeyForTag_(n);
                    if (r) {
                        var i = e.parseQueryKey_(r),
                            o = i.path,
                            s = i.queryId,
                            a = j.relativePath(o, t),
                            u = new pt(ut.forServerTaggedQuery(s), a);
                        return this.applyTaggedOperation_(o, u)
                    }
                    return []
                }, e.prototype.addEventRegistration = function (t, n) {
                    var r = t.path,
                        i = null,
                        o = !1;
                    this.syncPointTree_.foreachOnPath(r, function (e, t) {
                        var n = j.relativePath(e, r);
                        i = i || t.getCompleteServerCache(n), o = o || t.hasCompleteView()
                    });
                    var s, a = this.syncPointTree_.get(r);
                    (a ? (o = o || a.hasCompleteView(), i = i || a.getCompleteServerCache(j.Empty)) : (a = new Nt, this.syncPointTree_ = this.syncPointTree_.set(r, a)), null != i) ? s = !0: (s = !1, i = je.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function (e, t) {
                        var n = t.getCompleteServerCache(j.Empty);
                        n && (i = i.updateImmediateChild(e, n))
                    }));
                    var h = a.viewExistsForQuery(t);
                    if (!h && !t.getQueryParams().loadsAllData()) {
                        var l = e.makeQueryKey_(t);
                        u.assert(!this.queryToTagMap.has(l), "View does not exist, but we have a tag");
                        var c = e.getNextQueryTag_();
                        this.queryToTagMap.set(l, c), this.tagToQueryMap.set(c, l)
                    }
                    var p = this.pendingWriteTree_.childWrites(r),
                        d = a.addEventRegistration(t, n, p, i, s);
                    if (!h && !o) {
                        var f = a.viewForQuery(t);
                        d = d.concat(this.setupListener_(t, f))
                    }
                    return d
                }, e.prototype.removeEventRegistration = function (t, n, r) {
                    var i = this,
                        o = t.path,
                        s = this.syncPointTree_.get(o),
                        a = [];
                    if (s && ("default" === t.queryIdentifier() || s.viewExistsForQuery(t))) {
                        var u = s.removeEventRegistration(t, n, r);
                        s.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
                        var h = u.removed;
                        a = u.events;
                        var l = -1 !== h.findIndex(function (e) {
                                return e.getQueryParams().loadsAllData()
                            }),
                            c = this.syncPointTree_.findOnPath(o, function (e, t) {
                                return t.hasCompleteView()
                            });
                        if (l && !c) {
                            var p = this.syncPointTree_.subtree(o);
                            if (!p.isEmpty())
                                for (var d = this.collectDistinctViewsForSubTree_(p), f = 0; f < d.length; ++f) {
                                    var _ = d[f],
                                        y = _.getQuery(),
                                        v = this.createListenerForView_(_);
                                    this.listenProvider_.startListening(e.queryForListening_(y), this.tagForQuery_(y), v.hashFn, v.onComplete)
                                }
                        }
                        if (!c && h.length > 0 && !r)
                            if (l) {
                                this.listenProvider_.stopListening(e.queryForListening_(t), null)
                            } else h.forEach(function (t) {
                                var n = i.queryToTagMap.get(e.makeQueryKey_(t));
                                i.listenProvider_.stopListening(e.queryForListening_(t), n)
                            });
                        this.removeTags_(h)
                    }
                    return a
                }, e.prototype.calcCompleteEventCache = function (e, t) {
                    var n = this.pendingWriteTree_,
                        r = this.syncPointTree_.findOnPath(e, function (t, n) {
                            var r = j.relativePath(t, e),
                                i = n.getCompleteServerCache(r);
                            if (i) return i
                        });
                    return n.calcCompleteEventCache(e, r, t, !0)
                }, e.prototype.collectDistinctViewsForSubTree_ = function (e) {
                    return e.fold(function (e, t, n) {
                        if (t && t.hasCompleteView()) return [t.getCompleteView()];
                        var r = [];
                        return t && (r = t.getQueryViews()), L(n, function (e, t) {
                            r = r.concat(t)
                        }), r
                    })
                }, e.prototype.removeTags_ = function (t) {
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if (!r.getQueryParams().loadsAllData()) {
                            var i = e.makeQueryKey_(r),
                                o = this.queryToTagMap.get(i);
                            this.queryToTagMap.delete(i), this.tagToQueryMap.delete(o)
                        }
                    }
                }, e.queryForListening_ = function (e) {
                    return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e
                }, e.prototype.setupListener_ = function (t, n) {
                    var r = t.path,
                        i = this.tagForQuery_(t),
                        o = this.createListenerForView_(n),
                        s = this.listenProvider_.startListening(e.queryForListening_(t), i, o.hashFn, o.onComplete),
                        a = this.syncPointTree_.subtree(r);
                    if (i) u.assert(!a.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                    else
                        for (var h = a.fold(function (e, t, n) {
                                if (!e.isEmpty() && t && t.hasCompleteView()) return [t.getCompleteView().getQuery()];
                                var r = [];
                                return t && (r = r.concat(t.getQueryViews().map(function (e) {
                                    return e.getQuery()
                                }))), L(n, function (e, t) {
                                    r = r.concat(t)
                                }), r
                            }), l = 0; l < h.length; ++l) {
                            var c = h[l];
                            this.listenProvider_.stopListening(e.queryForListening_(c), this.tagForQuery_(c))
                        }
                    return s
                }, e.prototype.createListenerForView_ = function (e) {
                    var t = this,
                        n = e.getQuery(),
                        r = this.tagForQuery_(n);
                    return {
                        hashFn: function () {
                            return (e.getServerCache() || je.EMPTY_NODE).hash()
                        },
                        onComplete: function (e) {
                            if ("ok" === e) return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path);
                            var i = function (e, t) {
                                var n = "Unknown Error";
                                "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? n = "Client doesn't have permission to access the desired data." : "unavailable" == e && (n = "The service is unavailable");
                                var r = new Error(e + " at " + t.path.toString() + ": " + n);
                                return r.code = e.toUpperCase(), r
                            }(e, n);
                            return t.removeEventRegistration(n, null, i)
                        }
                    }
                }, e.makeQueryKey_ = function (e) {
                    return e.path.toString() + "$" + e.queryIdentifier()
                }, e.parseQueryKey_ = function (e) {
                    var t = e.indexOf("$");
                    return u.assert(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                        queryId: e.substr(t + 1),
                        path: new j(e.substr(0, t))
                    }
                }, e.prototype.queryKeyForTag_ = function (e) {
                    return this.tagToQueryMap.get(e)
                }, e.prototype.tagForQuery_ = function (t) {
                    var n = e.makeQueryKey_(t);
                    return this.queryToTagMap.get(n)
                }, e.getNextQueryTag_ = function () {
                    return e.nextQueryTag_++
                }, e.prototype.applyTaggedOperation_ = function (e, t) {
                    var n = this.syncPointTree_.get(e);
                    u.assert(n, "Missing sync point for query tag that we're tracking");
                    var r = this.pendingWriteTree_.childWrites(e);
                    return n.applyOperation(t, r, null)
                }, e.prototype.applyOperationToSyncPoints_ = function (e) {
                    return this.applyOperationHelper_(e, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(j.Empty))
                }, e.prototype.applyOperationHelper_ = function (e, t, n, r) {
                    if (e.path.isEmpty()) return this.applyOperationDescendantsHelper_(e, t, n, r);
                    var i = t.get(j.Empty);
                    null == n && null != i && (n = i.getCompleteServerCache(j.Empty));
                    var o = [],
                        s = e.path.getFront(),
                        a = e.operationForChild(s),
                        u = t.children.get(s);
                    if (u && a) {
                        var h = n ? n.getImmediateChild(s) : null,
                            l = r.child(s);
                        o = o.concat(this.applyOperationHelper_(a, u, h, l))
                    }
                    return i && (o = o.concat(i.applyOperation(e, r, n))), o
                }, e.prototype.applyOperationDescendantsHelper_ = function (e, t, n, r) {
                    var i = this,
                        o = t.get(j.Empty);
                    null == n && null != o && (n = o.getCompleteServerCache(j.Empty));
                    var s = [];
                    return t.children.inorderTraversal(function (t, o) {
                        var a = n ? n.getImmediateChild(t) : null,
                            u = r.child(t),
                            h = e.operationForChild(t);
                        h && (s = s.concat(i.applyOperationDescendantsHelper_(h, o, a, u)))
                    }), o && (s = s.concat(o.applyOperation(e, r, n))), s
                }, e.nextQueryTag_ = 1, e
            }(),
            Ot = function () {
                function e() {
                    this.rootNode_ = je.EMPTY_NODE
                }
                return e.prototype.getNode = function (e) {
                    return this.rootNode_.getChild(e)
                }, e.prototype.updateSnapshot = function (e, t) {
                    this.rootNode_ = this.rootNode_.updateChild(e, t)
                }, e
            }(),
            At = function () {
                function e(e) {
                    this.app_ = e
                }
                return e.prototype.getToken = function (e) {
                    return this.app_.INTERNAL.getToken(e).then(null, function (e) {
                        return e && "auth/token-not-initialized" === e.code ? (b("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)
                    })
                }, e.prototype.addTokenChangeListener = function (e) {
                    this.app_.INTERNAL.addAuthTokenListener(e)
                }, e.prototype.removeTokenChangeListener = function (e) {
                    this.app_.INTERNAL.removeAuthTokenListener(e)
                }, e.prototype.notifyForInvalidToken = function () {
                    var e = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
                    "credential" in this.app_.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', I(e)
                }, e
            }(),
            xt = function (e) {
                this.accessToken = e
            },
            kt = function () {
                function e(e) {
                    this.app_ = e
                }
                return e.prototype.getToken = function (e) {
                    return Promise.resolve(new xt("owner"))
                }, e.prototype.addTokenChangeListener = function (e) {}, e.prototype.removeTokenChangeListener = function (e) {}, e.prototype.notifyForInvalidToken = function () {
                    I('Database emulator unexpectedly rejected fake "owner" credentials.')
                }, e
            }(),
            Ft = function () {
                function e() {
                    this.counters_ = {}
                }
                return e.prototype.incrementCounter = function (e, t) {
                    void 0 === t && (t = 1), u.contains(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
                }, e.prototype.get = function () {
                    return u.deepCopy(this.counters_)
                }, e
            }(),
            Lt = function () {
                function e() {}
                return e.getCollection = function (e) {
                    var t = e.toString();
                    return this.collections_[t] || (this.collections_[t] = new Ft), this.collections_[t]
                }, e.getOrCreateReporter = function (e, t) {
                    var n = e.toString();
                    return this.reporters_[n] || (this.reporters_[n] = t()), this.reporters_[n]
                }, e.collections_ = {}, e.reporters_ = {}, e
            }(),
            Mt = function () {
                function e(e) {
                    this.collection_ = e, this.last_ = null
                }
                return e.prototype.get = function () {
                    var e = this.collection_.get(),
                        t = a.__assign({}, e);
                    return this.last_ && L(this.last_, function (e, n) {
                        t[e] = t[e] - n
                    }), this.last_ = e, t
                }, e
            }(),
            Wt = 1e4,
            qt = 3e4,
            Qt = function () {
                function e(e, t) {
                    this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Mt(e);
                    var n = Wt + (qt - Wt) * Math.random();
                    V(this.reportStats_.bind(this), Math.floor(n))
                }
                return e.prototype.includeStat = function (e) {
                    this.statsToReport_[e] = !0
                }, e.prototype.reportStats_ = function () {
                    var e = this,
                        t = this.statsListener_.get(),
                        n = {},
                        r = !1;
                    L(t, function (t, i) {
                        i > 0 && u.contains(e.statsToReport_, t) && (n[t] = i, r = !0)
                    }), r && this.server_.reportStats(n), V(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
                }, e
            }(),
            Ut = function () {
                function e() {
                    this.eventLists_ = [], this.recursionDepth_ = 0
                }
                return e.prototype.queueEvents = function (e) {
                    for (var t = null, n = 0; n < e.length; n++) {
                        var r = e[n],
                            i = r.getPath();
                        null === t || i.equals(t.getPath()) || (this.eventLists_.push(t), t = null), null === t && (t = new Vt(i)), t.add(r)
                    }
                    t && this.eventLists_.push(t)
                }, e.prototype.raiseEventsAtPath = function (e, t) {
                    this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function (t) {
                        return t.equals(e)
                    })
                }, e.prototype.raiseEventsForChangedPath = function (e, t) {
                    this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function (t) {
                        return t.contains(e) || e.contains(t)
                    })
                }, e.prototype.raiseQueuedEventsMatchingPredicate_ = function (e) {
                    this.recursionDepth_++;
                    for (var t = !0, n = 0; n < this.eventLists_.length; n++) {
                        var r = this.eventLists_[n];
                        if (r) e(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : t = !1
                    }
                    t && (this.eventLists_ = []), this.recursionDepth_--
                }, e
            }(),
            Vt = function () {
                function e(e) {
                    this.path_ = e, this.events_ = []
                }
                return e.prototype.add = function (e) {
                    this.events_.push(e)
                }, e.prototype.raise = function () {
                    for (var e = 0; e < this.events_.length; e++) {
                        var t = this.events_[e];
                        if (null !== t) {
                            this.events_[e] = null;
                            var n = t.getEventRunner();
                            C && b("event: " + t.toString()), Q(n)
                        }
                    }
                }, e.prototype.getPath = function () {
                    return this.path_
                }, e
            }(),
            jt = function () {
                function e(e) {
                    this.allowedEvents_ = e, this.listeners_ = {}, u.assert(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
                }
                return e.prototype.trigger = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    if (Array.isArray(this.listeners_[e]))
                        for (var r = a.__spread(this.listeners_[e]), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, t)
                }, e.prototype.on = function (e, t, n) {
                    this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                        callback: t,
                        context: n
                    });
                    var r = this.getInitialEvent(e);
                    r && t.apply(n, r)
                }, e.prototype.off = function (e, t, n) {
                    this.validateEventType_(e);
                    for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
                        if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
                }, e.prototype.validateEventType_ = function (e) {
                    u.assert(this.allowedEvents_.find(function (t) {
                        return t === e
                    }), "Unknown event: " + e)
                }, e
            }(),
            Ht = function (e) {
                function t() {
                    var t, n, r = e.call(this, ["visible"]) || this;
                    return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange", t = "webkitHidden")), r.visible_ = !0, n && document.addEventListener(n, function () {
                        var e = !document[t];
                        e !== r.visible_ && (r.visible_ = e, r.trigger("visible", e))
                    }, !1), r
                }
                return a.__extends(t, e), t.getInstance = function () {
                    return new t
                }, t.prototype.getInitialEvent = function (e) {
                    return u.assert("visible" === e, "Unknown event type: " + e), [this.visible_]
                }, t
            }(jt),
            Bt = function (e) {
                function t() {
                    var t = e.call(this, ["online"]) || this;
                    return t.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || u.isMobileCordova() || (window.addEventListener("online", function () {
                        t.online_ || (t.online_ = !0, t.trigger("online", !0))
                    }, !1), window.addEventListener("offline", function () {
                        t.online_ && (t.online_ = !1, t.trigger("online", !1))
                    }, !1)), t
                }
                return a.__extends(t, e), t.getInstance = function () {
                    return new t
                }, t.prototype.getInitialEvent = function (e) {
                    return u.assert("online" === e, "Unknown event type: " + e), [this.online_]
                }, t.prototype.currentlyOnline = function () {
                    return this.online_
                }, t
            }(jt),
            zt = function () {
                function e(e) {
                    this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                }
                return e.prototype.closeAfter = function (e, t) {
                    this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                }, e.prototype.handleResponse = function (e, t) {
                    var n = this;
                    this.pendingResponses[e] = t;
                    for (var r = function () {
                            var e = i.pendingResponses[i.currentResponseNum];
                            delete i.pendingResponses[i.currentResponseNum];
                            for (var t = function (t) {
                                    e[t] && Q(function () {
                                        n.onMessage_(e[t])
                                    })
                                }, r = 0; r < e.length; ++r) t(r);
                            if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
                            i.currentResponseNum++
                        }, i = this; this.pendingResponses[this.currentResponseNum];) {
                        if ("break" === r()) break
                    }
                }, e
            }(),
            Kt = "pLPCommand",
            Yt = "pRTLPCB",
            Gt = function () {
                function e(e, t, n, r) {
                    this.connId = e, this.repoInfo = t, this.transportSessionId = n, this.lastSessionId = r, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = S(e), this.stats_ = Lt.getCollection(t), this.urlFn = function (e) {
                        return t.connectionURL(B, e)
                    }
                }
                return e.prototype.open = function (e, t) {
                    var n = this;
                    this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new zt(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function () {
                            n.log_("Timed out trying to connect."), n.onClosed_(), n.connectTimeoutTimer_ = null
                        }, Math.floor(3e4)),
                        function (e) {
                            if (u.isNodeSdk() || "complete" === document.readyState) e();
                            else {
                                var t = !1,
                                    n = function () {
                                        document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                                    };
                                document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                                    "complete" === document.readyState && n()
                                }), window.attachEvent("onload", n))
                            }
                        }(function () {
                            if (!n.isClosed_) {
                                n.scriptTagHolder = new Xt(function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = a.__read(e, 5),
                                        i = r[0],
                                        o = r[1],
                                        s = r[2];
                                    r[3], r[4];
                                    if (n.incrementIncomingBytes_(e), n.scriptTagHolder)
                                        if (n.connectTimeoutTimer_ && (clearTimeout(n.connectTimeoutTimer_), n.connectTimeoutTimer_ = null), n.everConnected_ = !0, "start" == i) n.id = o, n.password = s;
                                        else {
                                            if ("close" !== i) throw new Error("Unrecognized command received: " + i);
                                            o ? (n.scriptTagHolder.sendNewPolls = !1, n.myPacketOrderer.closeAfter(o, function () {
                                                n.onClosed_()
                                            })) : n.onClosed_()
                                        }
                                }, function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = a.__read(e, 2),
                                        i = r[0],
                                        o = r[1];
                                    n.incrementIncomingBytes_(e), n.myPacketOrderer.handleResponse(i, o)
                                }, function () {
                                    n.onClosed_()
                                }, n.urlFn);
                                var e = {
                                    start: "t"
                                };
                                e.ser = Math.floor(1e8 * Math.random()), n.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = n.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", n.transportSessionId && (e.s = n.transportSessionId), n.lastSessionId && (e.ls = n.lastSessionId), !u.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (e.r = "f");
                                var t = n.urlFn(e);
                                n.log_("Connecting via long-poll to " + t), n.scriptTagHolder.addTag(t, function () {})
                            }
                        })
                }, e.prototype.start = function () {
                    this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                }, e.forceAllow = function () {
                    e.forceAllow_ = !0
                }, e.forceDisallow = function () {
                    e.forceDisallow_ = !0
                }, e.isAvailable = function () {
                    return e.forceAllow_ || !e.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.UI) && !u.isNodeSdk()
                }, e.prototype.markConnectionHealthy = function () {}, e.prototype.shutdown_ = function () {
                    this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                }, e.prototype.onClosed_ = function () {
                    this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                }, e.prototype.close = function () {
                    this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                }, e.prototype.send = function (e) {
                    var t = u.stringify(e);
                    this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                    for (var n = u.base64Encode(t), r = F(n, 1840), i = 0; i < r.length; i++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[i]), this.curSegmentNum++
                }, e.prototype.addDisconnectPingFrame = function (e, t) {
                    if (!u.isNodeSdk()) {
                        this.myDisconnFrame = document.createElement("iframe");
                        var n = {
                            dframe: "t"
                        };
                        n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                    }
                }, e.prototype.incrementIncomingBytes_ = function (e) {
                    var t = u.stringify(e).length;
                    this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
                }, e
            }(),
            Xt = function () {
                function e(t, n, r, i) {
                    if (this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, u.isNodeSdk()) this.commandCB = t, this.onMessageCB = n;
                    else {
                        this.uniqueCallbackIdentifier = v(), window[Kt + this.uniqueCallbackIdentifier] = t, window[Yt + this.uniqueCallbackIdentifier] = n, this.myIFrame = e.createIFrame_();
                        var o = "";
                        if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) o = '<script>document.domain="' + document.domain + '";<\/script>';
                        var s = "<html><body>" + o + "</body></html>";
                        try {
                            this.myIFrame.doc.open(), this.myIFrame.doc.write(s), this.myIFrame.doc.close()
                        } catch (e) {
                            b("frame writing exception"), e.stack && b(e.stack), b(e)
                        }
                    }
                }
                return e.createIFrame_ = function () {
                    var e = document.createElement("iframe");
                    if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                    document.body.appendChild(e);
                    try {
                        e.contentWindow.document || b("No IE domain setting required")
                    } catch (n) {
                        var t = document.domain;
                        e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
                    }
                    return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
                }, e.prototype.close = function () {
                    var t = this;
                    if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function () {
                            null !== t.myIFrame && (document.body.removeChild(t.myIFrame), t.myIFrame = null)
                        }, Math.floor(0))), u.isNodeSdk() && this.myID) {
                        var n = {
                            disconn: "t"
                        };
                        n.id = this.myID, n.pw = this.myPW;
                        var r = this.urlFn(n);
                        e.nodeRestRequest(r)
                    }
                    var i = this.onDisconnect;
                    i && (this.onDisconnect = null, i())
                }, e.prototype.startLongPoll = function (e, t) {
                    for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
                }, e.prototype.newRequest_ = function () {
                    if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                        this.currentSerial++;
                        var e = {};
                        e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                        for (var t = this.urlFn(e), n = "", r = 0; this.pendingSegs.length > 0;) {
                            if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
                            var i = this.pendingSegs.shift();
                            n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d, r++
                        }
                        return t += n, this.addLongPollTag_(t, this.currentSerial), !0
                    }
                    return !1
                }, e.prototype.enqueueSegment = function (e, t, n) {
                    this.pendingSegs.push({
                        seg: e,
                        ts: t,
                        d: n
                    }), this.alive && this.newRequest_()
                }, e.prototype.addLongPollTag_ = function (e, t) {
                    var n = this;
                    this.outstandingRequests.add(t);
                    var r = function () {
                            n.outstandingRequests.delete(t), n.newRequest_()
                        },
                        i = setTimeout(r, Math.floor(25e3));
                    this.addTag(e, function () {
                        clearTimeout(i), r()
                    })
                }, e.prototype.addTag = function (e, t) {
                    var n = this;
                    u.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(function () {
                        try {
                            if (!n.sendNewPolls) return;
                            var r = n.myIFrame.doc.createElement("script");
                            r.type = "text/javascript", r.async = !0, r.src = e, r.onload = r.onreadystatechange = function () {
                                var e = r.readyState;
                                e && "loaded" !== e && "complete" !== e || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), t())
                            }, r.onerror = function () {
                                b("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close()
                            }, n.myIFrame.doc.body.appendChild(r)
                        } catch (e) {}
                    }, Math.floor(1))
                }, e
            }(),
            $t = "";
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var Jt = null;
        "undefined" != typeof MozWebSocket ? Jt = MozWebSocket : "undefined" != typeof WebSocket && (Jt = WebSocket);
        var Zt = function () {
                function e(t, n, r, i) {
                    this.connId = t, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = S(this.connId), this.stats_ = Lt.getCollection(n), this.connURL = e.connectionURL_(n, r, i)
                }
                return e.connectionURL_ = function (e, t, n) {
                    var r = {
                        v: "5"
                    };
                    return !u.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (r.r = "f"), t && (r.s = t), n && (r.ls = n), e.connectionURL("websocket", r)
                }, e.prototype.open = function (e, t) {
                    var n = this;
                    this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, d.set("previous_websocket_failure", !0);
                    try {
                        if (u.isNodeSdk()) {
                            var i = u.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
                                o = {
                                    headers: {
                                        "User-Agent": "Firebase/5/" + $t + "/" + r.platform + "/" + i
                                    }
                                },
                                s = r.env,
                                a = 0 == this.connURL.indexOf("wss://") ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;
                            a && (o.proxy = {
                                origin: a
                            }), this.mySock = new Jt(this.connURL, [], o)
                        } else this.mySock = new Jt(this.connURL)
                    } catch (e) {
                        this.log_("Error instantiating WebSocket.");
                        var h = e.message || e.data;
                        return h && this.log_(h), void this.onClosed_()
                    }
                    this.mySock.onopen = function () {
                        n.log_("Websocket connected."), n.everConnected_ = !0
                    }, this.mySock.onclose = function () {
                        n.log_("Websocket connection was disconnected."), n.mySock = null, n.onClosed_()
                    }, this.mySock.onmessage = function (e) {
                        n.handleIncomingFrame(e)
                    }, this.mySock.onerror = function (e) {
                        n.log_("WebSocket error.  Closing connection.");
                        var t = e.message || e.data;
                        t && n.log_(t), n.onClosed_()
                    }
                }, e.prototype.start = function () {}, e.forceDisallow = function () {
                    e.forceDisallow_ = !0
                }, e.isAvailable = function () {
                    var t = !1;
                    if ("undefined" != typeof navigator && navigator.userAgent) {
                        var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                        n && n.length > 1 && parseFloat(n[1]) < 4.4 && (t = !0)
                    }
                    return !t && null !== Jt && !e.forceDisallow_
                }, e.previouslyFailed = function () {
                    return d.isInMemoryStorage || !0 === d.get("previous_websocket_failure")
                }, e.prototype.markConnectionHealthy = function () {
                    d.remove("previous_websocket_failure")
                }, e.prototype.appendFrame_ = function (e) {
                    if (this.frames.push(e), this.frames.length == this.totalFrames) {
                        var t = this.frames.join("");
                        this.frames = null;
                        var n = u.jsonEval(t);
                        this.onMessage(n)
                    }
                }, e.prototype.handleNewFrameCount_ = function (e) {
                    this.totalFrames = e, this.frames = []
                }, e.prototype.extractFrameCount_ = function (e) {
                    if (u.assert(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
                        var t = Number(e);
                        if (!isNaN(t)) return this.handleNewFrameCount_(t), null
                    }
                    return this.handleNewFrameCount_(1), e
                }, e.prototype.handleIncomingFrame = function (e) {
                    if (null !== this.mySock) {
                        var t = e.data;
                        if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
                        else {
                            var n = this.extractFrameCount_(t);
                            null !== n && this.appendFrame_(n)
                        }
                    }
                }, e.prototype.send = function (e) {
                    this.resetKeepAlive();
                    var t = u.stringify(e);
                    this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                    var n = F(t, 16384);
                    n.length > 1 && this.sendString_(String(n.length));
                    for (var r = 0; r < n.length; r++) this.sendString_(n[r])
                }, e.prototype.shutdown_ = function () {
                    this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                }, e.prototype.onClosed_ = function () {
                    this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                }, e.prototype.close = function () {
                    this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                }, e.prototype.resetKeepAlive = function () {
                    var e = this;
                    clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function () {
                        e.mySock && e.sendString_("0"), e.resetKeepAlive()
                    }, Math.floor(45e3))
                }, e.prototype.sendString_ = function (e) {
                    try {
                        this.mySock.send(e)
                    } catch (e) {
                        this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                    }
                }, e.responsesRequiredToBeHealthy = 2, e.healthyTimeout = 3e4, e
            }(),
            en = function () {
                function e(e) {
                    this.initTransports_(e)
                }
                return Object.defineProperty(e, "ALL_TRANSPORTS", {
                    get: function () {
                        return [Gt, Zt]
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.initTransports_ = function (t) {
                    var n, r, i = Zt && Zt.isAvailable(),
                        o = i && !Zt.previouslyFailed();
                    if (t.webSocketOnly && (i || I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), o = !0), o) this.transports_ = [Zt];
                    else {
                        var s = this.transports_ = [];
                        try {
                            for (var u = a.__values(e.ALL_TRANSPORTS), h = u.next(); !h.done; h = u.next()) {
                                var l = h.value;
                                l && l.isAvailable() && s.push(l)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                h && !h.done && (r = u.return) && r.call(u)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                }, e.prototype.initialTransport = function () {
                    if (this.transports_.length > 0) return this.transports_[0];
                    throw new Error("No transports available")
                }, e.prototype.upgradeTransport = function () {
                    return this.transports_.length > 1 ? this.transports_[1] : null
                }, e
            }(),
            tn = function () {
                function e(e, t, n, r, i, o, s) {
                    this.id = e, this.repoInfo_ = t, this.onMessage_ = n, this.onReady_ = r, this.onDisconnect_ = i, this.onKill_ = o, this.lastSessionId = s, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = S("c:" + this.id + ":"), this.transportManager_ = new en(t), this.log_("Connection created"), this.start_()
                }
                return e.prototype.start_ = function () {
                    var e = this,
                        t = this.transportManager_.initialTransport();
                    this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                    var n = this.connReceiver_(this.conn_),
                        r = this.disconnReceiver_(this.conn_);
                    this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function () {
                        e.conn_ && e.conn_.open(n, r)
                    }, Math.floor(0));
                    var i = t.healthyTimeout || 0;
                    i > 0 && (this.healthyTimeout_ = V(function () {
                        e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && e.conn_.bytesReceived > 102400 ? (e.log_("Connection exceeded healthy timeout but has received " + e.conn_.bytesReceived + " bytes.  Marking connection healthy."), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && e.conn_.bytesSent > 10240 ? e.log_("Connection exceeded healthy timeout but has sent " + e.conn_.bytesSent + " bytes.  Leaving connection alive.") : (e.log_("Closing unhealthy connection after timeout."), e.close()))
                    }, Math.floor(i)))
                }, e.prototype.nextTransportId_ = function () {
                    return "c:" + this.id + ":" + this.connectionCount++
                }, e.prototype.disconnReceiver_ = function (e) {
                    var t = this;
                    return function (n) {
                        e === t.conn_ ? t.onConnectionLost_(n) : e === t.secondaryConn_ ? (t.log_("Secondary connection lost."), t.onSecondaryConnectionLost_()) : t.log_("closing an old connection")
                    }
                }, e.prototype.connReceiver_ = function (e) {
                    var t = this;
                    return function (n) {
                        2 != t.state_ && (e === t.rx_ ? t.onPrimaryMessageReceived_(n) : e === t.secondaryConn_ ? t.onSecondaryMessageReceived_(n) : t.log_("message on old connection"))
                    }
                }, e.prototype.sendRequest = function (e) {
                    var t = {
                        t: "d",
                        d: e
                    };
                    this.sendData_(t)
                }, e.prototype.tryCleanupConnection = function () {
                    this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                }, e.prototype.onSecondaryControl_ = function (e) {
                    if ("t" in e) {
                        var t = e.t;
                        "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                    }
                }, e.prototype.onSecondaryMessageReceived_ = function (e) {
                    var t = x("t", e),
                        n = x("d", e);
                    if ("c" == t) this.onSecondaryControl_(n);
                    else {
                        if ("d" != t) throw new Error("Unknown protocol layer: " + t);
                        this.pendingDataMessages.push(n)
                    }
                }, e.prototype.upgradeIfSecondaryHealthy_ = function () {
                    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                        t: "c",
                        d: {
                            t: "p",
                            d: {}
                        }
                    }))
                }, e.prototype.proceedWithUpgrade_ = function () {
                    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                        t: "c",
                        d: {
                            t: "a",
                            d: {}
                        }
                    }), this.log_("Ending transmission on primary"), this.conn_.send({
                        t: "c",
                        d: {
                            t: "n",
                            d: {}
                        }
                    }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                }, e.prototype.onPrimaryMessageReceived_ = function (e) {
                    var t = x("t", e),
                        n = x("d", e);
                    "c" == t ? this.onControl_(n) : "d" == t && this.onDataMessage_(n)
                }, e.prototype.onDataMessage_ = function (e) {
                    this.onPrimaryResponse_(), this.onMessage_(e)
                }, e.prototype.onPrimaryResponse_ = function () {
                    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                }, e.prototype.onControl_ = function (e) {
                    var t = x("t", e);
                    if ("d" in e) {
                        var n = e.d;
                        if ("h" === t) this.onHandshake_(n);
                        else if ("n" === t) {
                            this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                            for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);
                            this.pendingDataMessages = [], this.tryCleanupConnection()
                        } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? T("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : T("Unknown control packet command: " + t)
                    }
                }, e.prototype.onHandshake_ = function (e) {
                    var t = e.ts,
                        n = e.v,
                        r = e.h;
                    this.sessionId = e.s, this.repoInfo_.updateHost(r), 0 == this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && I("Protocol version mismatch detected"), this.tryStartUpgrade_())
                }, e.prototype.tryStartUpgrade_ = function () {
                    var e = this.transportManager_.upgradeTransport();
                    e && this.startUpgrade_(e)
                }, e.prototype.startUpgrade_ = function (e) {
                    var t = this;
                    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                    var n = this.connReceiver_(this.secondaryConn_),
                        r = this.disconnReceiver_(this.secondaryConn_);
                    this.secondaryConn_.open(n, r), V(function () {
                        t.secondaryConn_ && (t.log_("Timed out trying to upgrade."), t.secondaryConn_.close())
                    }, Math.floor(6e4))
                }, e.prototype.onReset_ = function (e) {
                    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.updateHost(e), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                }, e.prototype.onConnectionEstablished_ = function (e, t) {
                    var n = this;
                    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : V(function () {
                        n.sendPingOnPrimaryIfNecessary_()
                    }, Math.floor(5e3))
                }, e.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                    this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                        t: "c",
                        d: {
                            t: "p",
                            d: {}
                        }
                    }))
                }, e.prototype.onSecondaryConnectionLost_ = function () {
                    var e = this.secondaryConn_;
                    this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
                }, e.prototype.onConnectionLost_ = function (e) {
                    this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (d.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                }, e.prototype.onConnectionShutdown_ = function (e) {
                    this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                }, e.prototype.sendData_ = function (e) {
                    if (1 !== this.state_) throw "Connection is not connected";
                    this.tx_.send(e)
                }, e.prototype.close = function () {
                    2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                }, e.prototype.closeConnections_ = function () {
                    this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                }, e
            }(),
            nn = function () {
                function e() {}
                return e.prototype.put = function (e, t, n, r) {}, e.prototype.merge = function (e, t, n, r) {}, e.prototype.refreshAuthToken = function (e) {}, e.prototype.onDisconnectPut = function (e, t, n) {}, e.prototype.onDisconnectMerge = function (e, t, n) {}, e.prototype.onDisconnectCancel = function (e, t) {}, e.prototype.reportStats = function (e) {}, e
            }(),
            rn = 1e3,
            on = 3e5,
            sn = function (e) {
                function t(n, r, i, o, s, a) {
                    var h = e.call(this) || this;
                    if (h.repoInfo_ = n, h.onDataUpdate_ = r, h.onConnectStatus_ = i, h.onServerInfoUpdate_ = o, h.authTokenProvider_ = s, h.authOverride_ = a, h.id = t.nextPersistentConnectionId_++, h.log_ = S("p:" + h.id + ":"), h.interruptReasons_ = {}, h.listens = new Map, h.outstandingPuts_ = [], h.outstandingPutCount_ = 0, h.onDisconnectRequestQueue_ = [], h.connected_ = !1, h.reconnectDelay_ = rn, h.maxReconnectDelay_ = on, h.securityDebugCallback_ = null, h.lastSessionId = null, h.establishConnectionTimer_ = null, h.visible_ = !1, h.requestCBHash_ = {}, h.requestNumber_ = 0, h.realtime_ = null, h.authToken_ = null, h.forceTokenRefresh_ = !1, h.invalidAuthTokenCount_ = 0, h.firstConnection_ = !0, h.lastConnectionAttemptTime_ = null, h.lastConnectionEstablishedTime_ = null, a && !u.isNodeSdk()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                    return h.scheduleConnect_(0), Ht.getInstance().on("visible", h.onVisible_, h), -1 === n.host.indexOf("fblocal") && Bt.getInstance().on("online", h.onOnline_, h), h
                }
                return a.__extends(t, e), t.prototype.sendRequest = function (e, t, n) {
                    var r = ++this.requestNumber_,
                        i = {
                            r: r,
                            a: e,
                            b: t
                        };
                    this.log_(u.stringify(i)), u.assert(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n)
                }, t.prototype.listen = function (e, t, n, r) {
                    var i = e.queryIdentifier(),
                        o = e.path.toString();
                    this.log_("Listen called for " + o + " " + i), this.listens.has(o) || this.listens.set(o, new Map), u.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), u.assert(!this.listens.get(o).has(i), "listen() called twice for same path/queryId.");
                    var s = {
                        onComplete: r,
                        hashFn: t,
                        query: e,
                        tag: n
                    };
                    this.listens.get(o).set(i, s), this.connected_ && this.sendListen_(s)
                }, t.prototype.sendListen_ = function (e) {
                    var n = this,
                        r = e.query,
                        i = r.path.toString(),
                        o = r.queryIdentifier();
                    this.log_("Listen on " + i + " for " + o);
                    var s = {
                        p: i
                    };
                    e.tag && (s.q = r.queryObject(), s.t = e.tag), s.h = e.hashFn(), this.sendRequest("q", s, function (s) {
                        var a = s.d,
                            u = s.s;
                        t.warnOnListenWarnings_(a, r), (n.listens.get(i) && n.listens.get(i).get(o)) === e && (n.log_("listen response", s), "ok" !== u && n.removeListen_(i, o), e.onComplete && e.onComplete(u, a))
                    })
                }, t.warnOnListenWarnings_ = function (e, t) {
                    if (e && "object" == typeof e && u.contains(e, "w")) {
                        var n = u.safeGet(e, "w");
                        if (Array.isArray(n) && ~n.indexOf("no_index")) {
                            var r = '".indexOn": "' + t.getQueryParams().getIndex().toString() + '"',
                                i = t.path.toString();
                            I("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.")
                        }
                    }
                }, t.prototype.refreshAuthToken = function (e) {
                    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function () {}), this.reduceReconnectDelayIfAdminCredential_(e)
                }, t.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
                    (e && 40 === e.length || u.isAdmin(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                }, t.prototype.tryAuth = function () {
                    var e = this;
                    if (this.connected_ && this.authToken_) {
                        var t = this.authToken_,
                            n = u.isValidFormat(t) ? "auth" : "gauth",
                            r = {
                                cred: t
                            };
                        null === this.authOverride_ ? r.noauth = !0 : "object" == typeof this.authOverride_ && (r.authvar = this.authOverride_), this.sendRequest(n, r, function (n) {
                            var r = n.s,
                                i = n.d || "error";
                            e.authToken_ === t && ("ok" === r ? e.invalidAuthTokenCount_ = 0 : e.onAuthRevoked_(r, i))
                        })
                    }
                }, t.prototype.unlisten = function (e, t) {
                    var n = e.path.toString(),
                        r = e.queryIdentifier();
                    this.log_("Unlisten called for " + n + " " + r), u.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e.queryObject(), t)
                }, t.prototype.sendUnlisten_ = function (e, t, n, r) {
                    this.log_("Unlisten on " + e + " for " + t);
                    var i = {
                        p: e
                    };
                    r && (i.q = n, i.t = r), this.sendRequest("n", i)
                }, t.prototype.onDisconnectPut = function (e, t, n) {
                    this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "o",
                        data: t,
                        onComplete: n
                    })
                }, t.prototype.onDisconnectMerge = function (e, t, n) {
                    this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "om",
                        data: t,
                        onComplete: n
                    })
                }, t.prototype.onDisconnectCancel = function (e, t) {
                    this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "oc",
                        data: null,
                        onComplete: t
                    })
                }, t.prototype.sendOnDisconnect_ = function (e, t, n, r) {
                    var i = {
                        p: t,
                        d: n
                    };
                    this.log_("onDisconnect " + e, i), this.sendRequest(e, i, function (e) {
                        r && setTimeout(function () {
                            r(e.s, e.d)
                        }, Math.floor(0))
                    })
                }, t.prototype.put = function (e, t, n, r) {
                    this.putInternal("p", e, t, n, r)
                }, t.prototype.merge = function (e, t, n, r) {
                    this.putInternal("m", e, t, n, r)
                }, t.prototype.putInternal = function (e, t, n, r, i) {
                    var o = {
                        p: t,
                        d: n
                    };
                    void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                        action: e,
                        request: o,
                        onComplete: r
                    }), this.outstandingPutCount_++;
                    var s = this.outstandingPuts_.length - 1;
                    this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + t)
                }, t.prototype.sendPut_ = function (e) {
                    var t = this,
                        n = this.outstandingPuts_[e].action,
                        r = this.outstandingPuts_[e].request,
                        i = this.outstandingPuts_[e].onComplete;
                    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, r, function (r) {
                        t.log_(n + " response", r), delete t.outstandingPuts_[e], t.outstandingPutCount_--, 0 === t.outstandingPutCount_ && (t.outstandingPuts_ = []), i && i(r.s, r.d)
                    })
                }, t.prototype.reportStats = function (e) {
                    var t = this;
                    if (this.connected_) {
                        var n = {
                            c: e
                        };
                        this.log_("reportStats", n), this.sendRequest("s", n, function (e) {
                            if ("ok" !== e.s) {
                                var n = e.d;
                                t.log_("reportStats", "Error sending stats: " + n)
                            }
                        })
                    }
                }, t.prototype.onDataMessage_ = function (e) {
                    if ("r" in e) {
                        this.log_("from server: " + u.stringify(e));
                        var t = e.r,
                            n = this.requestCBHash_[t];
                        n && (delete this.requestCBHash_[t], n(e.b))
                    } else {
                        if ("error" in e) throw "A server-side error has occurred: " + e.error;
                        "a" in e && this.onDataPush_(e.a, e.b)
                    }
                }, t.prototype.onDataPush_ = function (e, t) {
                    this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : T("Unrecognized action received from server: " + u.stringify(e) + "\nAre you using the latest client?")
                }, t.prototype.onReady_ = function (e, t) {
                    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                }, t.prototype.scheduleConnect_ = function (e) {
                    var t = this;
                    u.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function () {
                        t.establishConnectionTimer_ = null, t.establishConnection_()
                    }, Math.floor(e))
                }, t.prototype.onVisible_ = function (e) {
                    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = rn, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                }, t.prototype.onOnline_ = function (e) {
                    e ? (this.log_("Browser went online."), this.reconnectDelay_ = rn, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                }, t.prototype.onRealtimeDisconnect_ = function () {
                    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                        if (this.visible_) {
                            if (this.lastConnectionEstablishedTime_) {
                                (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = rn), this.lastConnectionEstablishedTime_ = null
                            }
                        } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                        var e = (new Date).getTime() - this.lastConnectionAttemptTime_,
                            t = Math.max(0, this.reconnectDelay_ - e);
                        t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                    }
                    this.onConnectStatus_(!1)
                }, t.prototype.establishConnection_ = function () {
                    if (this.shouldReconnect_()) {
                        this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                        var e = this.onDataMessage_.bind(this),
                            n = this.onReady_.bind(this),
                            r = this.onRealtimeDisconnect_.bind(this),
                            i = this.id + ":" + t.nextConnectionId_++,
                            o = this,
                            s = this.lastSessionId,
                            a = !1,
                            h = null,
                            l = function () {
                                h ? h.close() : (a = !0, r())
                            };
                        this.realtime_ = {
                            close: l,
                            sendRequest: function (e) {
                                u.assert(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e)
                            }
                        };
                        var c = this.forceTokenRefresh_;
                        this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(c).then(function (t) {
                            a ? b("getToken() completed but was canceled") : (b("getToken() completed. Creating connection."), o.authToken_ = t && t.accessToken, h = new tn(i, o.repoInfo_, e, n, r, function (e) {
                                I(e + " (" + o.repoInfo_.toString() + ")"), o.interrupt("server_kill")
                            }, s))
                        }).then(null, function (e) {
                            o.log_("Failed to get token: " + e), a || (u.CONSTANTS.NODE_ADMIN && I(e), l())
                        })
                    }
                }, t.prototype.interrupt = function (e) {
                    b("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                }, t.prototype.resume = function (e) {
                    b("Resuming connection for reason: " + e), delete this.interruptReasons_[e], u.isEmpty(this.interruptReasons_) && (this.reconnectDelay_ = rn, this.realtime_ || this.scheduleConnect_(0))
                }, t.prototype.handleTimestamp_ = function (e) {
                    var t = e - (new Date).getTime();
                    this.onServerInfoUpdate_({
                        serverTimeOffset: t
                    })
                }, t.prototype.cancelSentTransactions_ = function () {
                    for (var e = 0; e < this.outstandingPuts_.length; e++) {
                        var t = this.outstandingPuts_[e];
                        t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
                    }
                    0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                }, t.prototype.onListenRevoked_ = function (e, t) {
                    var n;
                    n = t ? t.map(function (e) {
                        return k(e)
                    }).join("$") : "default";
                    var r = this.removeListen_(e, n);
                    r && r.onComplete && r.onComplete("permission_denied")
                }, t.prototype.removeListen_ = function (e, t) {
                    var n, r = new j(e).toString();
                    if (this.listens.has(r)) {
                        var i = this.listens.get(r);
                        n = i.get(t), i.delete(t), 0 === i.size && this.listens.delete(r)
                    } else n = void 0;
                    return n
                }, t.prototype.onAuthRevoked_ = function (e, t) {
                    b("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                }, t.prototype.onSecurityDebugPacket_ = function (e) {
                    this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "))
                }, t.prototype.restoreState_ = function () {
                    var e, t, n, r;
                    this.tryAuth();
                    try {
                        for (var i = a.__values(this.listens.values()), o = i.next(); !o.done; o = i.next()) {
                            var s = o.value;
                            try {
                                for (var u = (n = void 0, a.__values(s.values())), h = u.next(); !h.done; h = u.next()) {
                                    var l = h.value;
                                    this.sendListen_(l)
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    h && !h.done && (r = u.return) && r.call(u)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (t = i.return) && t.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    for (var c = 0; c < this.outstandingPuts_.length; c++) this.outstandingPuts_[c] && this.sendPut_(c);
                    for (; this.onDisconnectRequestQueue_.length;) {
                        var p = this.onDisconnectRequestQueue_.shift();
                        this.sendOnDisconnect_(p.action, p.pathString, p.data, p.onComplete)
                    }
                }, t.prototype.sendConnectStats_ = function () {
                    var e = {},
                        t = "js";
                    u.CONSTANTS.NODE_ADMIN ? t = "admin_node" : u.CONSTANTS.NODE_CLIENT && (t = "node"), e["sdk." + t + "." + $t.replace(/\./g, "-")] = 1, u.isMobileCordova() ? e["framework.cordova"] = 1 : u.isReactNative() && (e["framework.reactnative"] = 1), this.reportStats(e)
                }, t.prototype.shouldReconnect_ = function () {
                    var e = Bt.getInstance().currentlyOnline();
                    return u.isEmpty(this.interruptReasons_) && e
                }, t.nextPersistentConnectionId_ = 0, t.nextConnectionId_ = 0, t
            }(nn),
            an = function (e) {
                function t(t, n, r) {
                    var i = e.call(this) || this;
                    return i.repoInfo_ = t, i.onDataUpdate_ = n, i.authTokenProvider_ = r, i.log_ = S("p:rest:"), i.listens_ = {}, i
                }
                return a.__extends(t, e), t.prototype.reportStats = function (e) {
                    throw new Error("Method not implemented.")
                }, t.getListenId_ = function (e, t) {
                    return void 0 !== t ? "tag$" + t : (u.assert(e.getQueryParams().isDefault(), "should have a tag if it's not a default query."), e.path.toString())
                }, t.prototype.listen = function (e, n, r, i) {
                    var o = this,
                        s = e.path.toString();
                    this.log_("Listen called for " + s + " " + e.queryIdentifier());
                    var a = t.getListenId_(e, r),
                        h = {};
                    this.listens_[a] = h;
                    var l = e.getQueryParams().toRestQueryStringParameters();
                    this.restRequest_(s + ".json", l, function (e, t) {
                        var n = t;
                        (404 === e && (n = null, e = null), null === e && o.onDataUpdate_(s, n, !1, r), u.safeGet(o.listens_, a) === h) && i(e ? 401 == e ? "permission_denied" : "rest_error:" + e : "ok", null)
                    })
                }, t.prototype.unlisten = function (e, n) {
                    var r = t.getListenId_(e, n);
                    delete this.listens_[r]
                }, t.prototype.refreshAuthToken = function (e) {}, t.prototype.restRequest_ = function (e, t, n) {
                    var r = this;
                    void 0 === t && (t = {}), t.format = "export", this.authTokenProvider_.getToken(!1).then(function (i) {
                        var o = i && i.accessToken;
                        o && (t.auth = o);
                        var s = (r.repoInfo_.secure ? "https://" : "http://") + r.repoInfo_.host + e + "?ns=" + r.repoInfo_.namespace + u.querystring(t);
                        r.log_("Sending REST request for " + s);
                        var a = new XMLHttpRequest;
                        a.onreadystatechange = function () {
                            if (n && 4 === a.readyState) {
                                r.log_("REST Response for " + s + " received. status:", a.status, "response:", a.responseText);
                                var e = null;
                                if (a.status >= 200 && a.status < 300) {
                                    try {
                                        e = u.jsonEval(a.responseText)
                                    } catch (e) {
                                        I("Failed to parse JSON response for " + s + ": " + a.responseText)
                                    }
                                    n(null, e)
                                } else 401 !== a.status && 404 !== a.status && I("Got unsuccessful REST response for " + s + " Status: " + a.status), n(a.status);
                                n = null
                            }
                        }, a.open("GET", s, !0), a.send()
                    })
                }, t
            }(nn),
            un = function () {
                function e(e, t, n) {
                    var i, o = this;
                    if (this.repoInfo_ = e, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new Ut, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new rt, this.persistentConnection_ = null, i = void 0 !== r && r.env[y] ? new kt(n) : new At(n), this.stats_ = Lt.getCollection(e), t || U()) this.server_ = new an(this.repoInfo_, this.onDataUpdate_.bind(this), i), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                    else {
                        var s = n.options.databaseAuthVariableOverride;
                        if (null != s) {
                            if ("object" != typeof s) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                u.stringify(s)
                            } catch (e) {
                                throw new Error("Invalid authOverride provided: " + e)
                            }
                        }
                        this.persistentConnection_ = new sn(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), i, s), this.server_ = this.persistentConnection_
                    }
                    i.addTokenChangeListener(function (e) {
                        o.server_.refreshAuthToken(e)
                    }), this.statsReporter_ = Lt.getOrCreateReporter(e, function () {
                        return new Qt(o.stats_, o.server_)
                    }), this.transactions_init_(), this.infoData_ = new Ot, this.infoSyncTree_ = new Dt({
                        startListening: function (e, t, n, r) {
                            var i = [],
                                s = o.infoData_.getNode(e.path);
                            return s.isEmpty() || (i = o.infoSyncTree_.applyServerOverwrite(e.path, s), setTimeout(function () {
                                r("ok")
                            }, 0)), i
                        },
                        stopListening: function () {}
                    }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new Dt({
                        startListening: function (e, t, n, r) {
                            return o.server_.listen(e, n, t, function (t, n) {
                                var i = r(t, n);
                                o.eventQueue_.raiseEventsForChangedPath(e.path, i)
                            }), []
                        },
                        stopListening: function (e, t) {
                            o.server_.unlisten(e, t)
                        }
                    })
                }
                return e.prototype.toString = function () {
                    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                }, e.prototype.name = function () {
                    return this.repoInfo_.namespace
                }, e.prototype.serverTime = function () {
                    var e = this.infoData_.getNode(new j(".info/serverTimeOffset")).val() || 0;
                    return (new Date).getTime() + e
                }, e.prototype.generateServerValues = function () {
                    return (e = (e = {
                        timestamp: this.serverTime()
                    }) || {}).timestamp = e.timestamp || (new Date).getTime(), e;
                    var e
                }, e.prototype.onDataUpdate_ = function (e, t, n, r) {
                    this.dataUpdateCount++;
                    var i = new j(e);
                    t = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(e, t) : t;
                    var o = [];
                    if (r)
                        if (n) {
                            var s = u.map(t, function (e) {
                                return ze(e)
                            });
                            o = this.serverSyncTree_.applyTaggedQueryMerge(i, s, r)
                        } else {
                            var a = ze(t);
                            o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, a, r)
                        }
                    else if (n) {
                        var h = u.map(t, function (e) {
                            return ze(e)
                        });
                        o = this.serverSyncTree_.applyServerMerge(i, h)
                    } else {
                        var l = ze(t);
                        o = this.serverSyncTree_.applyServerOverwrite(i, l)
                    }
                    var c = i;
                    o.length > 0 && (c = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(c, o)
                }, e.prototype.interceptServerData_ = function (e) {
                    this.interceptServerDataCallback_ = e
                }, e.prototype.onConnectStatus_ = function (e) {
                    this.updateInfo_("connected", e), !1 === e && this.runOnDisconnectEvents_()
                }, e.prototype.onServerInfoUpdate_ = function (e) {
                    var t = this;
                    L(e, function (e, n) {
                        t.updateInfo_(e, n)
                    })
                }, e.prototype.updateInfo_ = function (e, t) {
                    var n = new j("/.info/" + e),
                        r = ze(t);
                    this.infoData_.updateSnapshot(n, r);
                    var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                    this.eventQueue_.raiseEventsForChangedPath(n, i)
                }, e.prototype.getNextWriteId_ = function () {
                    return this.nextWriteId_++
                }, e.prototype.setWithPriority = function (e, t, n, r) {
                    var i = this;
                    this.log_("set", {
                        path: e.toString(),
                        value: t,
                        priority: n
                    });
                    var o = this.generateServerValues(),
                        s = ze(t, n),
                        a = ot(s, o),
                        u = this.getNextWriteId_(),
                        h = this.serverSyncTree_.applyUserOverwrite(e, a, u, !0);
                    this.eventQueue_.queueEvents(h), this.server_.put(e.toString(), s.val(!0), function (t, n) {
                        var o = "ok" === t;
                        o || I("set at " + e + " failed: " + t);
                        var s = i.serverSyncTree_.ackUserWrite(u, !o);
                        i.eventQueue_.raiseEventsForChangedPath(e, s), i.callOnCompleteCallback(r, t, n)
                    });
                    var l = this.abortTransactions_(e);
                    this.rerunTransactions_(l), this.eventQueue_.raiseEventsForChangedPath(l, [])
                }, e.prototype.update = function (e, t, n) {
                    var r = this;
                    this.log_("update", {
                        path: e.toString(),
                        value: t
                    });
                    var i = !0,
                        o = this.generateServerValues(),
                        s = {};
                    if (L(t, function (e, t) {
                            i = !1;
                            var n = ze(t);
                            s[e] = ot(n, o)
                        }), i) b("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(n, "ok");
                    else {
                        var a = this.getNextWriteId_(),
                            u = this.serverSyncTree_.applyUserMerge(e, s, a);
                        this.eventQueue_.queueEvents(u), this.server_.merge(e.toString(), t, function (t, i) {
                            var o = "ok" === t;
                            o || I("update at " + e + " failed: " + t);
                            var s = r.serverSyncTree_.ackUserWrite(a, !o),
                                u = s.length > 0 ? r.rerunTransactions_(e) : e;
                            r.eventQueue_.raiseEventsForChangedPath(u, s), r.callOnCompleteCallback(n, t, i)
                        }), L(t, function (t) {
                            var n = r.abortTransactions_(e.child(t));
                            r.rerunTransactions_(n)
                        }), this.eventQueue_.raiseEventsForChangedPath(e, [])
                    }
                }, e.prototype.runOnDisconnectEvents_ = function () {
                    var e = this;
                    this.log_("onDisconnectEvents");
                    var t = this.generateServerValues(),
                        n = function (e, t) {
                            var n = new rt;
                            return e.forEachTree(new j(""), function (e, r) {
                                n.remember(e, ot(r, t))
                            }), n
                        }(this.onDisconnect_, t),
                        r = [];
                    n.forEachTree(j.Empty, function (t, n) {
                        r = r.concat(e.serverSyncTree_.applyServerOverwrite(t, n));
                        var i = e.abortTransactions_(t);
                        e.rerunTransactions_(i)
                    }), this.onDisconnect_ = new rt, this.eventQueue_.raiseEventsForChangedPath(j.Empty, r)
                }, e.prototype.onDisconnectCancel = function (e, t) {
                    var n = this;
                    this.server_.onDisconnectCancel(e.toString(), function (r, i) {
                        "ok" === r && n.onDisconnect_.forget(e), n.callOnCompleteCallback(t, r, i)
                    })
                }, e.prototype.onDisconnectSet = function (e, t, n) {
                    var r = this,
                        i = ze(t);
                    this.server_.onDisconnectPut(e.toString(), i.val(!0), function (t, o) {
                        "ok" === t && r.onDisconnect_.remember(e, i), r.callOnCompleteCallback(n, t, o)
                    })
                }, e.prototype.onDisconnectSetWithPriority = function (e, t, n, r) {
                    var i = this,
                        o = ze(t, n);
                    this.server_.onDisconnectPut(e.toString(), o.val(!0), function (t, n) {
                        "ok" === t && i.onDisconnect_.remember(e, o), i.callOnCompleteCallback(r, t, n)
                    })
                }, e.prototype.onDisconnectUpdate = function (e, t, n) {
                    var r = this;
                    if (u.isEmpty(t)) return b("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(n, "ok");
                    this.server_.onDisconnectMerge(e.toString(), t, function (i, o) {
                        "ok" === i && L(t, function (t, n) {
                            var i = ze(n);
                            r.onDisconnect_.remember(e.child(t), i)
                        }), r.callOnCompleteCallback(n, i, o)
                    })
                }, e.prototype.addEventCallbackForQuery = function (e, t) {
                    var n;
                    n = ".info" === e.path.getFront() ? this.infoSyncTree_.addEventRegistration(e, t) : this.serverSyncTree_.addEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n)
                }, e.prototype.removeEventCallbackForQuery = function (e, t) {
                    var n;
                    n = ".info" === e.path.getFront() ? this.infoSyncTree_.removeEventRegistration(e, t) : this.serverSyncTree_.removeEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n)
                }, e.prototype.interrupt = function () {
                    this.persistentConnection_ && this.persistentConnection_.interrupt("repo_interrupt")
                }, e.prototype.resume = function () {
                    this.persistentConnection_ && this.persistentConnection_.resume("repo_interrupt")
                }, e.prototype.stats = function (e) {
                    if (void 0 === e && (e = !1), "undefined" != typeof console) {
                        var t;
                        e ? (this.statsListener_ || (this.statsListener_ = new Mt(this.stats_)), t = this.statsListener_.get()) : t = this.stats_.get();
                        var n = Object.keys(t).reduce(function (e, t) {
                            return Math.max(t.length, e)
                        }, 0);
                        L(t, function (e, t) {
                            for (var r = e, i = e.length; i < n + 2; i++) r += " ";
                            console.log(r + t)
                        })
                    }
                }, e.prototype.statsIncrementCounter = function (e) {
                    this.stats_.incrementCounter(e), this.statsReporter_.includeStat(e)
                }, e.prototype.log_ = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = "";
                    this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), b.apply(void 0, a.__spread([n], e))
                }, e.prototype.callOnCompleteCallback = function (e, t, n) {
                    e && Q(function () {
                        if ("ok" == t) e(null);
                        else {
                            var r = (t || "error").toUpperCase(),
                                i = r;
                            n && (i += ": " + n);
                            var o = new Error(i);
                            o.code = r, e(o)
                        }
                    })
                }, Object.defineProperty(e.prototype, "database", {
                    get: function () {
                        return this.__database || (this.__database = new gn(this))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            hn = function () {
                function e(t) {
                    this.indexedFilter_ = new gt(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t)
                }
                return e.prototype.getStartPost = function () {
                    return this.startPost_
                }, e.prototype.getEndPost = function () {
                    return this.endPost_
                }, e.prototype.matches = function (e) {
                    return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
                }, e.prototype.updateChild = function (e, t, n, r, i, o) {
                    return this.matches(new me(t, n)) || (n = je.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, o)
                }, e.prototype.updateFullNode = function (e, t, n) {
                    t.isLeafNode() && (t = je.EMPTY_NODE);
                    var r = t.withIndex(this.index_);
                    r = r.updatePriority(je.EMPTY_NODE);
                    var i = this;
                    return t.forEachChild(Oe, function (e, t) {
                        i.matches(new me(e, t)) || (r = r.updateImmediateChild(e, je.EMPTY_NODE))
                    }), this.indexedFilter_.updateFullNode(e, r, n)
                }, e.prototype.updatePriority = function (e, t) {
                    return e
                }, e.prototype.filtersNodes = function () {
                    return !0
                }, e.prototype.getIndexedFilter = function () {
                    return this.indexedFilter_
                }, e.prototype.getIndex = function () {
                    return this.index_
                }, e.getStartPost_ = function (e) {
                    if (e.hasStart()) {
                        var t = e.getIndexStartName();
                        return e.getIndex().makePost(e.getIndexStartValue(), t)
                    }
                    return e.getIndex().minPost()
                }, e.getEndPost_ = function (e) {
                    if (e.hasEnd()) {
                        var t = e.getIndexEndName();
                        return e.getIndex().makePost(e.getIndexEndValue(), t)
                    }
                    return e.getIndex().maxPost()
                }, e
            }(),
            ln = function () {
                function e(e) {
                    this.rangedFilter_ = new hn(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
                }
                return e.prototype.updateChild = function (e, t, n, r, i, o) {
                    return this.rangedFilter_.matches(new me(t, n)) || (n = je.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(e, t, n, i, o)
                }, e.prototype.updateFullNode = function (e, t, n) {
                    var r;
                    if (t.isLeafNode() || t.isEmpty()) r = je.EMPTY_NODE.withIndex(this.index_);
                    else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                        r = je.EMPTY_NODE.withIndex(this.index_);
                        var i = void 0;
                        i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                        for (var o = 0; i.hasNext() && o < this.limit_;) {
                            var s = i.getNext();
                            if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0)) break;
                            r = r.updateImmediateChild(s.name, s.node), o++
                        }
                    } else {
                        r = (r = t.withIndex(this.index_)).updatePriority(je.EMPTY_NODE);
                        var a = void 0,
                            u = void 0,
                            h = void 0;
                        i = void 0;
                        if (this.reverse_) {
                            i = r.getReverseIterator(this.index_), a = this.rangedFilter_.getEndPost(), u = this.rangedFilter_.getStartPost();
                            var l = this.index_.getCompare();
                            h = function (e, t) {
                                return l(t, e)
                            }
                        } else i = r.getIterator(this.index_), a = this.rangedFilter_.getStartPost(), u = this.rangedFilter_.getEndPost(), h = this.index_.getCompare();
                        o = 0;
                        for (var c = !1; i.hasNext();) {
                            s = i.getNext();
                            !c && h(a, s) <= 0 && (c = !0), c && o < this.limit_ && h(s, u) <= 0 ? o++ : r = r.updateImmediateChild(s.name, je.EMPTY_NODE)
                        }
                    }
                    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
                }, e.prototype.updatePriority = function (e, t) {
                    return e
                }, e.prototype.filtersNodes = function () {
                    return !0
                }, e.prototype.getIndexedFilter = function () {
                    return this.rangedFilter_.getIndexedFilter()
                }, e.prototype.getIndex = function () {
                    return this.index_
                }, e.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
                    var o;
                    if (this.reverse_) {
                        var s = this.index_.getCompare();
                        o = function (e, t) {
                            return s(t, e)
                        }
                    } else o = this.index_.getCompare();
                    var a = e;
                    u.assert(a.numChildren() == this.limit_, "");
                    var h = new me(t, n),
                        l = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
                        c = this.rangedFilter_.matches(h);
                    if (a.hasChild(t)) {
                        for (var p = a.getImmediateChild(t), d = r.getChildAfterChild(this.index_, l, this.reverse_); null != d && (d.name == t || a.hasChild(d.name));) d = r.getChildAfterChild(this.index_, d, this.reverse_);
                        var f = null == d ? 1 : o(d, h);
                        if (c && !n.isEmpty() && f >= 0) return null != i && i.trackChildChange(vt.childChangedChange(t, n, p)), a.updateImmediateChild(t, n);
                        null != i && i.trackChildChange(vt.childRemovedChange(t, p));
                        var _ = a.updateImmediateChild(t, je.EMPTY_NODE);
                        return null != d && this.rangedFilter_.matches(d) ? (null != i && i.trackChildChange(vt.childAddedChange(d.name, d.node)), _.updateImmediateChild(d.name, d.node)) : _
                    }
                    return n.isEmpty() ? e : c && o(l, h) >= 0 ? (null != i && (i.trackChildChange(vt.childRemovedChange(l.name, l.node)), i.trackChildChange(vt.childAddedChange(t, n))), a.updateImmediateChild(t, n).updateImmediateChild(l.name, je.EMPTY_NODE)) : e
                }, e
            }(),
            cn = function () {
                function e() {
                    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = Oe
                }
                return e.prototype.hasStart = function () {
                    return this.startSet_
                }, e.prototype.isViewFromLeft = function () {
                    return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
                }, e.prototype.getIndexStartValue = function () {
                    return u.assert(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                }, e.prototype.getIndexStartName = function () {
                    return u.assert(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : P
                }, e.prototype.hasEnd = function () {
                    return this.endSet_
                }, e.prototype.getIndexEndValue = function () {
                    return u.assert(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                }, e.prototype.getIndexEndName = function () {
                    return u.assert(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : D
                }, e.prototype.hasLimit = function () {
                    return this.limitSet_
                }, e.prototype.hasAnchoredLimit = function () {
                    return this.limitSet_ && "" !== this.viewFrom_
                }, e.prototype.getLimit = function () {
                    return u.assert(this.limitSet_, "Only valid if limit has been set"), this.limit_
                }, e.prototype.getIndex = function () {
                    return this.index_
                }, e.prototype.copy_ = function () {
                    var t = new e;
                    return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t
                }, e.prototype.limit = function (e) {
                    var t = this.copy_();
                    return t.limitSet_ = !0, t.limit_ = e, t.viewFrom_ = "", t
                }, e.prototype.limitToFirst = function (t) {
                    var n = this.copy_();
                    return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, n
                }, e.prototype.limitToLast = function (t) {
                    var n = this.copy_();
                    return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, n
                }, e.prototype.startAt = function (e, t) {
                    var n = this.copy_();
                    return n.startSet_ = !0, void 0 === e && (e = null), n.indexStartValue_ = e, null != t ? (n.startNameSet_ = !0, n.indexStartName_ = t) : (n.startNameSet_ = !1, n.indexStartName_ = ""), n
                }, e.prototype.endAt = function (e, t) {
                    var n = this.copy_();
                    return n.endSet_ = !0, void 0 === e && (e = null), n.indexEndValue_ = e, void 0 !== t ? (n.endNameSet_ = !0, n.indexEndName_ = t) : (n.endNameSet_ = !1, n.indexEndName_ = ""), n
                }, e.prototype.orderBy = function (e) {
                    var t = this.copy_();
                    return t.index_ = e, t
                }, e.prototype.getQueryObject = function () {
                    var t = e.WIRE_PROTOCOL_CONSTANTS_,
                        n = {};
                    if (this.startSet_ && (n[t.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (n[t.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (n[t.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (n[t.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) {
                        n[t.LIMIT] = this.limit_;
                        var r = this.viewFrom_;
                        "" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r
                    }
                    return this.index_ !== Oe && (n[t.INDEX] = this.index_.toString()), n
                }, e.prototype.loadsAllData = function () {
                    return !(this.startSet_ || this.endSet_ || this.limitSet_)
                }, e.prototype.isDefault = function () {
                    return this.loadsAllData() && this.index_ == Oe
                }, e.prototype.getNodeFilter = function () {
                    return this.loadsAllData() ? new gt(this.getIndex()) : this.hasLimit() ? new ln(this) : new hn(this)
                }, e.prototype.toRestQueryStringParameters = function () {
                    var t, n = e.REST_QUERY_CONSTANTS_,
                        r = {};
                    return this.isDefault() ? r : (this.index_ === Oe ? t = n.PRIORITY_INDEX : this.index_ === Ge ? t = n.VALUE_INDEX : this.index_ === we ? t = n.KEY_INDEX : (u.assert(this.index_ instanceof Xe, "Unrecognized index type!"), t = this.index_.toString()), r[n.ORDER_BY] = u.stringify(t), this.startSet_ && (r[n.START_AT] = u.stringify(this.indexStartValue_), this.startNameSet_ && (r[n.START_AT] += "," + u.stringify(this.indexStartName_))), this.endSet_ && (r[n.END_AT] = u.stringify(this.indexEndValue_), this.endNameSet_ && (r[n.END_AT] += "," + u.stringify(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? r[n.LIMIT_TO_FIRST] = this.limit_ : r[n.LIMIT_TO_LAST] = this.limit_), r)
                }, e.WIRE_PROTOCOL_CONSTANTS_ = {
                    INDEX_START_VALUE: "sp",
                    INDEX_START_NAME: "sn",
                    INDEX_END_VALUE: "ep",
                    INDEX_END_NAME: "en",
                    LIMIT: "l",
                    VIEW_FROM: "vf",
                    VIEW_FROM_LEFT: "l",
                    VIEW_FROM_RIGHT: "r",
                    INDEX: "i"
                }, e.REST_QUERY_CONSTANTS_ = {
                    ORDER_BY: "orderBy",
                    PRIORITY_INDEX: "$priority",
                    VALUE_INDEX: "$value",
                    KEY_INDEX: "$key",
                    START_AT: "startAt",
                    END_AT: "endAt",
                    LIMIT_TO_FIRST: "limitToFirst",
                    LIMIT_TO_LAST: "limitToLast"
                }, e.DEFAULT = new e, e
            }(),
            pn = function (e) {
                function t(t, n) {
                    if (!(t instanceof un)) throw new Error("new Reference() no longer supported - use app.database().");
                    return e.call(this, t, n, cn.DEFAULT, !1) || this
                }
                return a.__extends(t, e), t.prototype.getKey = function () {
                    return u.validateArgCount("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack()
                }, t.prototype.child = function (e) {
                    return u.validateArgCount("Reference.child", 1, 1, arguments.length), "number" == typeof e ? e = String(e) : e instanceof j || (null === this.path.getFront() ? pe("Reference.child", 1, e, !1) : ce("Reference.child", 1, e, !1)), new t(this.repo, this.path.child(e))
                }, t.prototype.getParent = function () {
                    u.validateArgCount("Reference.parent", 0, 0, arguments.length);
                    var e = this.path.parent();
                    return null === e ? null : new t(this.repo, e)
                }, t.prototype.getRoot = function () {
                    u.validateArgCount("Reference.root", 0, 0, arguments.length);
                    for (var e = this; null !== e.getParent();) e = e.getParent();
                    return e
                }, t.prototype.databaseProp = function () {
                    return this.repo.database
                }, t.prototype.set = function (e, t) {
                    u.validateArgCount("Reference.set", 1, 2, arguments.length), de("Reference.set", this.path), oe("Reference.set", 1, e, this.path, !1), u.validateCallback("Reference.set", 2, t, !0);
                    var n = new u.Deferred;
                    return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise
                }, t.prototype.update = function (e, t) {
                    if (u.validateArgCount("Reference.update", 1, 2, arguments.length), de("Reference.update", this.path), Array.isArray(e)) {
                        for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                        e = n, I("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    ae("Reference.update", 1, e, this.path, !1), u.validateCallback("Reference.update", 2, t, !0);
                    var i = new u.Deferred;
                    return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise
                }, t.prototype.setWithPriority = function (e, t, n) {
                    if (u.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length), de("Reference.setWithPriority", this.path), oe("Reference.setWithPriority", 1, e, this.path, !1), ue("Reference.setWithPriority", 2, t, !1), u.validateCallback("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
                    var r = new u.Deferred;
                    return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise
                }, t.prototype.remove = function (e) {
                    return u.validateArgCount("Reference.remove", 0, 1, arguments.length), de("Reference.remove", this.path), u.validateCallback("Reference.remove", 1, e, !0), this.set(null, e)
                }, t.prototype.transaction = function (e, t, n) {
                    if (u.validateArgCount("Reference.transaction", 1, 3, arguments.length), de("Reference.transaction", this.path), u.validateCallback("Reference.transaction", 1, e, !1), u.validateCallback("Reference.transaction", 2, t, !0), _e("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                    void 0 === n && (n = !0);
                    var r = new u.Deferred;
                    "function" == typeof t && r.promise.catch(function () {});
                    var i = function (e, n, i) {
                        e ? r.reject(e) : r.resolve(new ve(n, i)), "function" == typeof t && t(e, n, i)
                    };
                    return this.repo.startTransaction(this.path, e, i, n), r.promise
                }, t.prototype.setPriority = function (e, t) {
                    u.validateArgCount("Reference.setPriority", 1, 2, arguments.length), de("Reference.setPriority", this.path), ue("Reference.setPriority", 1, e, !1), u.validateCallback("Reference.setPriority", 2, t, !0);
                    var n = new u.Deferred;
                    return this.repo.setWithPriority(this.path.child(".priority"), e, null, n.wrapCallback(t)), n.promise
                }, t.prototype.push = function (e, t) {
                    u.validateArgCount("Reference.push", 0, 2, arguments.length), de("Reference.push", this.path), oe("Reference.push", 1, e, this.path, !0), u.validateCallback("Reference.push", 2, t, !0);
                    var n, r = this.repo.serverTime(),
                        i = ge(r),
                        o = this.child(i),
                        s = this.child(i);
                    return n = null != e ? o.set(e, t).then(function () {
                        return s
                    }) : Promise.resolve(s), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof t && n.catch(function () {}), o
                }, t.prototype.onDisconnect = function () {
                    return de("Reference.onDisconnect", this.path), new ye(this.repo, this.path)
                }, Object.defineProperty(t.prototype, "database", {
                    get: function () {
                        return this.databaseProp()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "key", {
                    get: function () {
                        return this.getKey()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function () {
                        return this.getParent()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "root", {
                    get: function () {
                        return this.getRoot()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(nt);
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        nt.__referenceConstructor = pn, Nt.__referenceConstructor = pn;
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var dn, fn = function () {
                this.children = {}, this.childCount = 0, this.value = null
            },
            _n = function () {
                function e(e, t, n) {
                    void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === n && (n = new fn), this.name_ = e, this.parent_ = t, this.node_ = n
                }
                return e.prototype.subTree = function (t) {
                    for (var n, r = t instanceof j ? t : new j(t), i = this; null !== (n = r.getFront());) {
                        i = new e(n, i, u.safeGet(i.node_.children, n) || new fn), r = r.popFront()
                    }
                    return i
                }, e.prototype.getValue = function () {
                    return this.node_.value
                }, e.prototype.setValue = function (e) {
                    u.assert(void 0 !== e, "Cannot set value to undefined"), this.node_.value = e, this.updateParents_()
                }, e.prototype.clear = function () {
                    this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_()
                }, e.prototype.hasChildren = function () {
                    return this.node_.childCount > 0
                }, e.prototype.isEmpty = function () {
                    return null === this.getValue() && !this.hasChildren()
                }, e.prototype.forEachChild = function (t) {
                    var n = this;
                    L(this.node_.children, function (r, i) {
                        t(new e(r, n, i))
                    })
                }, e.prototype.forEachDescendant = function (e, t, n) {
                    t && !n && e(this), this.forEachChild(function (t) {
                        t.forEachDescendant(e, !0, n)
                    }), t && n && e(this)
                }, e.prototype.forEachAncestor = function (e, t) {
                    for (var n = t ? this : this.parent(); null !== n;) {
                        if (e(n)) return !0;
                        n = n.parent()
                    }
                    return !1
                }, e.prototype.forEachImmediateDescendantWithValue = function (e) {
                    this.forEachChild(function (t) {
                        null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e)
                    })
                }, e.prototype.path = function () {
                    return new j(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_)
                }, e.prototype.name = function () {
                    return this.name_
                }, e.prototype.parent = function () {
                    return this.parent_
                }, e.prototype.updateParents_ = function () {
                    null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
                }, e.prototype.updateChild_ = function (e, t) {
                    var n = t.isEmpty(),
                        r = u.contains(this.node_.children, e);
                    n && r ? (delete this.node_.children[e], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[e] = t.node_, this.node_.childCount++, this.updateParents_())
                }, e
            }();
        ! function (e) {
            e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] = "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT"
        }(dn || (dn = {})), un.MAX_TRANSACTION_RETRIES_ = 25, un.prototype.transactions_init_ = function () {
            this.transactionQueueTree_ = new _n
        }, un.prototype.startTransaction = function (e, t, n, r) {
            this.log_("transaction on " + e);
            var i = function () {},
                o = new pn(this, e);
            o.on("value", i);
            var s = {
                    path: e,
                    update: t,
                    onComplete: n,
                    status: null,
                    order: v(),
                    applyLocally: r,
                    retryCount: 0,
                    unwatcher: function () {
                        o.off("value", i)
                    },
                    abortReason: null,
                    currentWriteId: null,
                    currentInputSnapshot: null,
                    currentOutputSnapshotRaw: null,
                    currentOutputSnapshotResolved: null
                },
                a = this.getLatestState_(e);
            s.currentInputSnapshot = a;
            var h = s.update(a.val());
            if (void 0 === h) {
                if (s.unwatcher(), s.currentOutputSnapshotRaw = null, s.currentOutputSnapshotResolved = null, s.onComplete) {
                    var l = new $e(s.currentInputSnapshot, new pn(this, s.path), Oe);
                    s.onComplete(null, !1, l)
                }
            } else {
                se("transaction failed: Data returned ", h, s.path), s.status = dn.RUN;
                var c = this.transactionQueueTree_.subTree(e),
                    p = c.getValue() || [];
                p.push(s), c.setValue(p);
                var d = void 0;
                if ("object" == typeof h && null !== h && u.contains(h, ".priority")) d = u.safeGet(h, ".priority"), u.assert(ie(d), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
                else d = (this.serverSyncTree_.calcCompleteEventCache(e) || je.EMPTY_NODE).getPriority().val();
                d = d;
                var f = this.generateServerValues(),
                    _ = ze(h, d),
                    y = ot(_, f);
                s.currentOutputSnapshotRaw = _, s.currentOutputSnapshotResolved = y, s.currentWriteId = this.getNextWriteId_();
                var g = this.serverSyncTree_.applyUserOverwrite(e, y, s.currentWriteId, s.applyLocally);
                this.eventQueue_.raiseEventsForChangedPath(e, g), this.sendReadyTransactions_()
            }
        }, un.prototype.getLatestState_ = function (e, t) {
            return this.serverSyncTree_.calcCompleteEventCache(e, t) || je.EMPTY_NODE
        }, un.prototype.sendReadyTransactions_ = function (e) {
            var t = this;
            if (void 0 === e && (e = this.transactionQueueTree_), e || this.pruneCompletedTransactionsBelowNode_(e), null !== e.getValue()) {
                var n = this.buildTransactionQueue_(e);
                u.assert(n.length > 0, "Sending zero length transaction queue"), n.every(function (e) {
                    return e.status === dn.RUN
                }) && this.sendTransactionQueue_(e.path(), n)
            } else e.hasChildren() && e.forEachChild(function (e) {
                t.sendReadyTransactions_(e)
            })
        }, un.prototype.sendTransactionQueue_ = function (e, t) {
            for (var n = this, r = t.map(function (e) {
                    return e.currentWriteId
                }), i = this.getLatestState_(e, r), o = i, s = i.hash(), a = 0; a < t.length; a++) {
                var h = t[a];
                u.assert(h.status === dn.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), h.status = dn.SENT, h.retryCount++;
                var l = j.relativePath(e, h.path);
                o = o.updateChild(l, h.currentOutputSnapshotRaw)
            }
            var c = o.val(!0),
                p = e;
            this.server_.put(p.toString(), c, function (r) {
                n.log_("transaction put response", {
                    path: p.toString(),
                    status: r
                });
                var i = [];
                if ("ok" === r) {
                    for (var o = [], s = 0; s < t.length; s++) {
                        if (t[s].status = dn.COMPLETED, i = i.concat(n.serverSyncTree_.ackUserWrite(t[s].currentWriteId)), t[s].onComplete) {
                            var a = t[s].currentOutputSnapshotResolved,
                                u = new pn(n, t[s].path),
                                h = new $e(a, u, Oe);
                            o.push(t[s].onComplete.bind(null, null, !0, h))
                        }
                        t[s].unwatcher()
                    }
                    n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(e)), n.sendReadyTransactions_(), n.eventQueue_.raiseEventsForChangedPath(e, i);
                    for (s = 0; s < o.length; s++) Q(o[s])
                } else {
                    if ("datastale" === r)
                        for (s = 0; s < t.length; s++) t[s].status === dn.SENT_NEEDS_ABORT ? t[s].status = dn.NEEDS_ABORT : t[s].status = dn.RUN;
                    else {
                        I("transaction at " + p.toString() + " failed: " + r);
                        for (s = 0; s < t.length; s++) t[s].status = dn.NEEDS_ABORT, t[s].abortReason = r
                    }
                    n.rerunTransactions_(e)
                }
            }, s)
        }, un.prototype.rerunTransactions_ = function (e) {
            var t = this.getAncestorTransactionNode_(e),
                n = t.path(),
                r = this.buildTransactionQueue_(t);
            return this.rerunTransactionQueue_(r, n), n
        }, un.prototype.rerunTransactionQueue_ = function (e, t) {
            if (0 !== e.length) {
                for (var n, r = [], i = [], o = e.filter(function (e) {
                        return e.status === dn.RUN
                    }).map(function (e) {
                        return e.currentWriteId
                    }), s = 0; s < e.length; s++) {
                    var a = e[s],
                        h = j.relativePath(t, a.path),
                        l = !1,
                        c = void 0;
                    if (u.assert(null !== h, "rerunTransactionsUnderNode_: relativePath should not be null."), a.status === dn.NEEDS_ABORT) l = !0, c = a.abortReason, i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0));
                    else if (a.status === dn.RUN)
                        if (a.retryCount >= un.MAX_TRANSACTION_RETRIES_) l = !0, c = "maxretry", i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0));
                        else {
                            var p = this.getLatestState_(a.path, o);
                            a.currentInputSnapshot = p;
                            var d = e[s].update(p.val());
                            if (void 0 !== d) {
                                se("transaction failed: Data returned ", d, a.path);
                                var f = ze(d);
                                "object" == typeof d && null != d && u.contains(d, ".priority") || (f = f.updatePriority(p.getPriority()));
                                var _ = a.currentWriteId,
                                    y = this.generateServerValues(),
                                    v = ot(f, y);
                                a.currentOutputSnapshotRaw = f, a.currentOutputSnapshotResolved = v, a.currentWriteId = this.getNextWriteId_(), o.splice(o.indexOf(_), 1), i = (i = i.concat(this.serverSyncTree_.applyUserOverwrite(a.path, v, a.currentWriteId, a.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(_, !0))
                            } else l = !0, c = "nodata", i = i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId, !0))
                        } if (this.eventQueue_.raiseEventsForChangedPath(t, i), i = [], l && (e[s].status = dn.COMPLETED, n = e[s].unwatcher, setTimeout(n, Math.floor(0)), e[s].onComplete))
                        if ("nodata" === c) {
                            var g = new pn(this, e[s].path),
                                m = e[s].currentInputSnapshot,
                                C = new $e(m, g, Oe);
                            r.push(e[s].onComplete.bind(null, null, !1, C))
                        } else r.push(e[s].onComplete.bind(null, new Error(c), !1, null))
                }
                this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
                for (s = 0; s < r.length; s++) Q(r[s]);
                this.sendReadyTransactions_()
            }
        }, un.prototype.getAncestorTransactionNode_ = function (e) {
            for (var t, n = this.transactionQueueTree_; null !== (t = e.getFront()) && null === n.getValue();) n = n.subTree(t), e = e.popFront();
            return n
        }, un.prototype.buildTransactionQueue_ = function (e) {
            var t = [];
            return this.aggregateTransactionQueuesForNode_(e, t), t.sort(function (e, t) {
                return e.order - t.order
            }), t
        }, un.prototype.aggregateTransactionQueuesForNode_ = function (e, t) {
            var n = this,
                r = e.getValue();
            if (null !== r)
                for (var i = 0; i < r.length; i++) t.push(r[i]);
            e.forEachChild(function (e) {
                n.aggregateTransactionQueuesForNode_(e, t)
            })
        }, un.prototype.pruneCompletedTransactionsBelowNode_ = function (e) {
            var t = this,
                n = e.getValue();
            if (n) {
                for (var r = 0, i = 0; i < n.length; i++) n[i].status !== dn.COMPLETED && (n[r] = n[i], r++);
                n.length = r, e.setValue(n.length > 0 ? n : null)
            }
            e.forEachChild(function (e) {
                t.pruneCompletedTransactionsBelowNode_(e)
            })
        }, un.prototype.abortTransactions_ = function (e) {
            var t = this,
                n = this.getAncestorTransactionNode_(e).path(),
                r = this.transactionQueueTree_.subTree(e);
            return r.forEachAncestor(function (e) {
                t.abortTransactionsOnNode_(e)
            }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function (e) {
                t.abortTransactionsOnNode_(e)
            }), n
        }, un.prototype.abortTransactionsOnNode_ = function (e) {
            var t = e.getValue();
            if (null !== t) {
                for (var n = [], r = [], i = -1, o = 0; o < t.length; o++)
                    if (t[o].status === dn.SENT_NEEDS_ABORT);
                    else if (t[o].status === dn.SENT) u.assert(i === o - 1, "All SENT items should be at beginning of queue."), i = o, t[o].status = dn.SENT_NEEDS_ABORT, t[o].abortReason = "set";
                else if (u.assert(t[o].status === dn.RUN, "Unexpected transaction status in abort"), t[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(t[o].currentWriteId, !0)), t[o].onComplete) {
                    n.push(t[o].onComplete.bind(null, new Error("set"), !1, null))
                } - 1 === i ? e.setValue(null) : t.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(e.path(), r);
                for (o = 0; o < n.length; o++) Q(n[o])
            }
        };
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var yn, vn = function () {
                function e() {
                    this.repos_ = {}, this.useRestClient_ = !1
                }
                return e.getInstance = function () {
                    return yn || (yn = new e), yn
                }, e.prototype.interrupt = function () {
                    for (var e in this.repos_)
                        for (var t in this.repos_[e]) this.repos_[e][t].interrupt()
                }, e.prototype.resume = function () {
                    for (var e in this.repos_)
                        for (var t in this.repos_[e]) this.repos_[e][t].resume()
                }, e.prototype.databaseFromApp = function (e, t) {
                    var n = t || e.options.databaseURL;
                    void 0 === n && N("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().");
                    var i = J(n),
                        o = i.repoInfo,
                        s = void 0;
                    return void 0 !== r && (s = r.env[y]), s && (n = "http://" + s + "?ns=" + o.namespace, o = (i = J(n)).repoInfo), fe("Invalid Firebase Database URL", 1, i), i.path.isEmpty() || N("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(o, e).database
                }, e.prototype.deleteRepo = function (e) {
                    var t = u.safeGet(this.repos_, e.app.name);
                    t && u.safeGet(t, e.repoInfo_.toURLString()) === e || N("Database " + e.app.name + "(" + e.repoInfo_ + ") has already been deleted."), e.interrupt(), delete t[e.repoInfo_.toURLString()]
                }, e.prototype.createRepo = function (e, t) {
                    var n = u.safeGet(this.repos_, t.name);
                    n || (n = {}, this.repos_[t.name] = n);
                    var r = u.safeGet(n, e.toURLString());
                    return r && N("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new un(e, this.useRestClient_, t), n[e.toURLString()] = r, r
                }, e.prototype.forceRestClient = function (e) {
                    this.useRestClient_ = e
                }, e
            }(),
            gn = function () {
                function e(e) {
                    this.repo_ = e, e instanceof un || N("Don't call new Database() directly - please use firebase.database()."), this.root_ = new pn(e, j.Empty), this.INTERNAL = new mn(this)
                }
                return Object.defineProperty(e.prototype, "app", {
                    get: function () {
                        return this.repo_.app
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.ref = function (e) {
                    return this.checkDeleted_("ref"), u.validateArgCount("database.ref", 0, 1, arguments.length), e instanceof pn ? this.refFromURL(e.toString()) : void 0 !== e ? this.root_.child(e) : this.root_
                }, e.prototype.refFromURL = function (e) {
                    var t = "database.refFromURL";
                    this.checkDeleted_(t), u.validateArgCount(t, 1, 1, arguments.length);
                    var n = J(e);
                    fe(t, 1, n);
                    var r = n.repoInfo;
                    return r.host !== this.repo_.repoInfo_.host && N(t + ": Host name does not match the current database: (found " + r.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString())
                }, e.prototype.checkDeleted_ = function (e) {
                    null === this.repo_ && N("Cannot call " + e + " on a deleted database.")
                }, e.prototype.goOffline = function () {
                    u.validateArgCount("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt()
                }, e.prototype.goOnline = function () {
                    u.validateArgCount("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume()
                }, e.ServerValue = {
                    TIMESTAMP: {
                        ".sv": "timestamp"
                    }
                }, e
            }(),
            mn = function () {
                function e(e) {
                    this.database = e
                }
                return e.prototype.delete = function () {
                    return a.__awaiter(this, void 0, void 0, function () {
                        return a.__generator(this, function (e) {
                            return this.database.checkDeleted_("delete"), vn.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2]
                        })
                    })
                }, e
            }(),
            Cn = Object.freeze({
                forceLongPolling: function () {
                    Zt.forceDisallow(), Gt.forceAllow()
                },
                forceWebSockets: function () {
                    Gt.forceDisallow()
                },
                isWebSocketsAvailable: function () {
                    return Zt.isAvailable()
                },
                setSecurityDebugCallback: function (e, t) {
                    e.repo.persistentConnection_.securityDebugCallback_ = t
                },
                stats: function (e, t) {
                    e.repo.stats(t)
                },
                statsIncrementCounter: function (e, t) {
                    e.repo.statsIncrementCounter(t)
                },
                dataUpdateCount: function (e) {
                    return e.repo.dataUpdateCount
                },
                interceptServerData: function (e, t) {
                    return e.repo.interceptServerData_(t)
                }
            }),
            En = sn;
        sn.prototype.simpleListen = function (e, t) {
            this.sendRequest("q", {
                p: e
            }, t)
        }, sn.prototype.echo = function (e, t) {
            this.sendRequest("echo", {
                d: e
            }, t)
        };
        var wn = tn,
            bn = z,
            Sn = Object.freeze({
                DataConnection: En,
                RealTimeConnection: wn,
                hijackHash: function (e) {
                    var t = sn.prototype.put;
                    return sn.prototype.put = function (n, r, i, o) {
                            void 0 !== o && (o = e()), t.call(this, n, r, i, o)
                        },
                        function () {
                            sn.prototype.put = t
                        }
                },
                ConnectionTarget: bn,
                queryIdentifier: function (e) {
                    return e.queryIdentifier()
                },
                forceRestClient: function (e) {
                    vn.getInstance().forceRestClient(e)
                }
            }),
            Tn = gn.ServerValue;

        function Nn(t) {
            var n;
            n = t.SDK_VERSION, $t = n;
            var r = t.INTERNAL.registerService("database", function (e, t, n) {
                return vn.getInstance().databaseFromApp(e, n)
            }, {
                Reference: pn,
                Query: nt,
                Database: gn,
                DataSnapshot: $e,
                enableLogging: w,
                INTERNAL: Cn,
                ServerValue: Tn,
                TEST_ACCESS: Sn
            }, null, !0);
            u.isNodeSdk() && (e.exports = r)
        }
        Nn(s), t.DataSnapshot = $e, t.Database = gn, t.OnDisconnect = ye, t.Query = nt, t.Reference = pn, t.ServerValue = Tn, t.enableLogging = w, t.registerDatabase = Nn
    }).call(this, n(7))
}, function (e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var u, h = [],
        l = !1,
        c = -1;

    function p() {
        l && u && (l = !1, u.length ? h = u.concat(h) : c = -1, h.length && d())
    }

    function d() {
        if (!l) {
            var e = a(p);
            l = !0;
            for (var t = h.length; t;) {
                for (u = h, h = []; ++c < t;) u && u[c].run();
                c = -1, t = h.length
            }
            u = null, l = !1,
                function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function _() {}
    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new f(e, t)), 1 !== h.length || l || a(d)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = _, i.addListener = _, i.once = _, i.off = _, i.removeListener = _, i.removeAllListeners = _, i.emit = _, i.prependListener = _, i.prependOnceListener = _, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(4),
        i = n.n(r);
    n(6);
    n.d(t, "ElineSocket", function () {
        return a
    });
    var o = i.a.initializeApp({
            apiKey: "AIzaSyDrgJLMlk-zHYwPgqhQfYRctaJkUMN69CI",
            databaseURL: "https://eline-sockets.firebaseio.com",
            projectId: "eline-sockets"
        }).database(),
        s = "abcdefghijklmnopqrstuvwxyz",
        a = function () {
            function e(e, t, n) {
                this.id = e, this.sink = o.ref("/" + e + "/" + t), this.source = o.ref("/" + e + "/" + n)
            }
            return e.prototype.sendMessage = function (e) {
                this.sink.push().set(e)
            }, e.prototype.onMessage = function (e) {
                var t = this;
                this.source.on("child_added", function (n) {
                    e(n.val()), n.key && t.source.child(n.key).remove()
                })
            }, e.create = function () {
                return new e(function () {
                    for (var e = "", t = 0; t < 6; t++) e += s[Math.floor(Math.random() * s.length)];
                    return e
                }(), "public", "private")
            }, e.connect = function (t) {
                return new e(t, "private", "public")
            }, e
        }();
    window.ElineSocket = a
}]);